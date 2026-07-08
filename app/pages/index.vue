<template>
  <div
    class="min-h-screen pb-12 text-gray-950 transition-colors dark:text-slate-100"
    :style="pageBackgroundStyle"
  >
    <AppHeader />

    <main class="mx-auto max-w-7xl px-4 pt-6 sm:pt-8">
      <section class="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div class="relative overflow-hidden rounded-4xl border border-black/10 bg-black text-white shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.95),rgba(17,24,39,0.82))]" />
          <img
            src="/images/completo.png"
            alt="Producto destacado de Belcar"
            class="absolute inset-y-0 right-0 hidden h-full w-[58%] object-cover opacity-45 lg:block"
          >

          <div class="relative z-10 flex min-h-130 flex-col justify-between p-6 sm:p-10 lg:p-12">
            <div class="space-y-5">
              <UBadge
                color="neutral"
                variant="solid"
                class="inline-flex bg-white/10 text-white ring-1 ring-white/10 backdrop-blur"
              >
                <span
                  :class="isOpenNow ? 'bg-emerald-400' : 'bg-gray-400'"
                  class="mr-2 inline-block h-2 w-2 rounded-full"
                />
                {{ isOpenNow ? 'Abierto ahora' : 'Cerrado ahora' }} · Cocina rápida · Sabor real
              </UBadge>

              <div class="max-w-xl space-y-4">
                <h1 class="max-w-lg text-4xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl lg:text-7xl">
                  EL SABOR QUE
                  <span class="block text-amber-400">SIEMPRE</span>
                  <span class="block text-red-500">SE ANTOJA</span>
                </h1>
                <p class="max-w-md text-sm leading-7 text-white/80 sm:text-base">
                  Belcar combina menú claro, carrito visible y checkout legible para que cada acción se entienda sin esfuerzo en móvil o escritorio.
                </p>
              </div>
            </div>

            <div class="space-y-5">
              <div class="grid gap-3 sm:grid-cols-3">
                <div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <div
                    :class="isOpenNow ? 'border-emerald-400/25 bg-emerald-500/15 text-emerald-300' : 'border-gray-400/25 bg-gray-500/15 text-gray-300'"
                    class="grid h-10 w-10 place-items-center rounded-full border"
                  >
                    <UIcon
                      name="i-heroicons-check-circle-solid"
                      class="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-white/60">
                      {{ isOpenNow ? 'Abierto ahora' : 'Cerrado ahora' }}
                    </p>
                    <p class="text-sm font-black text-white">
                      12:00 - 23:30
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <div class="grid h-10 w-10 place-items-center rounded-full border border-amber-400/25 bg-amber-500/15 text-amber-300">
                    <UIcon
                      name="i-heroicons-truck-solid"
                      class="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-white/60">
                      Delivery y retiro
                    </p>
                    <p class="text-sm font-black text-white">
                      Rápido y seguro
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <div class="grid h-10 w-10 place-items-center rounded-full border border-red-400/25 bg-red-500/15 text-red-300">
                    <UIcon
                      name="i-heroicons-clock-solid"
                      class="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-white/60">
                      Tiempo estimado
                    </p>
                    <p class="text-sm font-black text-white">
                      30 - 45 min
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <UButton
                  to="/menu"
                  color="error"
                  variant="solid"
                  size="xl"
                  class="justify-center font-black shadow-[0_16px_30px_rgba(239,68,68,0.25)] transition hover:-translate-y-0.5"
                >
                  Ver menú
                  <template #trailing>
                    <UIcon
                      name="i-heroicons-arrow-right"
                      class="h-4 w-4"
                    />
                  </template>
                </UButton>
                <UButton
                  to="/menu#promociones"
                  color="neutral"
                  variant="ghost"
                  size="xl"
                  class="justify-center font-semibold text-white hover:bg-white/10"
                >
                  Ver promociones
                  <template #trailing>
                    <UIcon
                      name="i-heroicons-arrow-top-right-on-square"
                      class="h-4 w-4"
                    />
                  </template>
                </UButton>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-5">
          <UCard
            class="overflow-hidden border-0 bg-[linear-gradient(135deg,#0f172a_0%,#111827_55%,#1f2937_100%)] text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)] dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_55%,#111827_100%)]"
            :ui="compactCardUi"
          >
            <div class="flex items-center gap-4">
              <div class="shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                <img
                  src="/images/belcar.png"
                  alt="Logo de Belcar"
                  class="h-28 w-28 object-cover"
                >
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold uppercase tracking-[0.28em] text-red-300">
                  Especialidad
                </p>
                <h2 class="mt-2 text-3xl font-black tracking-tight text-white">
                  Completo Belcar
                </h2>
                <div class="mt-3 flex items-center gap-2 text-amber-400">
                  <UIcon
                    v-for="star in 5"
                    :key="star"
                    name="i-heroicons-star-solid"
                    class="h-4 w-4"
                  />
                  <span class="ml-1 text-sm font-bold text-white/80">4.9</span>
                </div>
                <p class="mt-3 max-w-sm text-sm leading-6 text-white/72">
                  Salsa secreta, cebolla caramelizada y una composición pensada para verse bien y comerse mejor.
                </p>
              </div>
            </div>
          </UCard>

          <UCard
            class="border border-gray-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_18px_50px_rgba(2,6,23,0.45)]"
            :ui="compactCardUi"
          >
            <div class="flex items-center gap-4">
              <div class="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700 ring-1 ring-amber-200">
                <UIcon
                  name="i-heroicons-clock-solid"
                  class="h-7 w-7"
                />
              </div>
              <div class="flex-1">
                <p class="text-xs font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-slate-400">
                  Horario de atención
                </p>
                <p class="mt-1 text-3xl font-black tracking-tight text-gray-950 dark:text-slate-50">
                  12:00 - 23:30
                </p>
                <p class="mt-1 text-sm text-gray-600 dark:text-slate-300">
                  Lunes a domingo
                </p>
              </div>
              <div class="hidden h-24 w-24 rounded-full border border-dashed border-gray-200 bg-[radial-gradient(circle,#f5f5f4_0%,#ffffff_70%)] dark:border-slate-700 dark:bg-[radial-gradient(circle,#1e293b_0%,#0f172a_70%)] lg:grid place-items-center">
                <UIcon
                  name="i-heroicons-sun-solid"
                  class="h-10 w-10 text-gray-200 dark:text-slate-700"
                />
              </div>
            </div>
          </UCard>

          <UCard
            class="overflow-hidden border-0 bg-[linear-gradient(135deg,#ef4444_0%,#dc2626_55%,#b91c1c_100%)] text-white shadow-[0_18px_50px_rgba(220,38,38,0.2)] dark:bg-[linear-gradient(135deg,#7f1d1d_0%,#991b1b_55%,#b91c1c_100%)]"
            :ui="compactCardUi"
          >
            <div class="flex items-center justify-between gap-4">
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                  Envío rápido
                </p>
                <h2 class="mt-2 text-3xl font-black tracking-tight">
                  Delivery rápido y seguro
                </h2>
                <p class="mt-2 max-w-sm text-sm leading-6 text-white/80">
                  Seguimiento visual y pedido listo para confirmación en WhatsApp.
                </p>
              </div>
              <div class="relative shrink-0 self-end rounded-[2rem]">
                <div class="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_58%)]" />
                <img
                  src="/images/delivery.png"
                  alt="Pedido en camino"
                  class="relative h-44 w-44 object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.3)] sm:h-48 sm:w-48 lg:h-52 lg:w-52"
                >
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <section class="mt-8">
        <div class="mb-5 flex items-end justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.3em] text-red-500">
              Explora nuestro menú
            </p>
            <h2 class="mt-2 text-3xl font-black tracking-tight text-gray-950 dark:text-slate-50 sm:text-4xl">
              Categorías principales
            </h2>
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="category in categories"
            :key="category.slug"
            :to="`/menu#${category.slug}`"
            class="group flex items-center gap-4 rounded-[1.75rem] border border-gray-200 bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_12px_32px_rgba(2,6,23,0.35)] dark:hover:border-slate-700 dark:hover:shadow-[0_18px_45px_rgba(2,6,23,0.5)]"
          >
            <div class="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gray-50 dark:bg-slate-800">
              <img
                :src="category.image"
                :alt="category.name"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              >
            </div>

            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <h3 class="truncate text-lg font-black text-gray-950 dark:text-slate-50">{{ category.name }}</h3>
                <UBadge
                  v-if="category.badge"
                  color="warning"
                  variant="solid"
                  class="rounded-full px-2 py-1 text-[10px] font-black uppercase tracking-wide"
                >
                  {{ category.badge }}
                </UBadge>
              </div>
              <p class="mt-1 text-sm leading-6 text-gray-500 dark:text-slate-400">{{ category.description }}</p>
              <div class="mt-4 flex items-center gap-2">
                <span class="grid h-9 w-9 place-items-center rounded-full bg-red-500 text-white transition group-hover:translate-x-0.5 dark:bg-red-400 dark:text-slate-950">
                  <UIcon
                    name="i-heroicons-arrow-right"
                    class="h-4 w-4"
                  />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const categories = [
  {
    name: 'Completos',
    slug: 'completos',
    image: '/images/completo.png',
    description: 'Los clásicos que más aman nuestros clientes.',
    badge: ''
  },
  {
    name: 'Papas',
    slug: 'papas',
    image: '/images/papas.png',
    description: 'Crocantes por fuera, suaves por dentro.',
    badge: ''
  },
  {
    name: 'Promociones',
    slug: 'promociones',
    image: '/images/belcar.png',
    description: 'Descuentos y combos por tiempo limitado.',
    badge: ''
  },
  {
    name: 'Bebidas',
    slug: 'bebidas',
    image: '/images/bebidas.png',
    description: 'Refresca tu momento con las mejores opciones.',
    badge: 'Nuevo'
  }
]

const isOpenNow = computed(() => {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours() * 60 + now.getMinutes()

  const weekdayOpen = 12 * 60
  const weekdayClose = 23 * 60 + 30
  const sundayClose = 18 * 60

  if (day === 0) {
    return hours >= weekdayOpen && hours <= sundayClose
  }

  return hours >= weekdayOpen && hours <= weekdayClose
})

const pageBackgroundStyle = {
  backgroundImage: 'var(--belcar-page-gradient)'
}

const compactCardUi = {
  body: 'p-5 sm:p-6'
}
</script>
