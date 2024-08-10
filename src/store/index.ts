import { create } from "zustand";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

export interface ProductState {
  cartItems: Product[]
  cartTotal: number
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
}

export const useStore = create<ProductState>((set) => {
  return {
    cartItems: [],
    cartTotal: 0,

    addProductToCart: (product: Product) => {
      set((state) => ({
        cartItems: [...state.cartItems, product]
      })
      )
    },

    removeProductFromCart: (productId: string) => {
      set((state) => ({
        cartItems: state.cartItems.filter(item => item.id === productId)
      }))
    },  
  }
})
