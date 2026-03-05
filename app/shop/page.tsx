import products from "@/data/products.json";

export default function Shop() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16">

            <h1 className="text-3xl font-semibold mb-10">
                Shop
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4">

                        <img
                            src={product.images[0]}
                            className="rounded-md mb-4"
                            alt={product.name}
                        />

                        <h2 className="font-medium">{product.name}</h2>

                        <p className="text-sm text-zinc-500">
                            ₹{product.price}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
}