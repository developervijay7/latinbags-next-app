import Image from "next/image";
export default function BrandStory() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* Story Content */}
                <div>

                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                        Our Story
                    </h2>

                    <p className="mt-6 text-zinc-600 leading-relaxed">
                        LatinBags was born from a simple idea — to create elegant
                        handbags that complement special moments. From weddings and
                        celebrations to evening parties, a beautiful bag can complete
                        the entire look.
                    </p>

                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        Each design focuses on style, durability, and comfort. We
                        carefully select materials and finishes so every piece feels
                        special and timeless.
                    </p>

                </div>

                <div className="relative">
                    <div className="w-full relative overflow-hidden rounded-xl shadow-lg">

                        <Image
                            src="/images/about-hero.png"
                            alt="LatinBags brand story"
                            width={900}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />

                    </div>
                </div>

            </div>

        </section>
    );
}