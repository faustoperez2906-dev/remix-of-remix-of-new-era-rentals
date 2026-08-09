import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { Check, Music, Lightbulb, Snowflake, Coffee, Crown, Flame, Truck, ArrowUp, Phone } from "lucide-react";
import a1 from "@/assets/IMG_4867.jpg.asset.json";
import a4 from "@/assets/IMG_4865.jpg.asset.json";
import a6 from "@/assets/IMG_4866.jpg.asset.json";
import a7 from "@/assets/20251108_134224.jpeg.asset.json";
import w1 from "@/assets/IMG_4905.jpeg.asset.json";
import w2 from "@/assets/IMG_4904.jpeg.asset.json";
import w3 from "@/assets/IMG_4903.jpeg.asset.json";
import w4 from "@/assets/IMG_4902.jpeg.asset.json";
import w5 from "@/assets/IMG_4901.jpeg.asset.json";
import w6 from "@/assets/IMG_4919.jpeg.asset.json";
import w7 from "@/assets/IMG_4920.jpeg.asset.json";
import w8 from "@/assets/IMG_4918.jpeg.asset.json";

import t1 from "@/assets/IMG_4913.jpeg.asset.json";
import t5 from "@/assets/IMG_4910.jpeg.asset.json";
import t7 from "@/assets/IMG_4915.jpeg.asset.json";
import t8 from "@/assets/IMG_4916.jpeg.asset.json";
import n8 from "@/assets/IMG_4937.jpeg.asset.json";


import h1 from "@/assets/20201125_125240.jpeg.asset.json";
import h4 from "@/assets/20190331_094817.jpeg.asset.json";
import h6 from "@/assets/20201212_082846.jpeg.asset.json";

const CANOPY_SIZES = ["10x10", "10x20", "10x30", "10x40", "20x20", "20x30", "20x40"];

const INFLATABLES = [
  { img: w1.url, name: "Red & Grey 18ft Water Slide", en: "Big splash pool • wet or dry", es: "Alberca grande • con o sin agua" },
  { img: w2.url, name: "Blue Marble Water Slide", en: "Classic blue • wet or dry", es: "Azul clásico • con o sin agua" },
  { img: w3.url, name: "Fiesta Marble Water Slide", en: "Yellow, red & green • splash pool", es: "Amarillo, rojo y verde • con alberca" },
  { img: w4.url, name: "Tropical Palm Water Slide", en: "Green palm tree top • tall slide", es: "Palmera verde • resbaladilla alta" },
  { img: w5.url, name: "Rainbow Marble Water Slide", en: "Red, orange & green • splash pool", es: "Rojo, naranja y verde • con alberca" },
  { img: w6.url, name: "Blue Dual-Lane / Blue Wave Water Slide", en: "Backyard friendly • splash pool • wet or dry", es: "Ideal para patios • con alberca • con o sin agua" },
  { img: w7.url, name: "Castle Combo with Slide", en: "Bounce house + slide + pool", es: "Brincolín + resbaladilla + alberca" },
  { img: w8.url, name: "Multicolor Castle Bounce House", en: "13x13 • all ages • setup included", es: "13x13 • todas las edades • instalación incluida" },
  { img: n8.url, name: "Pink & Blue Castle Bounce House", en: "13x13 • great for princess parties • setup included", es: "13x13 • ideal para fiestas de princesas • instalación incluida" },
  
];

const TENTS = [
  { img: t1.url, name: "20x20 Frame Tent", en: "Driveway or backyard • string lights available", es: "Cochera o patio • luces disponibles" },
];

const MACHINES = [
  { img: t7.url, name: "Double Margarita / Slushy Machine", en: "Two flavors • mixes available on request", es: "Dos sabores • mezclas disponibles" },
  { img: t8.url, name: "Margarita Machine with Cart", en: "Delivered ready to serve", es: "Entregada lista para servir" },
];

const MACHINE_EXTRAS = [
  { icon: Snowflake, name: "Snow Cone Machine", en: "Syrups, cups & spoons available.", es: "Jarabes, vasos y cucharas disponibles." },
  { icon: Coffee, name: "Coffee Maker Machine", en: "Large-batch brewer for 100+ cups.", es: "Cafetera grande para más de 100 tazas." },
  { icon: Crown, name: "Throne Chairs", en: "Gold and white thrones for the guest of honor.", es: "Tronos dorados y blancos para el festejado." },
];

const HEATERS = [
  { img: h1.url, name: "Pyramid Flame Patio Heater", en: "Glass tower flame • propane on request", es: "Torre de flama • propano bajo pedido" },
  { img: h4.url, name: "Standing Patio Heater", en: "Covers about a 15ft circle of warmth", es: "Calienta un círculo de unos 15 pies" },
  { img: h6.url, name: "Champion Power Generators", en: "3500-4000W • power lights, machines & music", es: "3500-4000W • luces, máquinas y música" },
];

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Rentals | Tents, Canopies, Inflatables & More | New Era Party Rentals" },
      { name: "description", content: "Browse our rental catalog: 10x10 to 20x40 canopies, draping, chairs, barstools, linen chair covers, backdrops, inflatables, sound, lighting, stage, margarita and snow cone machines, patio heaters and throne chairs." },
      { property: "og:title", content: "Party Rentals in Los Angeles" },
      { property: "og:description", content: "Canopies, inflatables, sound, lighting, stage, machines and more." },
    ],
  }),
  component: Rentals,
});

function Rentals() {
  const { t } = useLang();

  const CATS = [
    {
      img: a1.url,
      title: t("Tables & Chairs", "Mesas y Sillas"),
      items: [
        t("White chairs, black chairs & white resting chairs", "Sillas blancas, negras y sillas de descanso blancas"),
        t("Round banquet tables (60\" / 72\")", "Mesas redondas de banquete (60\" / 72\")"),
        t("Rectangular banquet tables", "Mesas rectangulares de banquete"),
        t("Kids tables & chairs", "Mesas y sillas para niños"),
        t("Barstools & cocktail tables", "Bancos altos y mesas de cóctel"),
        t("Linen chair covers, linens & runners", "Fundas de tela para sillas, manteles y caminos"),
      ],
    },
    {
      img: t5.url,
      title: t("Tents & Canopies", "Carpas y Toldos"),
      items: [
        t("10x10, 10x20, 10x30, 10x40 canopies", "Toldos 10x10, 10x20, 10x30, 10x40"),
        t("20x20, 20x30, 20x40 and larger tents", "Carpas 20x20, 20x30, 20x40 y más grandes"),
        t("Sidewalls available for most sizes", "Paredes disponibles para casi todos los tamaños"),
        t("Draping — ceilings, sidewalls & entryways", "Draping — techos, paredes y entradas"),
        t("Elegant fabric liners", "Forros de tela elegantes"),
      ],
    },
    {
      img: a7.url,
      title: t("Lighting, Sound & Stage", "Iluminación, Sonido y Escenario"),
      items: [
        t("Giant light-up marquee letters & numbers", "Letras y números luminosos gigantes"),
        t("Custom names, XV, 18, 50 and more", "Nombres personalizados, XV, 18, 50 y más"),
        t("LED uplighting & string / bistro lights", "Iluminación LED y luces colgantes"),
        t("Speakers, microphones & DJ sound systems", "Bocinas, micrófonos y equipo de DJ"),
        t("Stage & risers in multiple sizes", "Escenario y tarimas en varios tamaños"),
      ],
    },
    {
      img: a4.url,
      title: t("Backdrops", "Fondos (Backdrops)"),
      items: [
        t("Backdrops", "Backdrops"),
        t("Shimmer walls & sequin panels", "Paredes brillantes y paneles de lentejuela"),
        t("Custom name & theme backdrops", "Fondos personalizados por tema o nombre"),
        t("Balloon arch styling", "Arcos de globos"),
      ],
    },
    {
      img: w1.url,
      title: t("Waterslides & Jumpers", "Resbaladillas y Brincolines"),
      items: [
        t("Bounce houses & castle jumpers", "Brincolines y castillos inflables"),
        t("Combo jumpers with slides", "Combos con resbaladilla"),
        t("Water slides — wet or dry", "Resbaladillas de agua — con o sin agua"),
        t("Kids tables & chairs sets", "Juegos de mesas y sillas para niños"),
      ],
    },
    {
      img: a6.url,
      title: t("Machines & Catering", "Máquinas y Banquetes"),
      items: [
        t("Margarita & slushy machines", "Máquinas de margaritas y raspados"),
        t("Snow cone machine", "Máquina de raspados / conos de nieve"),
        t("Coffee maker machine", "Cafetera para eventos"),
        t("Cotton candy & popcorn machines", "Máquinas de algodón de azúcar y palomitas"),
        t("Glassware, flatware & chafing dishes", "Cristalería, cubiertos y baños maría"),
      ],
    },
  ];

  const section = (
    id: string,
    kicker: string,
    heading: string,
    body: string,
    items: { img: string; name: string; en: string; es: string }[],
    hideReserve = false,
  ) => (
    <section id={id} className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
      <div className="text-xs tracking-widest uppercase text-primary">{kicker}</div>
      <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">{heading}</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">{body}</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <article key={s.name} className="group rounded-2xl overflow-hidden border border-border bg-card/40">
            <img src={s.img} alt={s.name} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
            <div className="p-5">
              <h3 className="font-display text-xl">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t(s.en, s.es)}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Phone className="w-3 h-3" /> {t("Call for pricing", "Llame por precios")}
              </div>
              {!hideReserve && (
                <Link to="/quote" className="mt-4 inline-flex text-sm text-primary hover:underline">
                  {t("Reserve this one →", "Reservar este →")}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="text-xs tracking-widest uppercase text-primary">{t("Our Inventory", "Nuestro Inventario")}</div>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
          {t("Everything you need,", "Todo lo que necesita,")} <span className="text-gradient-gold">{t("beautifully done", "hecho con estilo")}</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          {t(
            "Explore our most-requested categories below. Don't see what you need? Just ask — we'll source it.",
            "Explore nuestras categorías más solicitadas. ¿No ve lo que busca? Pregúntenos — se lo conseguimos.",
          )}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-12">
        <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold">{t("Pricing", "Precios")}</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              {t(
                "Every event is different, so pricing depends on your items, dates and location. Call or request a quote and we'll give you an exact price — free.",
                "Cada evento es diferente, así que el precio depende de sus artículos, fechas y ubicación. Llámenos o pida una cotización y le damos el precio exacto — gratis.",
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 text-sm font-semibold shadow-gold">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <Link to="/quote" className="inline-flex items-center rounded-full border border-primary/50 px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10">
              {t("Request a Quote", "Pedir Cotización")}
            </Link>
          </div>
        </div>
      </section>



      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-16">
        <div className="rounded-2xl border border-primary/30 bg-card/60 p-6 md:p-8">
          <h2 className="font-display text-xl font-bold">{t("Delivery & Pickup", "Entrega y recogida")}</h2>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            <li className="flex items-start gap-2">
              <Truck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {t("Delivery and pickup are both charged based on how far your event is from our location.", "La entrega y la recolección tienen un cargo según la distancia de su evento desde nuestra ubicación.")}
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {t("Let us know if setup is ground level or upper level / stairs.", "Avísenos si la instalación es a nivel de suelo o en un nivel superior / escaleras.")}
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {t("Setup and breakdown are included with most rentals.", "La instalación y desmontaje están incluidos en la mayoría de las rentas.")}
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-16 grid gap-8 md:grid-cols-2">
        {CATS.map((c) => (
          <article key={c.title} className="rounded-2xl overflow-hidden border border-border bg-card/40">
            <img src={c.img} alt={c.title} className="w-full h-64 object-cover" loading="lazy" width={1200} height={900} />
            <div className="p-6">
              <h3 className="font-display text-2xl">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Phone className="w-3 h-3" /> {t("Call for pricing", "Llame por precios")}
              </div>
            </div>
          </article>
        ))}
      </section>

      {section(
        "inflatables",
        t("Inflatables", "Inflables"),
        t("Bounce houses & water slides", "Brincolines y resbaladillas"),
        t(
          "Available wet or dry. Delivery, setup and pickup included — just tell us which one you want.",
          "Disponibles con o sin agua. Entrega, instalación y recolección incluidas — solo díganos cuál quiere.",
        ),
        INFLATABLES,
      )}

      <section id="canopies" className="mx-auto max-w-7xl px-5 md:px-8 pb-6">
        <div className="text-xs tracking-widest uppercase text-primary">{t("Canopy Sizes", "Tamaños de Toldos")}</div>
        <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">{t("Any size you need", "El tamaño que necesite")}</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {CANOPY_SIZES.map((s) => (
            <span key={s} className="rounded-full border border-primary/40 bg-card/60 px-5 py-2 text-sm font-semibold text-foreground">{s}</span>
          ))}
        </div>
      </section>

      {section(
        "tents-canopies",
        t("Tents & Canopies", "Carpas y Toldos"),
        t("Shade & draping", "Sombra y draping"),
        t(
          "From simple pop-up canopies to fully draped tents with lighting and sidewalls.",
          "Desde toldos sencillos hasta carpas con draping completo, iluminación y paredes.",
        ),
        TENTS,
        true,
      )}

      {section(
        "machines",
        t("Machines", "Máquinas"),
        t("Margarita, slushy & more", "Margaritas, raspados y más"),
        t(
          "Frozen drink machines delivered ready to serve, plus snow cone and coffee machines on request.",
          "Máquinas de bebidas congeladas listas para servir, además de máquinas de raspados y café bajo pedido.",
        ),
        MACHINES,
      )}

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MACHINE_EXTRAS.map((m) => (
          <article key={m.name} className="rounded-2xl border border-border bg-card/40 p-6">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <m.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="mt-4 font-display text-xl">{m.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t(m.en, m.es)}</p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Phone className="w-3 h-3" /> {t("Call for pricing", "Llame por precios")}
            </div>
            <div><Link to="/quote" className="mt-3 inline-flex text-sm text-primary hover:underline">{t("Add to my quote →", "Agregar a mi cotización →")}</Link></div>
          </article>
        ))}
      </section>

      <section id="sound-lighting-stage" className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <div className="text-xs tracking-widest uppercase text-primary">{t("Sound, Lighting & Stage", "Sonido, Iluminación y Escenario")}</div>
        <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">{t("Set the mood", "Ponga el ambiente")}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { icon: Music, title: t("Sound", "Sonido"), items: [t("Speakers & subwoofers", "Bocinas y subwoofers"), t("Wireless microphones", "Micrófonos inalámbricos"), t("DJ setups & mixers", "Equipo de DJ y mezcladoras")] },
            { icon: Lightbulb, title: t("Lighting", "Iluminación"), items: [t("Marquee letters & numbers", "Letras y números luminosos"), t("LED uplighting", "Iluminación LED"), t("String / bistro lights & chandeliers", "Luces colgantes y candiles")] },
            { icon: Crown, title: t("Stage", "Escenario"), items: [t("Stage risers in multiple sizes", "Tarimas en varios tamaños"), t("Skirting & carpet finish", "Faldón y alfombra"), t("Steps & railings", "Escalones y barandales")] },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl">{c.title}</h3>
              <ul className="mt-3 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {section(
        "heaters",
        t("Patio Heaters & Power", "Calentadores y Energía"),
        t("Keep guests warm", "Mantenga a sus invitados cómodos"),
        t(
          "Propane patio heaters and portable generators to keep your event comfortable and powered.",
          "Calentadores de propano y generadores portátiles para su evento.",
        ),
        HEATERS,
      )}

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <div className="rounded-3xl border border-primary/30 p-10 text-center bg-card/60">
          <div className="inline-flex items-center gap-2 text-primary text-sm"><Flame className="w-4 h-4" /> {t("Bundle & save", "Paquetes con descuento")}</div>
          <h2 className="mt-2 font-display text-3xl font-bold">{t("Custom packages available", "Paquetes personalizados disponibles")}</h2>
          <p className="mt-2 text-muted-foreground">{t("Bundle chairs, tables, canopies and decor for special pricing.", "Combine sillas, mesas, toldos y decoración para un precio especial.")}</p>
          <Link to="/quote" className="mt-6 inline-flex rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 font-semibold shadow-gold">{t("Build my package", "Armar mi paquete")}</Link>
        </div>
      </section>
    </Layout>
  );
}
