import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="border-t bg-zinc-50">
            <div className="max-w-4xl mx-auto px-6 py-24 text-center">

                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                    Discover the LatinBags Collection
                </h2>

                <p className="mt-4 text-zinc-600 max-w-xl mx-auto">
                    Explore our collection of elegant handbags and clutches
                    designed to complement weddings, celebrations and
                    unforgettable moments.
                </p>

                <Link
                    href="/shop"
                    className="inline-block mt-8 rounded-full bg-black px-8 py-3 text-white text-sm font-medium hover:bg-zinc-800 transition"
                >
                    Browse the Collection
                </Link>

            </div>
        </section>
    );
}