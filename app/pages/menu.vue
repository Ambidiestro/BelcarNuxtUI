<template>
  <div
    class="min-h-screen pb-12"
    :style="pageBackgroundStyle"
  >
    <AppHeader />

    <section class="border-b border-black/5 bg-black text-white dark:border-white/10 dark:bg-slate-950">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-10">
        <div class="space-y-4">
          <UBadge
            color="neutral"
            variant="solid"
            class="bg-white/10 text-white backdrop-blur"
          >
            Cocina rápida premium
          </UBadge>
          <h1 class="max-w-2xl text-4xl font-black tracking-tight text-balance sm:text-5xl">
            Pide Belcar con una experiencia más limpia, más rápida y con mejor apetito visual.
          </h1>
          <p class="max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Explora productos, personaliza cada pedido y confirma tu compra con un flujo consistente desde el menú hasta WhatsApp.
          </p>

          <div class="flex flex-wrap gap-3">
            <UBadge
              color="success"
              variant="solid"
              class="bg-emerald-500 text-white"
            >
              <UIcon
                name="i-heroicons-check-circle-solid"
                class="mr-1 h-4 w-4"
              /> Abierto ahora
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft"
              class="border border-white/10 bg-white/5 text-white/80"
            >
              <UIcon
                name="i-heroicons-clock-solid"
                class="mr-1 h-4 w-4"
              /> 12:00 - 23:30
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft"
              class="border border-white/10 bg-white/5 text-white/80"
            >
              <UIcon
                name="i-heroicons-truck-solid"
                class="mr-1 h-4 w-4"
              /> Delivery y retiro
            </UBadge>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <UCard
            class="border border-white/10 bg-white/5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            :ui="heroCardUi"
          >
            <div class="flex items-start gap-4">
              <div class="rounded-2xl bg-white/10 p-3 text-white ring-1 ring-white/10">
                <UIcon
                  name="i-heroicons-fire-solid"
                  class="h-6 w-6"
                />
              </div>
              <div>
                <p class="text-sm font-semibold text-white/60">
                  Especialidad del día
                </p>
                <p class="mt-1 text-2xl font-black">
                  Completo Belcar
                </p>
                <p class="mt-2 text-sm leading-6 text-white/70">
                  Salsa secreta, cebolla caramelizada y una presentación más contundente.
                </p>
              </div>
            </div>
          </UCard>

          <UCard
            class="border border-white/10 bg-white/5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            :ui="heroCardUi"
          >
            <div class="flex items-start gap-4">
              <div class="rounded-2xl bg-white/10 p-3 text-white ring-1 ring-white/10">
                <UIcon
                  name="i-heroicons-sparkles-solid"
                  class="h-6 w-6"
                />
              </div>
              <div>
                <p class="text-sm font-semibold text-white/60">
                  Entrega estimada
                </p>
                <p class="mt-1 text-2xl font-black">
                  25 - 35 min
                </p>
                <p class="mt-2 text-sm leading-6 text-white/70">
                  Optimizado para móvil y pensado para decisiones rápidas.
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <main class="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_24rem]">
      <div class="space-y-10">
        <section
          id="completos"
          class="scroll-mt-24"
        >
          <div class="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-3xl font-black tracking-tight text-gray-950 dark:text-slate-50">
                Completos
              </h2>
              <p class="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Los clásicos con más presencia visual.
              </p>
            </div>
          </div>

          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            <ProductCard
              v-for="product in mockProducts.completos"
              :key="product.id"
              :product="product"
              @configure="openCustomizer(product)"
            />
          </div>
        </section>

        <section
          id="papas"
          class="scroll-mt-24"
        >
          <div class="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-3xl font-black tracking-tight text-gray-950 dark:text-slate-50">
                Papas Fritas
              </h2>
              <p class="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Crocancia, textura y precio visible al instante.
              </p>
            </div>
          </div>

          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            <ProductCard
              v-for="product in mockProducts.papas"
              :key="product.id"
              :product="product"
              @configure="openCustomizer(product)"
            />
          </div>
        </section>

        <section
          id="promociones"
          class="scroll-mt-24"
        >
          <div class="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-3xl font-black tracking-tight text-gray-950 dark:text-slate-50">
                Promociones
              </h2>
              <p class="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Combos destacados para ahorrar sin perder sabor.
              </p>
            </div>
          </div>

          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            <ProductCard
              v-for="product in mockProducts.promociones"
              :key="product.id"
              :product="product"
              @configure="openCustomizer(product)"
            />
          </div>
        </section>

        <section
          id="bebidas"
          class="scroll-mt-24"
        >
          <div class="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-3xl font-black tracking-tight text-gray-950 dark:text-slate-50">
                Bebidas
              </h2>
              <p class="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Opciones frías para acompañar cualquier pedido.
              </p>
            </div>
          </div>

          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
            <ProductCard
              v-for="product in mockProducts.bebidas"
              :key="product.id"
              :product="product"
              @configure="openCustomizer(product)"
            />
          </div>
        </section>
      </div>

      <aside class="lg:sticky lg:top-24 lg:self-start">
        <UCard
          class="border border-gray-200/80 bg-white/95 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_16px_50px_rgba(2,6,23,0.45)]"
          :ui="sidebarCardUi"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-black text-gray-950 dark:text-slate-50">
                  Tu Pedido
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-slate-400">
                  Todo queda guardado, incluso con notas.
                </p>
              </div>
              <UBadge
                color="neutral"
                variant="soft"
                class="rounded-full px-3 py-1 text-xs font-semibold"
              >
                {{ cart.totalItems }} items
              </UBadge>
            </div>
          </template>

          <div
            v-if="cart.items.length === 0"
            class="rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-4 py-10 text-center dark:border-slate-700 dark:bg-slate-950/60"
          >
            <UIcon
              name="i-heroicons-shopping-bag-solid"
              class="mx-auto h-10 w-10 text-gray-300 dark:text-slate-600"
            />
            <p class="mt-3 text-sm font-medium text-gray-500 dark:text-slate-300">
              No has agregado productos todavía.
            </p>
            <p class="mt-1 text-xs leading-5 text-gray-400 dark:text-slate-500">
              Usa los botones de agregar para abrir el modal y personalizar tu pedido.
            </p>
          </div>

          <div
            v-else
            class="space-y-4"
          >
            <div
              v-for="item in cart.items"
              :key="`${item.id}-${item.note || 'base'}-${(item.modifiers || []).join('|')}`"
              class="rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-950/50"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="font-bold text-gray-950 dark:text-slate-50">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-xs text-gray-500 dark:text-slate-400">
                    {{ item.modifiers?.length ? item.modifiers.join(' · ') : 'Sin modificadores' }}
                  </p>
                  <p
                    v-if="item.note"
                    class="mt-1 text-xs italic text-gray-500 dark:text-slate-500"
                  >
                    “{{ item.note }}”
                  </p>
                </div>
                <span class="text-sm font-black text-gray-950 dark:text-slate-50">{{ formatCurrency(item.price * item.quantity) }}</span>
              </div>

              <div class="mt-4 flex items-center justify-between rounded-full border border-gray-200 bg-white px-2 py-1.5 dark:border-slate-700 dark:bg-slate-900">
                <UButton
                  color="neutral"
                  variant="ghost"
                  icon="i-heroicons-minus"
                  class="rounded-full"
                  :aria-label="`Disminuir ${item.name}`"
                  @click="cart.decrementItem(item)"
                />
                <span class="min-w-10 text-center text-sm font-black text-gray-950 dark:text-slate-50">{{ item.quantity }}</span>
                <UButton
                  color="neutral"
                  variant="ghost"
                  icon="i-heroicons-plus"
                  class="rounded-full"
                  :aria-label="`Aumentar ${item.name}`"
                  @click="cart.addToCart(item)"
                />
              </div>
            </div>

            <div class="space-y-2 rounded-2xl bg-gray-950 p-4 text-white dark:bg-slate-50 dark:text-slate-950">
              <div class="flex items-center justify-between text-sm text-white/70">
                <span>Subtotal</span>
                <span class="font-semibold text-white dark:text-slate-900">{{ formatCurrency(cart.subtotal) }}</span>
              </div>
              <div class="flex items-center justify-between text-sm text-white/70">
                <span>Envío</span>
                <span class="font-semibold text-white dark:text-slate-900">{{ formatCurrency(cart.shippingCost) }}</span>
              </div>
              <div class="flex items-center justify-between border-t border-white/10 pt-3 text-base dark:border-slate-200">
                <span class="font-medium text-white/80 dark:text-slate-700">Total</span>
                <span class="text-xl font-black">{{ formatCurrency(cart.total) }}</span>
              </div>
            </div>

            <UButton
              to="/checkout"
              color="neutral"
              variant="solid"
              block
              size="xl"
              class="justify-center font-bold transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Confirmar pedido
              <template #trailing>
                <UIcon
                  name="i-heroicons-paper-airplane"
                  class="h-4 w-4 rotate-45"
                />
              </template>
            </UButton>
          </div>
        </UCard>
      </aside>
    </main>

    <ProductCustomizerModal
      v-model:open="isCustomizerOpen"
      :product="selectedProduct"
      @add="handleAdd"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { useCartStore, type Product } from '~/stores/cart'

type MenuSection = 'completos' | 'papas' | 'promociones' | 'bebidas'

const cart = useCartStore()
const isCustomizerOpen = ref(false)
const selectedProduct = ref<Product | null>(null)
const route = useRoute()

const sectionByCategory: Record<MenuSection, MenuSection> = {
  completos: 'completos',
  papas: 'papas',
  promociones: 'promociones',
  bebidas: 'bebidas'
}

const mockProducts = {
  completos: [
    {
      id: 'c1',
      name: 'Completo Italiano',
      price: 2000,
      description: 'Tomate fresco, palta cremosa, mayo casera y vienesa dorada.',
      image: '/images/completo_italiano.png',
      badge: 'Clásico',
      rating: 4.8,
      modifiers: [
        { id: 'mayo', label: 'Salsas', options: ['Extra mayo', 'Sin mayo'] },
        { id: 'veg', label: 'Preparación', options: ['Sin cebolla', 'Con cebolla'] }
      ]
    },
    {
      id: 'c2',
      name: 'Completo Belcar',
      price: 2200,
      description: 'Nuestra especialidad con cebolla caramelizada y salsa secreta.',
      image: '/images/completo_belcar.png',
      badge: 'Firma',
      rating: 4.9,
      modifiers: [
        { id: 'salsa', label: 'Nivel de salsa', options: ['Normal', 'Extra salsa'] },
        { id: 'cebolla', label: 'Cebolla', options: ['Con cebolla', 'Sin cebolla'] }
      ]
    },
    {
      id: 'c3',
      name: 'Completo Dinámico',
      price: 2400,
      description: 'Chucrut, salsa americana, tomate y mayo con un balance más intenso.',
      image: '/images/completo_dinamico.png',
      badge: 'Más pedido',
      rating: 4.7,
      modifiers: [
        { id: 'chucrut', label: 'Complementos', options: ['Con chucrut', 'Sin chucrut'] },
        { id: 'toast', label: 'Tostado', options: ['Pan normal', 'Pan bien tostado'] }
      ]
    }
  ],
  papas: [
    {
      id: 'p1',
      name: 'Papas Grandes',
      price: 2000,
      description: 'Porción individual generosa, crocante y perfecta para acompañar.',
      image: '/images/papas.png',
      badge: 'Acompañamiento',
      rating: 4.6,
      modifiers: [
        { id: 'sal', label: 'Condimento', options: ['Con sal', 'Sin sal'] },
        { id: 'salsa', label: 'Salsa', options: ['Ketchup', 'Mayonesa', 'Mostaza'] }
      ]
    }
  ],
  promociones: [
    {
      id: 'pr1',
      name: 'Combo Doble Belcar',
      price: 7000,
      description: '2 completos clásicos + papas para compartir a precio promocional.',
      image: '/images/promocion.png',
      badge: 'Promo',
      rating: 4.9,
      modifiers: [
        { id: 'salsa', label: 'Salsas', options: ['Ketchup', 'Mostaza', 'Mayonesa'] }
      ]
    }
  ],
  bebidas: [
    {
      id: 'b1',
      name: 'Bebida 500ml',
      price: 1200,
      description: 'Selecciona tu sabor y la versión correcta para acompañar tu pedido.',
      image: '/images/bebidas.png',
      badge: 'Fría',
      rating: 4.5,
      modifiers: [
        { id: 'sabor', label: 'Sabor', options: ['Coca-Cola', 'Fanta', 'Sprite'] },
        { id: 'version', label: 'Clasificación', options: ['Normal', 'Zero sin azúcar'] }
      ]
    }
  ]
} satisfies Record<string, Product[]>

const heroCardUi = {
  body: 'p-6',
  header: 'p-0'
}

const sidebarCardUi = {
  body: 'p-5 sm:p-6',
  header: 'p-5 sm:p-6 pb-0'
}

const pageBackgroundStyle = {
  backgroundImage: 'var(--belcar-page-gradient)'
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(value)
}

function openCustomizer(product: Product) {
  selectedProduct.value = product
  isCustomizerOpen.value = true
}

function handleAdd(item: Parameters<typeof cart.addToCart>[0]) {
  cart.addToCart(item)
}

function getSectionFromRoute(): MenuSection | null {
  const hash = route.hash.replace('#', '').toLowerCase()
  if (hash in sectionByCategory) {
    return hash as MenuSection
  }

  const cat = Array.isArray(route.query.cat) ? route.query.cat[0] : route.query.cat
  if (typeof cat === 'string') {
    const normalizedCat = cat.toLowerCase()
    if (normalizedCat in sectionByCategory) {
      return normalizedCat as MenuSection
    }
  }

  return null
}

function scrollToSection(section: MenuSection, behavior: ScrollBehavior = 'smooth') {
  const target = document.getElementById(sectionByCategory[section])
  if (target) {
    target.scrollIntoView({ behavior, block: 'start' })
  }
}

function syncSectionFromRoute(behavior: ScrollBehavior = 'smooth') {
  const section = getSectionFromRoute()
  if (section) {
    scrollToSection(section, behavior)
  }
}

onMounted(() => {
  nextTick(() => {
    syncSectionFromRoute('auto')
  })
})

watch(
  () => [route.hash, route.query.cat],
  () => {
    nextTick(() => {
      syncSectionFromRoute('smooth')
    })
  }
)
</script>
