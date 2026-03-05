"use client";

import { useState } from "react";
import Image from "next/image";
import products from "@/data/products.json";

type Props = {
    id: string;
};

export default function ProductGallery({ id }: Props) {
    if (!id) return null;

    const product = products.find((p) => p.id === id);
    const [active, setActive] = useState(0);

    if (!product) return null;

    return (
        <div>

            {/* Main Image */}
            <div className="aspect-square w-full relative overflow-hidden rounded-2xl border shadow-sm">

                <Image
                    src={product.images[active]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                />

            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-5">

                {product.images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden border transition ${
                            active === index
                                ? "border-black"
                                : "border-zinc-200 hover:border-zinc-400"
                        }`}
                    >
                        <Image
                            src={img}
                            alt={`${product.name} ${index}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}

            </div>

        </div>
    );
}