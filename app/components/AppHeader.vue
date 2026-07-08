<template>
  <header class="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/80">
    <div class="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 text-xl font-black tracking-tight text-gray-950 transition-colors dark:text-slate-50"
      >
        <span class="grid h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/15 transition-colors dark:bg-slate-900 dark:shadow-black/30">
          <img
            src="/images/belcar.png"
            alt="Logo de Belcar"
            class="h-full w-full object-cover"
          >
        </span>
        <span class="hidden sm:block">Belcar</span>
      </NuxtLink>

      <nav class="hidden items-center gap-2 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-50"
        >
          {{ item.label }}
          <span
            v-if="item.badge"
            class="ml-2 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-gray-950 dark:bg-amber-300 dark:text-slate-950"
          >
            {{ item.badge }}
          </span>
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <div class="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition-colors dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300 sm:flex">
          <span class="h-2 w-2 rounded-full bg-emerald-500" />
          Abierto ahora
        </div>
        <UColorModeButton />

        <NuxtLink
          to="/checkout"
          class="relative rounded-full border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-950 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-slate-50"
          aria-label="Ir al carrito y checkout"
        >
          <UIcon
            name="i-heroicons-shopping-cart"
            class="h-5 w-5"
          />
          <span
            v-if="cart.totalItems > 0"
            class="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-black text-[11px] font-black text-white dark:bg-slate-50 dark:text-slate-950"
          >
            {{ cart.totalItems }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const navItems = [
  { label: 'Completos', to: '/menu#completos' },
  { label: 'Papas', to: '/menu#papas' },
  { label: 'Promociones', to: '/menu#promociones' },
  { label: 'Bebidas', to: '/menu#bebidas', badge: 'Nuevo' }

]
const cart = useCartStore()
</script>
