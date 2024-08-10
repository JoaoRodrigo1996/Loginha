import { stripe } from "@/lib/stripe";
import { Product } from "@/store";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: Product[] };

  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed" });
  }

  if (!products) {
    res.status(400).json({ error: "Products not found!" });
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

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
