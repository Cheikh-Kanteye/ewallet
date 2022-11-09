import { Dimensions } from "react-native";
import images from "../assets";

// `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`;

export const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "4f15818d2b088c4c15ec5349e07fe8ec";

export const { width, height } = Dimensions.get("window"),
  SPACING = 20;

export const CONTACTS = [
  {
    id: "001",
    avatar: images.avatar1,
    name: "Mike",
  },
  {
    id: "002",
    avatar: images.avatar2,
    name: "Mike",
  },
  {
    id: "003",
    avatar: images.avatar3,
    name: "Mike",
  },
];

export const SERVICES = [
  {
    id: "001",
    icon: images.money,
    label: "Send\nMoney",
  },
  {
    id: "002",
    icon: images.money,
    label: "Receive\nMoney",
  },
  {
    id: "003",
    icon: images.phone,
    label: "Mobile\nprepaid",
  },
  {
    id: "004",
    icon: images.flash,
    label: "Electricity\nBill",
  },
  {
    id: "005",
    icon: images.cashback,
    label: "Cashback\nOffer",
  },
  {
    id: "006",
    icon: images.movie,
    label: "Movie\nTickets",
  },
  {
    id: "007",
    icon: images.plane,
    label: "Flight\nTickets",
  },
  {
    id: "004",
    icon: images.more,
    label: "More\nOptions",
  },
];

export { API_KEY };
