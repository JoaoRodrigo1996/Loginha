'use client'

import { useState } from "react";
import { Header } from "@/components/header";
import { ShoppingCartModal } from "@/components/shopping-cart-modal";
import Link from "next/link";

export default async function Home() {
  const [isShoppingCartModalOpen, setIsShoppingCartModalOpen] = useState(false)
  const [products, setProduct] = useState([
    {
      id: '1',
      title: 'Chuteira Nike Mercurial Vapor 15 Academy Futsal',
      price: 49900,      
      brand: 'Nike',
      image_url: './nike1.png'
    },
    {
      id: '2',
      title: 'Chuteira Nike Mercurial Vapor 15 Club Futsal',
      price: 59990,
      brand: 'Nike',
      image_url: './nike2.png'
    },
    {
      id: '3',
      title: 'Tênis Nike Court Vision Low Next Nature Masculino',
      price: 89900,
      brand: 'Nike',
      image_url: './nike3.png'
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
            {
              products.map(product => (
                <div key={product.id} className="flex items-center flex-col border rounded-xl bg-zinc-100 hover:bg-white hover:cursor-pointer">
                  <Link href={`/product/${product.id}`} >
                    <div className="">
                      <img src={product.image_url} alt="" className="rounded-xl object-cover" />
                    </div>
                    <div className="p-4 space-y-2">
                      <p className='font-semibold'>{product.title}</p>
                      <span className="text-sm font-medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 100)}</span>
                    </div>
                  </Link>
                </div>
              ))
            }
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
