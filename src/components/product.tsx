'use client'

import { Product as ProductProps, useStore } from "@/store";
import { ShoppingCart } from "lucide-react";

interface IProduct {
  product: ProductProps
}

export function Product({ product }: IProduct){
  const { addProductToCart } = useStore(store => {
    return {
      addProductToCart: store.addProductToCart
    }
  })

  return (
    <section className="flex justify-between gap-16">
      <div className="flex-1">
        <img src={product.imageUrl} alt="Imagem do produto" className="h-80 w-full rounded-xl object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-6">
          <p className="font-semibold text-xl">{product.name}</p>
          <p className="text-sm">{product.description}</p>
          <p className="text-2xl font-bold">{product.price}</p>
        </div>
        <button onClick={() => addProductToCart(product)} className="text-sm font-medium flex items-center justify-center gap-3 bg-black text-white w-full h-11 rounded-xl">
          <ShoppingCart className="size-4" />
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  )
}
