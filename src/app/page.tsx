import { Header } from "@/components/header";
import { ProductList } from "@/components/product-list";

export default async function Home() {
  return (
    <>
      <div className="space-y-6 max-w-7xl mx-auto">
        <Header />

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
          
          <ProductList />
        </main>
      </div>
    </>
  )
}
