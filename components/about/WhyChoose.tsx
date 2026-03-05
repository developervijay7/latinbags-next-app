export default function WhyChoose() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                    Why Choose LatinBags
                </h2>

                <p className="mt-4 text-zinc-600">
                    Our designs are created to bring together elegance, comfort
                    and practicality so you can carry confidence wherever you go.
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-10 mt-16">

                {/* Feature 1 */}
                <div className="flex gap-4">
                    <div className="text-2xl">💎</div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Perfect for Special Occasions
                        </h3>
                        <p className="text-sm text-zinc-600 mt-2">
                            Designed for weddings, receptions, parties and celebrations
                            where style truly matters.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                    <div className="text-2xl">👜</div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Comfortable & Lightweight
                        </h3>
                        <p className="text-sm text-zinc-600 mt-2">
                            Easy to carry designs with comfortable handles and compact
                            shapes that keep your essentials close.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                    <div className="text-2xl">✨</div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Elegant Statement Designs
                        </h3>
                        <p className="text-sm text-zinc-600 mt-2">
                            Unique textures, glitter finishes and modern silhouettes
                            that elevate any outfit instantly.
                        </p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                    <div className="text-2xl">⭐</div>
                    <div>
                        <h3 className="font-semibold text-lg">
                            Affordable Luxury
                        </h3>
                        <p className="text-sm text-zinc-600 mt-2">
                            Beautifully crafted bags at prices that allow you to enjoy
                            elegance without compromise.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}