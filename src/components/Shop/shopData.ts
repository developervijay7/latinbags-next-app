import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    id: 1,
    title: "Classic Leather Backpack",
    reviews: 24,
    price: 4999,
    discountedPrice: 3499,
    imgs: {
      thumbnails: [
        "/images/products/backpack-sm-1.png",
        "/images/products/backpack-sm-2.png",
      ],
      previews: [
        "/images/products/backpack-bg-1.png",
        "/images/products/backpack-bg-2.png",
      ],
    },
  },
  {
    id: 2,
    title: "Premium Handbag",
    reviews: 18,
    price: 3999,
    discountedPrice: 2999,
    imgs: {
      thumbnails: [
        "/images/products/handbag-sm-1.png",
        "/images/products/handbag-sm-2.png",
      ],
      previews: [
        "/images/products/handbag-bg-1.png",
        "/images/products/handbag-bg-2.png",
      ],
    },
  },
  {
    id: 3,
    title: "Laptop Bag - 15 inch",
    reviews: 12,
    price: 3499,
    discountedPrice: 2499,
    imgs: {
      thumbnails: [
        "/images/products/laptop-bag-sm-1.png",
        "/images/products/laptop-bag-sm-2.png",
      ],
      previews: [
        "/images/products/laptop-bag-bg-1.png",
        "/images/products/laptop-bag-bg-2.png",
      ],
    },
  },
  {
    id: 4,
    title: "Travel Duffel Bag",
    reviews: 10,
    price: 5499,
    discountedPrice: 4299,
    imgs: {
      thumbnails: [
        "/images/products/duffel-bag-sm-1.png",
        "/images/products/duffel-bag-sm-2.png",
      ],
      previews: [
        "/images/products/duffel-bag-bg-1.png",
        "/images/products/duffel-bag-bg-2.png",
      ],
    },
  },
];

export default shopData;