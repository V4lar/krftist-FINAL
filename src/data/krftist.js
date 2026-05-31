// Shared cinematic media library — Behance-inspired editorial aesthetic
export const MEDIA = {
  hero: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/2ca42f53c0d33964324070a9d1e46c25c4ee2eddf0147143367602dac620c12d.png",
  about: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/9208aa96f194f9e8e07b3597657321867498960999a4a981865342bc7c91221d.png",
  motion: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/a06cd0320ec03bea7de371599fa51f1c2efe1114a1dca6838af106bf248ea8f9.png",
  set: "https://static.prod-images.emergentagent.com/jobs/7cb1d837-dd21-4e5b-9a52-5db92968abdc/images/a052e242184c250406bd103b724eed1ccd3c5412e6846b548cbe3940c88ee802.png",
  midnight: "https://images.unsplash.com/photo-1681137063068-081072cf04b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbiUyMHNldCUyMG1vb2R5fGVufDB8fHx8MTc4MDE1MjcxM3ww&ixlib=rb-4.1.0&q=85",
  artisan: "https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  vogue: "https://images.unsplash.com/photo-1758749646094-606f23edaef6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxoaWdoJTIwZW5kJTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5JTIwZGFyayUyMG1vb2R8ZW58MHx8fHwxNzgwMTUyNzEzfDA&ixlib=rb-4.1.0&q=85",
  echoes: "https://images.unsplash.com/photo-1776849442999-fefdd50e2720?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5JTIwZGFyayUyMG1vb2R8ZW58MHx8fHwxNzgwMTUyNzEzfDA&ixlib=rb-4.1.0&q=85",
};

export const SERVICES = [
  {
    slug: "production",
    n: "01",
    title: "Production & Post-Production",
    short: "Production",
    tagline: "From treatment to final cut — owned by a senior crew.",
    description:
      "End-to-end film production engineered for editorial cinema. We handle the pipeline from concept and casting through directing on-set, editorial, color, motion and VFX. Every project finishes in our Dolby-standard suite so it lands frame-perfect on any screen.",
    capabilities: [
      "Commercial Production",
      "Cinematography",
      "Video Editing",
      "Brand Films",
      "Advertising Campaigns",
      "Color Grading",
      "Motion Graphics",
      "Visual Effects",
      "Animation",
      "AI Image Creation",
      "AI Commercial Production",
      "Advanced Creative Editing",
    ],
    media: [
      { type: "video", title: "Midnight Run", platform: "Vimeo", id: "76979871", thumb: "midnight", aspect: "aspect-video" },
      { type: "image", title: "The Artisan", thumb: "artisan", aspect: "aspect-[4/5]" },
      { type: "image", title: "Set Build — Day 3", thumb: "set", aspect: "aspect-[16/10]" },
      { type: "video", title: "Echoes", platform: "Vimeo", id: "162804054", thumb: "echoes", aspect: "aspect-[16/10]" },
    ],
  },
  {
    slug: "social-media",
    n: "02",
    title: "Social Media Content Production",
    short: "Social Media",
    tagline: "Always-on content engines — native, vertical-first, on-brand.",
    description:
      "Editorial-grade content series built for platforms, not retrofitted to them. We design content systems, shoot in rolling sprints, and operate community channels with the same craft as a feature campaign.",
    capabilities: [
      "Social Media Management",
      "Content Planning",
      "Marketing Strategy",
      "Brand Strategy",
      "Graphic Design",
      "Community Management",
      "Brand Identity Design",
      "Vertical-First Shoots",
      "Series Development",
      "Platform Strategy",
    ],
    media: [
      { type: "image", title: "Studio Series — Q2", thumb: "vogue", aspect: "aspect-[4/5]" },
      { type: "video", title: "9:16 Brand Loop", platform: "Vimeo", id: "204939641", thumb: "echoes", aspect: "aspect-[9/16]" },
      { type: "image", title: "Behance Editorial", thumb: "artisan", aspect: "aspect-[3/4]" },
      { type: "video", title: "Always-On Reel", platform: "Vimeo", id: "1084537", thumb: "motion", aspect: "aspect-[16/10]" },
    ],
  },
  {
    slug: "audio",
    n: "03",
    title: "Audio & Sound Design",
    short: "Audio",
    tagline: "Cinema-grade sound design — built in a Dolby-standard environment.",
    description:
      "Sound is half the picture. Our audio team handles score, foley, sound design, mix and master in a calibrated environment, with a global voice library on call for casting and localization.",
    capabilities: [
      "Sound Design",
      "Audio Engineering",
      "Mixing & Mastering",
      "Cinematic Audio Processing",
      "Dolby Standard Studio Partnerships",
      "Voice Casting",
      "Multilingual Voice Library",
      "Global Voice Database",
      "Localization & Dubbing",
      "ADR & Foley",
    ],
    media: [
      { type: "image", title: "Mix Stage — Bay 02", thumb: "motion", aspect: "aspect-[16/10]" },
      { type: "video", title: "Score Session", platform: "Vimeo", id: "57989916", thumb: "set", aspect: "aspect-video" },
      { type: "image", title: "Voice Booth", thumb: "about", aspect: "aspect-[4/5]" },
      { type: "image", title: "Mastering — Stems", thumb: "vogue", aspect: "aspect-[3/4]" },
    ],
  },
];

export const WORK_CATEGORIES = ["All", "BTS", "Promotion", "TV Show", "Documentary", "Podcast", "Coverage"];

export const WORK_ITEMS = [
  { id: 1,  title: "Midnight Run",     category: "Promotion",   year: "2025", platform: "Vimeo",   embedId: "76979871", thumb: "midnight", aspect: "aspect-[16/10]", span: "lg:col-span-8" },
  { id: 2,  title: "The Artisan",      category: "Documentary", year: "2025", platform: "Behance", embedId: "189456231", thumb: "artisan",  aspect: "aspect-[3/4]",   span: "lg:col-span-4" },
  { id: 3,  title: "Vogue ✕ KRFTIST",  category: "Promotion",   year: "2024", platform: "Behance", embedId: "210334567", thumb: "vogue",    aspect: "aspect-[4/5]",   span: "lg:col-span-5" },
  { id: 4,  title: "Echoes",           category: "TV Show",     year: "2024", platform: "Vimeo",   embedId: "162804054", thumb: "echoes",   aspect: "aspect-[16/11]", span: "lg:col-span-7" },
  { id: 5,  title: "Behind the Frame", category: "BTS",         year: "2025", platform: "Vimeo",   embedId: "204939641", thumb: "set",      aspect: "aspect-[4/3]",   span: "lg:col-span-4" },
  { id: 6,  title: "Studio Diaries",   category: "BTS",         year: "2024", platform: "Vimeo",   embedId: "57989916",  thumb: "motion",   aspect: "aspect-[4/5]",   span: "lg:col-span-4" },
  { id: 7,  title: "The Long Take",    category: "Documentary", year: "2024", platform: "Vimeo",   embedId: "1084537",   thumb: "about",    aspect: "aspect-[16/10]", span: "lg:col-span-4" },
  { id: 8,  title: "Late Night Pod",   category: "Podcast",     year: "2025", platform: "Behance", embedId: "176556321", thumb: "artisan",  aspect: "aspect-[1/1]",   span: "lg:col-span-6" },
  { id: 9,  title: "Studio Sessions",  category: "Podcast",     year: "2024", platform: "Vimeo",   embedId: "21294655",  thumb: "vogue",    aspect: "aspect-[1/1]",   span: "lg:col-span-6" },
  { id: 10, title: "Cairo Live 2025",  category: "Coverage",    year: "2025", platform: "Vimeo",   embedId: "162804054", thumb: "midnight", aspect: "aspect-[16/9]",  span: "lg:col-span-8" },
  { id: 11, title: "Riyadh Showcase",  category: "Coverage",    year: "2024", platform: "Behance", embedId: "198812445", thumb: "echoes",   aspect: "aspect-[4/5]",   span: "lg:col-span-4" },
  { id: 12, title: "Frames of Cairo",  category: "TV Show",     year: "2023", platform: "Vimeo",   embedId: "204939641", thumb: "motion",   aspect: "aspect-[16/10]", span: "lg:col-span-6" },
];

export const ARTICLES = [
  {
    id: "the-craftsman-method",
    title: "The Craftsman's Method — Why We Treat Production Like a Workshop",
    excerpt:
      "Inside the KRFTIST studio, we approach every shoot like a master artisan approaches their bench: with discipline, patience, and obsessive attention to the joinery.",
    date: "May 28, 2026",
    readTime: "6 min read",
    category: "Craft",
    thumb: "set",
  },
  {
    id: "vertical-first-thinking",
    title: "Vertical-First Thinking — Designing for the Platform, Not Around It",
    excerpt:
      "Most brands still treat social as the cutdown. We argue it should be the master file. Notes from three years of platform-native production.",
    date: "May 14, 2026",
    readTime: "8 min read",
    category: "Social",
    thumb: "vogue",
  },
  {
    id: "dolby-standard-room",
    title: "Why We Built a Dolby-Standard Room (and Why You Should Care)",
    excerpt:
      "Sound is half the picture. A walkthrough of the calibration, room acoustics, and signal chain that anchors our finishing pipeline.",
    date: "April 30, 2026",
    readTime: "7 min read",
    category: "Audio",
    thumb: "motion",
  },
  {
    id: "treatment-to-final-cut",
    title: "From Treatment to Final Cut — A Six-Week Diary",
    excerpt:
      "We opened the production binder of our latest brand film and turned it into a six-week BTS diary. Every step, every decision, every reshoot.",
    date: "April 12, 2026",
    readTime: "12 min read",
    category: "BTS",
    thumb: "midnight",
  },
  {
    id: "casting-the-voice",
    title: "Casting the Voice — Notes from a Global Voice Library",
    excerpt:
      "How we built our multilingual voice database, what we look for in casting, and the regional dialects that win briefs in MENA and beyond.",
    date: "March 29, 2026",
    readTime: "5 min read",
    category: "Audio",
    thumb: "about",
  },
  {
    id: "tv-show-pipeline",
    title: "Inside a Modern TV Show Pipeline — 12 Episodes in 90 Days",
    excerpt:
      "What it actually takes to ship a serialized show on a modern broadcast timeline. Lessons from the trenches.",
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "TV",
    thumb: "artisan",
  },
];

export const SERVICE_CHOICES = [
  "Video Production",
  "Social Content",
  "Post-Production",
  "Audio & Sound",
  "Brand Identity",
  "Motion Design",
];
