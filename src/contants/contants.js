import {
  BBQ,
  Bar,
  Buffet,
  Drink,
  Fastfood,
  Hotpot,
  Pizza,
  Seafood,
  Steak,
  Sushi,
  Vegetarian,
  CoffeAndTea,
  HotpotAndGrill,
  FamilyAndOfficemeals,
  StreetsCuisine,
  BunAndPho
} from "~/assets/Images";

export const listOfPages = [
  { path: "/", label: "Restaurant", active: true },
  { path: "/", label: "Blog", active: false },
];

export const slickSlideType = [
  { image: Buffet, title: "Buffet" },
  { image: Steak, title: "Steak" },
  { image: Hotpot, title: "Hotpot" },
  { image: Sushi, title: "Sushi" },
  { image: Drink, title: "Drink" },
  { image: Bar, title: "Bar" },
  { image: BBQ, title: "BBQ" },
  { image: Seafood, title: "Seafood" },
  { image: Vegetarian, title: "Vegetarian" },
  { image: Pizza, title: "Pizza" },
  { image: CoffeAndTea, title: "Coffe & tea" },
  { image: HotpotAndGrill, title: "Hotpot & grill" },
  { image: FamilyAndOfficemeals, title: "Family & office meals" },
  { image: StreetsCuisine, title: "Streets cuisine" },
  { image: BunAndPho, title: "Bun & Pho" },
  { image: Fastfood, title: "Fastfood" },
];
