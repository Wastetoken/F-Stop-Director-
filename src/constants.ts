import { Preset } from "./types";

export const APERTURES = ["None", "f/0.7", "f/1.2", "f/1.4", "f/1.8", "f/2", "f/2.4", "f/2.8", "f/4", "f/4.5", "f/5.6", "f/8", "f/11", "f/16", "f/22", "f/32", "f/45", "f/64"];
export const SHUTTERS = ["None", "Bulb", "30s", "15s", "8s", "4s", "2s", "1s", "1/2s", "1/4s", "1/8s", "1/15s", "1/30s", "1/48s", "1/60s", "1/125s", "1/160s", "1/200s", "1/250s", "1/320s", "1/500s", "1/1000s", "1/1250s", "1/2000s", "1/4000s"];
export const ISOS = ["None", "1", "3", "5", "10", "25", "50", "64", "100", "200", "400", "500", "800", "1600", "3200", "6400"];
export const LIGHTINGS = ["None", "Natural Light", "Direct Sunlight", "Soft Overcast", "Golden Hour", "Natural Window Light / Diffused HMI", "Studio Softbox", "High Key White Cyc", "Studio Hard Light", "Large Octabank or Photek Softlighter", "Gradient Scrims / Backlit", "Ring Light", "Direct Ring Flash / Hard Strobe", "Hard Strobe", "Hard Strobe (Zoom Reflector)", "Direct Flash", "Neon Practical", "Candlelight", "Stadium Lights", "Underwater Ambient", "Available Light", "Available light (natural)"];
export const TODS = ["None", "Golden Hour", "Blue Hour", "Midday", "Overcast", "Night", "Dawn", "Dusk", "Twilight"];
export const COLOR_GRADES = ["None", "Cinematic", "Vintage", "Moody", "High Contrast", "Desaturated", "Warm Tones", "Cool Tones", "Teal & Orange", "Bleach Bypass"];
export const COMPOSITIONS = ["None", "Rule of Thirds", "Centered", "Leading Lines", "Centered / Floating Head", "Centered & Symmetrical", "Wide Tableau", "Dynamic/Snapshot", "Environmental Portrait / Tableau", "Voyeuristic/Cropped", "High Angle (Bird's Eye)", "Low Angle Hero", "Top-down Flat Lay", "Over-the-shoulder", "Wide Establishing", "Tight Close-up", "Side Profile", "Environmental Portrait", "Candid Snapshot", "Asymmetric Framing", "Peek-through", "Symmetrical Arch", "Layered Depth", "Layered Abstraction", "Geometry & layered framing"];
export const CAMERAS = ["None", "Sony Alpha 1", "Canon EOS R3", "Nikon Z9", "Sony A7 IV", "Sony A7R V", "Canon EOS R5 II", "Nikon Z5 II", "Fujifilm X-T5", "Fujifilm GFX 100S II", "Hasselblad X2D 100C", "Phase One XF IQ4", "Leica SL3", "iPhone 16 Pro", "Hasselblad H6D", "Hasselblad H6D-100c", "Nikon D850", "Canon EOS 5D Mark IV", "DJI Mavic 3", "Arri Alexa 35", "Arri Alexa LF", "Red V-Raptor", "Arri Alexa 65", "Leica M3", "Leica M3 (35mm rangefinder, black paint)", "Leica M6", "Nikon F3", "Nikon F5", "Nikon F6", "Canon EOS 1v", "Contax T2", "Ricoh GR21", "Canon Rangefinder", "Rolleiflex 2.8F", "Hasselblad 500C/M", "Hasselblad 555ELD", "Pentax 67", "Pentax 67II", "Pentax 645", "Mamiya RZ67", "Speed Graphic 4x5", "Deardorff 8x10", "Large Format 4x5", "Large Format 8x10", "Voigtländer Bergheil", "Graflex Series D", "Arriflex 35 BL", "Arricam ST", "Panavision PSR", "Mitchell BNC", "Technicolor 3-Strip Camera", "IMAX 15/65", "Polaroid SX-70", "Sony VX1000", "Contact Print"];
export const LENS_CHARS = ["None", "Clinical Sharp", "Vintage Softness", "Dreamy Bloom", "Painterly & Soft", "Gentle Halation", "High Contrast & Saturated", "Clinical & Distortion-Free", "High Fidelity / Painterly Softness", "Sharp & High Contrast", "Chromatic Aberration", "Distorted & Sharp", "Heavy Vignette", "Swirly Bokeh", "Petzval Curvature", "Telephoto Compression", "Vintage Low Contrast", "High micro-contrast, gentle flare/halation, subtle vignetting"];
export const FILMS = ["None", "Kodak Portra 400", "Kodak Portra 160", "Kodak Portra 800", "Fuji Pro 400H", "Kodak Gold 200", "Kodak Gold 400", "Kodak Portra 400NC (Overexposed)", "Kodak Vision3 500T (5219)", "Kodak Vision3 250D (5207)", "Kodak Vision3 200T (5213)", "Cinestill 800T", "Kodak 5247 100T (70s/80s)", "Kodak 5293 200T", "Technicolor Three-Strip", "Eastman Double-X 5222", "Kodak Tri-X 400", "Kodak Tri-X 400 (35mm B&W)", "Kodak Tri-X 400 (Pushed)", "Kodak Tri-X B&W", "Ilford HP5", "Ilford HP5 Plus", "Kodachrome 64", "Fujichrome Velvia", "Fujichrome Velvia 50", "Kodak Ektachrome", "Kodak Ektachrome E100", "Wet Plate Collodion", "Nitrate Film", "Autochrome Plate", "Kodak Aerochrome (IR)", "Polaroid 600", "Polaroid Type 55", "Digital Sensor", "16-bit Digital Raw", "Medium Format Digital", "Digital Video Tape (DV)", "Expired Kodachrome", "B&W Sheet Film"];
export const WBS = ["None", "Daylight Balanced", "Warm Tungsten", "Cool Shade", "Mixed Lighting", "Monochrome", "B&W (N/A)", "Flash Balanced", "5500K (Flash)", "Warm/Magenta Shift"];
export const GRAINS = ["None", "Clean/No Grain", "Zero Grain", "Fine/Low Grain", "Subtle Grain", "Medium Texture", "Classic pronounced grain", "Heavy Grit", "Heavy Silver Halide", "Fine Color Grain", "Organic Medium", "Very Fine", "Fine Dye Cloud"];
export const PRODUCT_SUBGENRES = ["None", "Ecommerce Packshot", "Luxury Jewelry Macro", "Watch Hero", "Cosmetics / Liquids", "Cosmetics Splash", "Sneaker Floating", "Tech Gadget Hero", "Beverage Condensation", "Food Editorial", "Tabletop Styled"];
export const AI_MODELS = ["Midjourney v6.1", "Midjourney v6", "Midjourney v5.2", "DALL-E 3", "Stable Diffusion XL", "Stable Diffusion 3", "Flux Pro 1.1", "Flux Dev", "Flux Schnell", "Leonardo AI", "Adobe Firefly", "Ideogram 2.0"];
export const ASPECT_RATIOS = ["1:1", "4:3", "3:2", "16:9", "21:9", "9:16", "4:5"];
export const GENRES = ["portrait", "fashion", "street", "landscape", "product", "cinematic", "night", "sports", "wildlife", "architecture", "experimental", "abstract street"];

export const LENSES_BY_GENRE: Record<string, string[]> = {
  portrait: ["35mm env", "50mm prime", "85mm prime", "105mm prime", "135mm prime", "70-200mm zoom"],
  fashion: ["SMC Pentax 55mm f/4", "35mm prime", "50mm prime", "85mm prime", "24-70mm zoom", "70-200mm zoom"],
  street: ["24mm prime", "28mm prime", "35mm prime", "50mm prime", "Leitz Summicron 50mm f/2 (collapsible)", "24-70mm zoom"],
  landscape: ["14-24mm wide", "16-35mm wide", "24mm prime", "24-70mm zoom", "70-200mm tele"],
  product: ["50mm prime", "85mm prime", "60mm macro", "100mm macro", "90mm tilt-shift"],
  cinematic: ["24mm prime", "35mm prime", "50mm prime", "85mm prime", "40mm anamorphic"],
  night: ["24mm prime", "35mm prime", "50mm prime", "85mm prime"],
  sports: ["70-200mm zoom", "100-400mm tele", "300mm prime"],
  wildlife: ["100-400mm tele", "200-600mm super-tele", "400mm prime", "600mm prime"],
  architecture: ["14-24mm wide", "16-35mm wide", "24mm tilt-shift", "17mm tilt-shift"],
  experimental: ["8mm fisheye", "50mm prime", "45mm tilt-shift"],
  "abstract street": ["90mm Elmar f/4", "50mm prime", "35mm prime", "90mm tele"]
};

export const LIGHTING_SETUPS = [
  { label: "Softbox Key", phrase: "45 degree softbox key, white bounce fill" },
  { label: "Butterfly", phrase: "butterfly lighting, single light source placed high above lens" },
  { label: "Negative Fill", phrase: "negative fill, black flags" },
  { label: "Rim Light", phrase: "strip rim light, edge definition" },
  { label: "Ring Light", phrase: "ring light fill" },
  { label: "Window Side", phrase: "window side light, soft falloff" }
];

export const PRESETS: Preset[] = [
  { id: "none", title: "None", desc: "Manual mode", category: "Core", data: {} },
  {
    id: "cartier-bresson",
    title: "Henri Cartier-Bresson",
    category: "Master Series",
    desc: "The Decisive Moment - Leica M3",
    image: "https://upload.wikimedia.org/wikipedia/en/2/29/Henri_Cartier-Bresson_-_The_Decisive_Moment.jpg",
    data: {
      genre: "street",
      camera: "Leica M3",
      lens: "50mm prime",
      aperture: "f/8",
      shutter: "1/125s",
      iso: "400",
      mood: "Decisive moment, geometric precision, candid street life",
      lensChar: "Vintage Low Contrast",
      film: "Kodak Tri-X 400",
      wb: "B&W (N/A)",
      grain: "Classic pronounced grain",
      composition: "Rule of Thirds"
    }
  },
  {
    id: "fan-ho",
    title: "Fan Ho",
    category: "Master Series",
    desc: "Hong Kong Chiaroscuro - Rolleiflex",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Approaching_Shadow_by_Fan_Ho.jpg",
    data: {
      genre: "street",
      camera: "Rolleiflex 2.8F",
      lens: "75mm prime",
      aperture: "f/5.6",
      shutter: "1/250s",
      iso: "100",
      mood: "Extreme light and shadow, geometric urbanism, dramatic",
      film: "B&W Sheet Film",
      wb: "B&W (N/A)",
      lighting: "Direct Sunlight",
      colorGrade: "High Contrast",
      composition: "Leading Lines"
    }
  },
  {
    id: "ansel-adams",
    title: "Ansel Adams",
    category: "Master Series",
    desc: "Zone System Master - Large Format 8x10",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ansel_Adams_-_The_Tetons_and_the_Snake_River.jpg",
    data: {
      genre: "landscape",
      camera: "Large Format 8x10",
      lens: "24mm prime",
      aperture: "f/64",
      shutter: "1s",
      iso: "50",
      mood: "Majestic, high contrast, immense scale, deep blacks",
      lensChar: "Clinical Sharp",
      film: "B&W Sheet Film",
      wb: "B&W (N/A)",
      grain: "Very Fine",
      lighting: "Direct Sunlight",
      colorGrade: "High Contrast"
    }
  },
  {
    id: "robert-frank",
    title: "Robert Frank",
    category: "Master Series",
    desc: "The Americans - Gritty Documentary",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "street",
      camera: "Leica M3",
      lens: "35mm prime",
      aperture: "f/4",
      shutter: "1/60s",
      iso: "400",
      mood: "Candid, raw, slightly blurry, social critique, honest",
      film: "Kodak Tri-X 400 (Pushed)",
      wb: "B&W (N/A)",
      grain: "Heavy Grit",
      lensChar: "Vintage Softness"
    }
  },
  {
    id: "william-eggleston",
    title: "William Eggleston",
    category: "Master Series",
    desc: "The Color Red - Dye Transfer style",
    image: "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "experimental",
      camera: "Leica M6",
      lens: "35mm prime",
      aperture: "f/5.6",
      shutter: "1/125s",
      iso: "200",
      mood: "Hyper-saturated dye transfer, the mundane made strange",
      film: "Kodachrome 64",
      wb: "Warm/Magenta Shift",
      colorGrade: "Vintage",
      lighting: "Hard Strobe (Zoom Reflector)"
    }
  },
  {
    id: "steve-mccurry",
    title: "Steve McCurry",
    category: "Master Series",
    desc: "National Geographic - Kodachrome Style",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "portrait",
      camera: "Nikon D850",
      lens: "85mm prime",
      aperture: "f/2.8",
      shutter: "1/250s",
      iso: "400",
      mood: "Soulful, vivid human connection, intense gaze",
      film: "Kodachrome 64",
      lensChar: "High Fidelity / Painterly Softness",
      wb: "Warm Tungsten",
      lighting: "Soft Overcast",
      colorGrade: "Warm Tones"
    }
  },
  {
    id: "annie-leibovitz",
    title: "Annie Leibovitz",
    category: "Master Series",
    desc: "Vanity Fair Editorial - Digital Medium Format",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "fashion",
      camera: "Phase One XF IQ4",
      lens: "80mm prime",
      aperture: "f/5.6",
      shutter: "1/125s",
      iso: "100",
      mood: "Painterly, soft editorial, celebrity status",
      lighting: "Studio Softbox",
      colorGrade: "Cinematic",
      lensChar: "Painterly & Soft",
      composition: "Wide Tableau"
    }
  },
  {
    id: "peter-lindbergh",
    title: "Peter Lindbergh",
    category: "Master Series",
    desc: "Raw Monochrome Realism - TRI-X Style",
    image: "https://images.unsplash.com/photo-1544717297-fa157ef09fb7?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "fashion",
      camera: "Nikon F5",
      lens: "85mm prime",
      aperture: "f/2",
      shutter: "1/250s",
      iso: "400",
      mood: "Unretouched, raw emotion, cinematic grit, natural",
      film: "Kodak Tri-X 400",
      wb: "B&W (N/A)",
      grain: "Classic pronounced grain",
      lighting: "Soft Overcast"
    }
  },
  {
    id: "helmut-newton",
    title: "Helmut Newton",
    category: "Master Series",
    desc: "High Gloss Eroticism - Wide Angle",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "fashion",
      camera: "Leica SL3",
      lens: "35mm prime",
      aperture: "f/4",
      shutter: "1/500s",
      iso: "100",
      mood: "Aggressive, erotic, powerful, cool tones, stark",
      lighting: "Hard Strobe",
      wb: "Cool Shade",
      colorGrade: "High Contrast",
      composition: "Low Angle Hero"
    }
  },
  {
    id: "gregory-crewdson",
    title: "Gregory Crewdson",
    category: "Master Series",
    desc: "Suburban Surrealism - Large Format",
    image: "https://images.unsplash.com/photo-1502472545331-526487e411f1?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "cinematic",
      camera: "Large Format 8x10",
      lens: "35mm prime",
      aperture: "f/11",
      shutter: "30s",
      iso: "100",
      mood: "Eerie, suburban isolation, twilight fog, cinematic staging",
      lighting: "Mixed Lighting",
      timeOfDay: "Twilight",
      colorGrade: "Moody",
      lensChar: "Clinical & Distortion-Free"
    }
  },
  {
    id: "roger-deakins",
    title: "Roger Deakins",
    category: "Master Series",
    desc: "Blade Runner 2049 Style - Arri Alexa LF",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "cinematic",
      camera: "Arri Alexa LF",
      lens: "40mm anamorphic",
      aperture: "f/2.8",
      shutter: "1/48s",
      iso: "800",
      mood: "Atmospheric, orange and teal, masterful haze",
      lighting: "Gradient Scrims / Backlit",
      timeOfDay: "Dusk",
      colorGrade: "Teal & Orange",
      lensChar: "Gentle Halation"
    }
  },
  {
    id: "wes-anderson",
    title: "Wes Anderson",
    category: "Master Series",
    desc: "Symmetry & Pastel - Cinematic Palette",
    image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "cinematic",
      camera: "Arriflex 35 BL",
      lens: "40mm anamorphic",
      aperture: "f/5.6",
      shutter: "1/48s",
      iso: "200",
      mood: "Perfectly centered symmetry, pastel palette, flat, whimsical",
      lighting: "Studio Softbox",
      colorGrade: "Warm Tones",
      composition: "Centered & Symmetrical",
      aspectRatio: "21:9"
    }
  },
  {
    id: "nan-goldin",
    title: "Nan Goldin",
    category: "Master Series",
    desc: "The Ballad of Sexual Dependency",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "experimental",
      camera: "Ricoh GR21",
      lens: "28mm prime",
      aperture: "f/2.8",
      shutter: "1/60s",
      iso: "800",
      mood: "Raw, intimate, flash-heavy, domestic chaos, messy",
      lighting: "Direct Flash",
      colorGrade: "Moody",
      grain: "Medium Texture",
      lensChar: "Heavy Vignette"
    }
  },
  {
    id: "daido-moriyama",
    title: "Daido Moriyama",
    category: "Master Series",
    desc: "Stray Dog Style - Shinjuku",
    image: "https://images.unsplash.com/photo-1502139214982-d0ad34e71260?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "abstract street",
      camera: "Ricoh GR III",
      lens: "28mm prime",
      aperture: "f/5.6",
      shutter: "1/500s",
      iso: "3200",
      mood: "Gritty, high contrast B&W, blurry, grainy, Shinjuku street life",
      film: "Kodak Tri-X 400 (Pushed)",
      wb: "B&W (N/A)",
      grain: "Heavy Grit",
      colorGrade: "High Contrast",
      composition: "Dynamic/Snapshot"
    }
  },
  {
    id: "stephen-shore",
    title: "Stephen Shore",
    category: "Master Series",
    desc: "Uncommon Places - 8x10 Color",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "landscape",
      camera: "Large Format 8x10",
      lens: "24mm prime",
      aperture: "f/16",
      shutter: "1/2s",
      iso: "100",
      mood: "Dispassionate, extremely detailed, mundane American landscape",
      film: "Kodak Portra 160",
      wb: "Daylight Balanced",
      lensChar: "Clinical & Distortion-Free",
      colorGrade: "Vintage"
    }
  },
  {
    id: "richard-avedon",
    title: "Richard Avedon",
    category: "Master Series",
    desc: "In The American West - 8x10 Portrait",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "portrait",
      camera: "Large Format 8x10",
      lens: "135mm prime",
      aperture: "f/22",
      shutter: "1/60s",
      iso: "100",
      mood: "Stark, high detail, white background, piercing gaze",
      lighting: "High Key White Cyc",
      film: "B&W Sheet Film",
      wb: "B&W (N/A)",
      grain: "Zero Grain",
      composition: "Centered / Floating Head"
    }
  },
  {
    id: "irving-penn",
    title: "Irving Penn",
    category: "Master Series",
    desc: "Vogue Still Life & Portrait",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "fashion",
      camera: "Hasselblad 500C/M",
      lens: "80mm prime",
      aperture: "f/11",
      shutter: "1/125s",
      iso: "100",
      mood: "Elegance, deep blacks, master of lighting and form",
      lighting: "Large Octabank or Photek Softlighter",
      film: "B&W Sheet Film",
      wb: "B&W (N/A)",
      lensChar: "Sharp & High Contrast",
      colorGrade: "High Contrast"
    }
  },
  {
    id: "diane-arbus",
    title: "Diane Arbus",
    category: "Master Series",
    desc: "Square Format Outsiders",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "portrait",
      camera: "Rolleiflex 2.8F",
      lens: "75mm prime",
      aperture: "f/5.6",
      shutter: "1/125s",
      iso: "400",
      mood: "Uncomfortable intimacy, direct gaze, marginalization",
      film: "Kodak Tri-X 400",
      wb: "B&W (N/A)",
      aspectRatio: "1:1",
      lighting: "Direct Flash"
    }
  },
  {
    id: "sally-mann",
    title: "Sally Mann",
    category: "Master Series",
    desc: "Immediate Family - Large Format B&W",
    image: "https://images.unsplash.com/photo-1517841229753-8d61ba08208a?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "portrait",
      camera: "Large Format 8x10",
      lens: "50mm prime",
      aperture: "f/11",
      shutter: "1/30s",
      iso: "100",
      mood: "Ethereal, childhood, vulnerability, Southern gothic, soft focused",
      film: "Wet Plate Collodion",
      wb: "B&W (N/A)",
      lensChar: "Petzval Curvature",
      grain: "Organic Medium"
    }
  },
  {
    id: "alec-soth",
    title: "Alec Soth",
    category: "Master Series",
    desc: "Sleeping by the Mississippi",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "landscape",
      camera: "Large Format 8x10",
      lens: "35mm prime",
      aperture: "f/22",
      shutter: "1/8s",
      iso: "160",
      mood: "Lyrical, quiet, American vernacular, large format color",
      film: "Kodak Portra 160",
      wb: "Daylight Balanced",
      colorGrade: "Vintage",
      composition: "Rule of Thirds"
    }
  },
  {
    id: "cindy-sherman",
    title: "Cindy Sherman",
    category: "Master Series",
    desc: "Untitled Film Stills",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "cinematic",
      camera: "Nikon F3",
      lens: "50mm prime",
      aperture: "f/2.8",
      shutter: "1/60s",
      iso: "400",
      mood: "Performance, female identity, cinema tropes, voyeuristic",
      film: "Eastman Double-X 5222",
      wb: "B&W (N/A)",
      grain: "Classic pronounced grain",
      composition: "Voyeuristic/Cropped"
    }
  },
  {
    id: "hiroshi-sugimoto",
    title: "Hiroshi Sugimoto",
    category: "Master Series",
    desc: "Seascapes & Theaters",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "landscape",
      camera: "Large Format 8x10",
      lens: "50mm prime",
      aperture: "f/64",
      shutter: "Bulb",
      iso: "50",
      mood: "Long exposure, minimalist, conceptual, spiritual, infinite",
      film: "B&W Sheet Film",
      wb: "B&W (N/A)",
      grain: "Very Fine",
      composition: "Centered & Symmetrical"
    }
  },
  {
    id: "saul-leiter",
    title: "Saul Leiter",
    category: "Master Series",
    desc: "Early Color - Through Glass",
    image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "abstract street",
      camera: "Leica M3",
      lens: "90mm tele",
      aperture: "f/4",
      shutter: "1/60s",
      iso: "200",
      mood: "Painterly color, compression, condensation, abstract urbanism",
      film: "Kodachrome 64",
      wb: "Warm/Magenta Shift",
      lensChar: "Swirly Bokeh",
      composition: "Peek-through"
    }
  },
  {
    id: "walker-evans",
    title: "Walker Evans",
    category: "Master Series",
    desc: "American Photographs - FSA B&W",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "street",
      camera: "Large Format 8x10",
      lens: "50mm prime",
      aperture: "f/11",
      shutter: "1/30s",
      iso: "100",
      mood: "Clear-eyed, direct, American life, documentary rigor, signage",
      film: "B&W Sheet Film",
      wb: "B&W (N/A)",
      grain: "Zero Grain",
      composition: "Centered"
    }
  },
  {
    id: "dorothea-lange",
    title: "Dorothea Lange",
    category: "Master Series",
    desc: "FSA Documentary - Migrant Mother",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "portrait",
      camera: "Graflex Series D",
      lens: "135mm prime",
      aperture: "f/4.5",
      shutter: "1/100s",
      iso: "400",
      mood: "Humanity, dignity in suffering, documentary, close-up",
      film: "B&W Sheet Film",
      wb: "B&W (N/A)",
      grain: "Medium Texture",
      composition: "Tight Close-up"
    }
  },
  {
    id: "gordon-parks",
    title: "Gordon Parks",
    category: "Master Series",
    desc: "Life Magazine - Social Justice",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "street",
      camera: "Nikon F",
      lens: "35mm prime",
      aperture: "f/5.6",
      shutter: "1/250s",
      iso: "400",
      mood: "Powerful narrative, intersection of race and poverty, cinema style",
      film: "Kodak Tri-X 400",
      wb: "B&W (N/A)",
      grain: "Classic pronounced grain",
      composition: "Environmental Portrait / Tableau"
    }
  },
  {
    id: "sebastiao-salgado",
    title: "Sebastião Salgado",
    category: "Master Series",
    desc: "Genesis - Massive B&W Detail",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "landscape",
      camera: "Canon EOS 1v",
      lens: "24mm prime",
      aperture: "f/11",
      shutter: "1/250s",
      iso: "400",
      mood: "Epic scale, high contrast, immense detail, nature as God",
      film: "Kodak Tri-X 400 (Pushed)",
      wb: "B&W (N/A)",
      grain: "Heavy Grit",
      colorGrade: "High Contrast"
    }
  },
  {
    id: "martin-parr",
    title: "Martin Parr",
    category: "Master Series",
    desc: "The Last Resort - Satirical Color",
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "street",
      camera: "Makina 67",
      lens: "80mm prime",
      aperture: "f/11",
      shutter: "1/125s",
      iso: "400",
      mood: "Satirical, high saturation, ring flash, class commentary",
      lighting: "Direct Ring Flash / Hard Strobe",
      film: "Fujichrome Velvia",
      wb: "Daylight Balanced",
      colorGrade: "Vintage"
    }
  },
  {
    id: "bruce-gilden",
    title: "Bruce Gilden",
    category: "Master Series",
    desc: "Aggressive Street Portraits - Flash",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "street",
      camera: "Leica M6",
      lens: "28mm prime",
      aperture: "f/8",
      shutter: "1/500s",
      iso: "400",
      mood: "Aggressive, close-up street portraits, direct flash, gritty",
      lighting: "Direct Flash",
      film: "Kodak Tri-X 400",
      wb: "B&W (N/A)",
      grain: "Heavy Grit"
    }
  },
  {
    id: "alex-webb",
    title: "Alex Webb",
    category: "Master Series",
    desc: "Complex Geometry & Color",
    image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "street",
      camera: "Leica M6",
      lens: "35mm prime",
      aperture: "f/8",
      shutter: "1/250s",
      iso: "200",
      mood: "Complex layered compositions, vibrant colors, shadows, geometry",
      film: "Kodachrome 64",
      wb: "Daylight Balanced",
      colorGrade: "High Contrast",
      composition: "Layered Depth"
    }
  },
  {
    id: "todd-hido",
    title: "Todd Hido",
    category: "Master Series",
    desc: "Suburban Night - House Hunting",
    image: "https://images.unsplash.com/photo-1502472545331-526487e411f1?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "night",
      camera: "Pentax 67",
      lens: "50mm prime",
      aperture: "f/4",
      shutter: "15s",
      iso: "400",
      mood: "Lonely, suburban night, glowing windows, fog, cinematic longing",
      film: "Fuji Pro 400H (Pushed)",
      wb: "Mixed Lighting",
      lighting: "Available Light",
      colorGrade: "Moody"
    }
  },
  {
    id: "tim-walker",
    title: "Tim Walker",
    category: "Contemporary",
    desc: "Fantasy & Surrealism - Vogue",
    image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "fashion",
      camera: "Pentax 67II",
      lens: "55mm prime",
      aperture: "f/4",
      shutter: "1/125s",
      iso: "100",
      mood: "Whimsical, fairytale, British eccentricity",
      lighting: "Studio Softbox",
      colorGrade: "Warm Tones",
      lensChar: "Dreamy Bloom"
    }
  },
  {
    id: "nick-knight",
    title: "Nick Knight",
    category: "Contemporary",
    desc: "Boundary Pushing - SHOWstudio",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300",
    data: {
      genre: "fashion",
      camera: "Phase One XF IQ4",
      lens: "80mm prime",
      aperture: "f/11",
      shutter: "1/200s",
      iso: "100",
      mood: "Experimental, digital manipulation, avant-garde, sculpture",
      lighting: "Hard Strobe",
      colorGrade: "High Contrast",
      grain: "Clean/No Grain"
    }
  }
];
