import type { Article, CatalogProduct, Category } from "./types";

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  source: string;
  photographer?: string;
};

function unsplash(base: string, w: number): string {
  return `${base}?q=80&w=${w}&auto=format&fit=crop`;
}

// Real, verified photography from Unsplash (free to use under the Unsplash
// license). Attribution is collected on the credits page.

export const images: Record<string, ImageAsset> = {
  hero: {
    src: unsplash("https://images.unsplash.com/photo-1762914395034-67c2f8c73c59", 1600),
    alt: "Man in a black t-shirt and jeans looking over his shoulder",
    width: 3648, height: 5472,
    source: "Unsplash", photographer: "abolfazl babaei",
  },
  hero2: {
    src: unsplash("https://images.unsplash.com/photo-1516257984-b1b4d707412e", 1400),
    alt: "Man modeling a denim jacket",
    width: 1707, height: 2560,
    source: "Unsplash", photographer: "Isaac Ramirez",
  },
  "trend-watches": {
    src: unsplash("https://images.unsplash.com/photo-1618215649872-6e3143a716ec", 1200),
    alt: "Close-up of a silver chronograph watch worn on a wrist",
    width: 3376, height: 6000,
    source: "Unsplash", photographer: "Gilles De Muynck",
  },
  "trend-sunglasses": {
    src: unsplash("https://images.unsplash.com/photo-1614252368727-99517bc90d7b", 1200),
    alt: "Man in a brown leather jacket wearing black sunglasses",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Maksym Tymchyk",
  },
  "trend-tshirts": {
    src: unsplash("https://images.unsplash.com/photo-1622519407650-3df9883f76a5", 1200),
    alt: "Man wearing a black crew neck t-shirt and denim jeans against a white wall",
    width: 3500, height: 4376,
    source: "Unsplash", photographer: "behrouz sasani",
  },
  "trend-streetwear": {
    src: unsplash("https://images.unsplash.com/photo-1578768079052-aa76e52ff62e", 1400),
    alt: "Person in a brown hoodie and black pants standing on a staircase",
    width: 3634, height: 5451,
    source: "Unsplash", photographer: "Ali Saadat",
  },
  "trend-accessories": {
    src: unsplash("https://images.unsplash.com/photo-1511556820780-d912e42b4980", 1200),
    alt: "Flat lay of a bag, sneakers and sunglasses on a beige surface",
    width: 3648, height: 5472,
    source: "Unsplash", photographer: "Malvestida",
  },
  "watch-wrist": {
    src: unsplash("https://images.unsplash.com/photo-1491336477066-31156b5e4f35", 1400),
    alt: "Man wearing a watch with a black suit",
    width: 5184, height: 3456,
    source: "Unsplash", photographer: "Ruthson Zimmerman",
  },
  "watch-dial": {
    src: unsplash("https://images.unsplash.com/photo-1605143185650-77944b152643", 1200),
    alt: "Black and gold chronograph watch close-up",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Lucas Santos",
  },
  "watch-leather": {
    src: unsplash("https://images.unsplash.com/photo-1557531365-e8b22d93dbd0", 1200),
    alt: "Round gray analog watch with a brown leather band",
    width: 4000, height: 5000,
    source: "Unsplash", photographer: "Rick Muigo",
  },
  "watch-wrist2": {
    src: unsplash("https://images.unsplash.com/photo-1602752975366-5520991f958d", 1200),
    alt: "Person wearing a black round analog watch",
    width: 4160, height: 6240,
    source: "Unsplash", photographer: "Eve Maier",
  },
  "watch-check": {
    src: unsplash("https://images.unsplash.com/photo-1507679622673-989605832e3d", 1200),
    alt: "Hand holding a gold analog watch with a black strap",
    width: 5472, height: 3648,
    source: "Unsplash", photographer: "Hunters Race",
  },
  "watch-black-dial": {
    src: unsplash("https://images.unsplash.com/photo-1723629159965-b0628625f45e", 1200),
    alt: "Close-up of a watch resting on a black surface",
    width: 2068, height: 4608,
    source: "Unsplash", photographer: "Aashish Chandra",
  },
  "watch-stack": {
    src: unsplash("https://images.unsplash.com/photo-1621441030468-a57e1e0a0bff", 1200),
    alt: "Two analog watches, one black and one brown",
    width: 3454, height: 2590,
    source: "Unsplash", photographer: "Andrew Vincentio",
  },
  "sun-portrait": {
    src: unsplash("https://images.unsplash.com/photo-1592245734204-6561336cbc6f", 1200),
    alt: "Man wearing black sunglasses and a black collared shirt",
    width: 4000, height: 6000,
    source: "Unsplash", photographer: "José Pinto",
  },
  "sun-close": {
    src: unsplash("https://images.unsplash.com/photo-1610136649349-0f646f318053", 1200),
    alt: "Black framed sunglasses on a white table",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Lucas George Wendt",
  },
  "sun-close2": {
    src: unsplash("https://images.unsplash.com/photo-1655850106862-b39c99631c0a", 1200),
    alt: "A pair of black-framed sunglasses on a white surface",
    width: 6196, height: 4131,
    source: "Unsplash", photographer: "Egor Komarov",
  },
  "street-tee": {
    src: unsplash("https://images.unsplash.com/photo-1627909935922-e2a7c7089fd2", 1400),
    alt: "Man in a white crew neck t-shirt sitting on concrete",
    width: 3592, height: 4490,
    source: "Unsplash", photographer: "Keriliwi",
  },
  "street-hoodie": {
    src: unsplash("https://images.unsplash.com/photo-1615397587950-3cbb55f95b77", 1200),
    alt: "Man in a white pullover hoodie standing on a road",
    width: 3456, height: 5184,
    source: "Unsplash", photographer: "Khalid Boutchich",
  },
  "street-cap": {
    src: unsplash("https://images.unsplash.com/photo-1542529727-24cb357c57d2", 1400),
    alt: "Man wearing a black cap and white shirt leaning on a gray metal wall",
    width: 5760, height: 3840,
    source: "Unsplash", photographer: "Dwayne Legrand",
  },
  "street-urban": {
    src: unsplash("https://images.unsplash.com/photo-1785243946404-30a5b7d13190", 1400),
    alt: "Man in a black t-shirt leaning on a brick wall",
    width: 3383, height: 5589,
    source: "Unsplash", photographer: "Ryan Hall",
  },
  "acc-bracelet": {
    src: unsplash("https://images.unsplash.com/photo-1715446929992-3f3d2b7a9467", 1200),
    alt: "Close-up of a person wearing a bracelet on their wrist",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Raviraj Singh Tomar",
  },
  "acc-wallet": {
    src: unsplash("https://images.unsplash.com/photo-1579014134953-1580d7f123f3", 1200),
    alt: "A black leather wallet",
    width: 6016, height: 4016,
    source: "Unsplash", photographer: "Emil Kalibradov",
  },
  "wallet-flatlay": {
    src: unsplash("https://images.unsplash.com/photo-1620109176813-e91290f6c795", 1200),
    alt: "Brown leather bifold wallet on black leather textile",
    width: 4752, height: 3168,
    source: "Unsplash", photographer: "Kisetsu Co",
  },
  "acc-bag": {
    src: unsplash("https://images.unsplash.com/photo-1578237493287-8d4d2b03591a", 1200),
    alt: "A black leather tote bag",
    width: 2912, height: 5184,
    source: "Unsplash", photographer: "Tereza Rubá",
  },
  "bag-lifestyle": {
    src: unsplash("https://images.unsplash.com/photo-1630381260512-e3fe55c11973", 1200),
    alt: "Person in denim jeans holding a white tote bag",
    width: 5472, height: 3648,
    source: "Unsplash", photographer: "Mediamodifier",
  },
  "acc-keychain": {
    src: unsplash("https://images.unsplash.com/photo-1599066852704-3b6874b194b6", 1200),
    alt: "A gold key resting on black leather textile",
    width: 3072, height: 4608,
    source: "Unsplash", photographer: "Logan Weaver",
  },
  "keychain-table": {
    src: unsplash("https://images.unsplash.com/photo-1661353560320-0b9a7bec4737", 1200),
    alt: "A cup of coffee and a keychain on a table",
    width: 7360, height: 4912,
    source: "Unsplash", photographer: "Blake Wisz",
  },
  "acc-flatlay": {
    src: unsplash("https://images.unsplash.com/photo-1761896902115-49793a359daf", 1200),
    alt: "Flat lay of men's accessories and clothing",
    width: 4398, height: 5498,
    source: "Unsplash", photographer: "Vooglam Eyewear",
  },
  "tee-hero": {
    src: unsplash("https://images.unsplash.com/photo-1693443687750-611ad77f3aba", 1400),
    alt: "Two plain t-shirts, one black and one white, folded together",
    width: 4512, height: 3010,
    source: "Unsplash", photographer: "tian dayong",
  },
  "tee-folded": {
    src: unsplash("https://images.unsplash.com/photo-1562157873-818bc0726f68", 1200),
    alt: "Stack of folded t-shirts in assorted colours on a wooden panel",
    width: 3000, height: 5333,
    source: "Unsplash", photographer: "Md Salman",
  },
  "tee-fabric": {
    src: unsplash("https://images.unsplash.com/photo-1615799998603-7c6270a45196", 1200),
    alt: "Close-up of plain white woven textile texture",
    width: 3101, height: 4462,
    source: "Unsplash", photographer: "Kiwihug",
  },
  "tee-print": {
    src: unsplash("https://images.unsplash.com/photo-1456456496250-d5e7c0a9b44d", 1200),
    alt: "Person holding a screen printing screen near a window",
    width: 4892, height: 3261,
    source: "Unsplash", photographer: "emarts emarts",
  },
  "tee-lifestyle": {
    src: unsplash("https://images.unsplash.com/photo-1627225924765-552d49cf47ad", 1200),
    alt: "Man wearing a white crew neck t-shirt",
    width: 6520, height: 9780,
    source: "Unsplash", photographer: "Bao Bao",
  },
  "hoodie-hero": {
    src: unsplash("https://images.unsplash.com/photo-1688111421205-a0a85415b224", 1200),
    alt: "Man with a beard wearing a white hoodie",
    width: 2832, height: 4240,
    source: "Unsplash", photographer: "Abraham Flores",
  },
  "hoodie-detail": {
    src: unsplash("https://images.unsplash.com/photo-1611817757591-c3f345024273", 1200),
    alt: "Man in a gray hoodie standing in front of a white building",
    width: 3072, height: 4608,
    source: "Unsplash", photographer: "Logan Weaver",
  },
  "hoodie-urban": {
    src: unsplash("https://images.unsplash.com/photo-1564557287817-3785e38ec1f5", 1200),
    alt: "Man in a gray hoodie leaning against a wall",
    width: 2948, height: 4421,
    source: "Unsplash", photographer: "The Ian",
  },
  "cap-hero": {
    src: unsplash("https://images.unsplash.com/photo-1691256676359-20e5c6d4bc92", 1200),
    alt: "A white baseball cap on a gray background",
    width: 4267, height: 4267,
    source: "Unsplash", photographer: "personalgraphic.com",
  },
  "cap-side": {
    src: unsplash("https://images.unsplash.com/photo-1609868656710-4f299e957ec5", 1200),
    alt: "Grayscale photo of a person holding a cap",
    width: 4000, height: 5555,
    source: "Unsplash", photographer: "hossein azarbad",
  },
  "mug-hero": {
    src: unsplash("https://images.unsplash.com/photo-1514228742587-6b1558fcca3d", 1200),
    alt: "A plain white ceramic mug",
    width: 5023, height: 3349,
    source: "Unsplash", photographer: "NordWood Themes",
  },
  "mug-detail": {
    src: unsplash("https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e", 1200),
    alt: "White and beige ceramic mug on a black surface",
    width: 3456, height: 5184,
    source: "Unsplash", photographer: "Nong",
  },
  "bag-hero": {
    src: unsplash("https://images.unsplash.com/photo-1574365569389-a10d488ca3fb", 1200),
    alt: "A white reusable tote bag on a gray surface",
    width: 5472, height: 3648,
    source: "Unsplash", photographer: "Brando Makes Branding",
  },
  "bag-craft": {
    src: unsplash("https://images.unsplash.com/photo-1628483211662-9bcc692c46dc", 1200),
    alt: "A leather wallet, comb, thread and scissors on a workbench",
    width: 3264, height: 4912,
    source: "Unsplash", photographer: "Konstantin Evdokimov",
  },
  "wristband-hero": {
    src: unsplash("https://images.unsplash.com/photo-1612450362046-91773458b103", 1200),
    alt: "Person wearing a silver link bracelet",
    width: 6000, height: 3376,
    source: "Unsplash", photographer: "Aurélia Dubois",
  },
  "band-stack": {
    src: unsplash("https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa", 1200),
    alt: "Man adjusting his tie while wearing a watch and bracelets",
    width: 3376, height: 4220,
    source: "Unsplash", photographer: "Thomas Marquize",
  },
  "merch-hero": {
    src: unsplash("https://images.unsplash.com/photo-1768746350424-ee28a364dcf5", 1400),
    alt: "Man sewing at a machine in a busy apparel workshop",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Luba Glazunova",
  },
  "merch-production": {
    src: unsplash("https://images.unsplash.com/photo-1773525912476-213bff96b8a4", 1200),
    alt: "Screen printing machine with yellow ink design",
    width: 4000, height: 6000,
    source: "Unsplash", photographer: "Anthony Roberts",
  },
  wardrobe: {
    src: unsplash("https://images.unsplash.com/photo-1490481651871-ab68de25d43d", 1400),
    alt: "Assorted clothes hanging on wooden hangers",
    width: 5472, height: 3648,
    source: "Unsplash", photographer: "Priscilla Du Preez",
  },
  linen: {
    src: unsplash("https://images.unsplash.com/photo-1523381294911-8d3cead13475", 1400),
    alt: "A row of t-shirts hanging on wooden hangers against a gray background",
    width: 7952, height: 5304,
    source: "Unsplash", photographer: "Keagan Henman",
  },
  rain: {
    src: unsplash("https://images.unsplash.com/photo-1519692933481-e162a57d6721", 1400),
    alt: "Person walking on a rainy street holding an umbrella",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Osman Rana",
  },
  sneakers: {
    src: unsplash("https://images.unsplash.com/photo-1544441893-675973e31985", 1200),
    alt: "A pair of white low-top sneakers",
    width: 5472, height: 3648,
    source: "Unsplash", photographer: "Mnz",
  },
  polo: {
    src: unsplash("https://images.unsplash.com/photo-1714317438040-0e8584215699", 1200),
    alt: "Folded polo shirts in assorted colours",
    width: 5184, height: 3456,
    source: "Unsplash", photographer: "TuanAnh Blue",
  },
  polo2: {
    src: unsplash("https://images.unsplash.com/photo-1625910513399-c9fcba54338c", 1200),
    alt: "Man wearing a black polo shirt",
    width: 4000, height: 6000,
    source: "Unsplash", photographer: "Clément Vatte",
  },
  polo3: {
    src: unsplash("https://images.unsplash.com/photo-1625910513394-ea511bed44ca", 1200),
    alt: "Gray polo shirt on blue textile",
    width: 2641, height: 3522,
    source: "Unsplash", photographer: "Clément Vatte",
  },
  jersey: {
    src: unsplash("https://images.unsplash.com/photo-1649520937981-763d6a14de7d", 1200),
    alt: "A pile of sports jerseys",
    width: 6000, height: 3376,
    source: "Unsplash", photographer: "Vladislav Glukhotko",
  },
  jersey2: {
    src: unsplash("https://images.unsplash.com/photo-1662096909714-e2f206d0a636", 1200),
    alt: "A pair of blue and red striped team shirts",
    width: 4864, height: 3648,
    source: "Unsplash", photographer: "Bibesh Manandhar",
  },
  jersey3: {
    src: unsplash("https://images.unsplash.com/photo-1577212017308-55c4d60d2609", 1200),
    alt: "Red and white jersey shirt",
    width: 4742, height: 7109,
    source: "Unsplash", photographer: "Nelson Ndongala",
  },
  jacket: {
    src: unsplash("https://images.unsplash.com/photo-1627637454030-5ddd536e06e5", 1200),
    alt: "Man in a brown coat standing beside a gray concrete wall",
    width: 3906, height: 5859,
    source: "Unsplash", photographer: "Dmitry Spravko",
  },
  jacket2: {
    src: unsplash("https://images.unsplash.com/photo-1620228922597-cca58f177310", 1200),
    alt: "Man in a brown zip-up jacket and blue denim jeans",
    width: 2293, height: 3381,
    source: "Unsplash", photographer: "Mohamad Khosravi",
  },
  apron: {
    src: unsplash("https://images.unsplash.com/photo-1631396326646-c06a935ff3a6", 1200),
    alt: "A man working on a chair in a workshop wearing an apron",
    width: 4000, height: 6000,
    source: "Unsplash", photographer: "Bailey Alexander",
  },
  apron2: {
    src: unsplash("https://images.unsplash.com/photo-1679797850019-3d0d8659a695", 1200),
    alt: "A craftsman working on a piece of wood",
    width: 4240, height: 2832,
    source: "Unsplash", photographer: "Samuel Cruz",
  },
  water: {
    src: unsplash("https://images.unsplash.com/photo-1625708458528-802ec79b1ed8", 1200),
    alt: "Three metal water bottles on a white surface",
    width: 3164, height: 3164,
    source: "Unsplash", photographer: "quokkabottles",
  },
  water2: {
    src: unsplash("https://images.unsplash.com/photo-1602143407151-7111542de6e8", 1200),
    alt: "A bottle on a white table",
    width: 4006, height: 6008,
    source: "Unsplash", photographer: "Joan Tran",
  },
  water3: {
    src: unsplash("https://images.unsplash.com/photo-1605714312496-01e90cb509cc", 1200),
    alt: "A white bottle on a white table",
    width: 3328, height: 4437,
    source: "Unsplash", photographer: "Vanesa Giaconi",
  },
  tumbler: {
    src: unsplash("https://images.unsplash.com/photo-1544003484-3cd181d17917", 1200),
    alt: "A black stainless steel tumbler",
    width: 2692, height: 3365,
    source: "Unsplash", photographer: "Karl Köhler",
  },
  lanyard: {
    src: unsplash("https://images.unsplash.com/photo-1783120947325-56ae2d32b98e", 1200),
    alt: "Person wearing a patterned lanyard with a blank ID badge",
    width: 4672, height: 7008,
    source: "Unsplash", photographer: "Jelly Marketing",
  },
  lanyard2: {
    src: unsplash("https://images.unsplash.com/photo-1769029269011-b32f787c288c", 1200),
    alt: "Woman holding a blank white ID badge",
    width: 5616, height: 3744,
    source: "Unsplash", photographer: "Sasun Bughdaryan",
  },
  lanyard3: {
    src: unsplash("https://images.unsplash.com/photo-1783120947302-0ac75b8a9e35", 1200),
    alt: "Man holding a blank white badge",
    width: 6749, height: 4499,
    source: "Unsplash", photographer: "Jelly Marketing",
  },
  badge: {
    src: unsplash("https://images.unsplash.com/photo-1574097638739-725b61f511a5", 1200),
    alt: "Assorted pin badges",
    width: 4608, height: 3072,
    source: "Unsplash", photographer: "Cristina Hernández",
  },
  badge2: {
    src: unsplash("https://images.unsplash.com/photo-1566107222733-864261c6ae3c", 1200),
    alt: "Assorted lapel pins",
    width: 3110, height: 2073,
    source: "Unsplash", photographer: "Kevin Luarte",
  },
  phone: {
    src: unsplash("https://images.unsplash.com/photo-1535157412991-2ef801c1748b", 1200),
    alt: "Four assorted smartphone cases",
    width: 3024, height: 3024,
    source: "Unsplash", photographer: "Grysell Alvarez",
  },
  phone2: {
    src: unsplash("https://images.unsplash.com/photo-1623393884989-cb3663e431c5", 1200),
    alt: "A phone case on a wooden table",
    width: 4480, height: 6720,
    source: "Unsplash", photographer: "Jascent Leung",
  },
  sticker: {
    src: unsplash("https://images.unsplash.com/photo-1625768376503-68d2495d78c5", 1200),
    alt: "Assorted stickers on a white wall",
    width: 4000, height: 3202,
    source: "Unsplash", photographer: "Marc Newberry",
  },
  sticker2: {
    src: unsplash("https://images.unsplash.com/photo-1633533452206-8ab246b00e30", 1200),
    alt: "A sheet of assorted stickers",
    width: 6000, height: 3376,
    source: "Unsplash", photographer: "MK +2",
  },
  sticker3: {
    src: unsplash("https://images.unsplash.com/photo-1621252756235-7f37e5e5125e", 1200),
    alt: "Assorted colour and design stickers",
    width: 2749, height: 3643,
    source: "Unsplash", photographer: "Jon Tyson",
  },
  stat: {
    src: unsplash("https://images.unsplash.com/photo-1620275765334-4ed948bb4502", 1200),
    alt: "A black pen on a white notebook",
    width: 3413, height: 5117,
    source: "Unsplash", photographer: "Justin Morgan",
  },
  stat2: {
    src: unsplash("https://images.unsplash.com/photo-1612367980327-7454a7276aa7", 1200),
    alt: "A white spiral notebook on a wooden table",
    width: 5568, height: 3712,
    source: "Unsplash", photographer: "Kelly Sikkema",
  },
  stat3: {
    src: unsplash("https://images.unsplash.com/photo-1591195852468-03a01d1375d6", 1200),
    alt: "An open notebook with lined pages and a ballpoint pen",
    width: 6443, height: 4295,
    source: "Unsplash", photographer: "engin akyurt",
  },
  corp: {
    src: unsplash("https://images.unsplash.com/photo-1761914410572-02614b575847", 1200),
    alt: "A desk with calculator, glasses and office supplies",
    width: 5451, height: 4000,
    source: "Unsplash", photographer: "Cht Gsml",
  },
  event: {
    src: unsplash("https://images.unsplash.com/photo-1540575467063-178a50c2df87", 1200),
    alt: "A crowd of people seated inside an event venue",
    width: 5472, height: 3648,
    source: "Unsplash", photographer: "Headway",
  },
  event2: {
    src: unsplash("https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04", 1200),
    alt: "A speaker on stage addressing a large audience",
    width: 3936, height: 2624,
    source: "Unsplash", photographer: "Alexandre Pellaes",
  },
  event3: {
    src: unsplash("https://images.unsplash.com/photo-1560439514-4e9645039924", 1200),
    alt: "A crowd of people in a building lobby",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Product School",
  },
  uni: {
    src: unsplash("https://images.unsplash.com/photo-1741637335289-c99652d3155f", 1200),
    alt: "Students walking by a campus building under a tree",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Zoshua Colah",
  },
  uni2: {
    src: unsplash("https://images.unsplash.com/photo-1741637530744-bcd1ff0aefe5", 1200),
    alt: "People walking across a university courtyard",
    width: 4000, height: 4824,
    source: "Unsplash", photographer: "Zoshua Colah",
  },
  uni3: {
    src: unsplash("https://images.unsplash.com/photo-1709079153188-f7af2c470ccf", 1200),
    alt: "A person walking down a sidewalk in front of a building",
    width: 3024, height: 4032,
    source: "Unsplash", photographer: "Joe",
  },
  print: {
    src: unsplash("https://images.unsplash.com/photo-1663433567177-9f94be0bff4c", 1200),
    alt: "A person working on an industrial printing machine",
    width: 5652, height: 3768,
    source: "Unsplash", photographer: "Anthony Roberts",
  },
  "hero-merch": {
    src: unsplash("https://images.unsplash.com/photo-1543322748-33df6d3db806", 1600),
    alt: "Flat lay of a folded shirt, watch and sneakers on a table",
    width: 5096, height: 3397,
    source: "Unsplash", photographer: "Mnz",
  },
  wallet: {
    src: unsplash("https://images.unsplash.com/photo-1531190260877-c8d11eb5afaf", 1200),
    alt: "A brown leather bifold wallet on a table",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "Two Paddles Axe and Leatherwork",
  },
  wallet2: {
    src: unsplash("https://images.unsplash.com/photo-1624538000860-24716b9050f2", 1200),
    alt: "A brown leather bifold wallet on a white table",
    width: 6000, height: 4000,
    source: "Unsplash", photographer: "suraj kumar",
  },
  locket: {
    src: unsplash("https://images.unsplash.com/photo-1761210875101-1273b9ae5600", 1200),
    alt: "Gold heart pendant necklace with charm beads",
    width: 11808, height: 7872,
    source: "Unsplash", photographer: "John Marfe Bitoon",
  },
  locket2: {
    src: unsplash("https://images.unsplash.com/photo-1633810545227-3c2f43741eea", 1200),
    alt: "A woman wearing a gold necklace with a locket",
    width: 3255, height: 4068,
    source: "Unsplash", photographer: "Sama Hosseini",
  },
  ring: {
    src: unsplash("https://images.unsplash.com/photo-1778759335316-72d5c55683d2", 1200),
    alt: "An ornate silver ring close-up",
    width: 3840, height: 3840,
    source: "Unsplash", photographer: "Husien Bisky",
  },
  ring2: {
    src: unsplash("https://images.unsplash.com/photo-1623040594022-3f46dd09c260", 1200),
    alt: "A man in a black shirt holding his hands together",
    width: 4381, height: 2921,
    source: "Unsplash", photographer: "Jacob Vega",
  },
  design: {
    src: unsplash("https://images.unsplash.com/photo-1613909207039-6b173b755cc1", 1200),
    alt: "A designer working in front of a computer",
    width: 5377, height: 3295,
    source: "Unsplash", photographer: "Faizur Rehman",
  },
  design2: {
    src: unsplash("https://images.unsplash.com/photo-1626785774625-ddcddc3445e9", 1200),
    alt: "A computer monitor and tablet displaying creative design software",
    width: 5933, height: 3955,
    source: "Unsplash", photographer: "Emily Bernal",
  },
  city: {
    src: unsplash("https://images.unsplash.com/photo-1672391460798-8fffd466b329", 1200),
    alt: "Man walking across a city street next to tall buildings",
    width: 3456, height: 5184,
    source: "Unsplash", photographer: "Kaydn Ito",
  },
};

const articleImageKeys: Record<string, string> = {
  "how-to-choose-the-right-watch": "watch-check",
  "watch-size-guide": "watch-wrist2",
  "watch-types-quartz-vs-automatic": "watch-dial",
  "how-to-match-a-watch-with-your-outfit": "watch-wrist",
  "watches-under-10000-taka": "watch-stack",
  "how-to-care-for-your-watches": "watch-black-dial",
  "how-to-choose-sunglasses-for-your-face-shape": "sun-portrait",
  "sunglasses-uv-protection-what-you-need-to-know": "sun-close",
  "essential-accessories-every-man-should-own": "acc-flatlay",
  "how-to-choose-a-wallet": "acc-wallet",
  "monsoon-accessories-for-dhaka": "rain",
  "oversized-vs-regular-fit-t-shirts": "street-tee",
  "how-to-style-an-oversized-tee": "trend-tshirts",
  "streetwear-in-dhaka-how-to-wear-it": "street-urban",
  "fashion-trends-2026-dhaka": "city",
  "how-to-build-a-minimal-wardrobe": "wardrobe",
  "capsule-wardrobe-for-bangladesh-summer": "linen",
  "how-to-choose-the-right-custom-water-bottle": "water",
  "custom-merchandise-ideas-for-corporate-events": "corp",
  "custom-merchandise-ideas-for-university-clubs": "uni",
};

const productImageKeys: Record<string, string> = {
  "t-shirts": "tee-hero",
  hoodies: "hoodie-hero",
  "polo-shirts": "polo",
  jerseys: "jersey",
  jackets: "jacket",
  aprons: "apron",
  caps: "cap-hero",
  mugs: "mug-hero",
  "water-bottles": "water",
  tumblers: "tumbler",
  bags: "bag-hero",
  wristbands: "wristband-hero",
  keychains: "acc-keychain",
  lanyards: "lanyard",
  badges: "badge",
  "phone-cases": "phone",
  stickers: "sticker",
  stationery: "stat",
  "leather-wallets": "wallet",
  lockets: "locket",
  rings: "ring",
  "custom-design": "design",
  "minimal-field-watch-36": "watch-black-dial",
  "automatic-watch-40": "watch-dial",
  "chronograph-steel": "trend-watches",
  "minimal-quartz-watch": "watch-check",
  "aviator-sunglasses": "trend-sunglasses",
  "round-sunglasses-50": "sun-portrait",
  "wayfarer-sunglasses": "sun-close",
  "leather-wristband": "acc-bracelet",
  "paracord-bracelet": "wristband-hero",
  "canvas-tote": "acc-bag",
  "card-wallet": "acc-wallet",
  "steel-keychain": "acc-keychain",
};

const categoryImageKeys: Record<string, string> = {
  style: "hero2",
  watches: "watch-wrist2",
  sunglasses: "trend-sunglasses",
  streetwear: "street-hoodie",
  accessories: "trend-accessories",
  trends: "street-urban",
};

export function imageFor(key: string): ImageAsset | undefined {
  return images[key];
}

export function articleImage(article: Article): ImageAsset {
  const key = articleImageKeys[article.slug] ?? "wardrobe";
  return images[key] ?? images.wardrobe;
}

export function productImage(product: CatalogProduct): ImageAsset {
  const key = productImageKeys[product.slug] ?? "tee-hero";
  return images[key] ?? images["tee-hero"];
}

export function categoryImage(category: Category): ImageAsset {
  const key = categoryImageKeys[category.slug] ?? "wardrobe";
  return images[key] ?? images.wardrobe;
}

export function allPhotographers(): { photographer: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const asset of Object.values(images)) {
    const name = asset.photographer ?? "Unsplash";
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts.entries()].map(([photographer, count]) => ({ photographer, count }));
}

const productDetailKeys: Record<string, string[]> = {
  "t-shirts": ["tee-fabric", "tee-print", "tee-lifestyle", "tee-folded"],
  hoodies: ["hoodie-detail", "hoodie-urban", "hoodie-hero"],
  "polo-shirts": ["polo2", "polo3", "polo"],
  jerseys: ["jersey2", "jersey3", "jersey"],
  jackets: ["jacket2", "jacket"],
  aprons: ["apron2", "apron"],
  caps: ["cap-side", "street-cap", "cap-hero"],
  mugs: ["mug-detail", "mug-hero"],
  "water-bottles": ["water2", "water3", "water"],
  tumblers: ["tumbler", "water"],
  bags: ["bag-craft", "bag-lifestyle", "bag-hero"],
  wristbands: ["band-stack", "acc-bracelet", "wristband-hero"],
  keychains: ["keychain-table", "acc-keychain"],
  lanyards: ["lanyard2", "lanyard3", "lanyard"],
  badges: ["badge2", "badge"],
  "phone-cases": ["phone2", "phone"],
  stickers: ["sticker2", "sticker3", "sticker"],
  stationery: ["stat2", "stat3", "stat"],
  "leather-wallets": ["wallet2", "wallet"],
  lockets: ["locket2", "locket"],
  rings: ["ring2", "ring"],
  "custom-design": ["design2", "design"],
};

export function productDetailImages(product: CatalogProduct): ImageAsset[] {
  const keys = productDetailKeys[product.slug] ?? ["tee-fabric", "tee-lifestyle"];
  return keys.map((key) => images[key]).filter(Boolean);
}