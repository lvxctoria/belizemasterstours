import tourSharkRayAsset from "@/assets/tour-sharkray-real.jpg.asset.json";
import tourCayeCaulkerAsset from "@/assets/tour-cayecaulker-real.jpg.asset.json";
import tourBbqAsset from "@/assets/tour-bbq-real.jpg.asset.json";
import tourCaveAsset from "@/assets/tour-cave.jpg.asset.json";
import tourBacalarAsset from "@/assets/gallery-img_6029.jpeg.asset.json";
import { assetUrl } from "./asset-url";

export type Tour = {
  slug: string;
  title: string;
  price: string;
  duration: string;
  tag: string;
  desc: string;
  image: string;
  highlights: string[];
  longDesc: string[];
  includes: string[];
  bringAlong: string[];
  meetingPoint: string;
};

export const PHONE = "+5016228957";
export const PHONE_DISPLAY = "+501 622-8957";
export const WHATSAPP = `https://wa.me/5016228957?text=${encodeURIComponent(
  "Hi Belize Masters Tours! I'd like to book a tour."
)}`;

export const tours: Tour[] = [
  {
    slug: "hol-chan-shark-ray-alley",
    title: "Hol Chan & Shark Ray Alley",
    price: "From $75",
    duration: "3h 30m",
    tag: "Most Popular",
    desc: "Snorkel the crown jewel of Belize's barrier reef and swim beside nurse sharks and stingrays in crystal-clear water.",
    image: tourSharkRayAsset.url,
    highlights: ["Hol Chan Marine Reserve", "Swim with sharks & rays", "All gear included"],
    longDesc: [
      "Belize's most iconic half-day snorkel. We cruise 15 minutes south of San Pedro to Hol Chan Marine Reserve, a protected cut in the barrier reef teeming with sea turtles, moray eels, snapper, grouper, and dazzling reef fish.",
      "From there it's a short hop to the world-famous Shark Ray Alley, where you'll slip into the water surrounded by gentle nurse sharks and southern stingrays gliding right beside you — an experience you'll never forget.",
      "Our captains have grown up in these waters and know every coral head. Small groups, easy pace, unbeatable photos.",
    ],
    includes: ["Boat transportation from San Pedro", "Certified local guide", "Snorkel gear, mask, fins & vest", "Marine reserve fees", "Bottled water & fresh fruit"],
    bringAlong: ["Reef-safe sunscreen", "Towel & swimsuit", "GoPro or waterproof camera", "Cash for tips"],
    meetingPoint: "Belize Masters Tours dock — 1 Front Street, San Pedro Town",
  },
  {
    slug: "caye-caulker-day-trip",
    title: "Caye Caulker Island Day Trip",
    price: "From $150",
    duration: "7h",
    tag: "Full Day",
    desc: "Two-reef snorkel plus island time on laid-back Caye Caulker — fresh seafood, palm trees and the famous Split.",
    image: tourCayeCaulkerAsset.url,
    highlights: ["Hol Chan + Shark Ray Alley", "Free time on Caye Caulker", "Round-trip boat"],
    longDesc: [
      "Combine Belize's best snorkeling with a full afternoon on its most laid-back island. We start the morning at Hol Chan Marine Reserve and Shark Ray Alley, then cruise north to Caye Caulker.",
      "Once we dock, you're free to wander sandy streets, grab lunch at a beachfront grill, cool off at the famous Split, or shop for local souvenirs — all on 'Go Slow' island time.",
      "We meet back at the dock in the late afternoon for the scenic boat ride back to San Pedro, often with dolphins riding the wake.",
    ],
    includes: ["Round-trip boat transport", "Local guide", "All snorkel gear", "Two snorkel stops", "Marine park fees"],
    bringAlong: ["Cash for lunch & drinks on Caye Caulker", "Reef-safe sunscreen", "Hat & sunglasses", "Waterproof camera"],
    meetingPoint: "Belize Masters Tours dock — 1 Front Street, San Pedro Town",
  },
  {
    slug: "fishing-snorkel-beach-bbq",
    title: "Fishing, Snorkel & Beach BBQ",
    price: "From $135",
    duration: "Private Day",
    tag: "Private Charter",
    desc: "Your own boat, your own captain. Reef fishing, snorkeling stops and a fresh-caught barbecue on a private beach.",
    image: tourBbqAsset.url,
    highlights: ["Private group charter", "Catch & grill on the beach", "Fully customizable"],
    longDesc: [
      "A private charter built around your group. We head out to prime reef spots for a morning of light-tackle fishing — snapper, grouper, jack, barracuda — with all rods and bait on board.",
      "After the bite, we anchor over a shallow reef for a snorkel, then run to a secluded beach where your captain grills the fresh catch over open fire with rice, beans and salad.",
      "One last snorkel on the way home. Perfect for families, friends and anyone who wants a true 'day in the life' of a Belizean fisherman.",
    ],
    includes: ["Private boat & captain", "Fishing rods, tackle & bait", "Snorkel gear", "Fresh-caught beach BBQ lunch", "Rum punch & bottled water"],
    bringAlong: ["Swimsuit & towel", "Sunscreen & hat", "Cooler / extra drinks if desired"],
    meetingPoint: "Belize Masters Tours dock — 1 Front Street, San Pedro Town",
  },
  {
    slug: "bacalar-chico-snorkel-bbq",
    title: "Bacalar Chico Snorkel & Beach BBQ",
    price: "From $165",
    duration: "Full Day",
    tag: "Hidden Gem",
    desc: "Cruise the mangrove river hunting for manatees, snorkel pristine Rocky Point reef, then feast on a fresh BBQ lunch on a secluded beach — capped with sharks and rays on the way home.",
    image: tourBacalarAsset.url,
    highlights: ["Manatee spotting river", "Rocky Point reef snorkel", "Private beach BBQ lunch"],
    longDesc: [
      "The northern-Belize adventure locals love most. We cruise up through Bacalar Chico National Park, drifting a quiet mangrove river where manatees come to rest and feed.",
      "Next stop is Rocky Point — the only place in the Caribbean where the barrier reef touches the shore. We snorkel drift here in vibrant, untouched coral before beaching for a fresh BBQ lunch on a private stretch of sand.",
      "On the way back we make one last snorkel stop at Shark Ray Alley to swim with the sharks and rays. You're back at your hotel around 4:30 pm, salty and smiling. Minimum 5 guests, US$165 per person from San Pedro Town.",
    ],
    includes: ["Full-day boat charter", "Guided mangrove & reef snorkels", "Beach BBQ lunch", "Snorkel gear & park fees", "Bottled water & rum punch"],
    bringAlong: ["Reef-safe sunscreen", "Towel & change of clothes", "Waterproof camera", "Hat & sunglasses"],
    meetingPoint: "Hotel pickup around San Pedro Town area",
  },
  {
    slug: "cave-tubing-zip-line",
    title: "Cave Tubing & Zip Line Adventure",
    price: "From $230",
    duration: "Full Day",
    tag: "Epic Adventure",
    desc: "The ultimate mainland day: soar through the jungle canopy on zip lines, then float on a tube through ancient Mayan caves. Boat transfer, breakfast and lunch all included.",
    image: tourCaveAsset.url,
    highlights: ["Jungle zip lining", "Guided cave tubing", "Breakfast & lunch included"],
    longDesc: [
      "An all-day mainland adventure that starts with an early boat transfer from San Pedro to Belize City, where an air-conditioned van whisks you into the rainforest.",
      "First up: zip lining through the jungle canopy on a series of platforms with sweeping views. Then we lace up for a short hike into Nohoch Che'en Caves Branch Archaeological Reserve, where you drift on an inner tube through crystalline underground rivers used by the ancient Maya for sacred rituals.",
      "A hot Belizean lunch, cold drinks and stories on the ride home wrap up one of the most talked-about days on any Belize itinerary.",
    ],
    includes: ["Round-trip boat & van transfer", "Zip line & cave tubing gear", "Certified adventure guides", "Breakfast & lunch", "Park entrance fees"],
    bringAlong: ["Closed-toe water shoes", "Change of clothes & towel", "Insect repellent", "Small waterproof bag"],
    meetingPoint: "Early pickup at Belize Masters Tours dock — San Pedro",
  },
];
