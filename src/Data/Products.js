// src/Data/Products.js

import img1 from "../Assests/Images/F0174125001_2_.jpeg";
import img2 from "../Assests/Images/F1466106001_2_37091f27-9494-4fe9-8a09-f937a9e5cd0c.jpeg";
import img3 from "../Assests/Images/F1472106801_3.jpg";
import img4 from "../Assests/Images/F1476106802_3.jpeg";
import img5 from "../Assests/Images/product.jpeg";
import img6 from "../Assests/Images/F1498106618_2_8d00d9de-7e11-42bb.jpg";
import img7 from "../Assests/Images/F1498106704_2_66e92d66-816a-47c7.jpg";
import img8 from "../Assests/Images/F1498106704_2_66e92d66-816a-47c7.jpg";

// Common extra fields for all products
const commonFields = {
  sizes: ["S", "M", "L", "XL"],
  description:
    "Crafted with premium quality fabric for comfort and durability. Perfect for casual wear or styling up.",
  care: [
    "Machine wash cold with like colors",
    "Do not bleach",
    "Model height: 6ft, wearing size M",
  ],
};

// ---------------- MEN ----------------
export const menProducts = [
  { id: 1, title: "Mens T-shirt", price: 29, variants: { "#5c5143": img1, "#d94f38": img2, "#f0c933": img3 }, ...commonFields },
  { id: 2, title: "Mens Hoodie", price: 49, variants: { "#243c7b": img4, "#fff": img5 }, ...commonFields },
  { id: 3, title: "Mens Jacket", price: 59, variants: { "#000": img6, "#5c5143": img7 }, ...commonFields },
  { id: 4, title: "Mens Polo", price: 39, variants: { "#d94f38": img2, "#243c7b": img3 }, ...commonFields },
  { id: 5, title: "Mens Shorts", price: 25, variants: { "#f0c933": img5, "#fff": img6 }, ...commonFields },
  { id: 6, title: "Mens Sweater", price: 55, variants: { "#5c5143": img7, "#d94f38": img8 }, ...commonFields },
  { id: 7, title: "Mens Blazer", price: 79, variants: { "#000": img1, "#243c7b": img2 }, ...commonFields },
  { id: 8, title: "Mens Denim", price: 65, variants: { "#243c7b": img3, "#000": img4 }, ...commonFields },
  { id: 9, title: "Mens Shirt", price: 35, variants: { "#fff": img5, "#5c5143": img6 }, ...commonFields },
  { id: 10, title: "Mens T-shirt", price: 29, variants: { "#d94f38": img7, "#f0c933": img8 }, ...commonFields },
  { id: 11, title: "Mens Jacket", price: 59, variants: { "#000": img2, "#fff": img3 }, ...commonFields },
  { id: 12, title: "Mens Hoodie", price: 49, variants: { "#243c7b": img4, "#d94f38": img5 }, ...commonFields },
  { id: 13, title: "Mens Polo", price: 39, variants: { "#f0c933": img6, "#5c5143": img7 }, ...commonFields },
  { id: 14, title: "Mens Shirt", price: 35, variants: { "#d94f38": img1, "#fff": img2 }, ...commonFields },
  { id: 15, title: "Mens Denim", price: 65, variants: { "#243c7b": img3, "#000": img4 }, ...commonFields },
  { id: 16, title: "Mens Shorts", price: 25, variants: { "#f0c933": img5, "#fff": img6 }, ...commonFields },
  { id: 17, title: "Mens Sweater", price: 55, variants: { "#5c5143": img7, "#d94f38": img8 }, ...commonFields },
  { id: 18, title: "Mens Blazer", price: 79, variants: { "#000": img1, "#243c7b": img2 }, ...commonFields },
  { id: 19, title: "Mens Shirt", price: 35, variants: { "#fff": img5, "#5c5143": img6 }, ...commonFields },
  { id: 20, title: "Mens T-shirt", price: 29, variants: { "#d94f38": img7, "#f0c933": img8 }, ...commonFields },
];

// ---------------- WOMEN ----------------
export const womenProducts = [
  { id: 21, title: "Women Dress", price: 49, variants: { "#d94f38": img1, "#fff": img2 }, ...commonFields },
  { id: 22, title: "Women Skirt", price: 35, variants: { "#f0c933": img3, "#5c5143": img4 }, ...commonFields },
  { id: 23, title: "Women Top", price: 29, variants: { "#243c7b": img5, "#fff": img6 }, ...commonFields },
  { id: 24, title: "Women Blouse", price: 39, variants: { "#5c5143": img7, "#d94f38": img8 }, ...commonFields },
  { id: 25, title: "Women Jeans", price: 59, variants: { "#000": img1, "#243c7b": img2 }, ...commonFields },
  { id: 26, title: "Women Jacket", price: 79, variants: { "#243c7b": img3, "#fff": img4 }, ...commonFields },
  { id: 27, title: "Women Sweater", price: 55, variants: { "#5c5143": img5, "#d94f38": img6 }, ...commonFields },
  { id: 28, title: "Women Hoodie", price: 69, variants: { "#000": img7, "#f0c933": img8 }, ...commonFields },
  { id: 29, title: "Women Coat", price: 99, variants: { "#243c7b": img1, "#fff": img2 }, ...commonFields },
  { id: 30, title: "Women Polo", price: 39, variants: { "#d94f38": img3, "#5c5143": img4 }, ...commonFields },
  { id: 31, title: "Women Shirt", price: 29, variants: { "#fff": img5, "#243c7b": img6 }, ...commonFields },
  { id: 32, title: "Women Dress", price: 49, variants: { "#f0c933": img7, "#d94f38": img8 }, ...commonFields },
  { id: 33, title: "Women Skirt", price: 35, variants: { "#243c7b": img1, "#fff": img2 }, ...commonFields },
  { id: 34, title: "Women Blouse", price: 39, variants: { "#5c5143": img3, "#d94f38": img4 }, ...commonFields },
  { id: 35, title: "Women Jeans", price: 59, variants: { "#000": img5, "#243c7b": img6 }, ...commonFields },
  { id: 36, title: "Women Jacket", price: 79, variants: { "#243c7b": img7, "#fff": img8 }, ...commonFields },
  { id: 37, title: "Women Sweater", price: 55, variants: { "#5c5143": img1, "#d94f38": img2 }, ...commonFields },
  { id: 38, title: "Women Hoodie", price: 69, variants: { "#000": img3, "#f0c933": img4 }, ...commonFields },
  { id: 39, title: "Women Coat", price: 99, variants: { "#243c7b": img5, "#fff": img6 }, ...commonFields },
  { id: 40, title: "Women Polo", price: 39, variants: { "#d94f38": img7, "#5c5143": img8 }, ...commonFields },
];

// ---------------- JUNIORS ----------------
export const juniorProducts = [
  { id: 41, title: "Junior T-shirt", price: 19, variants: { "#243c7b": img1, "#fff": img2 }, ...commonFields },
  { id: 42, title: "Junior Hoodie", price: 29, variants: { "#d94f38": img3, "#f0c933": img4 }, ...commonFields },
  { id: 43, title: "Junior Jacket", price: 39, variants: { "#000": img5, "#243c7b": img6 }, ...commonFields },
  { id: 44, title: "Junior Polo", price: 25, variants: { "#fff": img7, "#5c5143": img8 }, ...commonFields },
  { id: 45, title: "Junior Shorts", price: 15, variants: { "#d94f38": img1, "#243c7b": img2 }, ...commonFields },
  { id: 46, title: "Junior Sweater", price: 35, variants: { "#5c5143": img3, "#f0c933": img4 }, ...commonFields },
  { id: 47, title: "Junior Shirt", price: 22, variants: { "#fff": img5, "#d94f38": img6 }, ...commonFields },
  { id: 48, title: "Junior Denim", price: 45, variants: { "#000": img7, "#243c7b": img8 }, ...commonFields },
  { id: 49, title: "Junior Hoodie", price: 29, variants: { "#f0c933": img1, "#5c5143": img2 }, ...commonFields },
  { id: 50, title: "Junior Polo", price: 25, variants: { "#fff": img3, "#d94f38": img4 }, ...commonFields },
  { id: 51, title: "Junior Jacket", price: 39, variants: { "#000": img5, "#243c7b": img6 }, ...commonFields },
  { id: 52, title: "Junior Shirt", price: 22, variants: { "#fff": img7, "#5c5143": img8 }, ...commonFields },
  { id: 53, title: "Junior Sweater", price: 35, variants: { "#d94f38": img1, "#f0c933": img2 }, ...commonFields },
  { id: 54, title: "Junior Shorts", price: 15, variants: { "#243c7b": img3, "#fff": img4 }, ...commonFields },
  { id: 55, title: "Junior Polo", price: 25, variants: { "#5c5143": img5, "#d94f38": img6 }, ...commonFields },
  { id: 56, title: "Junior Denim", price: 45, variants: { "#000": img7, "#243c7b": img8 }, ...commonFields },
  { id: 57, title: "Junior Hoodie", price: 29, variants: { "#f0c933": img1, "#d94f38": img2 }, ...commonFields },
  { id: 58, title: "Junior Shirt", price: 22, variants: { "#fff": img3, "#243c7b": img4 }, ...commonFields },
  { id: 59, title: "Junior Jacket", price: 39, variants: { "#5c5143": img5, "#000": img6 }, ...commonFields },
  { id: 60, title: "Junior Sweater", price: 35, variants: { "#d94f38": img7, "#f0c933": img8 }, ...commonFields },
];
