import Link from "next/link";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
      <div className="bg-white">

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 py-28 text-center">

            <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">
              LatinBags
            </h1>

            <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
              Elegant handbags and clutches crafted for weddings,
              parties and special occasions.
            </p>

            <div className="mt-10 flex justify-center gap-4">

              <Link
                  href="/shop"
                  className="rounded-full bg-black px-8 py-3 text-white text-sm font-medium hover:bg-zinc-800 transition"
              >
                Shop Collection
              </Link>

              <Link
                  href="/shop"
                  className="rounded-full border px-8 py-3 text-sm font-medium hover:bg-zinc-100 transition"
              >
                View Catalog
              </Link>

            </div>

          </div>

          {/* subtle background accent */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-3xl opacity-40" />
        </section>

        {/* Featured Products */}
        <section className="max-w-6xl mx-auto px-6 pb-24">

          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold">
              Featured Bags
            </h2>

            <Link
                href="/shop"
                className="text-sm font-medium text-zinc-600 hover:text-black"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {featured.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
          </div>

        </section>

        {/* CTA Section */}
        <section className="border-t bg-zinc-50">
          <div className="max-w-5xl mx-auto px-6 py-20 text-center">

            <h3 className="text-3xl font-semibold">
              Find the perfect bag for your special occasion
            </h3>

            <p className="mt-4 text-zinc-600">
              Browse our curated collection of elegant handbags and clutches.
            </p>

            <Link
                href="/shop"
                className="inline-block mt-8 rounded-full bg-black px-8 py-3 text-white text-sm font-medium hover:bg-zinc-800 transition"
            >
              Explore Collection
            </Link>

          </div>
        </section>


        <Subscribe />
      </div>
  );
}