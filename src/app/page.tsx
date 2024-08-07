'use client'

import { useState } from "react";
import { Header } from "@/components/header";
import { ShoppingCartModal } from "@/components/shopping-cart-modal";

export default function Home() {
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false)
  const [products, setProduct] = useState([
    {
      id: '1',
      title: 'Tênis Nike Court Vision Low Next Nature Masculino',
      price: '599',
      sizes: [34,35,36,37,38,39,40,41,42],
      brand: 'Nike'
    }
  ])

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

          <section className="flex items-center gap-5">
            <div className="flex items-center flex-col border rounded-xl bg-zinc-100 hover:bg-white hover:cursor-pointer">
              <div className="">
                <img src="./shoe.avif" alt="" className="rounded-xl object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <p className='font-semibold'>Tênis Nike Court Vision Low Next Nature Masculino</p>
                <span className="text-sm font-medium">R$ 599,00</span>
              </div>
            </div>
            <div className="flex items-center flex-col border rounded-xl bg-zinc-100 hover:bg-white hover:cursor-pointer">
              <div className="">
                <img src="./shoe.avif" alt="" className="rounded-xl object-cover"/>
              </div>
              <div className="p-4 space-y-2">
                <p className='font-semibold'>Tênis Nike Court Vision Low Next Nature Masculino</p>
                <span className="text-sm font-medium">R$ 599,00</span>
              </div>
            </div>
            <div className="flex items-center flex-col border rounded-xl bg-zinc-100 hover:bg-white hover:cursor-pointer">
              <div className="">
                <img src="./shoe.avif" alt="" className="rounded-xl object-cover"/>
              </div>
              <div className="p-4 space-y-2">
                <p className='font-semibold'>Tênis Nike Court Vision Low Next Nature Masculino</p>
                <span className="text-sm font-medium">R$ 599,00</span>
              </div>
            </div>
          </section>
        </main>
      </div>
      {
        isShoppingCartModalOpen && (
          < ShoppingCartModal
            closeShoppingCartModal={closeShoppingCartModal}
          />
        )
      }
    </>
  )
}
