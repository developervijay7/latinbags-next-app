export default function ContactHero() {
    return (
        <section className="relative overflow-hidden border-b">

            <div className="max-w-5xl mx-auto px-6 py-24 text-center">

                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                    Contact LatinBags
                </h1>

                <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                    Have a question about our handbags or clutches?
                    We'd love to hear from you. Reach out for inquiries, support,
                    or assistance with your order.
                </p>

            </div>

            {/* subtle background accent */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-3xl opacity-40" />

        </section>
    );
}