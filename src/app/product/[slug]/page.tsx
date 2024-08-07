'use client'

import { Header } from "@/components/header";
import { ShoppingCartModal } from "@/components/shopping-cart-modal";
import { ArrowLeft, ChevronLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SIZES = [34,35,36,37,38,39,40,41,42]

export default function Page({ params }: { params: { slug: string } }) {
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

          <div className="inline-block">
            <Link href='/' className="text-sm font-medium flex items-center gap-2">
              <ChevronLeft className="size-4" />
              Voltar
            </Link>
          </div>

          <section className="flex justify-between gap-16">
            <div className="flex-1">
              <img src='../shoe.avif' alt='Imagem do produto' className='rounded-xl' />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="../nike.svg" alt="Logo marca do produto" className='w-10' />
                  <p className="text-sm text-semibold ">Nike</p>
                </div>
                <span className="text-sm text-zinc-600">HE15487-00</span>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Tênis Nike Court Vision Low Next Nature Masculino</p>
                <p className="text-2xl font-bold">R$ 599,00</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {
                  SIZES.map(size => (
                    <div key={size} className="border rounded-xl px-5 py-2">
                      <span className="text-sm font-semibold">{size}</span>
                    </div>
                  ))
                }
              </div>
              
              <button className="bg-black text-white text-sm w-full flex items-center justify-center gap-3 h-11 rounded-xl font-medium">
                <ShoppingCart className='size-4' />
                Adicionar ao carrinho
              </button>
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
