import jacket1 from "./assets/product1/1.png";
import jacket2 from "./assets/product1/2.jpg";
import sun1 from "./assets/product2/1.jpg";
import sun2 from "./assets/product2/2.jpg";
import sun3 from "./assets/product2/3.jpg";
import bag1 from "./assets/product3/1.jpg";
import bag2 from "./assets/product3/2.jpg";
import bag3 from "./assets/product3/3.jpg";
import watch1 from "./assets/product4/1.jpg";
import watch2 from "./assets/product4/2.jpg";
import watch3 from "./assets/product4/3.jpg";
import shirt1 from "./assets/product5/1.jpg";
import shirt2 from "./assets/product5/2.jpg";
import ring1 from "./assets/product6/1.jpg";
import ring2 from "./assets/product6/2.jpg";

export const products = [
  {
    id: 1,
    title: "Leather jacket",
    price: "50",
    description:
      "Elevate your style with our timeless leather jacket. Crafted from premium quality leather, this jacket offers the perfect blend of comfort and durability.",
    category: "men",
    image: jacket1,
    detailedImgs: [jacket1, jacket2],
    rating: 4.5,
  },
  {
    id: 2,
    title: "Stylish Sunglasses",
    price: "20",
    description:
      "Protect your eyes in style with our trendy sunglasses. Designed with high-quality lenses that provide 100% UV protection",
    category: "women",
    image: sun1,
    detailedImgs: [sun1, sun2, sun3],
    rating: 4,
  },
  {
    id: 3,
    title: "Elegant Leather Bag",
    price: "30",
    description:
      "Discover the perfect blend of style and functionality with our premium leather bag. Crafted from high-quality leather",
    category: "women",
    image: bag1,
    detailedImgs: [bag1, bag2, bag3],
    rating: 3.5,
  },
  {
    id: 4,
    title: "Classic Watch",
    price: "40",
    description:
      "This is a watchTimeless elegance meets precision with our classic watch. Crafted with a sleek stainless steel case and a genuine leather strap",
    category: "men",
    image: watch1,
    detailedImgs: [watch1, watch2, watch3],
    rating: 3,
  },
  {
    id: 5,
    title: "Comfortable T-Shirt",
    price: "15",
    description:
      "Upgrade your casual wardrobe with our versatile t-shirt. Made from soft, breathable cotton, this t-shirt ensures all-day comfort and durability",
    category: "men",
    image: shirt1,
    detailedImgs: [shirt1, shirt2],
    rating: 4,
  },
  {
    id: 6,
    title: "Golden Ring",
    price: "25",
    description:

    
      "Add a touch of luxury to your look with our elegant golden ring. Crafted from high-quality gold, this ring showcases a timeless design that exudes sophistication and charm.",
    category: "women",
    image: ring1,
    detailedImgs: [ring1, ring2],
    rating: 4.5,
  },
];
