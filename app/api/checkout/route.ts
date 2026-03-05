import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface CartItem {
    id: string;
    name: string;
    price: number;
    qty: number;
}

export async function POST(req: Request) {
    const { cart }: { cart: CartItem[] } = await req.json();

    const items = cart
        .map((i) => `${i.name} x${i.qty} - ₹${i.price}`)
        .join("\n");

    await resend.emails.send({
        from: "orders@latinbags.in",
        to: "youremail@gmail.com",
        subject: "New LatinBags Order",
        text: items,
    });

    return NextResponse.json({ success: true });
}