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
  productInCart: boolean
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: string) => void
  checkIfItemAlreadyInCart: (productId: string) => boolean | undefined
}

export const useStore = create<ProductState>((set, get) => {
  return {
    cartItems: [],
    cartTotal: 0,
    productInCart: false,

    addProductToCart: (product: Product) => {
      set((state) => ({
        cartItems: [...state.cartItems, product],
        cartTotal: state.cartItems.reduce((total, item) => {
          return total + item.numberPrice
        },0)
      })
      )
    },   

    checkIfItemAlreadyInCart: (productId: string) => {
      const { cartItems } = get()
      if(cartItems.some(product => product.id === productId)){
        return true
      }
    },

    removeProductFromCart: (productId: string) => {
      set((state) => ({
        cartItems: state.cartItems.filter(product => product.id !== productId)
      }))
    },  
  }
})
