import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import BrandStory from "@/components/about/BrandStory";
import Craftsmanship from "@/components/about/Craftsmanship";
import WhyChoose from "@/components/about/WhyChoose";
import AboutCTA from "@/components/about/AboutCTA";
import Subscribe from "@/components/Subscribe";

export const metadata: Metadata = {
    title: "About LatinBags | Elegant Handbags for Special Occasions",
    description:
        "Learn about LatinBags — a boutique brand offering elegant handbags and clutches designed for weddings, parties and special occasions. Discover our story and craftsmanship.",
    keywords: [
        "LatinBags",
        "handbags",
        "party bags",
        "clutches",
        "wedding bags",
        "fashion handbags",
        "Agra handbags",
    ],

    openGraph: {
        title: "About LatinBags",
        description:
            "Discover the story behind LatinBags and our passion for elegant handbags and clutches crafted for special occasions.",
        url: "https://latinbags.com/about",
        siteName: "LatinBags",
        images: [
            {
                url: "/images/about-hero.png",
                width: 1200,
                height: 630,
                alt: "LatinBags Elegant Handbags",
            },
        ],
        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "About LatinBags",
        description:
            "Elegant handbags and clutches crafted for weddings, parties and special occasions.",
        images: ["/images/about-hero.png"],
    },
};

export default function AboutPage() {
    return (
        <div className="bg-white">

            {/* Hero Section */}
            <AboutHero />

            {/* Brand Story */}
            <BrandStory />

            {/* Craftsmanship */}
            <Craftsmanship />

            {/* Why Choose */}
            <WhyChoose />

            {/* CTA */}
            <AboutCTA />

            {/* Subscribe */}
            <Subscribe />

        </div>
    );
}