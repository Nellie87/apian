export const site = {
  name: "Pollinators Beekeeping and Apitherapy",
  shortName: "Pollinators",
  shopName: "Pollinators",
  tagline: "Beekeeping & Apitherapy - pure honey, bee wellness, and apiary care.",
  location: "Ruiru, Kiambu County, Kenya",
  phoneDisplay: "+254 712 345 678",
  phoneTel: "+254712345678",
  whatsapp: "254712345678",
  email: "apiannaturals@gmail.com",
} as const;

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

export const services = [
  {
    name: "Apitourism",
    detail: "Guided apiary visits - meet the bees, taste fresh honey, and learn the craft.",
    image: "/images/service-siting.jpg",
    alt: "Rows of colourful wooden beehives along a sunlit forest path",
  },
  {
    name: "Inspection",
    detail: "Health checks, queen status, and colony advice from experienced keepers.",
    image: "/images/service-inspection-v2.jpg",
    alt: "Beekeeper holding a golden honeycomb frame covered in bees",
  },
  {
    name: "Bee removal / relocation",
    detail: "Safe capture and relocation of swarms for homes, farms, and workplaces.",
    image: "/images/service-removal-v2.jpg",
    alt: "Beekeeper moving a frame of honeybees into a wooden hive box",
  },
  {
    name: "Training",
    detail: "Hands-on beekeeping courses for beginners and farmers ready to grow.",
    image: "/images/service-inspection.jpg",
    alt: "Gloved hands lifting a hive frame covered in bees during a hands-on lesson",
  },
  {
    name: "Bee hive installation",
    detail: "Langstroth and top-bar hive setup, with starter colonies where needed.",
    image: "/images/service-installation-v2.jpg",
    alt: "Row of new wooden hives in a sunny yellow wildflower meadow",
  },
] as const;
