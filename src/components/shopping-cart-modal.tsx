'use client'

import { useStore } from "@/store";
import axios from "axios";
import { Trash2, X } from "lucide-react";

interface ShoppingCartModalProps {
  closeShoppingCartModal: () => void
}

export function ShoppingCartModal({ closeShoppingCartModal }: ShoppingCartModalProps){
  const { cartItems, removeProductFromCart } = useStore((store) => {
    return {
      cartItems: store.cartItems,
      removeProductFromCart: store.removeProductFromCart
    }
  })

  async function handleCheckout(){    
    try {      
      const response = await axios.post(`/api/checkout`, {
        products: cartItems
      })
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error)
    }
  }

  const total = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)
  
  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(total)

  return (
    <div className="absolute inset-0 bg-black/60 z-10">
      <div className="flex flex-col absolute right-1 top-1 bottom-1 w-[420px] bg-white rounded-xl py-5 px-6 shadow-sm space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Carrinho de compras</h2>
            <button type='button' onClick={closeShoppingCartModal} className=''>
              <X className='size-5 text-zinc-600' />
            </button>
          </div>
          <p className='text-sm text-zinc-600'>
            Você tem um total de {cartItems.length} itens no carrinho.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-100" />

        {
          cartItems.length <= 0 ? (
            <p>Carrinho vazio</p>
          ) : (
            <div className="relative flex flex-col space-y-4 h-full">
              <div className="flex flex-col gap-5">
                {
                  cartItems.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <img src={item.imageUrl} alt="" className="w-24 rounded-xl" />
                      <div className="flex flex-col justify-between">
                        <p className="text-sm font-medium">{item.name}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold">{item.price}</p>
                          <button onClick={() => removeProductFromCart(item.id)}>
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div className="w-full h-px bg-zinc-100" />

              <div className="flex items-center justify-between">
                <p className="text-base text-zinc-800">Total</p>
                <p className="text-2xl font-bold">{formattedTotal}</p>
              </div>
              <button onClick={handleCheckout} className="absolute bottom-0 right-0 left-0 w-full h-11 bg-black text-zinc-50 flex items-center justify-center gap-3 rounded-lg">
                Comprar
              </button>
            </div>
          )
        }

      </div>
    </div>
  )
}