export const site = {
  name: "Pollinators Beekeeping and Apitherapy",
  shortName: "Pollinators",
  shopName: "Pollinators",
  tagline: "Beekeeping & Apitherapy - pure honey, bee wellness, and apiary care.",
  location: "Ruiru, Kiambu County, Kenya",
  phoneDisplay: "+254 712 345 678",
  phoneTel: "+254712345678",
  whatsapp: "254712345678",
  email: "hello@pollinators.ke",
} as const;

export const productCategories = [
  { id: "all", label: "Featured Products" },
  { id: "honey", label: "Best Sellers" },
  { id: "skincare", label: "New Products" },
] as const;

export type ProductCategoryId = (typeof productCategories)[number]["id"];

export const products = [
  {
    name: "Raw Multifloral Honey",
    category: "honey" as const,
    description:
      "Unheated honey from our Ruiru apiaries - floral, full-bodied, and packed straight from the comb.",
    sizes: "250g · 500g · 1kg",
    price: "KSh 850",
    compareAt: "KSh 1,100",
    image: "/images/honey.jpg",
    alt: "Glass jars of golden honey",
    featured: true,
    sale: true,
  },
  {
    name: "Beeswax Skincare",
    category: "skincare" as const,
    description:
      "Hand-poured balms that soothe dry skin with beeswax, honey, and plant oils.",
    sizes: "30ml · 50ml",
    price: "KSh 650",
    compareAt: "KSh 800",
    image: "/images/beeswax.jpg",
    alt: "Beeswax skincare balm",
    featured: true,
    sale: true,
  },
  {
    name: "Propolis Tincture",
    category: "honey" as const,
    description:
      "Resinous bee propolis in a simple tincture for daily immune and throat support.",
    sizes: "30ml · 50ml",
    price: "KSh 1,200",
    compareAt: null,
    image: "/images/propolis.jpg",
    alt: "Propolis and honeycomb",
    featured: true,
    sale: false,
  },
  {
    name: "Honey Shampoo",
    category: "skincare" as const,
    description:
      "A gentle cleanse with honey and botanicals - soft hair without harsh detergents.",
    sizes: "250ml · 500ml",
    price: "KSh 750",
    compareAt: "KSh 900",
    image: "/images/shampoo.jpg",
    alt: "Natural shampoo bottles",
    featured: true,
    sale: true,
  },
  {
    name: "Beeswax Soap",
    category: "skincare" as const,
    description:
      "Cold-process bars enriched with beeswax and honey for everyday washing.",
    sizes: "100g bar",
    price: "KSh 350",
    compareAt: null,
    image: "/images/soap.jpg",
    alt: "Handmade natural soap bars",
    featured: false,
    sale: false,
  },
  {
    name: "Honey Granola",
    category: "honey" as const,
    description:
      "Crunchy clusters roasted with our honey - breakfast from the hive.",
    sizes: "400g · 800g",
    price: "KSh 980",
    compareAt: "KSh 1,150",
    image: "/images/granola.jpg",
    alt: "Honey granola in a bowl",
    featured: false,
    sale: true,
  },
] as const;

export const honeyFeatures = [
  {
    place: "leftTop" as const,
    lead: "We Collect The Product",
    detail: "- from our own apiaries and trusted partner keepers nearby.",
  },
  {
    place: "leftBottom" as const,
    lead: "We Process Carefully",
    detail: "- gentle extraction that protects enzymes and flavour.",
  },
  {
    place: "top" as const,
    lead: "We Keep It Pure",
    detail: "- no additives, tested for quality before packing.",
  },
  {
    place: "bottom" as const,
    lead: "We Share Locally",
    detail: "- hive-to-home delivery  .",
  },
] as const;

export const testimonials = [
  {
    name: "John Duff",
    role: "Local Customer",
    quote:
      "The multifloral honey tastes like the flowers around Ruiru - rich, clean, and never overpowering. Pollinators has become our family’s go-to jar.",
    image: "/images/about-bees.jpg",
  },
  {
    name: "Amina Wanjiru",
    role: "Apiary Visitor",
    quote:
      "We booked an apitourism visit and left with fresh honey and a real respect for the bees. Warm hosts and honest craft.",
    image: "/images/service-apitourism.jpg",
  },
  {
    name: "David Otieno",
    role: "Farm Partner",
    quote:
      "Their pollination service lifted our orchard yields. Professional keepers who care about both crops and colonies.",
    image: "/images/service-pollination.jpg",
  },
] as const;

export const newsPosts = [
  {
    title: "Why raw honey tastes different every season",
    excerpt:
      "Floral forage shifts with the rains - here’s what that means in your jar.",
    image: "/images/honey.jpg",
    alt: "Golden honey in glass jars",
  },
  {
    title: "A morning among the Ruiru hives",
    excerpt:
      "Walk the apiary with us: inspections, smoke, and the quiet of working bees.",
    image: "/images/hero-apiary.jpg",
    alt: "Beehives in an apiary meadow",
  },
  {
    title: "Apitherapy basics for everyday wellness",
    excerpt:
      "Honey, propolis, and beeswax - simple ways Kenyan families use bee products.",
    image: "/images/propolis.jpg",
    alt: "Propolis near honeycomb",
  },
] as const;

export const services = [
  {
    name: "Apitourism",
    image: "/images/service-apitourism.jpg",
    alt: "Beekeeper tending a hive among garden flowers",
  },
  {
    name: "Inspection",
    image: "/images/service-inspection.jpg",
    alt: "Beekeeper examining a honeycomb frame covered in bees",
  },
  {
    name: "Bee removal / relocation",
    image: "/images/service-removal.jpg",
    alt: "Beekeeper handling a frame dense with honeybees",
  },
  {
    name: "Training",
    image: "/images/service-harvest.jpg",
    alt: "Group of trainees in bee suits working at a hive",
  },
  {
    name: "Bee hive installation",
    image: "/images/service-installation.jpg",
    alt: "Painted wooden hives set in a meadow",
  },
] as const;
