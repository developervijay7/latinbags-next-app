"use client";

import products from "@/data/products.json";

type Props = {
    id: string;
};

export default function ProductInfo({ id }: Props) {
    const product = products.find((p) => p.id === id);

    if (!product) return null;

    return (
        <div className="md:pl-6">

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
                {product.name}
            </h1>

            <p className="mt-4 text-2xl font-semibold text-black">
                ₹{product.price}
            </p>

            <div className="mt-4 inline-flex items-center text-xs bg-zinc-100 px-3 py-1 rounded-full">
                Cash on Delivery Available
            </div>

            <ul className="mt-8 space-y-3 text-zinc-600 text-sm leading-relaxed">
                {product.description.map((item, index) => (
                    <li key={index} className="flex gap-3">
                        <span className="mt-[2px] text-black">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            <button className="mt-10 w-full rounded-full bg-black text-white py-3 text-sm font-medium hover:bg-zinc-800 transition">
                Add to Cart
            </button>

            <p className="mt-4 text-xs text-zinc-500">
                Delivery available across India. Pay easily with Cash on Delivery.
            </p>

        </div>
    );
}