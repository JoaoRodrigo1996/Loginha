import { stripe } from "@/lib/stripe"
import { Product } from "@/store"
import Link from "next/link"
import Stripe from "stripe"

export async function ProductList(){
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })

  const products = await response.data.map((product: Stripe.Product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount && price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })

  return (
    <section className="flex items-center gap-5">
      {
        products.map((product: Product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="flex items-center flex-col border rounded-xl bg-zinc-100 hover:cursor-pointer">
            <div className="">
              <img src={product.imageUrl} alt="" className="rounded-xl object-cover" />
            </div>
            <div className="p-4 space-y-2">
              <p className='font-semibold'>{product.name}</p>
              <span className="text-sm font-medium">{product.price}</span>
            </div>
          </Link>
        ))
      }
    </section>
  )
}
