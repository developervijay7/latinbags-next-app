import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LatinBags | Online Store for Premium Bags & Accessories",
  description: "Shop the latest collection of bags, backpacks, and accessories at LatinBags. Quality products, fast delivery, and secure payments.",
  keywords: ["bags", "backpacks", "wallets", "handbags", "latinbags", "online shopping", "ecommerce"],
  authors: [{ name: "LatinBags", url: "https://www.latinbags.com" }],
  creator: "LatinBags",
  publisher: "LatinBags",
  openGraph: {
    title: "LatinBags | Premium Bags & Accessories",
    description: "Explore our exclusive collection of bags, backpacks, and accessories. Secure online shopping with fast delivery.",
    url: "https://www.latinbags.com",
    siteName: "LatinBags",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.latinbags.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LatinBags - Premium Bags & Accessories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LatinBags | Premium Bags & Accessories",
    description: "Shop the latest collection of bags, backpacks, and accessories online at LatinBags.",
    images: ["https://www.latinbags.com/og-image.jpg"],
    creator: "@LatinBags",
  },
};
export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
