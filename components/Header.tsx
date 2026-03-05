"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-semibold tracking-tight">
                        LatinBags
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="hover:text-black/70">
                            Home
                        </Link>

                        <Link href="/shop" className="hover:text-black/70">
                            Shop
                        </Link>

                        <Link href="/about" className="hover:text-black/70">
                            About
                        </Link>
                    </nav>

                    {/* Cart + Mobile Menu */}
                    <div className="flex items-center gap-4">

                        <Link
                            href="/cart"
                            className="relative p-2 hover:bg-zinc-100 rounded-lg"
                        >
                            <ShoppingBag size={20} />
                        </Link>

                        {/* Mobile menu button */}
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
                    <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">

                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className="hover:text-black/70"
                        >
                            Home
                        </Link>

                        <Link
                            href="/shop"
                            onClick={() => setOpen(false)}
                            className="hover:text-black/70"
                        >
                            Shop
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className="hover:text-black/70"
                        >
                            About
                        </Link>

                        <Link
                            href="/cart"
                            onClick={() => setOpen(false)}
                            className="hover:text-black/70"
                        >
                            Cart
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}