export type CatalogIcon = "jar" | "leaf" | "drop" | "cup" | "hive";

export type CatalogProduct = {
  id: string;
  name: string;
  /** One-line teaser shown on the card. */
  tagline: string;
  /** Longer intro shown at the top of the benefits modal. */
  summary: string;
  benefits: string[];
  /** Only set where the pack size is part of the product name. */
  size?: string;
  /** Optional - cards fall back to a branded placeholder when missing. */
  image?: string;
  alt?: string;
  /** Shown on the home page "Featured" row. */
  featured?: boolean;
};

export type CatalogCategory = {
  id: string;
  label: string;
  /** Script lead-in shown above the product name in the popup. */
  lead: string;
  blurb: string;
  icon: CatalogIcon;
  /** Photo that represents the whole category (shown on category tiles). */
  image: string;
  imageAlt: string;
  products: CatalogProduct[];
};

const img = (file: string) => `/images/products/${file}.jpg`;

/**
 * Hardcoded mock data for the product pages.
 * Product names come from the shop inventory; images are unbranded stand-ins
 * (swap the `image` path for a real photo of each pack when available).
 */
export const catalog: CatalogCategory[] = [
  /* ------------------------------------------------------------ */
  {
    id: "honey",
    lead: "Straight from the hive, our",
    label: "Honey & Hive",
    blurb: "Raw honey from our Ruiru apiaries, plus propolis, tinctures and beeswax remedies.",
    icon: "hive",
    image: "/images/honey.jpg",
    imageAlt: "A jar of raw golden honey with a wooden dipper",
    products: [
      {
        id: "honey",
        name: "Honey",
        tagline: "Pure raw honey, packed straight from the hive.",
        summary:
          "Unheated honey harvested from our own hives. Because it is gently strained rather than over-processed, it keeps its natural enzymes, pollen and flavour.",
        benefits: [
          "A natural energy source with no refined sugar or additives",
          "Soothes sore throats and calms dry coughs",
          "Contains natural enzymes and antioxidants that heavy heating destroys",
          "A healthier swap for sugar in tea, porridge and baking",
        ],
        image: "/images/honey.jpg",
        alt: "Glass jars of golden raw honey",
        featured: true,
      },
      
      {
        id: "honey-ginger",
        name: "Honey - Ginger",
        tagline: "Raw honey infused with warming ginger.",
        summary:
          "Our raw honey blended with ginger - take it by the spoonful, or stir it into hot water or tea.",
        benefits: [
          "Warms the body and eases a scratchy throat",
          "Ginger supports digestion and settles the stomach",
          "Lovely in hot water with lemon on cold mornings",
          "No artificial flavouring or colour",
        ],
        image: img("honey-ginger"),
        alt: "A jar of honey beside fresh ginger root",
        featured: true,
      },
      {
        id: "crude-honey",
        name: "Crude Honey",
        tagline: "Minimally strained, with traces of natural comb.",
        summary:
          "The closest thing to eating honey straight from the hive - lightly strained and left with traces of comb and pollen.",
        benefits: [
          "Rich in natural pollen and beeswax traces",
          "Deeper, more complex flavour than filtered honey",
          "Tiny comb pieces are a natural source of fibre",
          "Ideal on bread, yoghurt and cheese boards",
        ],
        image: "/images/honey-jar.png",
        alt: "A jar of honey beside fresh honeycomb",
      },
      {
        id: "propolis-suspension",
        name: "Propolis Suspension",
        tagline: "Daily immune and throat support from the hive.",
        summary:
          "Propolis is the resin bees collect to protect their hive. Our suspension is a simple way to bring it into your daily routine.",
        benefits: [
          "Traditionally used to support the immune system",
          "Helps soothe sore or irritated throats",
          "Rich in natural plant compounds called flavonoids",
          "Can be applied to minor skin irritations",
        ],
        image: "/images/propolis.jpg",
        alt: "Propolis resin beside honeycomb",
        featured: true,
      },
      {
        id: "tinctures",
        name: "Tinctures",
        tagline: "Concentrated herbal extracts, dosed by the drop.",
        summary:
          "Plant and hive extracts in dropper bottles. Alcohol draws out active compounds that water alone leaves behind. Ask our team which one fits your need.",
        benefits: [
          "Captures plant compounds that teas often miss",
          "Propolis tinctures support immunity and fight germs",
          "Herbal blends traditionally ease digestion, stress and sleep",
          "Rich in antioxidants for everyday protection",
          "Just a few drops a day, and it keeps for years",
        ],
        image: img("tinctures"),
        alt: "Amber dropper bottles surrounded by herbs",
      },
      {
        id: "adult-dawa",
        name: "Brees Adult Dawa - Concentrated",
        tagline: "A concentrated herbal formula made for adults.",
        summary:
          "A concentrated herbal preparation formulated for adult use. Use as directed on the label and ask our team about ingredients before you buy.",
        benefits: [
          "Concentrated formula - a small measure goes a long way",
          "Made for adult use",
          "Traditional herbal approach to everyday wellbeing",
          "Ask us for ingredients and how to take it",
        ],
        image: img("herbal-concentrate"),
        alt: "An amber bottle of concentrated herbal liquid with a measuring cup",
      },
      {
        id: "beeswax-aloe-cream",
        name: "Bees Wax Body Cream with Aloe",
        tagline: "Rich, soothing moisture for dry skin.",
        summary:
          "A cream of beeswax and aloe that sits gently on the skin and keeps moisture in.",
        benefits: [
          "Locks in moisture for hours without feeling greasy",
          "Aloe helps calm dry, tight or sun-exposed skin",
          "Beeswax forms a breathable protective layer",
          "Made without synthetic fragrance",
        ],
        image: img("beeswax-aloe-cream"),
        alt: "A jar of green-cream body cream with beeswax and aloe",
        featured: true,
      },
    ],
  },
  /* ------------------------------------------------------------ */
  {
    id: "skincare",
    lead: "Nourish your skin with our",
    label: "Skin, Hair & Body Care",
    blurb: "Gentle, nature-based cleansers, creams and oils for everyday care.",
    icon: "drop",
    image: img("body-cream"),
    imageAlt: "A jar of natural body cream with green leaves",
    products: [
      {
        id: "hair-shampoo",
        name: "Hair Shampoo",
        tagline: "A gentle cleanse for soft, shiny hair.",
        summary:
          "A mild shampoo with honey and botanicals that cleans without stripping the natural oils from hair and scalp.",
        benefits: [
          "Honey is a natural humectant that draws moisture into hair",
          "Gentle on dry and sensitive scalps",
          "Leaves hair soft and easy to comb",
          "Free from harsh detergents",
        ],
        image: "/images/shampoo.jpg",
        alt: "Bottles of natural shampoo",
        featured: true,
      },
      {
        id: "body-wash",
        name: "Body Wash",
        tagline: "Everyday cleansing that leaves skin soft.",
        summary:
          "A honey-based wash for a comfortable, non-drying shower for the whole family.",
        benefits: [
          "Cleanses without leaving skin tight or dry",
          "Honey helps skin hold on to its natural moisture",
          "Mild, natural scent that is not overpowering",
          "Suitable for the whole family",
        ],
        image: img("body-wash"),
        alt: "A pump bottle of golden body wash beside honeycomb",
      },
      {
        id: "body-cream",
        name: "Body Cream",
        tagline: "Light daily moisture for hands, legs and body.",
        summary:
          "A smooth, fast-absorbing cream for everyday moisture, after a bath or any time skin feels dry.",
        benefits: [
          "Absorbs quickly without a sticky finish",
          "Keeps skin soft and supple all day",
          "Good for hands, elbows, knees and heels",
          "Gentle enough for daily use",
        ],
        image: img("body-cream"),
        alt: "A jar of white body cream with a wooden spatula",
      },
      {
        id: "shea-butter-body-cream",
        name: "Shea Butter Body Cream",
        tagline: "Deep, nourishing moisture from shea butter.",
        summary:
          "A rich body cream made with shea butter - ideal for very dry skin and cooler or windy weather.",
        benefits: [
          "Shea butter is deeply moisturising and softening",
          "Helps protect skin from dryness and harsh weather",
          "Good for rough areas like elbows, knees and feet",
          "Naturally rich in vitamins A and E",
        ],
        image: img("shea-butter-cream"),
        alt: "A jar of shea butter cream with shea nuts",
      },
      {
        id: "lip-balm-strawberry",
        name: "Lip Balm - Strawberry",
        tagline: "Soft, protected lips with a hint of strawberry.",
        summary:
          "A beeswax lip balm lightly flavoured with strawberry to keep lips smooth through dry or windy weather.",
        benefits: [
          "Helps prevent and soothe chapped, cracked lips",
          "Beeswax forms a natural barrier against wind and dryness",
          "Light, fruity flavour",
          "Small enough for a pocket or handbag",
        ],
        image: img("lip-balm-strawberry"),
        alt: "Strawberry lip balm with strawberries and honeycomb",
      },
      {
        id: "lip-balm-vanilla",
        name: "Lip Balm - Vanilla",
        tagline: "Creamy vanilla comfort for dry lips.",
        summary:
          "A beeswax lip balm with a warm vanilla flavour - a soothing everyday balm for the whole family.",
        benefits: [
          "Helps prevent and soothe chapped, cracked lips",
          "Beeswax forms a natural barrier against wind and dryness",
          "Warm, subtle vanilla flavour",
          "Small enough for a pocket or handbag",
        ],
        image: img("lip-balm-vanilla"),
        alt: "Vanilla lip balm with vanilla pods and beeswax",
      },
      {
        id: "lemongrass-oil",
        name: "Lemongrass Essential Oil",
        tagline: "Pure, fresh-smelling oil for skin and home.",
        summary:
          "A natural lemongrass essential oil with a bright, clean aroma. Always dilute in a carrier oil before applying to skin.",
        benefits: [
          "Pampers skin when diluted in a carrier oil",
          "Skin hydrating and moisturising in blends",
          "Helps protect the skin barrier",
          "Fresh scent for diffusers and room sprays",
        ],
        image: img("lemongrass-oil"),
        alt: "A dropper bottle of lemongrass oil beside lemongrass stalks",
      },
    ],
  },
  /* ------------------------------------------------------------ */
  {
    id: "tea",
    lead: "Warm up your day with our",
    label: "Kenyan Tea & Coffee",
    blurb: "Premium Kenyan teas, masala blends and single-origin coffee.",
    icon: "cup",
    image: img("tea-black"),
    imageAlt: "A cup of Kenyan black tea beside loose tea leaves",
    products: [
      
      {
        id: "kanyenyaini-500",
        name: "Kanyenyaini 500g Premium Tea",
        tagline: "The larger pack of our premium black tea.",
        summary:
          "The same premium Kanyenyaini black tea in a bigger 500g pack - ideal for big families, offices and shops.",
        benefits: [
          "Great value for heavy tea drinkers and offices",
          "Strong, rich colour and flavour",
          "Natural source of antioxidants",
          "Perfect for chai when brewed with milk",
        ],
        size: "500g",
        image: img("tea-black"),
        alt: "A cup of black tea beside loose tea leaves",
      },
      {
        id: "masala-kanyenyaini",
        name: "Masala - Kanyenyaini",
        tagline: "Kanyenyaini tea blended with chai spices.",
        summary:
          "Premium black tea blended with masala spices - brew it with milk for a proper Kenyan chai.",
        benefits: [
          "Warming spices comfort the body on cool days",
          "Ready-spiced - no need to measure separate spices",
          "Bold flavour that stands up to milk and honey",
          "Made with locally grown tea",
        ],
        image: img("tea-masala"),
        alt: "A glass of masala chai with whole spices",
      },
      {
        id: "ginger-kanyenyaini",
        name: "Ginger - Kanyenyaini",
        tagline: "Kanyenyaini tea with a warming ginger kick.",
        summary:
          "Kanyenyaini black tea combined with ginger for a spicy, soothing cup.",
        benefits: [
          "Ginger supports digestion and eases nausea",
          "Warming on rainy or cold days",
          "A comforting cup when you feel a cold coming",
          "Made with locally grown tea",
        ],
        image: img("tea-ginger"),
        alt: "A cup of ginger tea with fresh ginger",
      },
      {
        id: "yellow-orthodox-tea",
        name: "Yellow Orthodox Tea",
        tagline: "A rare, delicate tea with a smooth golden cup.",
        summary:
          "Orthodox-processed yellow tea - gently handled whole leaves that brew a light, smooth, golden cup.",
        benefits: [
          "Naturally smooth with little bitterness",
          "Rich in antioxidants from minimally processed leaf",
          "Light on the stomach",
          "A special tea to share or gift",
        ],
        image: img("tea-yellow"),
        alt: "A glass cup of pale golden tea with whole tea leaves",
      },
      {
        id: "asis-green-tea",
        name: "Asis Green Tea",
        tagline: "Fresh, light green tea.",
        summary:
          "Asis green tea - lightly processed leaves that brew a clean, fresh, refreshing cup.",
        benefits: [
          "Rich in antioxidants",
          "Light, refreshing flavour with no added sugar needed",
          "Gentle caffeine for calm focus",
          "Enjoy it hot or chilled",
        ],
        image: img("tea-green"),
        alt: "A cup of green tea with dried tea leaves",
      },
      {
        id: "asis-masala-tea",
        name: "Asis Masala Tea",
        tagline: "Spiced chai blend for milk tea.",
        summary:
          "Asis masala tea combines black tea with warming spices - a ready-made chai blend.",
        benefits: [
          "Warming spices comfort the body",
          "Ready-spiced for easy, consistent chai",
          "Bold flavour that suits milk and honey",
          "A great afternoon pick-me-up",
        ],
        image: img("tea-masala"),
        alt: "A glass of masala chai with whole spices",
      },
      {
        id: "asis-hibiscus-tea",
        name: "Asis Hibiscus Tea",
        tagline: "Tart, ruby-red and refreshing.",
        summary:
          "Asis hibiscus tea brews a deep red, cranberry-like drink that is delicious warm or over ice.",
        benefits: [
          "Naturally rich in vitamin C and antioxidants",
          "Caffeine-free and refreshing when served cold",
          "Traditionally enjoyed to support healthy blood pressure",
          "Pairs well with honey and mint",
        ],
        image: img("tea-hibiscus"),
        alt: "A cup of red hibiscus tea with dried hibiscus petals",
      },
      {
        id: "thunguri-coffee",
        name: "Thunguri Coffee",
        tagline: "Kenyan coffee with rich, fruity depth.",
        summary:
          "Thunguri coffee - a Kenyan coffee with a full body and bright, fruity notes.",
        benefits: [
          "Full-bodied flavour with bright Kenyan acidity",
          "Natural source of antioxidants",
          "A reliable lift for the morning",
          "Supports Kenyan smallholder farmers",
        ],
        image: img("coffee"),
        alt: "A bag of coffee beside a cup and roasted coffee beans",
      },
    ],
  },
  /* ------------------------------------------------------------ */
  {
    id: "herbal",
    lead: "Nourish your body with our",
    label: "Herbal & Superfoods",
    blurb: "Caffeine-free herbal teas, moringa, and whole herbs, powders and seeds.",
    icon: "leaf",
    image: img("tea-herbal-mixed"),
    imageAlt: "Herbal tea with a bowl of dried leaves and flower petals",
    products: [
      {
        id: "winnies-mixed-herbal",
        name: "Winnie's - Mixed Herbal Tea",
        tagline: "A soothing blend of herbs and petals.",
        summary:
          "A mixed herbal tea of dried herbs and botanicals - a gentle, caffeine-free cup for any time of day.",
        benefits: [
          "Naturally caffeine-free - suitable for evenings",
          "A blend of herbs for a rounded, soothing flavour",
          "Great hot, or chilled with honey",
          "Contains no artificial flavours",
        ],
        image: img("tea-herbal-mixed"),
        alt: "A cup of herbal tea with a bowl of dried mixed herbs",
      },
      {
        id: "winnies-chamomile",
        name: "Winnie's - Chamomile Tea",
        tagline: "Calm, golden and gentle - a bedtime classic.",
        summary:
          "Dried chamomile flowers that brew a soft, floral, naturally calming cup.",
        benefits: [
          "Traditionally used to help you relax and unwind",
          "Popular as a bedtime tea",
          "Gentle on the stomach",
          "Naturally caffeine-free",
        ],
        image: img("tea-chamomile"),
        alt: "A cup of chamomile tea with chamomile flowers",
      },
      {
        id: "winnies-chamomile-lemongrass",
        name: "Winnie's - Chamomile & Lemon Grass",
        tagline: "Soft chamomile with a fresh lemony lift.",
        summary:
          "Chamomile blended with lemongrass for a calming cup with a bright citrus note.",
        benefits: [
          "Calming chamomile with refreshing lemongrass",
          "Naturally caffeine-free",
          "Soothing after meals",
          "Lovely served warm with a spoon of honey",
        ],
        image: img("tea-chamomile-lemongrass"),
        alt: "A cup of tea with chamomile flowers, lemongrass and lemon",
      },
      {
        id: "winnies-green-tea",
        name: "Winnie's - Green Tea (Organic)",
        tagline: "Organic green tea, fresh and light.",
        summary:
          "Organic green tea leaves for a clean, fresh and gently grassy cup.",
        benefits: [
          "Organically grown leaves",
          "Rich in antioxidants",
          "Light flavour that needs no sugar",
          "Gentle caffeine for calm focus",
        ],
        image: img("tea-green"),
        alt: "A cup of green tea with dried tea leaves",
      },
      {
        id: "winnies-wheat-grass",
        name: "Winnie's - Wheat Grass Tea",
        tagline: "A green, nutrient-rich infusion.",
        summary:
          "Wheat grass tea - a mild, grassy infusion often enjoyed as part of a green wellness routine.",
        benefits: [
          "Naturally rich in chlorophyll",
          "Light, grassy flavour that blends well with honey",
          "Caffeine-free",
          "Popular with people building a green wellness routine",
        ],
        image: img("tea-wheatgrass"),
        alt: "A cup of green tea beside fresh wheat grass and powder",
      },
      {
        id: "winnies-neem",
        name: "Winnie's - Neem Health Drink",
        tagline: "A traditional bitter-herb health drink.",
        summary:
          "A neem-based health drink, made from a plant used in traditional wellness for generations.",
        benefits: [
          "Neem has a long history of traditional use for wellbeing",
          "Taken as a daily health tonic by many families",
          "Naturally caffeine-free",
          "Add honey to soften the bitterness",
        ],
        image: img("neem-drink"),
        alt: "A glass of green neem drink with neem leaves",
      },
      {
        id: "pure-health-moringa",
        name: "W. Pure Health - Moringa Tea (Organic)",
        tagline: "Organic moringa leaf, mild and earthy.",
        summary:
          "Organic dried moringa leaves, gently processed so nothing is lost. Enjoy it hot or over ice.",
        benefits: [
          "Naturally caffeine-free for any time of day",
          "Source of vitamins, minerals and antioxidants",
          "Traditionally used to support energy and wellbeing",
          "Organic leaf with no additives",
        ],
        image: img("tea-moringa"),
        alt: "A cup of moringa tea with dried and fresh moringa leaves",
      },
      {
        id: "organic-moringa-tea",
        name: "Organic Moringa Tea",
        tagline: "Pure moringa leaf for everyday wellness.",
        summary:
          "Pure organic moringa leaf tea - an easy daily habit for plant-based nutrition.",
        benefits: [
          "Source of vitamins, minerals and antioxidants",
          "Naturally caffeine-free",
          "Mild, earthy flavour - lovely with honey and lemon",
          "Organic, with no additives",
        ],
        image: img("tea-moringa"),
        alt: "A cup of moringa tea with dried and fresh moringa leaves",
      },
      {
        id: "moringa-mans-botanical",
        name: "Moringa Man's Tea - Botanical",
        tagline: "Moringa blended with botanicals.",
        summary:
          "A botanical tea blend built around moringa, with flowers and herbs for added flavour and aroma.",
        benefits: [
          "Moringa blended with floral and herbal botanicals",
          "Fragrant, gently sweet cup",
          "Naturally caffeine-free",
          "Beautiful as a gift",
        ],
        image: img("tea-botanical"),
        alt: "A tin of botanical tea with a cup of pink tea",
      },
      {
        id: "ginger-tea",
        name: "Ginger Tea",
        tagline: "Zingy, golden and comforting.",
        summary:
          "Ginger tea made with real ginger for a warming, soothing cup - lovely with lemon and honey.",
        benefits: [
          "Ginger supports digestion and eases nausea",
          "Warming on cold or rainy days",
          "Great with a spoon of honey and a squeeze of lemon",
          "Naturally caffeine-free",
        ],
        image: img("tea-ginger"),
        alt: "A cup of ginger tea with lemon and fresh ginger root",
      },
      {
        id: "ashwagandha",
        name: "Ashwagandha",
        tagline: "A classic adaptogenic herb.",
        summary:
          "Ashwagandha, a traditional herb used for centuries in Ayurveda, in an easy-to-use form for drinks and recipes.",
        benefits: [
          "Traditionally used to help the body manage stress",
          "Popular in evening routines for relaxation",
          "Easy to stir into warm milk or smoothies",
          "Speak to a professional if pregnant or on medication",
        ],
        image: img("ashwagandha"),
        alt: "Ashwagandha roots and powder in a wooden bowl",
      },
      {
        id: "hibiscus-petals",
        name: "Hibiscus Petals",
        tagline: "Whole dried petals for tea and juice.",
        summary:
          "Whole dried hibiscus petals - steep them for a ruby-red, tangy drink or use in juices and syrups.",
        benefits: [
          "Naturally rich in vitamin C and antioxidants",
          "Caffeine-free and refreshing hot or cold",
          "Traditionally enjoyed to support healthy blood pressure",
          "Makes a vivid natural colouring for drinks",
        ],
        image: img("tea-hibiscus"),
        alt: "Dried hibiscus petals beside a cup of red tea",
      },
      {
        id: "hibiscus-powder",
        name: "Hibiscus Powder",
        tagline: "Finely ground hibiscus for drinks and recipes.",
        summary:
          "Finely ground hibiscus - dissolves fast into water, smoothies or baking and gives a vivid red colour.",
        benefits: [
          "Dissolves quickly - no steeping required",
          "Naturally rich in antioxidants",
          "Adds tang and colour to smoothies and bakes",
          "Also used in homemade skin and hair masks",
        ],
        image: img("hibiscus-powder"),
        alt: "A bowl of red hibiscus powder with petals and a hibiscus flower",
      },
      {
        id: "guava-powder",
        name: "Guava Powder",
        tagline: "Sweet-tangy fruit powder, easy to mix.",
        summary:
          "Guava fruit made into an easy powder - add it to porridge, smoothies or water for a fruity boost.",
        benefits: [
          "Naturally rich in vitamin C",
          "Convenient - no fresh fruit to peel or store",
          "Mixes into porridge, yoghurt and smoothies",
          "A tasty way to add fruit to the day",
        ],
        image: img("guava-powder"),
        alt: "A bowl of pink guava powder beside fresh guavas",
      },
      {
        id: "chia-seeds",
        name: "Chia Seeds",
        tagline: "Tiny seeds packed with omega-3 and fibre.",
        summary:
          "Clean, whole chia seeds to stir into smoothies, soak overnight, or sprinkle over porridge.",
        benefits: [
          "Plant-based source of omega-3 fatty acids",
          "High in fibre to support digestion",
          "Absorbs liquid to help you feel full",
          "Naturally gluten-free",
        ],
        image: img("chia-seeds"),
        alt: "A bowl of chia seeds and a glass of chia pudding with berries",
      },
    ],
  },
  /* ------------------------------------------------------------ */
  {
    id: "spices",
    lead: "Wholesome goodness, our",
    label: "Spices & Pantry",
    blurb: "Everyday spices, natural salt, nuts and wholesome kitchen staples.",
    icon: "jar",
    image: img("cinnamon-powder"),
    imageAlt: "A bowl of ground cinnamon beside cinnamon sticks",
    products: [
      {
        id: "cinnamon-powder",
        name: "Cinnamon Powder",
        tagline: "Warm, sweet spice for tea and baking.",
        summary:
          "Finely ground cinnamon - sprinkle it on porridge, into tea, baking or even a spoon of honey.",
        benefits: [
          "Adds natural sweetness without sugar",
          "Warm aroma lifts tea, porridge and baking",
          "Source of natural antioxidants",
          "Pairs perfectly with honey",
        ],
        image: img("cinnamon-powder"),
        alt: "A bowl of ground cinnamon beside cinnamon sticks",
      },
      {
        id: "curry-powder",
        name: "Curry Powder",
        tagline: "A golden blend for stews, rice and meat.",
        summary:
          "A balanced curry blend of turmeric, coriander, cumin and warming spices for everyday cooking.",
        benefits: [
          "Ready-mixed - one spoon seasons a whole pot",
          "Contains turmeric, a golden spice with natural antioxidants",
          "Adds depth to stews, rice, vegetables and meat",
          "Mild enough for the whole family",
        ],
        image: img("curry-powder"),
        alt: "A bowl of golden curry powder with whole spices",
      },
      {
        id: "ginger-masala",
        name: "Ginger Masala",
        tagline: "Chai and cooking spice mix with ginger.",
        summary:
          "A ground blend of ginger and warming masala spices - stir into tea, milk or cooking for instant aroma.",
        benefits: [
          "Makes spiced chai quick and easy",
          "Ginger supports digestion",
          "Also great in soups, stews and baking",
          "Warming spices comfort on cool days",
        ],
        image: img("ginger-masala"),
        alt: "A bowl of ginger masala spice mix with whole spices",
        featured: true,
      },
      {
        id: "himalayan-pink-salt",
        name: "Himalayan Pink Salt",
        tagline: "Mineral-rich, naturally pink rock salt.",
        summary:
          "Natural pink salt crystals with a mild flavour - use in a grinder or for finishing dishes.",
        benefits: [
          "Naturally unrefined, with trace minerals",
          "Mild, clean salty flavour",
          "Attractive finishing salt for the table",
          "Free from anti-caking agents",
        ],
        image: img("himalayan-salt"),
        alt: "A bowl of pink Himalayan salt crystals",
      },
      {
        id: "granola",
        name: "Granola",
        tagline: "Crunchy clusters roasted with our honey.",
        summary:
          "Oats, nuts and seeds slow-roasted with our own honey - a hive-to-bowl breakfast without refined sugar.",
        benefits: [
          "Wholegrain oats give steady, lasting energy",
          "Sweetened only with natural honey",
          "A good source of fibre, protein and healthy fats",
          "Great with milk, yoghurt, or straight from the bag",
        ],
        image: "/images/granola.jpg",
        alt: "Honey granola in a bowl",
        featured: true,
      },
      {
        id: "peanut-butter",
        name: "Peanut Butter",
        tagline: "Creamy, nutty and made from real peanuts.",
        summary:
          "Smooth peanut butter for toast, smoothies, porridge and baking.",
        benefits: [
          "Good source of plant protein and healthy fats",
          "Keeps you full between meals",
          "Delicious on bread, fruit and porridge",
          "Great alongside a drizzle of honey",
        ],
        image: img("peanut-butter"),
        alt: "A jar of peanut butter with bread and peanuts",
      },
      {
        id: "peanuts",
        name: "Peanuts",
        tagline: "Crunchy roasted peanuts for snacking.",
        summary:
          "Roasted peanuts - a satisfying, protein-rich snack for lunchboxes, the office and the road.",
        benefits: [
          "Protein-rich snack that keeps you going",
          "Source of healthy fats and fibre",
          "Easy to carry and store",
          "Good in stir-fries, salads and baking",
        ],
        image: img("peanuts"),
        alt: "A bowl of roasted peanuts",
      },
      {
        id: "cashew-nuts",
        name: "Cashew Nuts",
        tagline: "Creamy, buttery, naturally sweet nuts.",
        summary:
          "Whole cashew nuts for snacking, cooking and baking.",
        benefits: [
          "Source of healthy unsaturated fats",
          "Contains magnesium, zinc and copper",
          "Naturally creamy and slightly sweet",
          "Perfect in curries, salads and trail mix",
        ],
        image: img("cashew-nuts"),
        alt: "A bowl of whole cashew nuts",
      },
      
    ],
  },
];

/** Every product with the category it belongs to. */
export const allProducts = catalog.flatMap((category) =>
  category.products.map((product) => ({ ...product, category })),
);
