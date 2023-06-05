import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { priceIds } = req.body

  if (req.method !== 'POST') {
    res.status(405).json({ message: `${req.method} method is not allowed` })
  }
 
  if (priceIds.length === 0) {
    return res.status(400).json({ message: 'some priceId is required' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: priceIds.map((priceId: string) => ({
      price: priceId,
      quantity: 1
    }))
  })

  return res.status(201).json({ checkoutUrl: checkoutSession.url })
} 