// stores/cart.ts
import { defineStore } from 'pinia'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  description?: string
  image?: string
  modifiers?: string[]
  note?: string
}

export interface ProductModifierGroup {
  id: string
  label: string
  options: string[]
}

export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  badge?: string
  rating?: number
  modifiers?: ProductModifierGroup[]
}

export interface CartItemInput extends Omit<CartItem, 'quantity'> {
  quantity?: number
}

export interface CartState {
  items: CartItem[]
  customerName: string
  customerAddress: string
  shippingCost: number
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [] as CartItem[],
    customerName: '',
    customerAddress: '',
    shippingCost: 1500
  }),
  getters: {
    subtotal: state => state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
    total(): number {
      return this.subtotal + this.shippingCost
    },
    totalItems: state => state.items.reduce((acc, item) => acc + item.quantity, 0)
  },
  actions: {
    addToCart(product: CartItemInput) {
      const normalizedProduct: CartItem = {
        ...product,
        quantity: product.quantity ?? 1,
        modifiers: product.modifiers ?? [],
        note: product.note?.trim() || undefined
      }

      const existing = this.items.find((item) => {
        return item.id === normalizedProduct.id
          && JSON.stringify(item.modifiers ?? []) === JSON.stringify(normalizedProduct.modifiers ?? [])
          && (item.note ?? '') === (normalizedProduct.note ?? '')
      })

      if (existing) {
        existing.quantity += normalizedProduct.quantity
      } else {
        this.items.push(normalizedProduct)
      }
    },
    decrementItem(targetItem: CartItem) {
      const index = this.items.findIndex((item) => {
        return item.id === targetItem.id
          && JSON.stringify(item.modifiers ?? []) === JSON.stringify(targetItem.modifiers ?? [])
          && (item.note ?? '') === (targetItem.note ?? '')
      })

      if (index > -1) {
        const item = this.items[index]
        if (!item) {
          return
        }

        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.items.splice(index, 1)
        }
      }
    },
    removeFromCart(target: string | CartItem) {
      const index = typeof target === 'string'
        ? this.items.findIndex(item => item.id === target)
        : this.items.findIndex((item) => {
            return item.id === target.id
              && JSON.stringify(item.modifiers ?? []) === JSON.stringify(target.modifiers ?? [])
              && (item.note ?? '') === (target.note ?? '')
          })

      if (index > -1) {
        const item = this.items[index]
        if (!item) {
          return
        }

        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.items.splice(index, 1)
        }
      }
    },
    clearCart() {
      this.items = []
    },
    setCustomerDetails(payload: { customerName?: string, customerAddress?: string }) {
      if (typeof payload.customerName === 'string') {
        this.customerName = payload.customerName
      }

      if (typeof payload.customerAddress === 'string') {
        this.customerAddress = payload.customerAddress
      }
    }
  }
})
