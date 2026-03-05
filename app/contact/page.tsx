import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import Subscribe from "@/components/Subscribe";

export const metadata: Metadata = {
    title: "Contact LatinBags | Handbags & Clutches Store",
    description:
        "Contact LatinBags for inquiries about elegant handbags and clutches. Visit us in Agra or reach out by phone or email for support and orders.",
    keywords: [
        "LatinBags contact",
        "handbags Agra",
        "party bags Agra",
        "clutches Agra",
        "LatinBags store",
        "LatinBags contact number",
    ],

    openGraph: {
        title: "Contact LatinBags",
        description:
            "Get in touch with LatinBags for inquiries about elegant handbags and clutches designed for special occasions.",
        url: "https://latinbags.com/contact",
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
        title: "Contact LatinBags",
        description:
            "Reach out to LatinBags for inquiries about handbags and clutches.",
        images: ["/images/about-hero.png"],
    },
};

export default function ContactPage() {
    return (
        <div className="bg-white">

            {/* Contact Hero */}
            <ContactHero />

            {/* Contact Information */}
            <ContactDetails />

            {/* Contact Form */}
            <ContactForm />

            {/* Map */}
            <ContactMap />

            {/* Subscribe */}
            <Subscribe />

        </div>
    );
}