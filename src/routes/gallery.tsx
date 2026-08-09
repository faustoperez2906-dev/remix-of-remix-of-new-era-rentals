import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useLang } from "@/lib/i18n";
import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/IMG_4602.jpg.asset.json";
import p2 from "@/assets/IMG_4605.jpg.asset.json";
import p3 from "@/assets/IMG_4863.jpg.asset.json";
import p4 from "@/assets/IMG_4864.jpg.asset.json";
import p5 from "@/assets/IMG_4865.jpg.asset.json";
import p6 from "@/assets/IMG_4866.jpg.asset.json";
import p7 from "@/assets/IMG_4867.jpg.asset.json";
import p8 from "@/assets/IMG_4868.jpg.asset.json";
import p9 from "@/assets/IMG_4869.jpg.asset.json";
import m1 from "@/assets/1000010304.jpeg.asset.json";
import m2 from "@/assets/1000010543.jpeg.asset.json";
import m3 from "@/assets/1000011079.jpeg.asset.json";
import m4 from "@/assets/1000019155.jpeg.asset.json";
import m5 from "@/assets/1000019153.jpeg.asset.json";
import m6 from "@/assets/1000038124.jpeg.asset.json";
import m7 from "@/assets/20251108_134207.jpeg.asset.json";
import m8 from "@/assets/20251108_134224.jpeg.asset.json";
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
import t1 from "@/assets/IMG_4913.jpeg.asset.json";
import t2 from "@/assets/IMG_4914.jpeg.asset.json";
import t3 from "@/assets/IMG_4912.jpeg.asset.json";
import t4 from "@/assets/IMG_4911.jpeg.asset.json";
import t5 from "@/assets/IMG_4910.jpeg.asset.json";
import t6 from "@/assets/IMG_4909.jpeg.asset.json";
import t7 from "@/assets/IMG_4915.jpeg.asset.json";
import t8 from "@/assets/IMG_4916.jpeg.asset.json";
import t9 from "@/assets/IMG_4925.jpeg.asset.json";
import t10 from "@/assets/IMG_4924.jpeg.asset.json";
import t11 from "@/assets/IMG_4922.jpeg.asset.json";
import t12 from "@/assets/IMG_4921.jpeg.asset.json";
import n1 from "@/assets/IMG_4945.jpeg.asset.json";
import n2 from "@/assets/IMG_4944.jpeg.asset.json";
import n3 from "@/assets/IMG_4943.jpeg.asset.json";
import n4 from "@/assets/IMG_4942.jpeg.asset.json";
import n5 from "@/assets/IMG_4940.jpeg.asset.json";
import n6 from "@/assets/IMG_4939.jpeg.asset.json";
import n7 from "@/assets/IMG_4938.jpeg.asset.json";
import n8 from "@/assets/IMG_4937.jpeg.asset.json";
import n9 from "@/assets/IMG_4935.jpeg.asset.json";
import n10 from "@/assets/IMG_4936.jpeg.asset.json";
import h1 from "@/assets/20201125_125240.jpeg.asset.json";
import h2 from "@/assets/20201125_125246.jpeg.asset.json";
import h3 from "@/assets/20201105_221450.jpeg.asset.json";
import h4 from "@/assets/20190331_094817.jpeg.asset.json";
import h5 from "@/assets/20201126_145942.jpeg.asset.json";
import h6 from "@/assets/20201212_082846.jpeg.asset.json";

const photos = [
  { src: p1.url, alt: "Elegant white & green draped tent setup" },
  { src: p2.url, alt: "Green and white draped tent interior with banquet tables" },
  { src: p7.url, alt: "Rows of white chairs with tents for outdoor ceremony" },
  { src: p6.url, alt: "Banquet hall with round tables, black linens and marquee letters" },
  { src: p5.url, alt: "40th birthday marquee numbers with black, gold and green balloon arch" },
  { src: p3.url, alt: "18th birthday gold backdrop with marquee numbers" },
  { src: p9.url, alt: "LED cocktail tables and heaters in a backyard at night" },
  { src: p8.url, alt: "Row of white canopies with tables and chairs" },
  { src: p4.url, alt: "White party tent set up in a driveway" },
  { src: m8.url, alt: "Giant illuminated ASHLEY marquee letters in a ballroom" },
  { src: m7.url, alt: "Light-up XV marquee letters with pink floral quinceañera backdrop" },
  { src: m9.url, alt: "XV marquee letters in front of a pink draped floral arch" },
  { src: m4.url, alt: "J & V wedding marquee letters with white balloon garland and Mr & Mrs neon sign" },
  { src: m5.url, alt: "Illuminated J & V marquee letters beside a white arch backdrop" },
  { src: m3.url, alt: "GIO 18 marquee letters with casino-themed backdrop and red and black balloons" },
  { src: m2.url, alt: "Marquee number 18 with gold shimmer wall and black and gold balloon arch" },
  { src: m1.url, alt: "Large white marquee number 50 outdoors by palm trees" },
  { src: m6.url, alt: "Light-up 2026 marquee numbers with Happy New Year backdrop" },
  { src: w1.url, alt: "Red and grey inflatable water slide with splash pool" },
  { src: w2.url, alt: "Blue marble inflatable water slide with splash pool" },
  { src: w3.url, alt: "Yellow, red and green marble water slide with splash pool" },
  { src: w4.url, alt: "Tropical palm tree inflatable water slide" },
  { src: w5.url, alt: "Rainbow marble water slide with large splash pool" },
  { src: w6.url, alt: "Blue backyard water slide set up on grass" },
  { src: w7.url, alt: "Castle bounce house combo with slide and splash pool" },
  { src: w8.url, alt: "Classic multicolor castle bounce house on grass" },
  { src: w9.url, alt: "Multicolor castle jumper with entry step" },
  { src: t1.url, alt: "20x20 white frame tent set up in a driveway" },
  { src: t2.url, alt: "White frame tent with patio heaters and a table" },
  { src: t3.url, alt: "Black, grey and white draped tent ceiling with string lights" },
  { src: t4.url, alt: "Draped tent with black and white entry curtains on grass" },
  { src: t5.url, alt: "White 10x10 pop-up canopies in a parking lot" },
  { src: t6.url, alt: "Row of three white pop-up canopies outside a building" },
  { src: t7.url, alt: "Double slushy and margarita machine" },
  { src: t8.url, alt: "Slushy machine on a rolling cart at an event" },
  { src: t9.url, alt: "Long white tent with sidewalls and tables in a parking lot" },
  { src: t10.url, alt: "Extra-long white tent with clear window sidewalls" },
  { src: t11.url, alt: "20x20 white canopy tent with sidewalls on a patio" },
  { src: t12.url, alt: "White canopy tent with string lights in a backyard" },
  { src: n1.url, alt: "Pink and white draped tent with string lights in a backyard" },
  { src: n2.url, alt: "Black and white draped tent with 22 marquee numbers and balloon arch" },
  { src: n3.url, alt: "Blue and white draped tent ceiling with turf flooring" },
  { src: n4.url, alt: "Blue and white draped canopy over a parking area at night" },
  { src: n5.url, alt: "White canopy tents with tables and chairs at an outdoor event" },
  { src: n6.url, alt: "White tent with sidewalls and string lights at night" },
  { src: n7.url, alt: "Long white canopy tent with sidewalls on a driveway at night" },
  { src: n8.url, alt: "Pink and blue castle bounce house in a driveway" },
  { src: n9.url, alt: "Pink and blue princess castle jumper on a tarp" },
  { src: n10.url, alt: "Blue inflatable water slide with splash pool" },
  { src: h1.url, alt: "Three pyramid flame patio heaters in a backyard" },
  { src: h2.url, alt: "Stainless steel pyramid patio heaters with visible flame" },
  { src: h3.url, alt: "Row of lit mushroom patio heaters at night" },
  { src: h4.url, alt: "Standing patio heater under a covered patio with birthday banner" },
  { src: h5.url, alt: "Patio heater next to a set dining table outdoors" },
  { src: h6.url, alt: "Champion portable generators with extension cords" },
];



export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | New Era Party & Event Rentals" },
      { name: "description", content: "See real events we've helped create in Los Angeles — weddings, quinceañeras, birthdays and more." },
      { property: "og:title", content: "Event Photo Gallery" },
      { property: "og:description", content: "Real events by New Era Party & Event Rentals." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="text-xs tracking-widest uppercase text-primary">{t("Gallery", "Galería")}</div>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold max-w-3xl">
          {t("A glimpse of our", "Un vistazo a nuestros")} <span className="text-gradient-gold">{t("favorite moments", "momentos favoritos")}</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <img src={p.src} alt={p.alt} className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 0 ? "h-full md:h-[560px]" : "h-64"}`} loading="lazy" width={1200} height={900} />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-5 right-5 p-2 text-foreground" aria-label="Close">
            <X className="w-7 h-7" />
          </button>
          <img src={photos[open].src} alt={photos[open].alt} className="max-h-[90vh] max-w-full rounded-lg" />
        </div>
      )}
    </Layout>
  );
}
