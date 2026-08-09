import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { Check, Snowflake, Coffee, Crown, Flame, Truck, ArrowUp, Phone, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import a1 from "@/assets/IMG_4867.jpg.asset.json";
import a4 from "@/assets/IMG_4865.jpg.asset.json";
import a6 from "@/assets/IMG_4866.jpg.asset.json";
import a7 from "@/assets/20251108_134224.jpeg.asset.json";
import a2 from "@/assets/IMG_4602.jpg.asset.json";
import a3 from "@/assets/IMG_4605.jpg.asset.json";
import a5 from "@/assets/IMG_4863.jpg.asset.json";
import a8 from "@/assets/IMG_4864.jpg.asset.json";
import a9 from "@/assets/IMG_4868.jpg.asset.json";
import a10 from "@/assets/IMG_4869.jpg.asset.json";
import m1 from "@/assets/1000010304.jpeg.asset.json";
import m2 from "@/assets/1000010543.jpeg.asset.json";
import m3 from "@/assets/1000011079.jpeg.asset.json";
import m4 from "@/assets/1000019155.jpeg.asset.json";
import m5 from "@/assets/1000019153.jpeg.asset.json";
import m6 from "@/assets/1000038124.jpeg.asset.json";
import m7 from "@/assets/20251108_134207.jpeg.asset.json";
import m9 from "@/assets/20251108_134215.jpeg.asset.json";
import w1 from "@/assets/IMG_4905.jpeg.asset.json";
import w2 from "@/assets/IMG_4904.jpeg.asset.json";
import w3 from "@/assets/IMG_4903.jpeg.asset.json";
import w4 from "@/assets/IMG_4902.jpeg.asset.json";
import w5 from "@/assets/IMG_4901.jpeg.asset.json";
import w6 from "@/assets/IMG_4919.jpeg.asset.json";
import w7 from "@/assets/IMG_4920.jpeg.asset.json";
import w8 from "@/assets/IMG_4918.jpeg.asset.json";
import w9 from "@/assets/IMG_4917.jpeg.asset.json";
import n9 from "@/assets/IMG_4935.jpeg.asset.json";
import n10 from "@/assets/IMG_4936.jpeg.asset.json";

import t1 from "@/assets/IMG_4913.jpeg.asset.json";
import t2 from "@/assets/IMG_4914.jpeg.asset.json";
import t3 from "@/assets/IMG_4912.jpeg.asset.json";
import t4 from "@/assets/IMG_4911.jpeg.asset.json";
import t5 from "@/assets/IMG_4910.jpeg.asset.json";
import t6 from "@/assets/IMG_4909.jpeg.asset.json";
import t7 from "@/assets/IMG_4915.jpeg.asset.json";
import t9 from "@/assets/IMG_4925.jpeg.asset.json";
import t10 from "@/assets/IMG_4924.jpeg.asset.json";
import t11 from "@/assets/IMG_4922.jpeg.asset.json";
import t12 from "@/assets/IMG_4921.jpeg.asset.json";
import n8 from "@/assets/IMG_4937.jpeg.asset.json";
import n1 from "@/assets/IMG_4945.jpeg.asset.json";
import n2 from "@/assets/IMG_4944.jpeg.asset.json";
import n3 from "@/assets/IMG_4943.jpeg.asset.json";
import n5 from "@/assets/IMG_4940.jpeg.asset.json";
import n6 from "@/assets/IMG_4939.jpeg.asset.json";


import h1 from "@/assets/20201125_125240.jpeg.asset.json";
import h2 from "@/assets/20201125_125246.jpeg.asset.json";
import h3 from "@/assets/20201105_221450.jpeg.asset.json";
import h4 from "@/assets/20190331_094817.jpeg.asset.json";
import h5 from "@/assets/20201126_145942.jpeg.asset.json";
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

const MACHINES = [
  { img: t7.url, name: "Double Margarita / Slushy Machine", en: "Two flavors • mixes available on request", es: "Dos sabores • mezclas disponibles" },
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
  type AlbumProduct = { img: string; name: string; en: string; es: string };
  const [album, setAlbum] = useState<{ title: string; photos: string[]; products?: AlbumProduct[] } | null>(null);
  const [idx, setIdx] = useState(0);

  const openAlbum = (title: string, photos: string[], products?: AlbumProduct[]) => { setAlbum({ title, photos, products }); setIdx(0); };

  const CATS: { img: string; title: string; photos: string[]; items: string[]; sizes?: string[]; products?: AlbumProduct[] }[] = [
    {
      img: a1.url,
      title: t("Tables & Chairs", "Mesas y Sillas"),
      photos: [a1.url, a2.url, a3.url, a8.url, a9.url, a10.url],
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
      photos: [t1.url, t2.url, t3.url, t4.url, t5.url, t6.url, t9.url, t10.url, t11.url, t12.url, n1.url, n2.url, n3.url, n5.url, n6.url],
      sizes: CANOPY_SIZES,
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
      photos: [a7.url, m7.url, m9.url, m1.url, m2.url, m3.url, m4.url, m5.url, m6.url],
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
      photos: [a4.url, a5.url, m3.url, m7.url, m2.url, n2.url],
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
      photos: [...INFLATABLES.map((i) => i.img), w9.url, n9.url, n10.url],
      products: INFLATABLES,
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
      photos: [t7.url, t8.url, a6.url],
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
              {t("Delivery and pickup fees are charged based on the amount of rentals and how far your event is from our location.", "Las tarifas de entrega y recolección se cobran según la cantidad de rentas y la distancia de su evento desde nuestra ubicación.")}
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {t("Fees also depend on whether the setup is ground level or upper level / stairs.", "La tarifa también depende de si la instalación es a nivel de suelo o en un nivel superior / escaleras.")}
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {t("Setup and breakdown services are available upon request for an extra cost.", "Los servicios de instalación y desmontaje están disponibles bajo pedido por un costo adicional.")}
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-16 grid gap-8 md:grid-cols-2">
        {CATS.map((c) => (
          <article key={c.title} className="rounded-2xl overflow-hidden border border-border bg-card/40">
            <button
              type="button"
              onClick={() => openAlbum(c.title, c.photos, c.products)}
              className="group relative block w-full"
              aria-label={t(`View ${c.title} photos`, `Ver fotos de ${c.title}`)}
            >
              <img src={c.img} alt={c.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/80 border border-primary/40 px-3 py-1.5 text-xs font-semibold text-primary">
                <Images className="w-3.5 h-3.5" /> {c.photos.length} {t("photos", "fotos")}
              </span>
            </button>
            <div className="p-6">
              <button type="button" onClick={() => openAlbum(c.title, c.photos, c.products)} className="font-display text-2xl text-left hover:text-primary transition-colors">
                {c.title}
              </button>
              {c.sizes && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.sizes.map((s) => (
                    <span key={s} className="rounded-full border border-primary/40 bg-card/60 px-3 py-1 text-xs font-semibold text-foreground">{s}</span>
                  ))}
                </div>
              )}
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Phone className="w-3 h-3" /> {t("Call for pricing", "Llame por precios")}
              </div>
              <button type="button" onClick={() => openAlbum(c.title, c.photos, c.products)} className="text-sm text-primary hover:underline">
                {t("See options →", "Ver opciones →")}
              </button>
              </div>
            </div>
          </article>
        ))}
      </section>

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

      {album && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur overflow-y-auto p-4 md:p-8" onClick={() => setAlbum(null)}>
          <div className="mx-auto max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-2xl">{album.title}</h2>
              <button onClick={() => setAlbum(null)} aria-label={t("Close", "Cerrar")} className="p-2 text-foreground hover:text-primary">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative mt-4">
              <img src={album.photos[idx]} alt={`${album.title} ${idx + 1}`} className="w-full max-h-[65vh] object-contain rounded-xl border border-border bg-card" />
              {album.photos.length > 1 && (
                <>
                  <button
                    onClick={() => setIdx((i) => (i - 1 + album.photos.length) % album.photos.length)}
                    aria-label={t("Previous", "Anterior")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 border border-border p-2 hover:text-primary"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setIdx((i) => (i + 1) % album.photos.length)}
                    aria-label={t("Next", "Siguiente")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 border border-border p-2 hover:text-primary"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            {album.products?.[idx] && (
              <div className="mt-4 rounded-xl border border-border bg-card/60 p-5">
                <h3 className="font-display text-xl">{album.products[idx].name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t(album.products[idx].en, album.products[idx].es)}</p>
                <Link to="/quote" className="mt-3 inline-flex rounded-full bg-gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-gold">
                  {t("Reserve this one", "Reservar este")}
                </Link>
              </div>
            )}
            <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {album.photos.map((p, i) => (
                <button key={p + i} onClick={() => setIdx(i)} className={`overflow-hidden rounded-lg border ${i === idx ? "border-primary" : "border-border"}`}>
                  <img src={p} alt="" className="h-16 w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 justify-center pb-6">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 text-sm font-semibold shadow-gold">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <Link to="/quote" className="inline-flex items-center rounded-full border border-primary/50 px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10">
                {t("Request a Quote", "Pedir Cotización")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
