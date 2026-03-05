"use client";

import { useState } from "react";

export default function Subscribe() {
    const [email, setEmail] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Subscribed:", email);
        setEmail("");
    }

    return (
        <section className="border-t bg-zinc-50">
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">

                <h3 className="text-3xl font-semibold text-zinc-900">
                    Join the LatinBags Club
                </h3>

                <p className="mt-4 text-zinc-600">
                    Get updates about new collections, special offers and exclusive releases.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
                >
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full sm:w-80 rounded-full border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <button
                        type="submit"
                        className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition"
                    >
                        Subscribe
                    </button>
                </form>

            </div>
        </section>
    );
}