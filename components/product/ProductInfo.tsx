"use client";

import products from "@/data/products.json";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { addToCart, getCart } from "@/lib/cart";
import Image from "next/image";

type Props = {
    id: string;
};

export default function ProductInfo({ id }: Props) {
    const product = products.find((p) => p.id === id);
    const [inCart, setInCart] = useState(false);
    const [shake, setShake] = useState(false);
    const [flying, setFlying] = useState(false);

    if (!product) return null;

    useEffect(() => {
        const cart = getCart();
        setInCart(cart.some((i) => i.id === product.id));
    }, [product.id]);

    const flyToCart = () => {
        const img = document.getElementById("product-main-image");
        const cart = document.getElementById("cart-icon");

        if (!img || !cart) return;

        const imgRect = img.getBoundingClientRect();
        const cartRect = cart.getBoundingClientRect();

        const flyingImg = document.createElement("img");
        flyingImg.src = product.images[0];

        flyingImg.style.position = "fixed";
        flyingImg.style.left = `${imgRect.left}px`;
        flyingImg.style.top = `${imgRect.top}px`;
        flyingImg.style.width = `${imgRect.width}px`;
        flyingImg.style.height = `${imgRect.height}px`;
        flyingImg.style.borderRadius = "12px";
        flyingImg.style.zIndex = "9999";
        flyingImg.style.transition = "all 700ms cubic-bezier(.22,.61,.36,1)";

        document.body.appendChild(flyingImg);

        requestAnimationFrame(() => {
            flyingImg.style.left = `${cartRect.left}px`;
            flyingImg.style.top = `${cartRect.top}px`;
            flyingImg.style.width = "30px";
            flyingImg.style.height = "30px";
            flyingImg.style.opacity = "0.5";
        });

        setTimeout(() => {
            flyingImg.remove();
            window.dispatchEvent(new Event("cartAnimate"));
        }, 700);
    };

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

            <div className="mt-10 flex gap-3">

                {!inCart ? (
                    <button
                        onClick={() => {
                            setShake(true);

                            flyToCart();

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
                        className={`flex-1 flex items-center justify-center gap-2 rounded-full bg-black text-white py-3 text-sm font-medium hover:bg-zinc-800 transition ${
                            shake ? "animate-[shake_0.4s_ease]" : ""
                        }`}
                    >
                        <ShoppingBag size={16} />
                        Add to Cart
                    </button>
                ) : (
                    <div className="flex-1 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 py-3 text-sm font-medium">
                        Added ✓
                    </div>
                )}

            </div>

            <p className="mt-4 text-xs text-zinc-500">
                Delivery available across India. Pay easily with Cash on Delivery.
            </p>

        </div>
    );
}