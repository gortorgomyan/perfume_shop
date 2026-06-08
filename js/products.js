/**
 * L'ESSENCE — Product catalog
 */
const PRODUCTS = [
  { id: "aura", name: "Aura", price: 220, image: "images/aura-main.jpg", gallery: ["images/aura-lifestyle-1.jpg", "images/aura-lifestyle-2.jpg"], storyImage: "images/aura-field.jpg", family: "oriental", collection: "signature", page: 1, desc: "A luminous composition of golden amber, sun-warmed hay, and soft musk — like the last light of day settling over an open field.", storyTitle: "The Story of Aura", story: ["Inspired by twilight over golden fields, Aura captures the warmth of fading sunlight and the calm that follows.", "The base lingers with amber, musk, and a whisper of vanilla — intimate, radiant, and unmistakably refined."], keywords: ["aura", "amber", "musk", "oriental", "golden"] },
  { id: "amber-sky", name: "Amber Sky", price: 185, image: "images/shop-4.jpg", gallery: ["images/product-amber.jpg", "images/shop-4.jpg"], storyImage: "images/curated-1.jpg", family: "woody", collection: "signature", page: 1, desc: "Warm amber resin and cedar unfold beneath a veil of incense — deep, resinous, and quietly commanding.", storyTitle: "The Story of Amber Sky", story: ["Amber Sky opens with bright bergamot before settling into a heart of labdanum and cedarwood.", "The dry-down is pure warmth: amber, benzoin, and a trace of vanilla."], keywords: ["amber", "cedar", "woody", "incense", "warm"] },
  { id: "rose-oud", name: "Rose & Oud", price: 210, image: "images/shop-5.jpg", gallery: ["images/product-rose.jpg", "images/shop-5.jpg"], storyImage: "images/curated-2.jpg", family: "floral", collection: "atelier", page: 1, desc: "Damask rose and rare oud intertwine — opulent, velvety, and unmistakably Eastern in spirit.", storyTitle: "The Story of Rose & Oud", story: ["Bulgarian rose absolute paired with aged oud.", "Saffron and patchouli deepen the heart; sandalwood and musk leave a lasting trail."], keywords: ["rose", "oud", "floral", "damask", "velvet"] },
  { id: "citrus-veil", name: "Citrus Veil", price: 195, image: "images/shop-2.jpg", gallery: ["images/curated-3.jpg", "images/shop-2.jpg"], storyImage: "images/curated-3.jpg", family: "fresh", collection: "limited", page: 1, desc: "Italian bergamot and neroli drift over white tea — luminous, airy, and effortlessly modern.", storyTitle: "The Story of Citrus Veil", story: ["Created for summer evenings, Citrus Veil balances sparkling top notes with a soft floral heart.", "White musk and cedar ground the composition without ever weighing it down."], keywords: ["citrus", "bergamot", "neroli", "fresh", "tea"] },
  { id: "noir-cedar", name: "Noir Cedar", price: 175, image: "images/shop-1.jpg", gallery: ["images/shop-1.jpg", "images/curated-1.jpg"], storyImage: "images/art-fragrance.jpg", family: "woody", collection: "atelier", page: 1, desc: "Black pepper and smoky cedar create a dark, refined silhouette for evening wear.", storyTitle: "The Story of Noir Cedar", story: ["Virginia cedar and Haitian vetiver, sharpened with black pepper and iris.", "Leather and tonka bean in the base lend depth without sweetness."], keywords: ["cedar", "noir", "woody", "pepper", "evening"] },
  { id: "velvet-dusk", name: "Velvet Dusk", price: 240, image: "images/shop-6.jpg", gallery: ["images/product-velvet.jpg", "images/shop-6.jpg"], storyImage: "images/hero.jpg", family: "oriental", collection: "limited", page: 1, desc: "Plum, iris, and dark vanilla melt into a plush, nocturnal bloom — intimate and unforgettable.", storyTitle: "The Story of Velvet Dusk", story: ["Plum liqueur, orris butter, and heliotrope for nights that stretch into morning.", "Vanilla absolute, benzoin, and soft leather in the base."], keywords: ["velvet", "dusk", "vanilla", "plum", "oriental", "night"] },
  { id: "golden-hour", name: "Golden Hour", price: 198, image: "images/product-amber.jpg", gallery: ["images/curated-1.jpg", "images/product-amber.jpg"], storyImage: "images/aura-field.jpg", family: "oriental", collection: "signature", page: 2, desc: "Honeyed florals and sun-drenched resins capture the fleeting warmth of late afternoon light.", storyTitle: "The Story of Golden Hour", story: ["Osmanthus and honey with jasmine and immortelle.", "Amber and tonka bean in the base glow softly on the skin."], keywords: ["golden", "honey", "floral", "amber", "afternoon"] },
  { id: "silk-moss", name: "Silk Moss", price: 168, image: "images/shop-3.jpg", gallery: ["images/shop-3.jpg", "images/curated-2.jpg"], storyImage: "images/art-fragrance.jpg", family: "fresh", collection: "atelier", page: 2, desc: "Green moss and fig leaf brushed with white musk — earthy, clean, and serenely understated.", storyTitle: "The Story of Silk Moss", story: ["Galbanum, fig, and oakmoss at its core.", "Sheer musk and soft woods keep the scent close to the skin."], keywords: ["moss", "green", "fig", "fresh", "earth"] },
  { id: "midnight-iris", name: "Midnight Iris", price: 225, image: "images/product-rose.jpg", gallery: ["images/product-rose.jpg", "images/curated-2.jpg"], storyImage: "images/curated-2.jpg", family: "floral", collection: "limited", page: 2, desc: "Orris root and violet leaf suspended in cool musk — powdery, elegant, and deeply feminine.", storyTitle: "The Story of Midnight Iris", story: ["Orris butter and violet, lifted by aldehydes and softened with heliotrope.", "Cashmere musk and sandalwood create a powdery dry-down."], keywords: ["iris", "violet", "floral", "powder", "midnight"] }
];

const ProductCatalog = {
  getAll() { return PRODUCTS; },
  getById(id) { return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0]; },
  getByPage(page) { return PRODUCTS.filter((p) => p.page === page); },
  search(query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.keywords.some((k) => k.includes(q) || q.includes(k)) ||
      p.family.includes(q) ||
      p.collection.includes(q)
    );
  },
  formatPrice(amount) { return "$" + amount.toFixed(2); },
};