import { createFileRoute } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2, Phone, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  eventDate: z.string().min(1, "Pick a date"),
  eventType: z.string().min(1, "Choose event type"),
  guests: z.string().max(10).optional(),
  location: z.string().trim().max(160).optional(),
  deliveryMethod: z.string().min(1, "Choose delivery or pickup"),
  setupLevel: z.string().min(1, "Choose ground or upper level"),
  setupService: z.string().min(1, "Choose setup & breakdown option"),
  message: z.string().trim().max(1000).optional(),
});

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | New Era Party & Event Rentals" },
      { name: "description", content: "Tell us about your event and get a personalized rental quote within 24 hours. Serving Los Angeles." },
      { property: "og:title", content: "Request a Free Quote" },
      { property: "og:description", content: "Personalized event rental quotes within 24 hours." },
    ],
  }),
  component: Quote,
});

function Quote() {
  const { t } = useLang();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError("");
    setSubmitting(true);
    const { error } = await supabase.from("quote_requests").insert({
      name: r.data.name,
      email: r.data.email,
      phone: r.data.phone,
      event_date: r.data.eventDate,
      event_type: r.data.eventType,
      guests: r.data.guests || null,
      location: r.data.location || null,
      delivery_method: r.data.deliveryMethod,
      setup_level: r.data.setupLevel,
      setup_service: r.data.setupService,
      message: r.data.message || null,
    });
    setSubmitting(false);
    if (error) {
      setSubmitError(t("Something went wrong sending your request. Please call us instead.", "Hubo un problema al enviar su solicitud. Por favor llámenos."));
      return;
    }
    setSent(true);
  };

  const field = "w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-5 md:px-8 pt-16 md:pt-24 pb-12">
        <div className="text-xs tracking-widest uppercase text-primary">{t("Request a Quote", "Pedir Cotización")}</div>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold">
          {t("Let's plan your", "Planeemos su")} <span className="text-gradient-gold">{t("perfect event", "evento perfecto")}</span>.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          {t("Fill out the form and we'll respond within 24 hours. Prefer to talk? Call us at", "Llene el formulario y le respondemos en 24 horas. ¿Prefiere hablar? Llámenos al")} <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE}</a>.
        </p>
        <div className="mt-6 rounded-2xl border border-primary/30 bg-card/60 p-6 md:p-8">
          <h2 className="font-display text-xl font-bold">{t("Delivery & Setup Info", "Información de entrega e instalación")}</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {t("Delivery and pickup fees are charged based on the amount of rentals and the distance from our location.", "Las tarifas de entrega y recolección se cobran según la cantidad de rentas y la distancia desde nuestra ubicación.")}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {t("Fees also depend on whether the setup is ground level or upper level / stairs.", "La tarifa también depende de si la instalación es a nivel de suelo o en un nivel superior / escaleras.")}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              {t("Setup and breakdown services are available upon request for an extra cost.", "Los servicios de instalación y desmontaje están disponibles bajo pedido por un costo adicional.")}
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-8 pb-24">
        {sent ? (
          <div className="rounded-2xl border border-primary/40 bg-card p-10 text-center">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
            <h2 className="mt-4 font-display text-3xl">{t("Thank you!", "¡Gracias!")}</h2>
            <p className="mt-2 text-muted-foreground">{t("We received your quote request and will be in touch within 24 hours.", "Recibimos su solicitud de cotización y nos comunicaremos en 24 horas.")}</p>
            <a href={PHONE_HREF} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 font-semibold">
              <Phone className="w-4 h-4" /> {t("Or call", "O llame al")} {PHONE}
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card/60 p-6 md:p-10 grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm text-muted-foreground">{t("Full name", "Nombre completo")}</label>
              <input name="name" className={field} maxLength={80} />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm text-muted-foreground">{t("Phone", "Teléfono")}</label>
              <input name="phone" type="tel" className={field} maxLength={20} />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-muted-foreground">{t("Email", "Correo electrónico")}</label>
              <input name="email" type="email" className={field} maxLength={160} />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm text-muted-foreground">{t("Event date", "Fecha del evento")}</label>
              <input name="eventDate" type="date" className={field} />
              {errors.eventDate && <p className="mt-1 text-xs text-destructive">{errors.eventDate}</p>}
            </div>
            <div>
              <label className="text-sm text-muted-foreground">{t("Event type", "Tipo de evento")}</label>
              <select name="eventType" className={field} defaultValue="">
                <option value="" disabled>{t("Select...", "Seleccione...")}</option>
                <option>{t("Wedding", "Boda")}</option>
                <option>Quinceañera</option>
                <option>{t("Birthday", "Cumpleaños")}</option>
                <option>{t("Corporate", "Corporativo")}</option>
                <option>{t("Baby Shower", "Baby Shower")}</option>
                <option>{t("Other", "Otro")}</option>
              </select>
              {errors.eventType && <p className="mt-1 text-xs text-destructive">{errors.eventType}</p>}
            </div>
            <div>
              <label className="text-sm text-muted-foreground">{t("Guest count", "Número de invitados")}</label>
              <input name="guests" inputMode="numeric" className={field} maxLength={10} placeholder="e.g. 120" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">{t("Event location / city", "Lugar / ciudad del evento")}</label>
              <input name="location" className={field} maxLength={160} placeholder="Los Angeles, CA" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground">{t("Delivery or pickup", "Entrega o recogida")}</label>
              <select name="deliveryMethod" className={field} defaultValue="">
                <option value="" disabled>{t("Select...", "Seleccione...")}</option>
                <option>{t("Delivery", "Entrega a domicilio")}</option>
                <option>{t("Pickup", "Recogida en ubicación")}</option>
                <option>{t("Not sure yet", "Aún no estoy seguro")}</option>
              </select>
              {errors.deliveryMethod && <p className="mt-1 text-xs text-destructive">{errors.deliveryMethod}</p>}
            </div>
            <div>
              <label className="text-sm text-muted-foreground">{t("Setup level", "Nivel de instalación")}</label>
              <select name="setupLevel" className={field} defaultValue="">
                <option value="" disabled>{t("Select...", "Seleccione...")}</option>
                <option>{t("Ground level", "Nivel de suelo")}</option>
                <option>{t("Upper level / stairs", "Nivel superior / escaleras")}</option>
                <option>{t("Not sure yet", "Aún no estoy seguro")}</option>
              </select>
              {errors.setupLevel && <p className="mt-1 text-xs text-destructive">{errors.setupLevel}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-muted-foreground">{t("Setup & breakdown service (extra cost)", "Servicio de instalación y desmontaje (costo adicional)")}</label>
              <select name="setupService" className={field} defaultValue="">
                <option value="" disabled>{t("Select...", "Seleccione...")}</option>
                <option>{t("Yes — please add setup & breakdown", "Sí — agregar instalación y desmontaje")}</option>
                <option>{t("Setup only", "Solo instalación")}</option>
                <option>{t("No — we'll handle it ourselves", "No — nosotros nos encargamos")}</option>
                <option>{t("Not sure yet", "Aún no estoy seguro")}</option>
              </select>
              {errors.setupService && <p className="mt-1 text-xs text-destructive">{errors.setupService}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-muted-foreground">{t("What do you need? (Optional)", "¿Qué necesita? (Opcional)")}</label>
              <textarea name="message" rows={5} className={field} maxLength={1000} placeholder={t("Canopies, chairs, tables, inflatables, lighting, sound...", "Toldos, sillas, mesas, inflables, iluminación, sonido...")} />
            </div>
            <div className="md:col-span-2 flex items-center justify-end gap-4">
              {submitError && <p className="text-sm text-destructive">{submitError}</p>}
              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-7 py-3.5 font-semibold shadow-gold disabled:opacity-60">
                {submitting ? t("Sending...", "Enviando...") : t("Send Request", "Enviar Solicitud")}
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
}
