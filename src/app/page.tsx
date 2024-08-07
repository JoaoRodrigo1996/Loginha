'use client'

import { Header } from "@/components/header";
import { Heart, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false)

  function openShoppingCartModal(){
    setIsShoppingCartModalOpen(true)
  }

  function closeShoppingCartModal(){
    setIsShoppingCartModalOpen(false)
  }

  return (
    <>
      <div className="space-y-6 max-w-7xl mx-auto">
        <Header openShoppingCartModal={openShoppingCartModal} />

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

          <div className="flex gap-16">
            <div className="flex-1">
              <div className="">
                <img src="/shoe.avif" alt="" className='object-cover rounded-xl' />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/nike.svg" alt="" className="w-8" />
                  <span className="font-medium text-sm">Nike</span>
                </div>
                <span className="text-zinc-500">TE1254R00-,-1</span>
              </div>
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Tênis Nike Court Vision Low Next Nature Masculino</h4>
                <p className='text-3xl font-bold'>R$ 599,00</p>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium">Tamanhos</span>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="border px-5 py-2 rounded-lg">34</button>
                  <button className="border px-5 py-2 rounded-lg">35</button>
                  <button className="border px-5 py-2 rounded-lg">36</button>
                  <button className="border px-5 py-2 rounded-lg">37</button>
                  <button className="border px-5 py-2 rounded-lg">38</button>
                  <button className="border px-5 py-2 rounded-lg">39</button>
                  <button className="border px-5 py-2 rounded-lg">40</button>
                  <button className="border px-5 py-2 rounded-lg">41</button>
                  <button className="border px-5 py-2 rounded-lg">42</button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-full h-11 bg-black text-zinc-50 flex items-center justify-center gap-3 rounded-lg">
                  <ShoppingCart className='size-5' />
                  Adicionar ao carrinho
                </button>
                <button className='px-6 flex items-center justify-center h-11 rounded-lg bg-[#edcf5d]'>
                  <Heart className='size-5' />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      {
        isShoppingCartModalOpen && (
          <div className="absolute inset-0 bg-black/60">
            <div className="flex flex-col absolute right-1 top-1 bottom-1 w-[420px] bg-white rounded-xl py-5 px-6 shadow-sm space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Carrinho de compras</h2>
                  <button type='button' onClick={closeShoppingCartModal} className=''>
                    <X className='size-5 text-zinc-600' />
                  </button>
                </div>
                <p className='text-sm text-zinc-600'>
                  Você tem um total de 2 itens no carrinho.
                </p>
              </div>

              <div className="w-full h-px bg-zinc-100" />

              <div className="relative flex flex-col space-y-4 h-full">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-3">
                    <img src="./shoe.avif" alt="" className="w-24 rounded-xl" />
                    <div className="flex flex-col justify-between">
                      <p className="text-sm font-medium">Tênis Nike Court Vision Low Next Nature Masculino</p>
                      <p className="text-lg font-bold">R$ 599,00</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img src="./shoe.avif" alt="" className="w-24 rounded-xl" />
                    <div className="flex flex-col justify-between">
                      <p className="text-sm font-medium">Tênis Nike Court Vision Low Next Nature Masculino</p>
                      <p className="text-lg font-bold">R$ 599,00</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-100" />

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-600">Impostos</p>
                    <p className="text-lg font-medium">10%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-600">Subtotal</p>
                    <p className="text-lg font-medium">R$ 1.198,00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-600">Frete</p>
                    <p className="text-lg font-medium">R$ 200,00</p>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-100" />

                <div className="flex items-center justify-between">
                  <p className="text-base text-zinc-800">Total</p>
                  <p className="text-2xl font-bold">R$ 1.596,00</p>
                </div>

                <div className="absolute bottom-0 right-0 left-0">
                  <button className="w-full h-11 bg-black text-zinc-50 flex items-center justify-center gap-3 rounded-lg">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
