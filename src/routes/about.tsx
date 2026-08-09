import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { Award, Heart, MapPin, Users } from "lucide-react";
import imgAsset from "@/assets/IMG_4866.jpg.asset.json";
const img = imgAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | New Era Party & Event Rentals" },
      { name: "description", content: "Family-owned party & event rental company serving East Los Angeles with luxury service, quality equipment, and unforgettable celebrations." },
      { property: "og:title", content: "About New Era Party & Event Rentals" },
      { property: "og:description", content: "Family-owned LA party rental company." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-12">
        <div className="text-xs tracking-widest uppercase text-primary">{t("About Us", "Nosotros")}</div>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
          {t("A family-run team obsessed with", "Un equipo familiar apasionado por los")} <span className="text-gradient-gold">{t("beautiful events", "eventos hermosos")}</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 grid gap-10 md:grid-cols-2 items-center">
        <img src={img} alt="Elegant outdoor event" className="rounded-2xl border border-border w-full h-auto" loading="lazy" width={1200} height={900} />
        <div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("New Era Party & Event Rentals is a locally-owned party equipment rental service based in East Los Angeles. We were built on a simple idea: every celebration deserves premium quality, honest pricing, and a team that actually cares.", "New Era Party & Event Rentals es un negocio local de renta de equipo para fiestas en el Este de Los Ángeles. Nacimos con una idea sencilla: cada celebración merece calidad premium, precios honestos y un equipo que de verdad se preocupa.")}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t("From intimate backyard dinners to full ballroom quinceañeras and weddings for hundreds of guests, we've helped LA families create the milestones they'll remember forever. Our clean, luxury inventory and hands-on service are why our clients keep coming back.", "Desde cenas íntimas en el patio hasta quinceañeras y bodas para cientos de invitados, hemos ayudado a las familias de Los Ángeles a crear momentos inolvidables. Nuestro inventario limpio y de lujo y nuestro servicio personal son la razón por la que nuestros clientes regresan.")}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-5">
            {[
              { icon: Award, k: "5.0★", v: t("Google Rated", "Calificación Google") },
              { icon: Users, k: "1000+", v: t("Events Served", "Eventos Atendidos") },
              { icon: MapPin, k: "LA + LA County", v: t("Service Area", "Área de Servicio") },
              { icon: Heart, k: t("Family Owned", "Negocio Familiar"), v: t("Since Day One", "Desde el primer día") },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border p-4 bg-card/50">
                <s.icon className="w-5 h-5 text-primary" />
                <div className="mt-3 font-display text-2xl">{s.k}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="rounded-3xl border border-primary/30 p-10 md:p-14 text-center" style={{ background: "var(--color-card)" }}>
          <h2 className="font-display text-3xl md:text-4xl font-bold">{t("Ready to work with us?", "¿Listo para trabajar con nosotros?")}</h2>
          <p className="mt-3 text-muted-foreground">{t("Get in touch and we'll help make your event effortless.", "Contáctenos y hacemos su evento muy fácil.")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/quote" className="rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 font-semibold shadow-gold">{t("Request a Quote", "Pedir Cotización")}</Link>
            <Link to="/contact" className="rounded-full border border-primary/50 px-6 py-3 font-semibold text-foreground hover:bg-primary/10">{t("Contact Us", "Contáctenos")}</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
