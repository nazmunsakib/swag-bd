import type { ProductOptionBlock } from "./types";

export type Faq = {
  q: string;
  a: string;
};

export type CustomProductDetail = {
  styles: { name: string; description: string }[];
  options: ProductOptionBlock[];
  faqs: Faq[];
};

export const customProductDetails: Record<string, CustomProductDetail> = {
  "t-shirts": {
    styles: [
      { name: "Regular Fit", description: "The classic cut. Clean through the shoulders and body, the safest everyday choice." },
      { name: "Oversized", description: "Dropped shoulders and a boxier body. The defining silhouette of modern streetwear." },
      { name: "Premium", description: "Heavier fabric and a more tailored cut for a polished, structured look." },
      { name: "Sports", description: "Breathable performance fabric with a closer athletic fit." },
      { name: "Event", description: "Volume-friendly cuts built for fests, conferences and campaigns." },
    ],
    options: [
      { label: "Fabric", items: ["180 GSM cotton, lightweight and airy", "220 GSM cotton, the everyday standard", "260 GSM heavyweight, structured and premium"] },
      { label: "Fit", items: ["Regular", "Oversized", "Premium", "Sports", "Event"] },
      { label: "Sizes", items: ["S, M, L, XL, XXL", "Oversized runs also in 2XL and 3XL"] },
      { label: "Printing", items: ["Screen printing for solid colours and volumes", "Direct to garment for full-colour artwork", "Embroidery for logos and monograms"] },
      { label: "Colours", items: ["Off-white, sand, olive, charcoal, black and navy", "Custom pantone matching on request"] },
      { label: "Minimum order", items: ["From a single piece for personal projects", "Volume pricing from 25 pieces"] },
    ],
    faqs: [
      { q: "Can I order a single custom T-shirt?", a: "Yes. Personal orders start at a single piece, though volume pricing improves from around 25 pieces." },
      { q: "Which printing method should I choose?", a: "Solid one or two colour designs suit screen printing. Detailed or full-colour artwork suits direct to garment. Embroidery works best for small logos." },
      { q: "How do I send my design?", a: "Share your artwork in PNG, JPG, AI or PDF during the quote request. If you only have an idea, describe it and our team will help." },
      { q: "How long does production take?", a: "Standard orders take 5 to 7 working days after design approval. Rush production is available for events with a confirmed deadline." },
    ],
  },
  "hoodies": {
    styles: [
      { name: "Boxy", description: "A cropped, boxy body with a roomy hood. The streetwear silhouette." },
      { name: "Classic", description: "A relaxed, everyday fit with a comfortable hood and a clean hem." },
      { name: "Zip", description: "Full-zip front for easier layering and campus wear." },
    ],
    options: [
      { label: "Fabric", items: ["300 GSM fleece, light winter weight", "400 GSM heavyweight fleece, structured and warm"] },
      { label: "Fit", items: ["Boxy", "Classic", "Zip"] },
      { label: "Sizes", items: ["S to XXL, with oversized runs to 3XL"] },
      { label: "Printing", items: ["Screen printing for solid designs", "Embroidery for chest and back logos", "Applied patches for custom marks"] },
      { label: "Colours", items: ["Charcoal, black, olive, burgundy, sand and navy"] },
      { label: "Minimum order", items: ["Single-piece personal orders", "Team and brand pricing from 20 pieces"] },
    ],
    faqs: [
      { q: "Is a hoodie practical for the Dhaka winter?", a: "Yes, for the roughly two-month winter window. A 300 to 400 GSM fleece hoodie is the right weight for evening wear in January and February." },
      { q: "Can I mix colours in one order?", a: "Yes. You can split an order across colourways, which is common for teams and campuses." },
      { q: "Do you offer embroidery on hoodies?", a: "Yes, embroidery works well on the chest and back and holds up better to washing than print on heavyweight fleece." },
    ],
  },
  "caps": {
    styles: [
      { name: "Six-Panel", description: "The classic structured cap with a flat or curved brim." },
      { name: "Dad Cap", description: "An unstructured, relaxed cap with a pre-curved brim." },
      { name: "Trucker", description: "A breathable mesh-back cap for events and outdoor runs." },
    ],
    options: [
      { label: "Construction", items: ["Structured six-panel", "Unstructured dad cap", "Trucker with mesh back"] },
      { label: "Embroidery", items: ["Front logo, up to 4 inches", "Back text", "Side placement"] },
      { label: "Closure", items: ["Adjustable metal clasp", "Strap back"] },
      { label: "Colours", items: ["Black, charcoal, olive, navy, sand and off-white"] },
      { label: "Minimum order", items: ["From 10 caps for giveaways and teams"] },
    ],
    faqs: [
      { q: "Do caps need a minimum quantity?", a: "Yes, custom caps start at 10 pieces because embroidery setup is involved." },
      { q: "Can I provide my own cap design?", a: "You provide the logo or text. We handle placement, sizing and stitch colour so it looks right at cap scale." },
      { q: "How durable is the embroidery?", a: "We use wash-tested polyester thread that holds up to daily wear and repeated washing." },
    ],
  },
  "mugs": {
    styles: [
      { name: "Standard", description: "The classic 300ml ceramic mug, the default for offices and giveaways." },
      { name: "Tall", description: "A taller 350ml mug for coffee runs and desk use." },
      { name: "Handleless", description: "A modern cylinder mug, printed edge to edge." },
    ],
    options: [
      { label: "Printing", items: ["Full-colour sublimation print", "Edge to edge wrap", "Inside print option"] },
      { label: "Sizes", items: ["Standard 300ml", "Tall 350ml"] },
      { label: "Colours", items: ["White ceramic as standard", "Black ceramic on request"] },
      { label: "Packaging", items: ["Bulk wrapped", "Individual gift boxes"] },
      { label: "Minimum order", items: ["From 20 mugs"] },
    ],
    faqs: [
      { q: "Are the prints dishwasher safe?", a: "Yes, the print is fused into the glaze during production, so it does not peel with normal washing." },
      { q: "Can you print all the way around the mug?", a: "Yes, we offer edge to edge wrap printing, which is popular for brand patterns and quotes." },
      { q: "Do you offer gift boxing?", a: "Yes, individual gift boxes are available, which is the common choice for corporate gifting." },
    ],
  },
  "bags": {
    styles: [
      { name: "Tote", description: "The everyday carry, printed or embroidered front and back." },
      { name: "Crossbody", description: "A compact shoulder bag for the commute and campus." },
      { name: "Backpack", description: "A daily backpack with internal pockets for laptops." },
    ],
    options: [
      { label: "Fabric", items: ["Treated cotton canvas, water resistant", "Nylon with sealed zips"] },
      { label: "Styles", items: ["Tote", "Crossbody", "Backpack"] },
      { label: "Printing", items: ["Screen print for bold marks", "Embroidery for logos", "Full-colour print for artwork"] },
      { label: "Colours", items: ["Sand, black, olive, natural and navy"] },
      { label: "Minimum order", items: ["From 10 bags"] },
    ],
    faqs: [
      { q: "Will the bags survive the monsoon?", a: "The treated canvas is water resistant for light rain and commuting. For the wettest weeks we recommend the nylon styles with sealed zips." },
      { q: "Can a tote hold a laptop?", a: "Yes, the standard tote carries up to a 14-inch laptop, and the backpack has a dedicated padded sleeve." },
      { q: "Do you offer mixed bag orders?", a: "Yes, you can combine totes, crossbodies and backpacks in one run for event kits." },
    ],
  },
  "wristbands": {
    styles: [
      { name: "Silicone", description: "Debossed silicone bands in full colour, the event standard." },
      { name: "Woven", description: "Woven text bands for a softer, textile finish." },
      { name: "Tyvek", description: "Single-use entry bands for ticketed events." },
    ],
    options: [
      { label: "Material", items: ["Silicone, deboss or print", "Woven textile", "Tyvek entry bands"] },
      { label: "Sizes", items: ["Adult and youth", "Custom lengths on volume"] },
      { label: "Colours", items: ["Full colour matching from any brand colour"] },
      { label: "Text", items: ["Logos, hashtags and short messages", "Two-line options"] },
      { label: "Minimum order", items: ["From 50 bands"] },
    ],
    faqs: [
      { q: "What is the fastest wristband option?", a: "Silicone deboss bands are the quickest to produce and the most common for fests and campaigns." },
      { q: "Can wristbands work as entry passes?", a: "Yes, tyvek bands are designed for single-use entry, and silicone bands can carry printed codes or numbers for scanning." },
      { q: "Do you match brand colours exactly?", a: "Yes, we match to your brand colour code and can adjust tones during the digital preview." },
    ],
  },
  "merchandise": {
    styles: [
      { name: "Brand Launch Kit", description: "Coordinated tees, caps and totes for a product or brand launch." },
      { name: "Event Kit", description: "Tees, wristbands, mugs and bags as one production run for a fest or conference." },
      { name: "Creator Drop", description: "Small, consistent merch lines for creators and communities." },
    ],
    options: [
      { label: "Product mix", items: ["Apparel, headwear, drinkware, bags and accessories in one order"] },
      { label: "Design system", items: ["Unified artwork across every product type"] },
      { label: "Packaging", items: ["Standard or premium unboxing, tags and labels"] },
      { label: "Production", items: ["Single-point management, one quality standard"] },
      { label: "Delivery", items: ["Scheduled delivery across Bangladesh"] },
    ],
    faqs: [
      { q: "What does a full merchandise run include?", a: "We coordinate multiple product types, one design system, packaging and delivery under a single point of contact, which keeps quality consistent." },
      { q: "Can you work with our existing brand kit?", a: "Yes. Send your logo, brand colours and guidelines, and we apply them consistently across every product." },
      { q: "How far ahead should we book?", a: "For events and launches, we recommend starting the quote at least three weeks before your date. Rush runs are possible for smaller volumes." },
    ],
  },
  "polo-shirts": {
    styles: [
      { name: "Classic", description: "A relaxed, everyday collar polo for staff and events." },
      { name: "Slim", description: "A more tailored fit for office and front-of-house wear." },
    ],
    options: [
      { label: "Fabric", items: ["Breathable pique cotton", "Performance blends for warmer days"] },
      { label: "Fit", items: ["Classic", "Slim"] },
      { label: "Sizes", items: ["XS to XXL"] },
      { label: "Branding", items: ["Chest embroidery", "Print on chest, sleeve or back", "Combined logo and text"] },
      { label: "Colours", items: ["White, navy, black, charcoal and pastel options"] },
      { label: "Minimum order", items: ["Confirmed per quote, typically from team sizes"] },
    ],
    faqs: [
      { q: "Are polo shirts a good corporate uniform choice?", a: "Yes. A collar polo reads more professional than a T-shirt, which makes it the standard for staff, cafés and offices." },
      { q: "Should we embroider or print?", a: "For a small chest logo, embroidery lasts longer and looks cleaner on pique fabric. For larger artwork, printing is the practical choice." },
      { q: "Do you offer staff sizes across a team?", a: "Yes, we size each order to the team and confirm sizing before production." },
    ],
  },
  "jerseys": {
    styles: [
      { name: "Cricket", description: "Full-sleeve team jerseys with names, numbers and sponsor panels." },
      { name: "Football", description: "Short-sleeve match jerseys with bold team designs." },
      { name: "Practice", description: "Lightweight training tops for daily sessions." },
    ],
    options: [
      { label: "Fabric", items: ["Lightweight, sweat-wicking sport fabric"] },
      { label: "Styles", items: ["Cricket", "Football", "Practice"] },
      { label: "Personalisation", items: ["Player names", "Numbers", "Sponsor logos"] },
      { label: "Sizes", items: ["Youth to XXL"] },
      { label: "Colours", items: ["Full-colour team design and matching"] },
      { label: "Minimum order", items: ["Confirmed per team quote"] },
    ],
    faqs: [
      { q: "Can you print names and numbers on every jersey?", a: "Yes. Each jersey is personalised with the player name and number, which is standard for team orders." },
      { q: "Is the fabric suitable for Dhaka heat?", a: "We use lightweight, breathable sport fabric designed for hot-weather play." },
      { q: "Do you produce jerseys for inter-college tournaments?", a: "Yes, university and college teams are a large part of our jersey work. Ask about tournament deadlines." },
    ],
  },
  "jackets": {
    styles: [
      { name: "Bomber", description: "A structured, cropped bomber for brand drops and winter." },
      { name: "Windbreaker", description: "A lightweight, packable shell for events and teams." },
    ],
    options: [
      { label: "Styles", items: ["Bomber", "Windbreaker"] },
      { label: "Fabric", items: ["Structured shell, lined options for winter"] },
      { label: "Branding", items: ["Chest and sleeve embroidery", "Back print", "Woven labels"] },
      { label: "Sizes", items: ["S to XXL"] },
      { label: "Colours", items: ["Black, olive, navy, sand and charcoal"] },
      { label: "Minimum order", items: ["Confirmed per quote"] },
    ],
    faqs: [
      { q: "Are custom jackets seasonal?", a: "They work best for the winter window in Bangladesh and for events with air-conditioned venues." },
      { q: "Should we print or embroider?", a: "For a logo, embroidery wears best on structured shells. For large designs, print is the choice." },
      { q: "Can jackets match a full merch drop?", a: "Yes, we coordinate jackets with tees, hoodies and caps for a consistent brand run." },
    ],
  },
  "aprons": {
    styles: [
      { name: "Barista", description: "A waist or bib apron for cafés and coffee shops." },
      { name: "Workshop", description: "A durable work apron for makers and studios." },
      { name: "Waist", description: "A simple waist apron for kitchens and service." },
    ],
    options: [
      { label: "Styles", items: ["Barista", "Workshop", "Waist"] },
      { label: "Fabric", items: ["Cotton canvas", "Durable blends"] },
      { label: "Branding", items: ["Chest logo", "Pocket print", "Embroidered text"] },
      { label: "Colours", items: ["Natural, black, olive and navy"] },
      { label: "Minimum order", items: ["Confirmed per quote"] },
    ],
    faqs: [
      { q: "Can we put our café logo on the aprons?", a: "Yes, we print or embroider the chest and pocket, which is the standard placement for café branding." },
      { q: "Are the aprons machine washable?", a: "Yes, all our apron fabrics are machine washable and colour-fast." },
      { q: "Do you supply for restaurant chains?", a: "Yes, we handle staff-size orders for restaurants and cafés across Bangladesh." },
    ],
  },
  "water-bottles": {
    styles: [
      { name: "Aluminium", description: "Lightweight, everyday bottles with full-wrap print." },
      { name: "Steel", description: "Insulated bottles for hot and cold drinks." },
      { name: "Tritan", description: "Clear, BPA-free bottles for gym and campus." },
    ],
    options: [
      { label: "Materials", items: ["Aluminium", "Steel", "Tritan"] },
      { label: "Printing", items: ["Logo print", "Full wrap", "Engraving on steel"] },
      { label: "Cap styles", items: ["Sports cap", "Flip cap", "Standard cap"] },
      { label: "Colours", items: ["Full colour matching to your brand"] },
      { label: "Minimum order", items: ["Confirmed per quote"] },
    ],
    faqs: [
      { q: "Is a water bottle a good corporate gift?", a: "Yes, it is used daily and carries your brand everywhere, which makes it one of the highest-visibility promo items." },
      { q: "Can you print our full logo around the bottle?", a: "Yes, wrap printing covers the full surface, and steel bottles can also be engraved." },
      { q: "Do bottles come individually boxed?", a: "Yes, we can box each bottle for gifting, which is common for corporate and event kits." },
    ],
  },
  "tumblers": {
    styles: [
      { name: "Steel Tumbler", description: "Insulated steel with a lid, for office desks and travel." },
      { name: "Travel Tumbler", description: "A taller, lidded tumbler for commutes and longer use." },
    ],
    options: [
      { label: "Materials", items: ["Stainless steel, insulated"] },
      { label: "Branding", items: ["Print wrap", "Engraving", "Laser mark"] },
      { label: "Sizes", items: ["Standard and travel heights"] },
      { label: "Colours", items: ["Black, steel, sand and brand-matched"] },
      { label: "Packaging", items: ["Individual gift boxes"] },
      { label: "Minimum order", items: ["Confirmed per quote"] },
    ],
    faqs: [
      { q: "Do tumblers keep drinks hot or cold?", a: "Yes, the double-wall steel keeps hot drinks hot and cold drinks cold for hours." },
      { q: "What is the best branding method?", a: "For a premium feel, engraving or laser marking is cleanest. Wrap print works well for full-colour logos." },
      { q: "Are tumblers a good employee gift?", a: "They are one of the most popular employee appreciation gifts because they are used daily at desks." },
    ],
  },
  "keychains": {
    styles: [
      { name: "Acrylic", description: "Clear or coloured acrylic with full-colour print." },
      { name: "Metal", description: "Brushed or plated metal with logo engraving." },
      { name: "Photo", description: "Printed keychains with photos or artwork." },
    ],
    options: [
      { label: "Styles", items: ["Acrylic", "Metal", "Photo"] },
      { label: "Printing", items: ["Full-colour print", "Engraving", "Double-sided"] },
      { label: "Shapes", items: ["Custom die-cut shapes", "Standard shapes"] },
      { label: "Colours", items: ["Brand-matched"] },
      { label: "Minimum order", items: ["Confirmed per quote, small batches available"] },
    ],
    faqs: [
      { q: "What is the most popular keychain style?", a: "Acrylic keychains with full-colour print are the most popular for events and giveaways." },
      { q: "Can you make custom shapes?", a: "Yes, custom die-cut shapes are available for larger runs." },
      { q: "Do keychains work for university clubs?", a: "Yes, they are a low-cost, highly visible item that club members keep and use daily." },
    ],
  },
  "lanyards": {
    styles: [
      { name: "Printed", description: "Polyester lanyards printed in full colour." },
      { name: "Woven", description: "Durable woven lanyards with a clean finish." },
      { name: "Event", description: "Quick-turn lanyards with badge holders for conferences." },
    ],
    options: [
      { label: "Styles", items: ["Printed", "Woven", "Event"] },
      { label: "Attachments", items: ["J-hook", "Metal clasp", "Safety breakaway"] },
      { label: "Badge holders", items: ["Vertical and horizontal", "Dual holders"] },
      { label: "Colours", items: ["Full brand matching"] },
      { label: "Minimum order", items: ["Confirmed per quote"] },
    ],
    faqs: [
      { q: "Are lanyards good for conferences?", a: "Yes, printed lanyards with badge holders are the standard for conferences, exhibitions and ID systems." },
      { q: "Can you match our brand colours?", a: "Yes, we print or weave in exact brand colours." },
      { q: "Do you supply safety breakaways?", a: "Yes, safety breakaway attachments are available and recommended for staff and events." },
    ],
  },
  "badges": {
    styles: [
      { name: "Enamel Pin", description: "Hard or soft enamel pins with a polished finish." },
      { name: "Printed Badge", description: "Full-colour printed badges for events and ID." },
      { name: "Lapel Pin", description: "Small metal lapel pins for formal branding." },
    ],
    options: [
      { label: "Styles", items: ["Enamel pin", "Printed badge", "Lapel pin"] },
      { label: "Finish", items: ["Gloss", "Matte", "Metallic"] },
      { label: "Backings", items: ["Pin back", "Rubber clasp", "Badge clip"] },
      { label: "Colours", items: ["Pantone-matched enamel"] },
      { label: "Minimum order", items: ["Confirmed per quote"] },
    ],
    faqs: [
      { q: "What is the difference between a badge and a pin?", a: "Badges are usually printed or ID-style; pins are metal with enamel or plating. We make both." },
      { q: "Can enamel pins match our logo exactly?", a: "Yes, enamel is colour-matched to your brand and separated into the logo shapes." },
      { q: "Do you make event staff badges?", a: "Yes, printed badges with clips or lanyard slots are standard for event staff and volunteers." },
    ],
  },
  "phone-cases": {
    styles: [
      { name: "Slim Case", description: "A slim, protective shell printed edge to edge." },
      { name: "Photo Case", description: "A full-colour case with your photo or artwork." },
    ],
    options: [
      { label: "Models", items: ["Popular iPhone and Android models, confirmed per quote"] },
      { label: "Printing", items: ["Full-colour back print", "Edge to edge"] },
      { label: "Finish", items: ["Gloss", "Matte"] },
      { label: "Quantity", items: ["Single and bulk orders"] },
      { label: "Packaging", items: ["Gift wrap on request"] },
    ],
    faqs: [
      { q: "Which phone models do you cover?", a: "We cover the popular iPhone and Android models. Confirm your model during the quote and we will check it before production." },
      { q: "Can I print a photo on the case?", a: "Yes, photo cases with full-colour back printing are a popular personal gift." },
      { q: "Do cases come in bulk for events?", a: "Yes, we produce bulk runs for giveaways and brand drops." },
    ],
  },
  "stickers": {
    styles: [
      { name: "Vinyl", description: "Durable vinyl stickers for laptops, walls and packaging." },
      { name: "Die-Cut", description: "Custom-shaped stickers cut to your design." },
      { name: "Sheet", description: "Multi-sticker sheets for packaging and giveaways." },
    ],
    options: [
      { label: "Styles", items: ["Vinyl", "Die-cut", "Sheet"] },
      { label: "Finishes", items: ["Gloss", "Matte", "Clear"] },
      { label: "Shapes", items: ["Custom die-cut shapes", "Rectangle and circle"] },
      { label: "Colours", items: ["Full-colour print"] },
      { label: "Minimum order", items: ["Small batches available"] },
    ],
    faqs: [
      { q: "Are the stickers weather resistant?", a: "Vinyl stickers are weather resistant and suit laptops, bottles and outdoor use." },
      { q: "Can you make stickers in our logo shape?", a: "Yes, die-cut stickers are cut to your artwork shape." },
      { q: "Do you print stickers for packaging?", a: "Yes, packaging labels and branded stickers are a common business use." },
    ],
  },
  "stationery": {
    styles: [
      { name: "Notebook", description: "Hardcover and spiral notebooks with printed covers." },
      { name: "Diary", description: "Dated and undated diaries for corporate gifting." },
      { name: "Pen Set", description: "Branded pens and stationery sets for desk kits." },
    ],
    options: [
      { label: "Products", items: ["Notebooks", "Diaries", "Notepads", "Pens"] },
      { label: "Cover", items: ["Print", "Emboss", "Foil"] },
      { label: "Sizes", items: ["Pocket to A4"] },
      { label: "Colours", items: ["Brand-matched covers and accents"] },
      { label: "Packaging", items: ["Desk gift sets", "Bulk wrap"] },
      { label: "Minimum order", items: ["Confirmed per quote"] },
    ],
    faqs: [
      { q: "Do you make corporate notebook sets?", a: "Yes, we bundle notebooks, diaries and pens into branded desk kits for offices." },
      { q: "Can you emboss our logo on the cover?", a: "Yes, embossing and foil give a premium finish on hard covers." },
      { q: "Are these good university kit items?", a: "Yes, notebooks and pens are a staple of university welcome and orientation kits." },
    ],
  },
  "leather-wallets": {
    styles: [
      { name: "Bifold", description: "The classic folded wallet with card and cash space." },
      { name: "Card Wallet", description: "A slim front-pocket wallet with a small cash slot." },
      { name: "Money Clip", description: "A minimal clip for lighter daily carry." },
    ],
    options: [
      { label: "Leather", items: ["Full-grain", "PU leather"] },
      { label: "Styles", items: ["Bifold", "Card wallet", "Money clip"] },
      { label: "Personalisation", items: ["Engraving", "Deboss", "Monogram"] },
      { label: "Colours", items: ["Brown, tan, black and natural"] },
      { label: "Packaging", items: ["Gift boxes and pouches"] },
      { label: "Minimum order", items: ["Single-piece personal orders available"] },
    ],
    faqs: [
      { q: "Can I get a wallet with my name on it?", a: "Yes, names, initials and short messages are engraved or debossed into the leather." },
      { q: "Are these good corporate gifts?", a: "Yes, engraved leather wallets are a classic appreciation gift, especially with gift boxing." },
      { q: "Which leather should I choose?", a: "Full-grain ages beautifully with daily use. PU is a lighter, more affordable option." },
    ],
  },
  lockets: {
    styles: [
      { name: "Heart Pendant", description: "A heart-shaped pendant for photos and engravings." },
      { name: "Round Locket", description: "A classic round locket that opens for a photo." },
      { name: "Charm Pendant", description: "A smaller pendant for initials and small marks." },
    ],
    options: [
      { label: "Finishes", items: ["Gold tone", "Silver tone"] },
      { label: "Styles", items: ["Heart pendant", "Round locket", "Charm pendant"] },
      { label: "Personalisation", items: ["Photo", "Engraving", "Initials and dates"] },
      { label: "Chains", items: ["Adjustable lengths"] },
      { label: "Packaging", items: ["Keepsake gift boxes"] },
      { label: "Minimum order", items: ["Single-piece personal orders available"] },
    ],
    faqs: [
      { q: "Can you put a photo inside a locket?", a: "Yes, photo lockets are printed with your image, and some styles open to hold a small print." },
      { q: "Do lockets come with chains?", a: "Yes, adjustable chains are included or available on request." },
      { q: "Are these good gifts?", a: "Lockets are a thoughtful keepsake gift for couples, family and milestone occasions." },
    ],
  },
  rings: {
    styles: [
      { name: "Band", description: "A simple metal band, plain or engraved." },
      { name: "Signet", description: "A flat-faced ring for initials and small logos." },
    ],
    options: [
      { label: "Finishes", items: ["Steel", "Silver tone", "Gold tone"] },
      { label: "Styles", items: ["Band", "Signet"] },
      { label: "Engraving", items: ["Inside engraving", "Outside engraving", "Names and dates"] },
      { label: "Sizing", items: ["Confirmed per order"] },
      { label: "Packaging", items: ["Gift boxes"] },
      { label: "Minimum order", items: ["Single-piece personal orders available"] },
    ],
    faqs: [
      { q: "Can I get a ring engraved with a name or date?", a: "Yes, inside and outside engraving covers names, initials, dates and short messages." },
      { q: "How is ring size confirmed?", a: "We confirm sizing with you before production so the fit is right." },
      { q: "Do you make team or event rings?", a: "Yes, branded rings for teams, events and commemorative occasions are available." },
    ],
  },
  "custom-design": {
    styles: [
      { name: "New Design", description: "We design a logo or artwork from your idea and references." },
      { name: "Redesign", description: "We clean up and modernise your existing artwork." },
      { name: "Product Adaptation", description: "We adapt one design across your whole product range." },
    ],
    options: [
      { label: "Design", items: ["Logo design", "Artwork creation", "Typography and layout"] },
      { label: "Adaptation", items: ["Print-ready files", "Size and colour direction", "Mockups on your products"] },
      { label: "Revisions", items: ["Included revision rounds"] },
      { label: "Delivery", items: ["Print-ready files", "Preview mockups"] },
      { label: "Scope", items: ["Single design", "Full range design system"] },
      { label: "Minimum order", items: ["Confirmed per project"] },
    ],
    faqs: [
      { q: "I have an idea but no design. Can you help?", a: "Yes, describe your idea and share any references, and our design team will shape it into artwork." },
      { q: "Can you adapt my existing logo for printing?", a: "Yes, we prepare artwork for each product so the final print is sharp and correctly sized." },
      { q: "Do you show a preview before production?", a: "Always. You approve the design and a product mockup before anything is produced." },
    ],
  },
};