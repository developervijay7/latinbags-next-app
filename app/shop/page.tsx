"use client";

import { useState } from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function Shop() {

    const [sort, setSort] = useState("default");

    let filteredProducts = [...products];

    if (sort === "price-low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Shop
                </h1>

                <p className="text-zinc-500 mt-2 text-sm">
                    Discover our collection of elegant handbags and clutches.
                </p>
            </div>


            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 border-b pb-6">

                {/* Filter Chips */}
                <div className="flex gap-3 flex-wrap">

                    <button className="px-4 py-1.5 text-sm border rounded-full hover:bg-zinc-100 transition">
                        All
                    </button>

                    <button className="px-4 py-1.5 text-sm border rounded-full hover:bg-zinc-100 transition">
                        Party Bags
                    </button>

                    <button className="px-4 py-1.5 text-sm border rounded-full hover:bg-zinc-100 transition">
                        Clutches
                    </button>

                    <button className="px-4 py-1.5 text-sm border rounded-full hover:bg-zinc-100 transition">
                        Handbags
                    </button>

                </div>


                {/* Sort Dropdown */}
                <div className="flex items-center gap-3 text-sm">

          <span className="text-zinc-500">
            Sort
          </span>

                    <select
                        className="border rounded-md px-3 py-1.5 bg-white text-sm"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low → High</option>
                        <option value="price-high">Price: High → Low</option>
                    </select>

                </div>

            </div>


            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
    );
}