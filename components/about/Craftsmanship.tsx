export default function Craftsmanship() {
    return (
        <section className="border-t bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6 py-24">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                        Craftsmanship & Quality
                    </h2>

                    <p className="mt-4 text-zinc-600">
                        Every LatinBags design focuses on elegance, durability and
                        attention to detail. Our bags are created to complement
                        special occasions while remaining comfortable and reliable.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-10 mt-16">

                    {/* Card 1 */}
                    <div className="bg-white rounded-xl border p-8 text-center">
                        <div className="text-2xl mb-4">✨</div>

                        <h3 className="font-semibold text-lg">
                            Premium Materials
                        </h3>

                        <p className="mt-3 text-sm text-zinc-600">
                            Carefully selected materials such as rexine and elegant
                            finishes ensure both durability and beauty.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl border p-8 text-center">
                        <div className="text-2xl mb-4">🎨</div>

                        <h3 className="font-semibold text-lg">
                            Elegant Design
                        </h3>

                        <p className="mt-3 text-sm text-zinc-600">
                            Every bag is designed to enhance special moments with
                            sophisticated styling and timeless appeal.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl border p-8 text-center">
                        <div className="text-2xl mb-4">👜</div>

                        <h3 className="font-semibold text-lg">
                            Built to Last
                        </h3>

                        <p className="mt-3 text-sm text-zinc-600">
                            Strong handles, reliable clasps and quality stitching
                            ensure long-lasting use and confidence.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}