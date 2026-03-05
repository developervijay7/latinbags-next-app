import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6 py-12">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h2 className="text-lg font-semibold">LatinBags</h2>
                        <p className="mt-3 text-sm text-zinc-600 max-w-xs">
                            Premium bags designed for everyday style and durability.
                            Crafted with attention to quality and comfort.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                            <li>
                                <Link href="/" className="hover:text-black">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/shop" className="hover:text-black">
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-black">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-black">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
                            Contact
                        </h3>

                        <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                            <li>Agra, India</li>
                            <li>
                                <a
                                    href="tel:+919557654553"
                                    className="hover:text-black"
                                >
                                    +919557654553
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:support@latinbags.com"
                                    className="hover:text-black"
                                >
                                    support@latinbags.in
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">

                    <p>
                        © {new Date().getFullYear()} LatinBags. All rights reserved.
                    </p>

                    <p className="mt-2 md:mt-0">
                        Designed for everyday carry.
                    </p>

                </div>
            </div>
        </footer>
    );
}