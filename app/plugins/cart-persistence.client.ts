import { useCartStore } from '~/stores/cart'

const CART_STORAGE_KEY = 'belcar-cart-state'

export default defineNuxtPlugin(() => {
  const cart = useCartStore()

  const savedState = localStorage.getItem(CART_STORAGE_KEY)
  if (savedState) {
    try {
      cart.$patch(JSON.parse(savedState))
    } catch {
      localStorage.removeItem(CART_STORAGE_KEY)
    }
  }

  cart.$subscribe((_mutation, state) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({
      items: state.items,
      customerName: state.customerName,
      customerAddress: state.customerAddress,
      shippingCost: state.shippingCost
    }))
  }, { detached: true })
})
