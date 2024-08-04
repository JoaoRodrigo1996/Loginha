import { Search, ShoppingCart, Heart } from "lucide-react";

export function Header(){
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
  )
}
