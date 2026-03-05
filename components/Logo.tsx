import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-3 font-serif font-bold tracking-wide text-zinc-900 hover:opacity-80 transition"
        >
            {/* Handbag Icon */}
            <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
            >
                {/* Handle */}
                <path d="M8 9a4 4 0 0 1 8 0" />

                {/* Bag body */}
                <path d="M4 9h16l-1 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 9z" />

                {/* Decorative clasp */}
                <circle cx="12" cy="13" r="1" />
            </svg>

            {/* Brand Name */}
            <span className="text-2xl">
        Latin<span className="text-black">Bags</span>
      </span>
        </Link>
    );
}