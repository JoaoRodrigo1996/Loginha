import Stripe from "stripe";
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
  addProductToCart: (product: Product) => Promise<void>
  removeProductFromCart: (productId: string) => Promise<void>
}

export const useStore = create<ProductState>((set) => {
  return {
    cartItems: [],
    cartTotal: 0,

    addProductToCart: async (product: Product) => {
      set((state) => ({
        cartItems: [...state.cartItems, product],
        cartTotal: state.cartItems.reduce((total, item) => {
          return total + item.numberPrice
        },0)
      })
      )
    },   

    removeProductFromCart: async (productId: string) => {
      set((state) => ({
        cartItems: state.cartItems.filter(item => item.id === productId)
      }))
    },  
  }
})
