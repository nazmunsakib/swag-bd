import type { Article, Author } from "./types";
import { authors } from "./categories";

type AuthorKey = "rafiq" | "tasnia" | "farhan" | "priyanka";

const a = (key: AuthorKey): Author => authors[key];

export const articles: Article[] = [
  {
    slug: "how-to-choose-the-right-watch",
    title: "How to Choose the Right Watch",
    excerpt:
      "A watch is one of the few accessories you wear every single day. Here is a practical way to choose one that fits your wrist, your life and your budget.",
    category: "Watches",
    categorySlug: "watches",
    author: a("rafiq"),
    publishedAt: "2026-09-02",
    updatedAt: "2026-09-10",
    readingTime: 7,
    imageTone: "graphite",
    featured: true,
    popular: true,
    guideCategory: "Buying Guides",
    tags: ["watches", "buying guide", "beginner"],
    content: [
      {
        type: "p",
        text: "Most men buy their first watch the wrong way. They pick something that looks good in a photo, ignore the size, ignore the movement, and end up with a watch that sits awkwardly on the wrist. Choosing a watch is not complicated, but it does reward a little structure.",
      },
      { type: "h2", text: "Start with the size" },
      {
        type: "p",
        text: "Case diameter is the first number to understand. It is measured in millimetres across the case, not including the crown. For most Bangladeshi men with average wrists, a case between 38mm and 42mm is the safe zone. Below 38mm reads dressy and classic. Above 44mm reads sporty and chunky.",
      },
      {
        type: "p",
        text: "Lug to lug matters more than diameter. This is the distance between the two lugs, and it decides whether the watch overhangs your wrist. A simple rule: the lugs should not extend past the edges of your wrist when you look straight down.",
      },
      {
        type: "ul",
        items: [
          "38mm to 40mm: classic, suits dress shirts and slim wrists",
          "41mm to 43mm: versatile, the modern everyday size",
          "44mm and up: statement pieces, better on larger wrists",
        ],
      },
      { type: "h2", text: "Quartz or automatic?" },
      {
        type: "p",
        text: "Quartz watches run on a battery, keep near-perfect time and need almost no attention. Automatic watches are mechanical, powered by your wrist movement, and need servicing every few years. Neither is better. The right choice depends on what you want from the watch.",
      },
      {
        type: "p",
        text: "If this is your first watch or your only watch, a good quartz piece is the pragmatic choice. If you enjoy the craft, the sweeping second hand and the idea of a machine on your wrist, an automatic is worth the higher price and the occasional service bill.",
      },
      { type: "h2", text: "Match it to your life" },
      {
        type: "p",
        text: "Think about where the watch will actually be worn. A student in Dhaka will wear a watch to class, to cafes and out with friends, so a versatile steel or NATO-strap watch wins. Someone who wears suits regularly will want something slimmer that slides under a cuff. If you sweat in the gym or cycle through the rain, consider a watch with better water resistance.",
      },
      {
        type: "ul",
        items: [
          "Everyday wear: 40mm steel case, quartz or automatic, 50m water resistance",
          "Formal occasions: slim case, 38mm or under, leather strap",
          "Sports and travel: steel or nylon strap, 100m water resistance or more",
        ],
      },
      { type: "h2", text: "The budget reality" },
      {
        type: "p",
        text: "In Bangladesh, a reliable everyday watch starts around 2,000 to 3,000 taka for a decent quartz piece. A well-built automatic typically starts around 15,000 taka. Between 5,000 and 12,000 taka you can find excellent quartz watches with good finishing that will last years with a battery change every couple of years.",
      },
      { type: "quote", text: "A watch is not about the price on the dial. It is about the fact that you chose it, and you wear it every day." },
      { type: "h2", text: "The final checklist" },
      {
        type: "ol",
        items: [
          "Measure your wrist and pick a case size that sits comfortably",
          "Decide between quartz and automatic based on your priorities",
          "Match the strap material to how and where you will wear it",
          "Check water resistance against your actual activities",
          "Set a budget and treat watches above it as entertainment, not necessity",
        ],
      },
      {
        type: "p",
        text: "The right watch is the one you forget you are wearing until someone asks about it. Choose for your wrist, your life and your budget, and you cannot go wrong.",
      },
    ],
  },
  {
    slug: "how-to-choose-sunglasses-for-your-face-shape",
    title: "How to Choose Sunglasses for Your Face Shape",
    excerpt:
      "The right frames balance your face, the wrong ones fight it. Here is how to read your face shape and pick frames that actually suit you.",
    category: "Sunglasses",
    categorySlug: "sunglasses",
    author: a("farhan"),
    publishedAt: "2026-08-25",
    readingTime: 6,
    imageTone: "slate",
    featured: true,
    popular: true,
    guideCategory: "Buying Guides",
    tags: ["sunglasses", "face shape", "buying guide"],
    content: [
      {
        type: "p",
        text: "Sunglasses are the quickest way to change how your whole face reads. The secret is not the brand or the price tag. It is whether the frame works with the shape of your face. Get that right and even a simple pair looks intentional.",
      },
      { type: "h2", text: "First, find your face shape" },
      {
        type: "p",
        text: "Stand in front of a mirror, pull your hair back, and trace the outline of your face with a dry-erase marker or just study it closely. Compare it against the five common shapes below. Most faces are a mix, so go with whichever you resemble most.",
      },
      {
        type: "ul",
        items: [
          "Round: the width and length are similar, with softer jawlines",
          "Oval: balanced proportions, slightly longer than wide, a softly rounded jaw",
          "Square: a strong jawline, with the width roughly equal from forehead to jaw",
          "Heart: a wider forehead that narrows down to a pointed chin",
          "Oblong: longer than it is wide, with a straight cheek line",
        ],
      },
      { type: "h2", text: "The balancing rule" },
      {
        type: "p",
        text: "Sunglasses work when they create contrast with your face. If your face is round, choose angular frames. If your face is square, choose rounded frames. The goal is to balance, not to mirror your natural shape.",
      },
      { type: "h3", text: "For round faces" },
      {
        type: "p",
        text: "Choose rectangular or square frames with sharp angles. Wayfarer-style frames work well because their hard lines slim down a softer face. Avoid round and oversized frames, which make the face look rounder.",
      },
      { type: "h3", text: "For square faces" },
      {
        type: "p",
        text: "Go the opposite direction. Round frames, aviators and soft oval shapes soften a strong jaw. Oversized round frames are a reliable pick for square faces. Skip boxy rectangular frames, which add more corners to an already angular face.",
      },
      { type: "h3", text: "For oval faces" },
      {
        type: "p",
        text: "You have the most freedom. An oval face is balanced, so almost every frame works, from aviators to wayfarers to round lenses. Just keep the frames roughly proportional to your face, not too wide and not too small.",
      },
      { type: "h3", text: "For heart and oblong faces" },
      {
        type: "p",
        text: "Heart-shaped faces suit frames that are wider at the bottom, like aviators and round frames, which balance a wider forehead. Oblong faces look best with wider frames that break up the length, such as large square or round styles.",
      },
      { type: "h2", text: "Fit is the final test" },
      {
        type: "p",
        text: "Frames should sit on your nose without sliding, and your eyebrows should not be cut off by the top of the frame. The lenses should cover your eyes with a little room to spare on each side. If a frame is comfortable for an hour, it fits.",
      },
      {
        type: "p",
        text: "Dhaka summers are bright and the sun is intense most of the year, so a good pair of sunglasses is a practical purchase, not a fashion extra. Choose for your face, then add UV protection on top.",
      },
    ],
  },
  {
    slug: "how-to-build-a-minimal-wardrobe",
    title: "How to Build a Better Everyday Wardrobe",
    excerpt:
      "Stop buying pieces that never get worn. A minimal wardrobe is not about owning less for its own sake, it is about owning pieces that all work together.",
    category: "Men's Fashion",
    categorySlug: "style",
    author: a("tasnia"),
    publishedAt: "2026-08-18",
    updatedAt: "2026-09-05",
    readingTime: 8,
    imageTone: "sand",
    featured: true,
    guideCategory: "Men's Fashion",
    tags: ["wardrobe", "minimal", "basics"],
    content: [
      {
        type: "p",
        text: "Most wardrobes are full of clothes that never get worn. A shirt bought for a wedding, a jacket that does not fit quite right, five t-shirts in colours you never reach for. Building a better everyday wardrobe means clearing that noise and keeping only pieces that earn their place.",
      },
      { type: "h2", text: "Start with a colour foundation" },
      {
        type: "p",
        text: "A minimal wardrobe works because every piece can mix with every other piece. The easiest way to guarantee that is to build on neutral colours. Think off-white, sand, olive, navy, charcoal and black. When the base is neutral, the few colour pieces you own become the highlights.",
      },
      {
        type: "ul",
        items: [
          "Four to six t-shirts in off-white, sand, olive and black",
          "Two or three overshirts or jackets in neutral tones",
          "Two pairs of trousers: one chino, one denim",
          "A few plain caps, belts and bracelets that match everything",
        ],
      },
      { type: "h2", text: "Fit matters more than price" },
      {
        type: "p",
        text: "A 300-taka t-shirt that fits perfectly looks better than a 3,000-taka one that is too loose in the shoulders. Learn what your size actually is in each brand, because sizes vary wildly. Shoulders should hit where your shoulders end. Sleeves should end around mid-bicep. Trouser hems should break once, softly, on top of your shoes.",
      },
      { type: "h2", text: "The twenty-five piece test" },
      {
        type: "p",
        text: "If you could only keep twenty-five items of clothing and footwear, what would survive? That is your real wardrobe. Everything else is either duplicate, wrong season or just not your style. Write the list down before you buy anything else.",
      },
      {
        type: "ol",
        items: [
          "Audit what you own and pull out anything unworn in six months",
          "Identify the gaps: the missing colours and the missing pieces",
          "Replace the worst-worn essentials first, never impulse pieces",
          "Only buy something new if it matches at least three existing pieces",
        ],
      },
      { type: "quote", text: "A minimal wardrobe is not about owning less. It is about wearing more of what you own." },
      { type: "h2", text: "Consider Dhaka's climate" },
      {
        type: "p",
        text: "Bangladesh runs hot for most of the year, with monsoon humidity that punishes anything too heavy. Build around light cotton, linen and breathable blends. Save the heavy hoodies for the short winter and treat layering as a January to February activity only.",
      },
      {
        type: "p",
        text: "When you build around fit, colour and climate, a small wardrobe always looks more deliberate than a large one. That is the entire trick.",
      },
    ],
  },
  {
    slug: "watch-size-guide",
    title: "The Watch Size Guide: What Actually Fits",
    excerpt:
      "Case diameter, lug to lug, thickness, wrist measurement. Here is everything you need to size a watch correctly, in plain numbers.",
    category: "Watches",
    categorySlug: "watches",
    author: a("rafiq"),
    publishedAt: "2026-08-10",
    readingTime: 5,
    imageTone: "graphite",
    popular: true,
    guideCategory: "Buying Guides",
    tags: ["watches", "sizing", "guide"],
    content: [
      { type: "p", text: "A watch can be technically perfect and still look wrong if the size is off. Sizing a watch is simple once you understand three numbers: case diameter, lug to lug and thickness." },
      { type: "h2", text: "Measure your wrist first" },
      { type: "p", text: "Wrap a flexible tape around your wrist just behind the wrist bone. No tape? Use a strip of paper and mark it, then measure it against a ruler. Most men fall between 15cm and 19cm." },
      {
        type: "ul",
        items: [
          "15cm to 16cm wrist: 36mm to 40mm cases",
          "17cm to 18cm wrist: 39mm to 42mm cases",
          "19cm and above: 42mm to 46mm cases",
        ],
      },
      { type: "h2", text: "Why lug to lug beats diameter" },
      {
        type: "p",
        text: "Diameter describes the case only, but lugs are what actually touch your wrist. A 42mm watch with long lugs can wear bigger than a 44mm with short lugs. As a rule of thumb, your lug to lug should be under half your wrist circumference. On a 17cm wrist, that means roughly 45mm or less.",
      },
      { type: "h2", text: "Thickness and weight" },
      {
        type: "p",
        text: "Thick automatic watches can catch on shirt cuffs and feel heavy by evening. For everyday wear, aim for 10mm to 12mm thickness. If you want something that disappears under a cuff, look for 9mm and under, which usually means quartz or a slim dress watch.",
      },
      { type: "h2", text: "The mirror test" },
      {
        type: "p",
        text: "Finally, stand at arm's length in front of a mirror. In the reflection, the lugs should stay inside the width of your wrist. If the watch is so wide it covers the full flat of the wrist, size down. This test catches everything the numbers cannot.",
      },
    ],
  },
  {
    slug: "watch-types-quartz-vs-automatic",
    title: "Quartz vs Automatic: Which Movement Should You Buy?",
    excerpt:
      "Battery or mechanical? Both keep time, but they are very different watches. Here is how to decide based on how you live.",
    category: "Watches",
    categorySlug: "watches",
    author: a("rafiq"),
    publishedAt: "2026-07-28",
    readingTime: 5,
    imageTone: "slate",
    guideCategory: "Watches",
    tags: ["watches", "movement", "quartz", "automatic"],
    content: [
      { type: "p", text: "The quartz versus automatic debate is older than most watch buyers. Strip away the nostalgia and it is a practical decision about accuracy, maintenance and budget." },
      { type: "h2", text: "What each one is" },
      { type: "p", text: "A quartz watch is powered by a battery and regulated by a crystal that vibrates at a precise frequency. It is accurate to a few seconds a month. An automatic is a purely mechanical machine, wound by the motion of your wrist, accurate to a few seconds a day." },
      { type: "h2", text: "The real differences" },
      {
        type: "ul",
        items: [
          "Accuracy: quartz wins easily, but a good automatic is accurate enough",
          "Maintenance: quartz needs a battery every 1 to 3 years, automatic needs a service every 4 to 6 years",
          "Price: quartz starts far lower, automatic adds real cost",
          "Experience: an automatic has a sweeping second hand and a mechanical heartbeat",
        ],
      },
      { type: "h2", text: "Who should buy quartz" },
      { type: "p", text: "Buy quartz if this is your first watch, your only watch, or you want something you never have to think about. A quality quartz watch is the most reliable everyday object most people will ever own." },
      { type: "h2", text: "Who should buy automatic" },
      { type: "p", text: "Buy automatic if you enjoy the craft, the history and the ritual of winding and wearing a machine. Just understand the service cost and the accuracy limits before you commit. In Dhaka, servicing a good automatic usually means finding a reputable watchmaker, which is worth it for a piece you plan to keep." },
      { type: "quote", text: "Quartz is a tool. Automatic is a companion. Choose the one you will actually enjoy wearing." },
    ],
  },
  {
    slug: "how-to-match-a-watch-with-your-outfit",
    title: "How to Match a Watch With Your Outfit",
    excerpt:
      "Metal, leather, NATO or steel bracelet? The rules are looser than you think. Here is how to pair a watch with any outfit without overthinking it.",
    category: "Watches",
    categorySlug: "watches",
    author: a("rafiq"),
    publishedAt: "2026-07-15",
    readingTime: 6,
    imageTone: "graphite",
    guideCategory: "Outfit Ideas",
    tags: ["watches", "styling", "outfits"],
    content: [
      { type: "p", text: "The old rule was that the watch must match the occasion: dress watch with a suit, sport watch with casual. In practice, the more useful rule is simpler. Match the watch to the strap, and match the strap to the formality." },
      { type: "h2", text: "Metal bracelet for smart casual" },
      { type: "p", text: "A steel bracelet watch is the most versatile piece in most collections. It works with jeans and a t-shirt, with a chino and an oxford, and even under a suit if the case is slim enough. When in doubt, wear the steel watch." },
      { type: "h2", text: "Leather for dress occasions" },
      { type: "p", text: "A leather-strap watch reads formal and refined. Brown leather pairs with warm tones like sand, khaki and olive. Black leather pairs with black, charcoal and navy. Keep the leather thin for formal settings, and do not be afraid to swap a strap to change a watch entirely." },
      { type: "h2", text: "NATO and nylon for everyday" },
      { type: "p", text: "A NATO strap instantly makes any watch casual, durable and sweat friendly, which makes it ideal for Dhaka's heat. A watch that feels too formal on a bracelet can become your daily beater on a grey or olive NATO." },
      { type: "h2", text: "Match metal tones" },
      { type: "p", text: "Silver, gold and black hardware should echo each other. A steel watch with a silver buckle and silver rings works. If you wear gold jewellery, consider a watch with gold or two-tone accents so the metals do not compete." },
      {
        type: "ul",
        items: [
          "Suit and formal: slim case, leather strap, under 40mm",
          "Smart casual: steel bracelet, 38mm to 42mm",
          "Weekend and travel: NATO strap, tougher case",
        ],
      },
      { type: "p", text: "The best rule is the lightest one: if the watch feels natural when you glance at it, it is working. Nobody notices a watch that belongs." },
    ],
  },
  {
    slug: "essential-accessories-every-man-should-own",
    title: "Essential Accessories Every Man Should Own",
    excerpt:
      "You do not need ten accessories. You need five that work. Here is the short list of everyday pieces worth owning.",
    category: "Accessories",
    categorySlug: "accessories",
    author: a("farhan"),
    publishedAt: "2026-08-05",
    readingTime: 5,
    imageTone: "tan",
    popular: true,
    guideCategory: "Accessories",
    tags: ["accessories", "essentials", "basics"],
    content: [
      { type: "p", text: "Accessories are where most men either go overboard or do nothing at all. The honest sweet spot is a small set of pieces that get worn daily and quietly make every outfit look more finished." },
      { type: "h2", text: "A watch you can trust" },
      { type: "p", text: "One reliable watch, sized to your wrist, is the highest-value accessory a man can own. It reads as intentional in a way that jewellery rarely does. Start there before buying anything else." },
      { type: "h2", text: "A bracelet or wristband you actually like" },
      { type: "p", text: "A single leather or woven wristband adds warmth to a bare wrist and costs very little. Wear it on the opposite wrist from your watch. Keep it simple: one band, not three stacked together." },
      { type: "h2", text: "A cap that fits" },
      { type: "p", text: "Dhaka's sun makes a cap a practical essential. A plain cap in a neutral tone works with almost everything. Just check the fit: it should sit comfortably without squeezing, with the brim straight or slightly curved." },
      { type: "h2", text: "A decent wallet" },
      { type: "p", text: "A slim wallet that actually fits in your pocket beats a fat bifold every time. In Bangladesh, cash is still part of daily life, so choose a card wallet with a small cash pocket, not a money clip alone." },
      { type: "h2", text: "Sunglasses with UV protection" },
      { type: "p", text: "Sunglasses are the accessory that protects your eyes while they finish your outfit. Make sure the lenses block 100% of UV, because dark lenses without UV protection are worse than no lenses at all." },
      { type: "quote", text: "Five good accessories, worn daily, do more than a drawer full of pieces worn once a year." },
    ],
  },
  {
    slug: "oversized-vs-regular-fit-t-shirts",
    title: "Oversized vs Regular Fit T-Shirts: Which Suits You?",
    excerpt:
      "Oversized is everywhere, but it is not for everyone. Here is how to decide which cut fits your body and your style.",
    category: "Streetwear",
    categorySlug: "streetwear",
    author: a("priyanka"),
    publishedAt: "2026-08-12",
    readingTime: 6,
    imageTone: "olive",
    featured: true,
    popular: true,
    guideCategory: "Streetwear",
    tags: ["streetwear", "t-shirts", "fit"],
    content: [
      { type: "p", text: "The oversized t-shirt is the defining silhouette of modern streetwear. But a bad oversized fit looks like a mistake, not a style. The difference comes down to understanding proportion." },
      { type: "h2", text: "What regular fit actually means" },
      { type: "p", text: "A regular fit follows your body. The shoulders sit at your shoulder line, the body skims your torso and the hem falls around the top of the hips. It is clean, safe and universally flattering. If you are unsure, this is the fit to buy." },
      { type: "h2", text: "What oversized actually means" },
      { type: "p", text: "Oversized is a deliberate silhouette, not just a larger size. It usually means a dropped shoulder seam, a boxier body and longer sleeves and hem. Buying one size up from regular does not give you an oversized look, it gives you a saggy one. True oversized cuts come from garments designed that way." },
      { type: "h2", text: "Who wears it best" },
      {
        type: "p",
        text: "Oversized suits people who are taller or broader, because the extra fabric reads as intentional. On shorter frames, too much fabric can swallow the body. If you are shorter, keep the oversized t-shirt cropped or balance it with fitted trousers."
      },
      { type: "h2", text: "The practical rules" },
      {
        type: "ul",
        items: [
          "Keep the drop: oversized top means a slimmer bottom, never oversized on oversized",
          "Watch the hem: it should hit around mid-hip, not the middle of your thighs",
          "Check the fabric: heavyweight cotton keeps the shape, thin fabric hangs limp",
          "Test the shoulders: the seam should sit noticeably past your shoulder bone",
        ],
      },
      { type: "p", text: "In Dhaka, oversized tees have become a staple on university campuses and in the city's young creative scenes. Start with one heavyweight oversized tee in a neutral colour, pair it with slim or straight trousers, and see how the silhouette reads on you." },
    ],
  },
  {
    slug: "sunglasses-uv-protection-what-you-need-to-know",
    title: "Sunglasses and UV Protection: What You Need to Know",
    excerpt:
      "Dark lenses are not automatically safe lenses. Here is what UV protection actually means and how to check it before you buy.",
    category: "Sunglasses",
    categorySlug: "sunglasses",
    author: a("farhan"),
    publishedAt: "2026-07-20",
    readingTime: 5,
    imageTone: "slate",
    guideCategory: "Sunglasses",
    tags: ["sunglasses", "uv protection", "health"],
    content: [
      { type: "p", text: "Bangladesh gets intense sun for most of the year, so UV protection is not a nice-to-have. It is the main job of your sunglasses. The problem is that dark lenses can make you believe you are protected when you are not." },
      { type: "h2", text: "UV-A and UV-B in simple terms" },
      { type: "p", text: "UV-A and UV-B are the two bands of ultraviolet light that reach your eyes. Over years of exposure, both can damage the lens and the retina and speed up cataract formation. Sunglasses should block 100% of both, usually marked as UV400." },
      { type: "h2", text: "Why dark lenses can be dangerous" },
      { type: "p", text: "When lenses are dark, your pupils open wider to let in more light. If that dark lens does not block UV, you are letting more harmful radiation reach the back of your eye than you would with no sunglasses at all. This is why cheap, unmarked sunglasses are genuinely risky." },
      { type: "h2", text: "What to look for" },
      {
        type: "ul",
        items: [
          "UV400 marking, which blocks UV-A and UV-B up to 400 nanometres",
          "Polarised lenses for glare, especially while driving or near water",
          "A snug fit that prevents light entering around the edges",
          "Larger frames or wraparounds for broader coverage",
        ],
      },
      { type: "h2", text: "Polarisation is separate from UV" },
      { type: "p", text: "Polarised lenses reduce glare from flat surfaces like roads, water and windows. That is comfort and clarity, not protection. A lens can be polarised and still fail UV protection, so check both features independently." },
      { type: "p", text: "Buying from a reputable brand or a trusted local optical store in Bangladesh usually guarantees the UV rating. When in doubt, ask for the UV400 specification in writing before you pay." },
    ],
  },
  {
    slug: "streetwear-in-dhaka-how-to-wear-it",
    title: "Streetwear in Dhaka: How to Wear It Without Trying Too Hard",
    excerpt:
      "Streetwear in Dhaka is its own thing, a mix of global trends, local weather and campus culture. Here is how to make it work.",
    category: "Streetwear",
    categorySlug: "streetwear",
    author: a("priyanka"),
    publishedAt: "2026-07-08",
    readingTime: 7,
    imageTone: "burgundy",
    popular: true,
    guideCategory: "Streetwear",
    tags: ["streetwear", "dhaka", "outfits"],
    content: [
      { type: "p", text: "Streetwear in Dhaka has grown far past imported knockoffs. Today it runs from campus fashion in Dhanmondi to sneaker culture in Gulshan and the city's growing community of local brands. The best local fits are practical, because they have to survive the weather." },
      { type: "h2", text: "The Dhaka reality check" },
      { type: "p", text: "It is hot and humid for most of the year, and monsoon rain arrives without warning. Heavy hoodies, thick layers and suede anything are seasonal pieces, not daily wear. The smart Dhaka approach is streetwear on light cotton: oversized tees, breathable overshirts and shorts that read intentionally." },
      { type: "h2", text: "Build it on basics" },
      {
        type: "ul",
        items: [
          "Two heavyweight oversized tees in off-white and olive",
          "One breathable overshirt or shirt jacket for evening layering",
          "A cap, the single most reliable streetwear accessory in this weather",
          "Clean, simple sneakers in white or gum",
        ],
      },
      { type: "h2", text: "Local brands matter" },
      { type: "p", text: "Dhaka now has homegrown streetwear labels doing proper cuts and heavyweight fabric instead of copied prints. Supporting them is practical too: local sizing, local fabric choices and no import wait. A locally made oversized tee often outperforms an imported one for the same money." },
      { type: "h2", text: "Dress for the parts of Dhaka" },
      { type: "p", text: "Where you are going changes the fit. University campuses and cafes in Dhanmondi and Bashundhara are casual ground, oversized tees and sneakers work. Work and family occasions call for a cleaner version: fitted trousers, a structured tee, the cap off. Streetwear in Dhaka is less about one uniform and more about knowing which register to wear where." },
      { type: "quote", text: "The best streetwear looks effortless. That effortlessness is the work." },
    ],
  },
  {
    slug: "monsoon-accessories-for-dhaka",
    title: "Monsoon-Ready Accessories for Dhaka",
    excerpt:
      "The rain comes every year, and it ruins cheap accessories fast. Here is what survives a Dhaka monsoon and still looks right.",
    category: "Accessories",
    categorySlug: "accessories",
    author: a("farhan"),
    publishedAt: "2026-06-22",
    readingTime: 5,
    imageTone: "slate",
    guideCategory: "Accessories",
    tags: ["accessories", "monsoon", "dhaka"],
    content: [
      { type: "p", text: "Monsoon in Dhaka is a test of every accessory you own. Rain, humidity and waterlogged roads will beat the polish off the wrong pieces. The right ones sail through." },
      { type: "h2", text: "The watch survives the rain" },
      { type: "p", text: "Check your watch's water resistance before the season starts. For everyday rain exposure, look for at least 50m resistance, which covers splashes and a sudden downpour. Leather straps are the first casualty of monsoon, so switch to steel, nylon or a rubber strap for the season." },
      { type: "h2", text: "The monsoon wallet" },
      { type: "p", text: "A wallet carried in a back pocket is one rainstorm away from ruin. Move to a front-pocket card wallet or a small crossbody bag that sits against your body. Treated canvas and synthetic materials hold up better than cheap bonded leather." },
      { type: "h2", text: "Bags that take a beating" },
      {
        type: "ul",
        items: [
          "Waxed or treated canvas over raw leather",
          "Nylon with sealed zippers for the wettest weeks",
          "A crossbody or backpack over an open tote",
          "Everything inside in a dry bag or zip pouch",
        ],
      },
      { type: "h2", text: "Accessories that ignore the weather" },
      { type: "p", text: "Steel and titanium jewellery, paracord and woven bracelets, and nylon straps all shrug off water. If a piece cannot survive a single Dhaka downpour, it does not belong in your daily rotation." },
      { type: "p", text: "The monsoon version of your look is not a downgrade. It is an upgrade to pieces built for real life." },
    ],
  },
  {
    slug: "how-to-style-an-oversized-tee",
    title: "How to Style an Oversized T-Shirt (Without Looking Sloppy)",
    excerpt:
      "The oversized tee is easy to buy and easy to get wrong. These are the styling moves that make the silhouette work.",
    category: "Streetwear",
    categorySlug: "streetwear",
    author: a("priyanka"),
    publishedAt: "2026-06-10",
    readingTime: 6,
    imageTone: "olive",
    guideCategory: "Outfit Ideas",
    tags: ["streetwear", "t-shirts", "styling"],
    content: [
      { type: "p", text: "An oversized t-shirt is a proportion play, and proportion plays fail when you ignore the other half of the equation. The tee is loose, so everything around it needs to balance that looseness." },
      { type: "h2", text: "Rule one: slim the bottom" },
      { type: "p", text: "Pair the oversized top with a slim or straight leg. Joggers, slim denim or straight trousers all work. What does not work is oversized on oversized, a boxy tee over wide pants, which reads as two mistakes stacked." },
      { type: "h2", text: "Rule two: control the length" },
      { type: "p", text: "The hem matters more than the width. A true oversized tee can hang long, so tuck the front slightly or let it fall at mid-hip. If it reaches your thighs, size down or get it hemmed. Length is what separates intentional from sloppy." },
      { type: "h2", text: "Rule three: add structure" },
      {
        type: "ul",
        items: [
          "An overshirt or shirt jacket worn open restores shape",
          "A cap and clean sneakers anchor the look",
          "One accessory, like a wristband, keeps it from being plain",
          "Roll the sleeves once for a cleaner arm line",
        ],
      },
      { type: "h2", text: "When to skip it" },
      { type: "p", text: "Skip the oversized tee for anything formal or family-heavy. For work, interviews and weddings, a regular fit is the respectful choice. Oversized is a casual register, and part of dressing well is knowing when to leave a silhouette alone." },
    ],
  },
  {
    slug: "watches-under-10000-taka",
    title: "The Best Watch Styles Under 10,000 Taka",
    excerpt:
      "You do not need a fortune to own a proper watch. Here is what to look for at every level under ten thousand taka in Bangladesh.",
    category: "Watches",
    categorySlug: "watches",
    author: a("rafiq"),
    publishedAt: "2026-05-30",
    readingTime: 7,
    imageTone: "graphite",
    guideCategory: "Buying Guides",
    tags: ["watches", "budget", "bangladesh"],
    content: [
      { type: "p", text: "A good watch under 10,000 taka is absolutely realistic in Bangladesh. The mistake is assuming cheap means the same thing at every price point. Below 3,000 taka, 3,000 to 6,000 taka and 6,000 to 10,000 taka are three different markets with three different rules." },
      { type: "h2", text: "Under 3,000 taka: the entry level" },
      { type: "p", text: "At this level, focus on reliable quartz movements from established budget brands and on water resistance. Check the strap quality first, since straps fail before movements. A clean 38mm to 40mm steel or resin case with a simple dial is the sweet spot." },
      { type: "h2", text: "3,000 to 6,000 taka: the sweet spot" },
      {
        type: "p",
        text: "This is where finishing improves noticeably. You can find proper steel bracelets, sapphire or hardened mineral glass, and better lume. These watches wear well daily and hold up for years. For most men, this range is the value ceiling."
      },
      { type: "h2", text: "6,000 to 10,000 taka: getting serious" },
      { type: "p", text: "Here you start finding the best quartz watches available and some budget automatic options. Look for a solid end link bracelet, good case finishing and a brand with a real service network. If an automatic is your goal, this is where the realistic entry point lives." },
      { type: "h2", text: "Where to buy in Bangladesh" },
      {
        type: "ul",
        items: [
          "Authorised dealers in Dhaka and Chattogram for brand warranty",
          "Reputable online watch shops with verified stock",
          "Trusted watch communities for guidance before you buy",
          "Avoid unmarked imports with no UV or water resistance data",
        ],
      },
      { type: "p", text: "Keep the movement, the case and the strap in mind, and ten thousand taka buys a watch you will still be wearing a decade from now." },
    ],
  },
  {
    slug: "how-to-choose-a-wallet",
    title: "How to Choose a Wallet That Actually Works",
    excerpt:
      "Wallets are bought badly and replaced often. Here is how to pick one that fits your pockets, your cards and your cash.",
    category: "Accessories",
    categorySlug: "accessories",
    author: a("farhan"),
    publishedAt: "2026-05-12",
    readingTime: 5,
    imageTone: "tan",
    guideCategory: "Buying Guides",
    tags: ["accessories", "wallet", "buying guide"],
    content: [
      { type: "p", text: "The wallet is the accessory you touch a dozen times a day and think about almost never. Getting it right is worth a minute of your time, because a bad wallet is a daily annoyance." },
      { type: "h2", text: "Start with your carry" },
      { type: "p", text: "Count what you actually carry: cards, cash, coins, receipts. Bangladesh still runs on cash, so the wallet needs a proper note section that does not force your notes to fold awkwardly. If you carry little cash, a slim card wallet wins." },
      { type: "h2", text: "The three main styles" },
      {
        type: "ul",
        items: [
          "Bifold: the classic, holds cash and cards, sits in the back pocket",
          "Card wallet: slim, front pocket friendly, small cash slot",
          "Zip wallet: safer for coins and receipts, slightly bulkier",
        ],
      },
      { type: "h2", text: "Materials that last" },
      { type: "p", text: "Full-grain leather ages well and reshapes to your pocket. Treated or coated canvas is lighter and more weather tolerant. Bonded leather is the one to avoid, it peels and cracks within a year, which is why cheap wallets never last." },
      { type: "h2", text: "The final test" },
      { type: "p", text: "A wallet should disappear in your pocket and survive a rainy week. If it bulges, it is too big. If it cannot hold your daily cards and a few notes, it is too small. The right wallet makes you forget it is there." },
    ],
  },
  {
    slug: "capsule-wardrobe-for-bangladesh-summer",
    title: "A Capsule Wardrobe for a Bangladesh Summer",
    excerpt:
      "Eight months of heat is a long season to dress for. Here is a compact summer wardrobe built for Bangladesh conditions.",
    category: "Men's Fashion",
    categorySlug: "style",
    author: a("tasnia"),
    publishedAt: "2026-04-28",
    readingTime: 7,
    imageTone: "sand",
    guideCategory: "Men's Fashion",
    tags: ["wardrobe", "summer", "bangladesh", "capsule"],
    content: [
      { type: "p", text: "Bangladesh runs hot from March through October, with humidity that makes fabric choices more important than brand choices. A summer capsule wardrobe is not a list of summer clothes. It is a list of clothes that survive eight months of daily wear." },
      { type: "h2", text: "The fabric rule" },
      { type: "p", text: "Cotton, linen and breathable blends are the foundation. Cotton breathes, linen breathes more, and both tolerate regular washing better than synthetic blends. Heavier denim and anything lined should be seasonal only. If a fabric feels heavy when you hold it up, it is not summer wear." },
      { type: "h2", text: "The twelve piece capsule" },
      {
        type: "ul",
        items: [
          "Four t-shirts in off-white, sand, olive and black",
          "Two short-sleeve shirts in light, breathable fabric",
          "One overshirt for evenings and air-conditioned spaces",
          "Two pairs of light chinos or cotton trousers",
          "One pair of clean, simple sneakers",
          "A cap and a pair of UV-protected sunglasses",
        ],
      },
      { type: "h2", text: "Summer colour, done properly" },
      { type: "p", text: "Light colours reflect heat and read as intentional in summer. Off-white, sand and light olive form a cohesive summer palette. Reserve darker colours for evening. One small colour accent, a clay or ochre t-shirt, gives the capsule a pulse without breaking it." },
      { type: "h2", text: "Surviving the switch" },
      { type: "p", text: "Eid, weddings and family events still call for formalwear even in summer. Keep one breathable formal shirt and a pair of tailored light trousers ready. The capsule handles daily life, and the few formal pieces handle the occasions." },
    ],
  },
  {
    slug: "how-to-care-for-your-watches",
    title: "How to Care for Your Watch So It Lasts a Decade",
    excerpt:
      "A little routine keeps a watch running for years. Cleaning, winding, storage and knowing when to see a watchmaker.",
    category: "Watches",
    categorySlug: "watches",
    author: a("rafiq"),
    publishedAt: "2026-04-10",
    readingTime: 6,
    imageTone: "slate",
    guideCategory: "Watches",
    tags: ["watches", "care", "maintenance"],
    content: [
      { type: "p", text: "Watches fail in two ways: the movement fails, or the owner ignores it until it is too late. Most watch problems are preventable with a ten minute routine and a little knowledge." },
      { type: "h2", text: "Clean it regularly" },
      { type: "p", text: "Sweat, dust and humidity are the enemies. Wipe the case and bracelet with a soft microfibre cloth after heavy wear. For steel bracelets, a soft toothbrush with mild soap and water clears the links, then dry thoroughly. Leather straps never get wet, they get wiped and conditioned rarely." },
      { type: "h2", text: "Store it properly" },
      { type: "p", text: "Keep watches out of direct sunlight and away from humidity. A simple watch box or a pouch works. Automatics that are not worn daily can sit in a winder or be wound manually every few weeks. Quartz watches can be left running for years." },
      { type: "h2", text: "Know the service cycle" },
      {
        type: "ul",
        items: [
          "Quartz: battery every 1 to 3 years, pressure test with each change",
          "Automatic: full service every 4 to 6 years",
          "Water resistance: reseal gaskets after battery changes",
          "Magnets: keep watches away from speakers and strong magnets",
        ],
      },
      { type: "h2", text: "When to see a professional" },
      { type: "p", text: "If the watch stops, runs fast or slow, or the crown feels loose, take it to a reputable watchmaker rather than a general jeweller. In Dhaka, established watch service shops handle most brands. Cheap repair jobs create bigger bills later." },
      { type: "quote", text: "A watch you service is a watch you keep. The ten year watch is almost always the one that was cared for." },
    ],
  },
  {
    slug: "fashion-trends-2026-dhaka",
    title: "Fashion Trends 2026: What Is Moving in Dhaka",
    excerpt:
      "From campus oversized to polished minimalism, here is what is trending in Bangladesh this year and what is fading.",
    category: "Trends",
    categorySlug: "trends",
    author: a("tasnia"),
    publishedAt: "2026-03-18",
    readingTime: 6,
    imageTone: "burgundy",
    guideCategory: "Men's Fashion",
    tags: ["trends", "2026", "dhaka"],
    content: [
      { type: "p", text: "Trends in Dhaka arrive through a mix of global fashion media, campus culture and what actually survives the weather. This year the movement is towards quiet pieces with loud details." },
      { type: "h2", text: "Oversized is here to stay" },
      { type: "p", text: "The oversized silhouette has moved from niche streetwear to mainstream campus fashion. Heavyweight tees, wide but clean trousers and boxy overshirts are everywhere in Dhanmondi and Bashundhara. The refinement this year is balance: one oversized piece per outfit." },
      { type: "h2", text: "The return of the everyday watch" },
      { type: "p", text: "After a decade of phones, wristwatches are back as a finishing piece. Men under thirty are buying field watches, minimal quartz pieces and affordable automatics. The trend is less about status and more about craft and daily reliability." },
      { type: "h2", text: "Local brands, louder" },
      { type: "p", text: "Bangladeshi streetwear and accessory brands are winning on cut, fabric and price. Young buyers now compare local heavyweight tees against imports and often prefer the local product. Supporting homegrown labels has become a quiet point of pride." },
      { type: "h2", text: "What is fading" },
      {
        type: "ul",
        items: [
          "Heavy prints and all-over graphics, cleaner pieces are winning",
          "Tight, skinny silhouettes, especially for casual wear",
          "Imitations of global luxury logos",
          "Thin, shapeless fabric with no structure",
        ],
      },
      { type: "p", text: "The throughline is confidence. Dhaka fashion is getting pickier about cut, fabric and fit, and that is a trend worth following." },
    ],
  },
  {
    slug: "how-to-choose-the-right-custom-water-bottle",
    title: "How to Choose the Right Custom Water Bottle",
    excerpt:
      "Material, printing method and daily use all change what a branded bottle is worth. Here is how to pick one for your team, event or brand.",
    category: "Merchandise",
    categorySlug: "style",
    author: a("tasnia"),
    publishedAt: "2026-06-01",
    readingTime: 6,
    imageTone: "slate",
    guideCategory: "Buying Guides",
    tags: ["merchandise", "drinkware", "water bottle", "buying guide"],
    content: [
      { type: "p", text: "A custom water bottle is one of the highest-visibility promotional products there is, because it is used every day and carried everywhere. But bottles are not all the same. The right choice depends on who will use it and how." },
      { type: "h2", text: "Start with the material" },
      { type: "p", text: "Aluminium bottles are light and inexpensive, which makes them the default for events and giveaways. Steel bottles are insulated, heavier and better for offices and daily commutes. Tritan is clear, BPA-free and popular with gyms and campuses. Match the material to the user, not the price list." },
      { type: "h2", text: "Printing method matters" },
      { type: "p", text: "A small logo can be printed or wrapped around the bottle. For a full-colour design, a wrap gives the most space. On steel bottles, engraving gives a premium, permanent finish that will not scratch off. Consider how roughly the bottle will be handled before choosing." },
      { type: "h2", text: "Think about daily use" },
      {
        type: "ul",
        items: [
          "Office staff: insulated steel keeps drinks hot or cold at a desk",
          "Event giveaways: light aluminium is easier to carry and cheaper in volume",
          "Gym and campus: Tritan with a sports cap suits active users",
          "Corporate gift sets: engraved steel feels premium and lasts",
        ],
      },
      { type: "h2", text: "Cap and colour details" },
      { type: "p", text: "Sports caps, flip caps and standard caps change how the bottle is used, so match the cap to the audience. Colour matching matters more than most people expect: a bottle in exact brand colours reads as intentional, while a near miss reads as cheap." },
      { type: "quote", text: "A bottle is branded every single day it is used. That is why it beats most other promo items on value." },
      { type: "p", text: "Start your quote by confirming the audience, the material and the print method, and the rest becomes easy. If you are unsure, the team can recommend what has worked for similar orders." },
    ],
  },
  {
    slug: "custom-merchandise-ideas-for-corporate-events",
    title: "Custom Merchandise Ideas for Corporate Events",
    excerpt:
      "The right event merchandise is used after the event, not thrown away. Here are the pieces that keep your brand in daily use.",
    category: "Merchandise",
    categorySlug: "style",
    author: a("farhan"),
    publishedAt: "2026-05-20",
    readingTime: 6,
    imageTone: "slate",
    guideCategory: "Buying Guides",
    tags: ["merchandise", "corporate", "events", "gifts"],
    content: [
      { type: "p", text: "Most event merchandise is collected, glanced at and forgotten. The pieces that work are the ones people actually use in the weeks after the event. The goal is not a bigger bag of stuff, it is a few items that earn daily use." },
      { type: "h2", text: "Items that earn daily use" },
      {
        type: "ul",
        items: [
          "Branded water bottles, used at desks and in the car",
          "Mugs and tumblers, used every morning with coffee",
          "Notebooks and pens, used in every meeting",
          "Lanyards, worn daily by attendees who return to offices",
          "Tote bags, carried to the commute and the market",
        ],
      },
      { type: "h2", text: "Match the gift to the attendee" },
      { type: "p", text: "A conference for decision-makers calls for premium pieces like engraved tumblers and leather-bound notebooks. A campus or public event calls for volume-friendly pieces like tees, caps and wristbands. Matching the item to the audience is what makes it feel considered." },
      { type: "h2", text: "The mixed kit approach" },
      { type: "p", text: "Instead of one item for everyone, build a small kit: a bag, a bottle, a notebook and a pen, all in one coordinated design. Kits photograph better, feel more valuable and create a single strong brand impression." },
      { type: "h2", text: "Timing and quantities" },
      { type: "p", text: "Start the quote at least three weeks before the event so there is room for design approval and production. Confirm the attendee count early, then add a small buffer for late registrations and staff." },
      { type: "quote", text: "Good event merchandise is not a giveaway. It is a daily reminder of the event, working for weeks after it ends." },
      { type: "p", text: "Tell us the event type, the attendee profile and your budget, and the team will recommend the mix that fits." },
    ],
  },
  {
    slug: "custom-merchandise-ideas-for-university-clubs",
    title: "Custom Merchandise Ideas for University Clubs",
    excerpt:
      "Batch shirts, club hoodies and campus giveaways that build identity without blowing the budget. What works and what to order first.",
    category: "Merchandise",
    categorySlug: "style",
    author: a("priyanka"),
    publishedAt: "2026-05-05",
    readingTime: 6,
    imageTone: "olive",
    guideCategory: "Buying Guides",
    tags: ["merchandise", "university", "clubs", "students"],
    content: [
      { type: "p", text: "University merchandise is about identity as much as clothing. A batch shirt or a club hoodie makes a group feel like a group. The trick is ordering pieces that students actually wear, at volumes that fit a student budget." },
      { type: "h2", text: "Start with the batch shirt" },
      { type: "p", text: "The batch T-shirt is the classic first order. It is affordable, everyone wears it, and it becomes the visual identity of a batch, department or club for the whole year. Heavyweight cotton and a clean front print hold up best." },
      { type: "h2", text: "Add the hoodie in winter" },
      { type: "p", text: "Hoodies are the second purchase for most clubs, usually for the short winter window. They photograph well, work as merch and gifts, and carry the club name further than a tee." },
      { type: "h2", text: "The budget-friendly giveaways" },
      {
        type: "ul",
        items: [
          "Wristbands for fests and events",
          "Keychains for orientation kits",
          "Stickers for laptops and notebooks",
          "Caps for outdoor events",
          "Lanyards for ID and event access",
        ],
      },
      { type: "h2", text: "Plan the design once" },
      { type: "p", text: "Clubs save money and look more professional when one design system is used across every piece. Design the logo once, then apply it to the tee, the hoodie, the wristband and the sticker. Consistent marks read as a real brand, not a one-off." },
      { type: "quote", text: "The best club merchandise is the piece that still gets worn a year after the fest ended." },
      { type: "p", text: "Send the club name, the design and the budget, and the team will plan a mix that fits a student budget." },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(slug: string): Article[] {
  return articles.filter((article) => article.categorySlug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getPopularArticles(): Article[] {
  return articles.filter((article) => article.popular);
}

export function getLatestArticles(count?: number): Article[] {
  const sorted = [...articles].sort(
    (x, y) => +new Date(y.publishedAt) - +new Date(x.publishedAt)
  );
  return count ? sorted.slice(0, count) : sorted;
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return getLatestArticles(count);
  const sameCategory = articles.filter(
    (article) =>
      article.slug !== slug && article.categorySlug === current.categorySlug
  );
  const others = articles.filter(
    (article) => article.slug !== slug && article.categorySlug !== current.categorySlug
  );
  return [...sameCategory, ...others].slice(0, count);
}

export const guideFilters = [
  "All",
  "Men's Fashion",
  "Watches",
  "Sunglasses",
  "Accessories",
  "Streetwear",
  "Outfit Ideas",
  "Buying Guides",
] as const;