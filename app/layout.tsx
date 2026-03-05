import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-logo",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://latinbags.com"),
    title: {
        default: "LatinBags",
        template: "%s | LatinBags",
    },
    description:
        "LatinBags offers premium quality bags designed for style, durability, and everyday use. Explore our latest collection.",
    keywords: [
        "bags",
        "leather bags",
        "backpacks",
        "handbags",
        "LatinBags",
    ],
    openGraph: {
        title: "LatinBags",
        description:
            "Premium quality bags crafted for style and durability.",
        url: "https://latinbags.com",
        siteName: "LatinBags",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-white text-gray-900`}
        >
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}