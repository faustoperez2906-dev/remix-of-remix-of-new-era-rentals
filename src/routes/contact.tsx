import { createFileRoute } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF, EMAIL, IG } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | New Era Party & Event Rentals" },
      { name: "description", content: "Contact New Era Party & Event Rentals in East Los Angeles. Call (323) 480-0660 or email Newerapartyrentals@yahoo.com." },
      { property: "og:title", content: "Contact New Era Party & Event Rentals" },
      { property: "og:description", content: "Call, email or visit us in East Los Angeles." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "New Era Party & Event Rentals",
        image: "",
        telephone: "+1-323-480-0660",
        email: EMAIL,
        address: { "@type": "PostalAddress", streetAddress: "4536 Whittier Blvd", addressLocality: "Los Angeles", addressRegion: "CA", postalCode: "90023", addressCountry: "US" },
        url: "",
        priceRange: "$$",
        openingHours: "Mo-Su 09:00-18:00",
        sameAs: [IG],
      }),
    }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-12">
        <div className="text-xs tracking-widest uppercase text-primary">{t("Contact", "Contacto")}</div>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold">
          {t("Let's", "Vamos a")} <span className="text-gradient-gold">{t("talk", "platicar")}</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {t("We're here to answer questions, check availability, and help you plan an unforgettable event.", "Estamos aquí para responder preguntas, revisar disponibilidad y ayudarle a planear un evento inolvidable.")}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/60 p-8 space-y-6">
          <a href={PHONE_HREF} className="flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("Call", "Llame")}</div>
              <div className="text-xl font-semibold text-foreground group-hover:text-primary">{PHONE}</div>
            </div>
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("Email", "Correo")}</div>
              <div className="text-lg font-semibold text-foreground group-hover:text-primary break-all">{EMAIL}</div>
            </div>
          </a>
          <a href={IG} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
              <div className="text-lg font-semibold text-foreground group-hover:text-primary">@newerapartyrentals</div>
            </div>
          </a>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("Location", "Ubicación")}</div>
              <div className="text-lg font-semibold text-foreground">4536 Whittier Blvd</div>
              <div className="text-sm text-muted-foreground">Los Angeles, CA 90023</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("Hours", "Horario")}</div>
              <div className="text-sm text-foreground">{t("Mon – Sun · 9:00 AM – 6:00 PM", "Lun – Dom · 9:00 AM – 6:00 PM")}</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden min-h-[420px]">
          <iframe
            title="Map to New Era Party & Event Rentals"
            src="https://www.google.com/maps?q=4536+Whittier+Blvd,+Los+Angeles,+CA+90023&output=embed"
            className="w-full h-full min-h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
}
