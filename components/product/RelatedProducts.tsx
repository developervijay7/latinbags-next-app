import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

type Props = {
    id: string;
};

export default function RelatedProducts({ id }: Props) {
    const related = products
        .filter((p) => p.id !== id)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <section className="border-t">
            <div className="max-w-6xl mx-auto px-6 py-20">

                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                        You may also like
                    </h2>
                </div>

                {/* Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                    {related.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}