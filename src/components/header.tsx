'use client'

import { Search, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { ShoppingCartModal } from "./shopping-cart-modal";
import { useStore } from "@/store";

export function Header(){
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false)

  const { cartItems } = useStore((store) => {
    return {
      cartItems: store.cartItems
    }
  })

  function openShoppingCartModal(){
    setIsShoppingCartModalOpen(true)
  }

  function closeShoppingCartModal(){
    setIsShoppingCartModalOpen(false)
  }  

  return (
    <header className="flex items-center justify-between px-6 py-3">
      <h1 className="text-2xl font-bold">JR.<span className="text-[#edcf5d]">M</span></h1>
      <div className="h-[42px] rounded-full flex items-center justify-center gap-2 border px-4">
        <label htmlFor="">
          <Search className='size-4 text-zinc-500' />
        </label>
        <input type="text" className='bg-transparent focus:outline-none text-sm placeholder:text-zinc-500' placeholder="Pesquisar" />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <button className='p-3 border rounded-full' onClick={openShoppingCartModal} >
            <ShoppingCart className="size-4" />
          </button>
          {
            cartItems.length > 0 && (
              <div className="absolute -bottom-0 right-0 bg-white text-xs font-bold ">{cartItems.length}</div>
            )
          }
        </div>
        <button className='p-3 border rounded-full' >
          <Heart className="size-4" />
        </button>
        <div className="size-[42px] rounded-full">
          <img className='size-[42px] rounded-full' src="https://github.com/JoaoRodrigo1996.png" alt="" />
        </div>
      </div>
      {
        isShoppingCartModalOpen && (
          < ShoppingCartModal
            closeShoppingCartModal={closeShoppingCartModal}
          />
        )
      }
    </header>
  )
}
