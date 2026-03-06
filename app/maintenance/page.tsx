export default function MaintenancePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6 text-center">

            <div className="max-w-xl">

                <h1 className="text-4xl font-semibold text-zinc-900 mb-6">
                    Store Temporarily Unavailable
                </h1>

                <p className="text-zinc-600 leading-relaxed">
                    The LatinBags store is currently unavailable due to a pending payment.
                    We are working to restore access shortly.
                </p>

                <p className="mt-4 text-zinc-500 text-sm">
                    If you are the site owner, please contact the service provider to restore access.
                </p>

            </div>

        </div>
    );
}