"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        // Placeholder submission logic
        setTimeout(() => {
            setLoading(false);
            alert("Message sent successfully!");
        }, 1200);
    }

    return (
        <section className="border-t bg-zinc-50">
            <div className="max-w-3xl mx-auto px-6 py-24">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                        Send us a Message
                    </h2>

                    <p className="mt-4 text-zinc-600">
                        Have a question about our products or orders? Fill out the form
                        below and we’ll get back to you.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-12 space-y-6"
                >

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                            Message
                        </label>

                        <textarea
                            rows={5}
                            required
                            placeholder="Write your message..."
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-full bg-black text-white py-3 text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>

            </div>
        </section>
    );
}