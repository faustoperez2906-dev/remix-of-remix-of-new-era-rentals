import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Owner Sign In | New Era Party & Event Rentals" },
      { name: "description", content: "Private sign in for New Era Party & Event Rentals staff to review incoming quote requests." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Owner Sign In | New Era Party & Event Rentals" },
      { property: "og:description", content: "Private staff sign in for reviewing quote requests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return setMsg(error.message);
      navigate({ to: "/admin/quotes" });
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      setBusy(false);
      if (error) return setMsg(error.message);
      if (data.session) navigate({ to: "/admin/quotes" });
      else setMsg("Check your email to confirm your account, then sign in.");
    }
  }

  return (
    <Layout>
      <section className="mx-auto max-w-md px-5 py-20">
        <h1 className="text-3xl font-semibold mb-2">Staff sign in</h1>
        <p className="text-muted-foreground mb-8 text-sm">
          Sign in to view quote requests submitted through the website.
        </p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input
              id="email" type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="password">Password</label>
            <input
              id="password" type="password" required minLength={6} value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2"
            />
          </div>
          {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          <button
            type="submit" disabled={busy}
            className="w-full rounded-md bg-primary text-primary-foreground py-2.5 font-medium disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button
          type="button"
          onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setMsg(null); }}
          className="mt-6 text-sm text-muted-foreground hover:text-primary"
        >
          {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
        </button>
      </section>
    </Layout>
  );
}