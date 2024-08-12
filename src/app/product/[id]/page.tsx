import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { stripe } from "@/lib/stripe";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Stripe from "stripe";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  }); 
  const price = response.default_price as Stripe.Price
  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
    numberPrice: response.unit_amount / 100,
    description: response.description,
    defaultPriceId: response.id,
  }

  return (
    <>
      <div className="space-y-6 max-w-7xl mx-auto">
        <Header />

        <main className="relative px-6 space-y-6">
          <menu className="border-b pb-4 flex items-center gap-5">
            <a href="#" className="text-sm font-medium">Mulheres</a>
            <a href="#" className="text-sm font-medium">Homens</a>
            <a href="#" className="text-sm font-medium">Crianças</a>
            <a href="#" className="text-sm font-medium">Esportes</a>
            <a href="#" className="text-sm font-medium">Marcas</a>
            <a href="#" className="text-sm font-medium">Novos</a>
            <a href="#" className="text-sm font-medium">Oferta</a>
          </menu>

          <div className="inline-block">
            <Link href='/' className="text-sm font-medium flex items-center gap-2">
              <ChevronLeft className="size-4" />
              Voltar
            </Link>
          </div>

          <Product product={product} />
        </main>

      </div>
    </>
  )
}
