import Link from "next/link";
import Logo from "@/components/Logo";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-16">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <Logo />

                        <p className="mt-5 text-sm text-zinc-500 leading-relaxed max-w-xs">
                            Premium handbags and clutches crafted for weddings,
                            parties and special occasions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-zinc-600">
                            <li>
                                <Link href="/" className="hover:text-black transition-colors">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/shop" className="hover:text-black transition-colors">
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link href="/about" className="hover:text-black transition-colors">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-black transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900">
                            Contact
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-zinc-600">

                            <li className="leading-relaxed">
                                D-909, HIG 100Ft. Road<br/>
                                Kalindi Vihar<br/>
                                Agra – 282006
                            </li>

                            <li>
                                <a
                                    href="tel:+919557654553"
                                    className="hover:text-black transition-colors"
                                >
                                    +91 95576 54553
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:support@latinbags.in"
                                    className="hover:text-black transition-colors"
                                >
                                    support@latinbags.in
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-14 pt-6 border-t border-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between text-xs text-zinc-500">

                    <p>
                        © {new Date().getFullYear()} LatinBags. All rights reserved.
                    </p>

                    <div className="flex items-center gap-1 mt-3 md:mt-0">
                        <span>Developed with</span>
                        <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
                        <a
                            href="https://www.attrixtech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black"
                        >
                            Attrix Technologies
                        </a>
                        <span>&</span>
                        <a
                            href="https://vijaygoswami.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black"
                        >
                            Vijay Goswami
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}