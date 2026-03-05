import products from "@/data/products.json";

type Props = {
    id: string;
};

export default function ProductDetails({ id }: Props) {
    const product = products.find((p) => p.id === id);

    if (!product) return null;

    return (
        <section className="border-t">
            <div className="max-w-4xl mx-auto px-6 py-20">

                {/* Header */}
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    Product Details
                </h2>

                {/* Description */}
                <div className="mt-6 space-y-4 text-zinc-600 leading-relaxed">

                    <p>
                        The <strong>{product.name}</strong> is designed to complement
                        special occasions with elegance and style. Crafted with attention
                        to detail, it offers a refined look that enhances weddings,
                        parties, receptions and formal gatherings.
                    </p>

                    <p>
                        Each LatinBags product focuses on balancing beauty with
                        practicality, ensuring that your essentials remain secure while
                        maintaining a lightweight and comfortable carry experience.
                    </p>

                </div>

                {/* Features */}
                <div className="mt-10">

                    <h3 className="text-lg font-semibold text-zinc-900">
                        Key Features
                    </h3>

                    <ul className="mt-4 grid md:grid-cols-2 gap-y-3 text-sm text-zinc-600">

                        {product.description.map((feature, index) => (
                            <li key={index} className="flex gap-2">
                                <span className="text-black">•</span>
                                <span>{feature}</span>
                            </li>
                        ))}

                    </ul>

                </div>

            </div>
        </section>
    );
}