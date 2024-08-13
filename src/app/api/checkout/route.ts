import { stripe } from "@/lib/stripe";
import { Product } from "@/store";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest
) {
  const  { products }  = await req.json() as {products: Product[]};

  if (req.method !== "POST") {
    new Response("method not allowed", {
      status: 405
    })
  }

  if (!products) {
    new Response("Products not found!", {
      status: 400
    })
  }

  const successUrl = `${process.env.NEXT_URL}`;
  const cancelUrl = `${process.env.NEXT_URL}`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  });

  return Response.json({ checkoutUrl: checkoutSession.url })
}
