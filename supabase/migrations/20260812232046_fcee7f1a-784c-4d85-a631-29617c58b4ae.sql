CREATE TABLE public.admin_allowlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.admin_allowlist TO authenticated;
GRANT ALL ON public.admin_allowlist TO service_role;

ALTER TABLE public.admin_allowlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view allowlist"
ON public.admin_allowlist FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

INSERT INTO public.admin_allowlist (email) VALUES ('newerapartyrentals@gmail.com')
ON CONFLICT (email) DO NOTHING;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
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
    _role = 'admin'::app_role
    AND EXISTS (
      SELECT 1
      FROM auth.users u
      JOIN public.admin_allowlist a ON lower(u.email) = lower(a.email)
      WHERE u.id = _user_id
    )
  )
$$;