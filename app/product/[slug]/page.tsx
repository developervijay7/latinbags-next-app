import type { Metadata } from "next";

import products from "@/data/products.json";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProducts from "@/components/product/RelatedProducts";
import Subscribe from "@/components/Subscribe";

type Props = {
    params: {
        slug: string;
    };
};

/* Dynamic SEO metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const product = products.find((p) => p.id === slug);

    const productName = product?.name ?? "Product";

    return {
        title: `${productName} | LatinBags`,
        description: `Discover ${productName} from LatinBags — elegant handbags and clutches crafted for weddings, parties and special occasions.`,

        openGraph: {
            title: `${productName} | LatinBags`,
            description:
                "Elegant handbags and clutches crafted for special occasions.",
            url: `https://latinbags.com/product/${slug}`,
            siteName: "LatinBags",
            images: [
                {
                    url: product?.images?.[0] ?? "/images/product-placeholder.png",
                    width: 1200,
                    height: 630,
                    alt: productName,
                },
            ],
            locale: "en_IN",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `${productName} | LatinBags`,
            description:
                "Elegant handbags and clutches crafted for weddings and parties.",
            images: [product?.images?.[0] ?? "/images/product-placeholder.png"],
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;

    return (
        <div className="bg-white">

            {/* Product Hero */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    <ProductGallery id={slug} />

                    <ProductInfo id={slug} />

                </div>
            </section>

            <ProductDetails id={slug} />

            <RelatedProducts id={slug} />

            <Subscribe />

        </div>
    );
}