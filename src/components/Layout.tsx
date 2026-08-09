import { Link } from "@tanstack/react-router";
import { Phone, Mail, Instagram, MapPin, Menu, X, Globe } from "lucide-react";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/logo.png.asset.json";
import { useLang } from "@/lib/i18n";

const PHONE = "(323) 480-0660";
const PHONE_HREF = "tel:+13234800660";
const EMAIL = "Newerapartyrentals@yahoo.com";
const IG = "https://www.instagram.com/newerapartyrentals";

const nav = [
  { to: "/", label: "Home", es: "Inicio" },
  { to: "/about", label: "About", es: "Nosotros" },
  { to: "/rentals", label: "Rentals", es: "Rentas" },
  { to: "/gallery", label: "Gallery", es: "Galería" },
  { to: "/quote", label: "Request Quote", es: "Cotización" },
  { to: "/contact", label: "Contact", es: "Contacto" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-28 md:h-36 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoAsset.url} alt="New Era Party & Event Rentals" className="h-24 md:h-32 w-auto object-contain" width={200} height={80} />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {lang === "es" ? n.es : n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center rounded-full border border-primary/50 px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-primary/10 transition"
            >
              {t("Request a Quote", "Cotización")}
            </Link>
            <button
              onClick={toggle}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/50 px-3 py-2 text-xs font-semibold text-foreground hover:bg-primary/10 transition"
              aria-label={t("Switch to Spanish", "Cambiar a inglés")}
            >
              <Globe className="w-4 h-4 text-primary" /> {lang === "en" ? "ES" : "EN"}
            </button>
            <a
              href={PHONE_HREF}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-gold hover:opacity-90 transition"
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background/95">
            <nav className="flex flex-col px-5 py-4 gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-foreground border-b border-border/50"
                >
                  {lang === "es" ? n.es : n.label}
                </Link>
              ))}
              <a href={PHONE_HREF} className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-5 py-3 text-sm font-semibold justify-center">
                <Phone className="w-4 h-4" /> {t("Call", "Llame")} {PHONE}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logoAsset.url} alt="New Era Party & Event Rentals" className="h-32 w-auto object-contain" width={200} height={80} />
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              {t(
                "East Los Angeles' trusted party equipment rental service. Elevating weddings, quinceañeras, and celebrations with luxury rentals since day one.",
                "El servicio de renta de equipo para fiestas de confianza en el Este de Los Ángeles. Elevamos bodas, quinceañeras y celebraciones con rentas de lujo desde el primer día.",
              )}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">{t("Explore", "Explorar")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-primary">{lang === "es" ? n.es : n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">{t("Contact", "Contacto")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-primary" /><a href={PHONE_HREF} className="hover:text-primary">{PHONE}</a></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-primary" /><a href={`mailto:${EMAIL}`} className="hover:text-primary break-all">{EMAIL}</a></li>
              <li className="flex items-start gap-2"><Instagram className="w-4 h-4 mt-0.5 text-primary" /><a href={IG} target="_blank" rel="noreferrer" className="hover:text-primary">@newerapartyrentals</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-primary" />4536 Whittier Blvd, Los Angeles, CA 90023</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} New Era Party & Event Rentals. {t("All rights reserved.", "Todos los derechos reservados.")}
        </div>
      </footer>

      {/* Floating Call Now button */}
      <a
        href={PHONE_HREF}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-5 py-3.5 text-sm font-semibold shadow-gold hover:scale-105 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">{t("Call Now", "Llame Ahora")}</span>
      </a>
    </div>
  );
}

export { PHONE, PHONE_HREF, EMAIL, IG };
