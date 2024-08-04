import { Heart, Search, ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <header className="flex items-center justify-between px-6 py-3">
        <h1 className="text-2xl font-bold">JR.<span className="text-[#edcf5d]">M</span></h1>
        <div className="h-[42px] rounded-full flex items-center justify-center gap-2 border px-4">
          <label htmlFor="">
            <Search className='size-4 text-zinc-500' />
          </label>
          <input type="text" className='bg-transparent focus:outline-none text-sm placeholder:text-zinc-500' placeholder="Pesquisar" />
        </div>
        <div className="flex items-center gap-3">
          <button className='p-3 border rounded-full' >
            <ShoppingCart className="size-4" />
          </button>
          <button className='p-3 border rounded-full' >
            <Heart className="size-4" />
          </button>
          <div className="size-[42px] rounded-full">
            <img className='size-[42px] rounded-full' src="https://github.com/JoaoRodrigo1996.png" alt="" />
          </div>
        </div>
      </header>

      <main className="px-6 space-y-6">
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
              <p className='text-3xl font-bold'>R$ 599.00</p>
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
  )
}
