import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Sparkles, ShieldCheck, Star, Phone } from "lucide-react";
import heroAsset from "@/assets/IMG_4867.jpg.asset.json";
import g1Asset from "@/assets/IMG_4869.jpg.asset.json";
import g2Asset from "@/assets/IMG_4867.jpg.asset.json";
import g3Asset from "@/assets/IMG_4865.jpg.asset.json";
import mascotAsset from "@/assets/mascot.png.asset.json";
const hero = heroAsset.url;
const g1 = g1Asset.url;
const g2 = g2Asset.url;
const g3 = g3Asset.url;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Era Party & Event Rentals | Luxury LA Party Rentals" },
      { name: "description", content: "Luxury tents, chairs, tables, linens, lighting & more for weddings, quinceañeras and events in Los Angeles. Free quote — call (323) 480-0660." },
      { property: "og:title", content: "New Era Party & Event Rentals" },
      { property: "og:description", content: "Luxury party & event rentals in East Los Angeles." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useLang();
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={hero} alt="Rows of white chairs and canopies set up for an outdoor event" className="absolute inset-0 w-full h-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
        <img
          src={mascotAsset.url}
          alt="New Era Party & Event Rentals mascot"
          className="pointer-events-none select-none absolute bottom-0 right-0 md:-right-4 lg:right-0 h-[52vh] md:h-[82vh] w-auto object-contain drop-shadow-2xl z-10 hidden md:block"
          width={422}
          height={836}
        />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-24 w-full">
          <div className="max-w-3xl md:max-w-[58%] relative z-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-primary">
              <Sparkles className="w-3.5 h-3.5" /> {t("Los Angeles • Since Day One", "Los Ángeles • Desde el primer día")}
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              {t("Turning moments into", "Convertimos momentos en")} <span className="text-gradient-gold">{t("unforgettable", "inolvidables")}</span> {t("events.", "eventos.")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              {t("Premium party & event rentals for weddings, quinceañeras, birthdays and corporate gatherings across greater Los Angeles.", "Rentas premium para bodas, quinceañeras, cumpleaños y eventos corporativos en todo Los Ángeles.")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-7 py-3.5 font-semibold shadow-gold">
                {t("Request a Quote", "Pedir Cotización")} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-primary/50 text-foreground px-7 py-3.5 font-semibold hover:bg-primary/10">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span>{t("5.0 rating on Google — trusted by East LA families", "5.0 estrellas en Google — la confianza de las familias del Este de LA")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 grid gap-8 md:grid-cols-3">
          {[
            { icon: Sparkles, title: t("Curated Luxury", "Lujo Seleccionado"), body: t("White chairs, black chairs, resting chairs, elegant canopies and linens.", "Sillas blancas, negras, de descanso, toldos elegantes y manteles.") },
            { icon: ShieldCheck, title: t("Fully Insured", "Totalmente Asegurados"), body: t("Professional delivery, setup and pickup — stress-free.", "Entrega, instalación y recolección profesional — sin estrés.") },
            { icon: Star, title: t("5-Star Service", "Servicio 5 Estrellas"), body: t("Local East LA team obsessed with your event's success.", "Equipo local del Este de LA dedicado al éxito de su evento.") },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display text-lg text-foreground">{title}</div>
                <p className="text-sm text-muted-foreground mt-1">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-widest uppercase text-primary">{t("Our Rentals", "Nuestras Rentas")}</div>
            <h2 className="mt-2 text-3xl md:text-5xl font-bold">{t("Everything your event needs", "Todo lo que su evento necesita")}</h2>
          </div>
          <Link to="/rentals" className="hidden md:inline text-primary hover:underline">{t("View all →", "Ver todo →")}</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { img: g2, title: t("Tables & Chairs", "Mesas y Sillas"), body: t("White chairs, black chairs, resting chairs & barstools.", "Sillas blancas, negras, de descanso y bancos altos.") },
            { img: g1, title: t("Lighting, Sound & Stage", "Iluminación, Sonido y Escenario"), body: t("Marquee letters, uplighting, sound & stage.", "Letras luminosas, iluminación, sonido y escenario.") },
            { img: g3, title: t("Backdrops & Decor", "Backdrops y Decoración"), body: t("Backdrops, throne chairs, draping & linens.", "Backdrops, sillas de trono, draping y manteles.") },
          ].map((c) => (
            <Link key={c.title} to="/rentals" className="group relative overflow-hidden rounded-2xl border border-border">
              <img src={c.img} alt={c.title} className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="font-display text-2xl text-foreground">{c.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{c.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-10 md:p-16 text-center" style={{ background: "radial-gradient(1200px 400px at 50% 0%, oklch(0.78 0.16 85 / 0.20), transparent 60%), var(--color-card)" }}>
          <h3 className="font-display text-3xl md:text-5xl font-bold">{t("Let's plan something", "Planeemos algo")} <span className="text-gradient-gold">{t("extraordinary", "extraordinario")}</span>.</h3>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("Tell us about your event and receive a personalized quote within 24 hours.", "Cuéntenos sobre su evento y reciba una cotización personalizada en 24 horas.")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/quote" className="rounded-full bg-gradient-gold text-primary-foreground px-7 py-3.5 font-semibold shadow-gold">{t("Get a Free Quote", "Cotización Gratis")}</Link>
            <a href={PHONE_HREF} className="rounded-full border border-primary/50 px-7 py-3.5 font-semibold text-foreground hover:bg-primary/10">{t("Call", "Llame")} {PHONE}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
