"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { getCart } from "@/lib/cart";

type Props = {
    open: boolean;
    onClose: () => void;
};


export default function CartDrawer({ open, onClose }: Props) {
    const [cart, setCart] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    });

    useEffect(() => {
        setCart(getCart());
    }, [open]);

    const updateCart = (items: any[]) => {
        localStorage.setItem("latinbags_cart", JSON.stringify(items));
        setCart(items);
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const increase = (id: string) => {
        const items = [...cart];
        const item = items.find((i) => i.id === id);
        item.qty++;
        updateCart(items);
    };

    const decrease = (id: string) => {
        const items = [...cart];
        const item = items.find((i) => i.id === id);

        if (item.qty === 1) {
            updateCart(items.filter((i) => i.id !== id));
        } else {
            item.qty--;
            updateCart(items);
        }
    };

    const remove = (id: string) => {
        updateCart(cart.filter((i) => i.id !== id));
    };

    const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);

    const checkout = async () => {
        setLoading(true);

        await fetch("/api/checkout", {
            method: "POST",
            body: JSON.stringify({
                cart,
                customer,
            }),
        });

        setLoading(false);

        localStorage.removeItem("latinbags_cart");
        setCart([]);

        alert("Order placed! We will contact you soon.");
    };

    return (
        <div
            className={`fixed inset-0 z-[100] ${
                open ? "pointer-events-auto" : "pointer-events-none"
            }`}
        >
            {/* overlay */}
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${
                    open ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* drawer */}
            <div
                className={`absolute right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl rounded-l-2xl transition-transform duration-300 ease-out ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">

                    {/* header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-lg font-semibold">Your Cart</h2>
                        <button onClick={onClose}>
                            <X size={22} />
                        </button>
                    </div>

                    {/* items */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">

                        {cart.length === 0 && (
                            <div className="text-center text-sm text-zinc-500 pt-20">
                                Your cart is empty
                            </div>
                        )}

                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-4">

                                <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                                    <Image src={item.image} alt="" fill className="object-cover" />
                                </div>

                                <div className="flex-1">

                                    <div className="flex justify-between">
                                        <p className="text-sm font-medium">{item.name}</p>

                                        <button onClick={() => remove(item.id)}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>

                                    <p className="text-sm text-zinc-600">
                                        ₹{item.price}
                                    </p>

                                    <div className="flex items-center gap-3 mt-2">

                                        <button onClick={() => decrease(item.id)}>
                                            <Minus size={16} />
                                        </button>

                                        <span className="text-sm">{item.qty}</span>

                                        <button onClick={() => increase(item.id)}>
                                            <Plus size={16} />
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                    {/* footer */}
                    <div className="border-t p-6 space-y-5">

                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-600">Subtotal</span>
                            <span className="font-medium">₹{subtotal}</span>
                        </div>

                        {/* Customer Details */}
                        <div className="space-y-3">

                            <input
                                placeholder="Full Name"
                                className="w-full border rounded-lg px-3 py-2 text-sm"
                                value={customer.name}
                                onChange={(e) =>
                                    setCustomer({ ...customer, name: e.target.value })
                                }
                            />

                            <input
                                placeholder="Phone Number"
                                className="w-full border rounded-lg px-3 py-2 text-sm"
                                value={customer.phone}
                                onChange={(e) =>
                                    setCustomer({ ...customer, phone: e.target.value })
                                }
                            />

                            <textarea
                                placeholder="Delivery Address"
                                className="w-full border rounded-lg px-3 py-2 text-sm"
                                rows={2}
                                value={customer.address}
                                onChange={(e) =>
                                    setCustomer({ ...customer, address: e.target.value })
                                }
                            />

                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    placeholder="City"
                                    className="border rounded-lg px-3 py-2 text-sm"
                                    value={customer.city}
                                    onChange={(e) =>
                                        setCustomer({ ...customer, city: e.target.value })
                                    }
                                />

                                <input
                                    placeholder="Pincode"
                                    className="border rounded-lg px-3 py-2 text-sm"
                                    value={customer.pincode}
                                    onChange={(e) =>
                                        setCustomer({ ...customer, pincode: e.target.value })
                                    }
                                />
                            </div>

                        </div>

                        <p className="text-xs text-zinc-500">
                            Cash on Delivery available across India.
                        </p>

                        <button
                            onClick={checkout}
                            disabled={loading || cart.length === 0}
                            className="w-full rounded-full bg-black text-white py-3 text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-50"
                        >
                            {loading ? "Placing Order..." : "Place Order"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}