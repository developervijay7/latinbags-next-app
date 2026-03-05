"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import Logo from "@/components/Logo";
import { getCartCount } from "@/lib/cart";
import CartDrawer from "@/components/CartDrawer";


export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [cartCount, setCartCount] = useState(0);
    const [animateCart, setAnimateCart] = useState(false);
    useEffect(() => {
        const updateCart = () => setCartCount(getCartCount());

        const animate = () => {
            setAnimateCart(true);
            setTimeout(() => setAnimateCart(false), 400);
        };

        updateCart();

        window.addEventListener("cartUpdated", updateCart);
        window.addEventListener("cartAnimate", animate);

        return () => {
            window.removeEventListener("cartUpdated", updateCart);
            window.removeEventListener("cartAnimate", animate);
        };
    }, []);
    const [cartOpen, setCartOpen] = useState(false);
    const navItem = (href: string, label: string) => {
        const active = pathname === href;
        return (
            <Link
                href={href}
                className={`px-3 py-1.5 rounded-full transition text-sm font-medium ${
                    active
                        ? "bg-black text-white"
                        : "text-zinc-700 hover:bg-zinc-100"
                }`}
            >
                {label}
            </Link>
        );
    };

    return (<>
            <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="flex items-center justify-between h-16">

                        <Logo />

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-2">
                            {navItem("/", "Home")}
                            {navItem("/shop", "Shop")}
                            {navItem("/about", "About")}
                            {navItem("/contact", "Contact")}
                        </nav>

                        {/* Cart + Mobile Menu */}
                        <div className="flex items-center gap-4">

                            <button
                                onClick={() => setCartOpen(true)}
                                className="relative p-2 hover:bg-zinc-100 rounded-lg"
                            >
                                <ShoppingBag
                                    size={20}
                                    className={`transition-transform duration-300 ease-out ${
                                        animateCart ? "scale-125" : ""
                                    }`}
                                />

                                {cartCount > 0 && (
                                    <span className={`absolute -top-1 -right-1 text-[11px] bg-black text-white rounded-full h-5 min-w-[20px] flex items-center justify-center px-1 transition-transform ${
                                        animateCart ? "scale-110" : ""
                                    }`}>
      {cartCount}
    </span>
                                )}
                            </button>

                            <button
                                className="md:hidden p-2"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? <X size={22} /> : <Menu size={22} />}
                            </button>

                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden border-t bg-white">
                        <div className="flex flex-col px-6 py-4 gap-3 text-sm font-medium">

                            {navItem("/", "Home")}
                            {navItem("/shop", "Shop")}
                            {navItem("/about", "About")}
                            {navItem("/contact", "Contact")}
                            <Link
                                href="/cart"
                                onClick={() => setOpen(false)}
                                className="px-3 py-1.5 rounded-full hover:bg-zinc-100"
                            >
                                Cart
                            </Link>

                        </div>
                    </div>
                )}
            </header>
            {/* Cart Drawer */}
            <div
                className={`fixed inset-0 z-[100] ${
                    cartOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            >

                {/* Overlay */}
                <div
                    onClick={() => setCartOpen(false)}
                    className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${
                        cartOpen ? "opacity-100" : "opacity-0"
                    }`}
                />

                <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
            </div>
    </>
    );
}