export default function AboutHero() {
    return (
        <section className="relative overflow-hidden border-b">

            <div className="max-w-5xl mx-auto px-6 py-24 text-center">

                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                    About LatinBags
                </h1>

                <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                    LatinBags was created with a passion for elegant handbags and
                    statement clutches designed for weddings, parties and special
                    occasions. Every piece reflects a blend of style, quality and
                    timeless design.
                </p>

            </div>

            {/* subtle background accent */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-3xl opacity-40" />

        </section>
    );
}