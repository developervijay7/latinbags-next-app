export default function ContactMap() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                    Visit Our Location
                </h2>

                <p className="mt-4 text-zinc-600">
                    You can visit us at our Agra location. We’d love to welcome you
                    and help you find the perfect bag for your special occasion.
                </p>
            </div>

            {/* Map */}
            <div className="mt-12 rounded-xl overflow-hidden border">

                <iframe
                    src="https://www.google.com/maps?q=D-909%20HIG%20100Ft%20Road%20Kalindi%20Vihar%20Agra%20282006&output=embed"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

            </div>

        </section>
    );
}