import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://i.pinimg.com/originals/c1/fc/65/c1fc659afd63c9cb94697157929e4afe.jpg",
    title: "Naruto",
    author: "Masashi Kishimoto",
    price: "723",
    originalPrice: "2560",
    get discount() {
      return Math.ceil((this.originalPrice - this.price) / this.originalPrice *100);
    },
    rating: "4.9",
    category: "adventure",
    tag: "trending",
  },
  {
    _id: uuid(),
    img: "https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-76500-MyHeroAcademia_GN22_Web_3_jpg",
    title: "Boku No Hero Academia",
    author: "Kohei Horikoshi",
    price: "899",
    originalPrice: "1560",
    get discount() {
      return Math.ceil((this.originalPrice - this.price) / this.originalPrice *100);

    },
    rating: "4.2",
    category: "adventure",
    tag: "trending",
  },

  {
    _id: uuid(),
    img: "https://upload.wikimedia.org/wikipedia/en/9/9a/FairyTail-Volume_46_cover.jpg",
    title: "Fairy Tail",
    author: "Hiro Mashima",
    price: "540",
    originalPrice: "720",
    get discount() {
      return Math.ceil((this.originalPrice - this.price) / this.originalPrice *100);
    },
    rating: "4.7",
    category: "adventure",
    tag: "new",
  },

  {
    _id: uuid(),
    img: "https://www.hobikuyusu.com/image/cache/catalog/urun-resimleri/image/data/cilt/cilt/4(4)-850x1190h.jpg",
    title: "Death Note",
    author: "Tsugumi Ohba",
    price: "640",
    originalPrice: "1020",
    get discount() {
      return Math.ceil((this.originalPrice - this.price) / this.originalPrice *100);
    },
    rating: "3.5",
    category: "mystery",
    tag: "most read",
  },
  {
    _id: uuid(),
    img: "https://data.whicdn.com/images/304966058/original.jpg",
    title: "Parasyte",
    author: "Hitoshi Iwaaki",
    price: "300",
    originalPrice: "1500",
    get discount() {
      return Math.ceil((this.originalPrice - this.price) / this.originalPrice *100);
    },
    rating: "2.3",
    category: "horror",
    tag: "most read",
  },
  {
    _id: uuid(),
    img: "https://avatars.mds.yandex.net/i?id=8946f4615b5c97ca90fc20fde77eff76-4534759-images-thumbs&n=13&exp=1",
    title: "Gantz",
    author: "Hiroya Oku",
    price: "100",
    originalPrice: "1000",
    get discount() {
      return Math.ceil((this.originalPrice - this.price) / this.originalPrice *100);
    },
    category: "horror",
    rating: "1",
    tag: "new",
  },
];
