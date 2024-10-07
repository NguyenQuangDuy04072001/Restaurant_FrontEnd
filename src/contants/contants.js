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
  BunAndPho,
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

export const reviews = [5, 4, 3, 2, 1];

export const restaurantService = [
  "Dịch vụ đặt bàn",
  "Nhà hàng tự giao (Delivery)",
  "Khách tự lấy hàng (take away)",
];

export const Voucher = ["Nhà hàng có Voucher", "Nhà không có Voucher"];

export const RestaurantOpen = ["Is Open", "Is Closed"];

export const Distance = ["< 1Km", "1 - 2Km", "2 - 3Km", "3 - 5Km", "> 5Km"];

export const Cuisine = [
  "Món Việt",
  "Món Hàn",
  "Món Trung",
  "Món Nhật",
  "Món Ấn",
  "Món Âu - Mỹ",
  "Món Thái",
  "Món Tây Ban Nha",
  "Món Ý",
  "Món Pháp",
  "Khác",
];

export const RestaurantType = [
  "Buffet",
  "Steak",
  "Hotpot",
  "Sushi",
  "Drink",
  "Bar",
  "BBQ",
  "Seafood",
  "Vegetarian",
  "Pizza",
  "Coffe & tea",
  "Hotpot & grill",
  "Family & office meals",
  "Streets cuisine",
  "Bun & Pho",
  "Fastfood",
];

export const Meal = ["Breakfast", "Lunch", "Dinner", "Brunch", "Drinks"];

export const OpenSections = {
  all: true,
  price: true,
  reviews: true,
  restaurantService: true,
  voucher: true,
  restaurantOpen: true,
  distance: true,
  cuisine: true,
  restaurantType: true,
  meal: true
}

export const businessHours = [
  { title: "Thứ 2", timeStart: "8:00", timeEnd: "20:00" },
  { title: "Thứ 3", timeStart: "8:00", timeEnd: "20:00" },
  { title: "Thứ 4", timeStart: "8:00", timeEnd: "20:00" },
  { title: "Thứ 5", timeStart: "8:00", timeEnd: "20:00" },
  { title: "Thứ 6", timeStart: "8:00", timeEnd: "20:00" },
  { title: "Thứ 7", timeStart: "8:00", timeEnd: "20:00" },
  { title: "CN", timeStart: "8:00", timeEnd: "20:00" },
]

export const GioiThieu = "Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Hải Châu của Đà Nẵng, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị. Đừng rời đi trước khi ghé thăm The Marble Mountains nổi tiếng. Được xếp hạng 5 sao, chỗ nghỉ chất lượng cao này cho phép khách nghỉ sử dụng mát-xa, xông khô và bồn tắm nước nóng ngay trong khuôn viên.";


export const listOfManagementPages = [
  { path: "/", label: "Restaurant", active: true },
  { path: "/", label: "Profiles", active: false },
]