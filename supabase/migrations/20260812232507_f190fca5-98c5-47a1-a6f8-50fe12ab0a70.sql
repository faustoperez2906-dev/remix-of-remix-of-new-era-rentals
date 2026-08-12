CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
  OR (
    _role = 'admin'::public.app_role
    AND EXISTS (
      SELECT 1
      FROM auth.users u
      JOIN public.admin_allowlist a ON lower(u.email) = lower(a.email)
      WHERE u.id = _user_id
    )
  )
$$;

REVOKE EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

DROP POLICY IF EXISTS "Admins can view quote requests" ON public.quote_requests;
CREATE POLICY "Admins can view quote requests"
ON public.quote_requests FOR SELECT TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Admins can view allowlist" ON public.admin_allowlist;
CREATE POLICY "Admins can view allowlist"
ON public.admin_allowlist FOR SELECT TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Only admins can assign roles" ON public.user_roles;
CREATE POLICY "Only admins can assign roles"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (private.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Only admins can change roles" ON public.user_roles;
CREATE POLICY "Only admins can change roles"
ON public.user_roles FOR UPDATE TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (private.has_role(auth.uid(), 'admin'::public.app_role));

DROP POLICY IF EXISTS "Only admins can remove roles" ON public.user_roles;
CREATE POLICY "Only admins can remove roles"
ON public.user_roles FOR DELETE TO authenticated
USING (private.has_role(auth.uid(), 'admin'::public.app_role));

DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);