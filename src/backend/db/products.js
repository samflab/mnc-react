import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "",
    title: "Naruto",
    author: "Masashi Kishimoto",
    price: "723",
    originalPrice: "2560",
    rating: "4.9",
    category: "adventure",
    tag: "trending",
  },
  {
    _id: uuid(),
    img: "",
    title: "Boku No Hero Academia",
    author: "Masashi Kishimoto",
    price: "899",
    originalPrice: "1560",
    rating: "4.2",
    category: "adventure",
    tag: "trending",
  },
  {
    _id: uuid(),
    img: "",
    title: "Fairy Tail",
    author: "Masashi Kishimoto",
    price: "540",
    originalPrice: "720",
    rating: "4.7",
    category: "adventure",
    tag: "new",
  },
];
