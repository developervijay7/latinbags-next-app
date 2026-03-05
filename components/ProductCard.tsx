"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { addToCart, getCart } from "@/lib/cart";
import { useState, useEffect } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    images: string[];
}

export default function ProductCard({ product }: { product: Product }) {
    const [shake, setShake] = useState(false);
    const [inCart, setInCart] = useState(false);
    useEffect(() => {
        const cart = getCart();
        setInCart(cart.some((item) => item.id === product.id));
    }, [product.id]);
    return (
        <div className={`group relative bg-white rounded-xl border border-zinc-200 overflow-hidden transition hover:shadow-lg ${
            shake ? "animate-[shake_0.4s_ease]" : ""
        }`}>

            {/* Wishlist Button */}
            <button
                className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-white"
            >
                <Heart size={18} />
            </button>

            {/* Image */}
            <Link href={`/product/${product.id}`}>
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </Link>

            {/* Content */}
            <div className="p-4">

                {/* Product Name */}
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-medium text-zinc-900 line-clamp-1">
                        {product.name}
                    </h3>
                </Link>

                {/* Price */}
                <p className="mt-1 text-lg font-semibold text-black">
                    ₹{product.price}
                </p>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">

                    {!inCart ? (
                        <button
                            onClick={() => {
                                setShake(true);

                                addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image: product.images[0],
                                    qty: 1,
                                });

                                setInCart(true);

                                setTimeout(() => setShake(false), 400);
                            }}
                            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-black text-white py-2 text-sm hover:bg-zinc-800 transition"
                        >
                            <ShoppingBag size={16} />
                            Add to Cart
                        </button>
                    ) : (
                        <div className="flex-1 flex items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 py-2 text-sm font-medium">
                            Added ✓
                        </div>
                    )}

                    <button className="flex items-center justify-center rounded-lg border px-3 hover:bg-zinc-100 transition">
                        <Heart size={16} />
                    </button>

                </div>

            </div>
        </div>
    );
}