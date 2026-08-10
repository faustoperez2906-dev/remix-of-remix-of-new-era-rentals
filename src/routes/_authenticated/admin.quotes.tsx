import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/_authenticated/admin/quotes")({
  head: () => ({
    meta: [
      { title: "Quote Requests | New Era Party & Event Rentals" },
      { name: "description", content: "Admin view of every quote request submitted through the New Era Party & Event Rentals website." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Quote Requests | New Era Party & Event Rentals" },
      { property: "og:description", content: "Admin view of incoming rental quote requests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: QuotesPage,
});

function QuotesPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["quote_requests"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quote_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  function exportCsv() {
    const rows = data ?? [];
    if (!rows.length) return;
    const cols = Object.keys(rows[0]!);
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [cols.join(","), ...rows.map((r) => cols.map((c) => esc((r as Record<string, unknown>)[c])).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "quote-requests.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-semibold">Quote requests</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {data ? `${data.length} total` : "Loading…"}
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={exportCsv} className="rounded-md border border-border px-4 py-2 text-sm">
              Export CSV
            </button>
            <button onClick={signOut} className="rounded-md border border-border px-4 py-2 text-sm">
              Sign out
            </button>
          </div>
        </div>

        {isLoading && <p className="text-muted-foreground">Loading requests…</p>}
        {error && (
          <p className="text-muted-foreground">
            You don’t have access to these requests yet. Ask for the admin role to be added to your account.
          </p>
        )}
        {data && data.length === 0 && (
          <p className="text-muted-foreground">No quote requests yet.</p>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {data?.map((q) => (
            <article key={q.id} className="rounded-xl border border-border p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-semibold text-lg">{q.name}</h2>
                <time className="text-xs text-muted-foreground">
                  {new Date(q.created_at).toLocaleString()}
                </time>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <Item label="Phone" value={<a href={`tel:${q.phone}`} className="text-primary">{q.phone}</a>} />
                <Item label="Email" value={<a href={`mailto:${q.email}`} className="text-primary break-all">{q.email}</a>} />
                <Item label="Event date" value={q.event_date} />
                <Item label="Event type" value={q.event_type} />
                <Item label="Guests" value={q.guests} />
                <Item label="Location" value={q.location} />
                <Item label="Delivery" value={q.delivery_method} />
                <Item label="Setup level" value={q.setup_level} />
                <Item label="Setup service" value={q.setup_service} />
              </dl>
              {q.message && (
                <p className="mt-3 text-sm text-muted-foreground whitespace-pre-wrap">{q.message}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Item({ label, value }: { label: string; value: React.ReactNode }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}