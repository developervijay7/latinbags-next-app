export default function ContactDetails() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                    Get in Touch
                </h2>

                <p className="mt-4 text-zinc-600">
                    Feel free to contact us for product inquiries, order support,
                    or any questions about our handbags and clutches.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-10 mt-16">

                {/* Address */}
                <div className="bg-white border rounded-xl p-8 text-center">
                    <div className="text-2xl mb-4">📍</div>

                    <h3 className="font-semibold text-lg">
                        Visit Us
                    </h3>

                    <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                        D-909, HIG 100Ft. Road <br/>
                        Kalindi Vihar <br/>
                        Agra - 282006
                    </p>
                </div>

                {/* Phone */}
                <div className="bg-white border rounded-xl p-8 text-center">
                    <div className="text-2xl mb-4">📞</div>

                    <h3 className="font-semibold text-lg">
                        Call Us
                    </h3>

                    <p className="mt-3 text-sm text-zinc-600">
                        <a
                            href="tel:+919557654553"
                            className="hover:text-black transition"
                        >
                            +91 95576 54553
                        </a>
                    </p>
                </div>

                {/* Email */}
                <div className="bg-white border rounded-xl p-8 text-center">
                    <div className="text-2xl mb-4">✉️</div>

                    <h3 className="font-semibold text-lg">
                        Email
                    </h3>

                    <p className="mt-3 text-sm text-zinc-600">
                        <a
                            href="mailto:support@latinbags.in"
                            className="hover:text-black transition"
                        >
                            support@latinbags.in
                        </a>
                    </p>
                </div>

            </div>

        </section>
    );
}