export type GalleryItem = {
  title: string
  location: string
  span?: "tall" | "wide" | "normal"
  query: string
}
export const gallery = [
  {
    title: "Royal Wedding",
    location: "Hyderabad",
    query: "luxury indian wedding couple",
    span: "tall",
  },
  {
    title: "Beach Romance",
    location: "Goa",
    query: "couple beach sunset photography",
    span: "wide",
  },
  {
    title: "Traditional Moments",
    location: "Tirupati",
    query: "south indian wedding photography",
  },
  {
    title: "Destination Love",
    location: "Udaipur",
    query: "udaipur palace wedding",
    span: "tall",
  },
  {
    title: "Pre Wedding",
    location: "Kerala",
    query: "pre wedding photoshoot nature",
  },
  {
    title: "Reception Night",
    location: "Bengaluru",
    query: "luxury wedding reception photography",
    span: "wide",
  },

  // NEW IMAGE 1
  {
    title: "Golden Hour",
    location: "Araku Valley",
    query: "golden hour couple photography mountains",
    span: "tall",
  },

  // NEW IMAGE 2
  {
    title: "Forever Together",
    location: "Jaipur",
    query: "royal palace wedding couple portrait",
    span: "wide",
  },
]

export const services = [
  {
    name: "Signature Photography",
    price: "From $12,000",
    description:
      "Full-day editorial coverage led by our principal photographer, delivering a curated collection of timeless, gallery-grade imagery.",
    features: ["Up to 12 hours coverage", "Two photographers", "Private online gallery", "500+ edited images"],
  },
  {
    name: "Cinematic Film",
    price: "From $9,500",
    description:
      "Narrative wedding films shot on cinema cameras — a moving portrait of your day, scored and color-graded for the screen.",
    features: ["Highlight film (5–7 min)", "Feature film (20 min)", "Cinema-grade audio", "4K delivery"],
  },
  {
    name: "The Heirloom Album",
    price: "From $3,200",
    description:
      "Handcrafted, archival fine-art albums bound in Italian leather — an object made to be passed through generations.",
    features: ["Italian leather binding", "Archival matte paper", "Custom design", "Duplicate parent copies"],
  },
]

export const testimonials = [
  {
    quote:
      "TONYX didn't photograph our wedding — they authored it. Every frame feels like a memory we can step back into.",
    author: "Elowen & James",
    location: "Lake Como",
  },
  {
    quote:
      "The film brought our families to tears. It is, without exaggeration, the most precious thing we own.",
    author: "Aria & Theo",
    location: "Marrakech",
  },
  {
    quote:
      "Discreet, unhurried, and impossibly elegant. They understood the day before we had to explain it.",
    author: "Sofia & Luca",
    location: "Amalfi Coast",
  },
]

export const process = [
  { step: "01", title: "The Introduction", body: "A private consultation to understand your story, your families, and the atmosphere you envision." },
  { step: "02", title: "The Blueprint", body: "We craft a bespoke coverage plan — timelines, locations, and creative direction tailored to you." },
  { step: "03", title: "The Day", body: "We move quietly through your celebration, present but unseen, capturing it as it truly unfolds." },
  { step: "04", title: "The Heirloom", body: "Your imagery is hand-edited, your film scored, and your album crafted to endure for generations." },
]

export type Category = "All" | "Weddings" | "Destinations" | "Portraits" | "Film"

export type PortfolioItem = {
  title: string
  location: string
  category: Exclude<Category, "All">
  span?: "tall" | "wide" | "normal"
  query: string
}

export const portfolio: PortfolioItem[] = [
  { title: "Elowen & James", location: "Lake Como, Italy", category: "Weddings", span: "tall", query: "luxury lakeside wedding couple italian villa golden hour" },
  { title: "Aria & Theo", location: "Marrakech, Morocco", category: "Destinations", span: "wide", query: "elegant destination wedding riad morocco warm tones" },
  { title: "The First Look", location: "Santorini, Greece", category: "Portraits", span: "normal", query: "bride groom first look portrait santorini emotional fine art" },
  { title: "Isabelle & Marc", location: "Provence, France", category: "Weddings", span: "normal", query: "provence lavender field wedding editorial fine art" },
  { title: "Sofia & Luca", location: "Amalfi Coast", category: "Destinations", span: "tall", query: "amalfi coast cliffside wedding reception candlelight" },
  { title: "Hana & Kenji", location: "Kyoto, Japan", category: "Film", span: "wide", query: "intimate kyoto temple wedding cherry blossoms cinematic still" },
  { title: "Golden Vows", location: "Tuscany, Italy", category: "Portraits", span: "normal", query: "bride portrait tuscany vineyard golden hour veil elegant" },
  { title: "The Reception Film", location: "Vienna, Austria", category: "Film", span: "normal", query: "wedding reception dancing cinematic still warm evening light" },
  { title: "Camille & Anton", location: "Loire Valley", category: "Weddings", span: "tall", query: "chateau wedding loire valley grand elegant couple" },
  { title: "Desert Union", location: "Wadi Rum, Jordan", category: "Destinations", span: "wide", query: "desert wedding wadi rum dramatic landscape couple editorial" },
]

export const categories: Category[] = ["All", "Weddings", "Destinations", "Portraits", "Film"]

export function placeholder(query: string, w = 800, h = 1000) {
  return `/placeholder.svg?height=${h}&width=${w}&query=${encodeURIComponent(query)}`
}
