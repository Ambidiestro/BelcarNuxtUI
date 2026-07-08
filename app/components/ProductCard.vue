<template>
  <UCard
    class="group overflow-hidden border border-gray-200/80 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_10px_30px_rgba(2,6,23,0.35)] dark:hover:shadow-[0_16px_40px_rgba(2,6,23,0.5)]"
    :ui="cardUi"
  >
    <div class="relative">
      <div class="absolute inset-0 bg-black/25 dark:bg-slate-950/20" />
      <img
        :src="product.image"
        :alt="product.name"
        class="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      >

      <div class="absolute left-4 top-4 flex gap-2">
        <UBadge
          color="neutral"
          variant="solid"
          class="bg-black/85 text-white shadow-sm dark:bg-slate-50 dark:text-slate-950"
        >
          {{ product.badge || 'Favorito' }}
        </UBadge>
        <UBadge
          v-if="product.rating"
          color="neutral"
          variant="soft"
          class="backdrop-blur"
        >
          <UIcon
            name="i-heroicons-star-solid"
            class="mr-1 h-3.5 w-3.5 text-amber-400"
          />
          {{ product.rating.toFixed(1) }}
        </UBadge>
      </div>
    </div>

    <div class="space-y-4 p-5">
      <div>
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-black tracking-tight text-gray-950 dark:text-slate-50">
              {{ product.name }}
            </h3>
            <p class="mt-1 text-sm leading-6 text-gray-500 dark:text-slate-400">
              {{ product.description }}
            </p>
          </div>
          <span class="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-bold text-gray-900 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50">
            {{ formattedPrice }}
          </span>
        </div>
      </div>

      <div class="flex items-center justify-between gap-3">
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="feature in productFeatures"
            :key="feature"
            color="neutral"
            variant="soft"
            class="text-[11px] font-semibold uppercase tracking-wide text-gray-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {{ feature }}
          </UBadge>
        </div>

        <UButton
          color="neutral"
          variant="solid"
          size="md"
          class="shrink-0 px-4 font-bold transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-50 dark:text-slate-950"
          icon="i-heroicons-plus"
          @click="$emit('configure')"
        >
          Agregar
        </UButton>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Product } from '~/stores/cart'

const props = defineProps<{
  product: Product
}>()

defineEmits<{
  configure: []
}>()

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(props.product.price)
})

const productFeatures = computed(() => {
  return [props.product.badge, 'Hecho al momento', 'Delivery rápido'].filter(Boolean) as string[]
})

const cardUi = {
  body: 'p-0',
  footer: 'p-0'
}
</script>
