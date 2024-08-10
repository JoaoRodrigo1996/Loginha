import { X } from "lucide-react";

interface ShoppingCartModalProps {
  closeShoppingCartModal: () => void
}

export function ShoppingCartModal({ closeShoppingCartModal }: ShoppingCartModalProps){
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

          <form action='/api/checkout-session' method="POST" className="absolute bottom-0 right-0 left-0">
            <button className="w-full h-11 bg-black text-zinc-50 flex items-center justify-center gap-3 rounded-lg">
              Comprar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}