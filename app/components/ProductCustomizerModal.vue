<template>
  <UModal
    v-model:open="open"
    title="Personaliza tu pedido"
    description="Ajusta detalles antes de agregar al carrito"
    :ui="modalUi"
  >
    <template #content>
      <div
        v-if="product"
        class="flex max-h-[calc(100dvh-1rem)] flex-col overflow-hidden lg:min-h-176 lg:max-h-[min(90dvh,44rem)] lg:grid lg:grid-cols-[1fr_1.05fr]"
      >
        <div class="relative overflow-hidden bg-gray-950 text-white">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-52 w-full object-cover opacity-90 sm:h-64 lg:h-full lg:min-h-0"
          >
          <div class="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
            <UBadge
              color="neutral"
              variant="solid"
              class="mb-3 bg-white/10 text-white backdrop-blur"
            >
              {{ product.badge || 'Especialidad' }}
            </UBadge>
            <h3 class="text-xl font-black tracking-tight sm:text-2xl">
              {{ product.name }}
            </h3>
            <p class="mt-2 max-w-sm text-sm leading-6 text-white/80 sm:text-[15px]">
              {{ product.description }}
            </p>
          </div>
        </div>

        <div class="flex min-h-0 flex-col bg-white dark:bg-slate-950">
          <div class="flex-1 space-y-5 overflow-y-auto p-5 sm:p-6 sm:space-y-6 lg:p-7">
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-slate-400">
                  Precio base
                </p>
                <p class="text-2xl font-black text-gray-950 dark:text-slate-50 sm:text-3xl">
                  {{ formattedBasePrice }}
                </p>
              </div>
              <UBadge
                color="neutral"
                variant="soft"
                class="rounded-full px-3 py-1 text-xs font-semibold"
              >
                Listo en minutos
              </UBadge>
            </div>

            <div
              v-if="product.modifiers?.length"
              class="space-y-4"
            >
              <UFormField
                v-for="group in product.modifiers"
                :key="group.id"
                :label="group.label"
                :description="'Selecciona hasta una opción'"
                size="lg"
              >
                <div class="grid gap-2 sm:grid-cols-2">
                  <UButton
                    v-for="option in group.options"
                    :key="option"
                    type="button"
                    variant="soft"
                    color="neutral"
                    :class="selectedModifiers[group.id] === option ? 'ring-2 ring-black bg-black text-white dark:ring-slate-50 dark:bg-slate-50 dark:text-slate-950' : 'bg-gray-50 dark:bg-slate-900 dark:text-slate-200'"
                    class="justify-start text-left transition duration-200"
                    :ui="modifierButtonUi"
                    @click="() => { selectedModifiers[group.id] = option }"
                  >
                    {{ option }}
                  </UButton>
                </div>
              </UFormField>
            </div>

            <UFormField
              label="Notas adicionales"
              description="Ejemplo: Sin cebolla, extra mayo, pan bien tostado"
              size="lg"
            >
              <UTextarea
                v-model="note"
                autoresize
                :maxrows="4"
                :rows="3"
                placeholder="Agrega instrucciones especiales"
                color="neutral"
                variant="subtle"
                class="w-full"
              />
            </UFormField>

            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div class="flex items-center justify-between text-sm">
                <span class="font-medium text-gray-500 dark:text-slate-400">Total estimado</span>
                <span class="text-lg font-black text-gray-950 dark:text-slate-50">{{ formattedBasePrice }}</span>
              </div>
              <p class="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                Los modificadores no cambian el precio en este prototipo, pero quedan registrados en el carrito y en WhatsApp.
              </p>
            </div>
          </div>

          <div class="border-t border-gray-200 bg-white/95 p-4 shadow-[0_-10px_30px_rgba(15,23,42,0.06)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-[0_-10px_30px_rgba(2,6,23,0.45)] sm:p-5">
            <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <UButton
                variant="ghost"
                color="neutral"
                class="justify-center"
                @click="closeModal"
              >
                Cancelar
              </UButton>
              <UButton
                color="neutral"
                variant="solid"
                class="justify-center font-bold"
                icon="i-heroicons-shopping-cart"
                @click="confirmAdd"
              >
                Agregar al carrito
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import type { CartItemInput, Product } from '~/stores/cart'

const open = defineModel<boolean>('open', { default: false })

const props = defineProps<{
  product: Product | null
}>()

const emit = defineEmits<{
  add: [item: CartItemInput]
}>()

const note = ref('')
const selectedModifiers = reactive<Record<string, string>>({})

watch(
  () => props.product,
  (value) => {
    note.value = ''
    Object.keys(selectedModifiers).forEach((key) => {
      selectedModifiers[key] = undefined // Así TypeScript no se queja
    })

    if (value?.modifiers?.length) {
      for (const group of value.modifiers) {
        selectedModifiers[group.id] = group.options[0] || ''
      }
    }
  },
  { immediate: true }
)

const formattedBasePrice = computed(() => {
  if (!props.product) {
    return '$0'
  }

  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(props.product.price)
})

const modalUi = {
  content: 'w-[min(100vw-0.75rem,72rem)] overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950',
  body: 'p-0'
}

const modifierButtonUi = {
  base: 'min-h-11 whitespace-normal leading-snug'
}

function closeModal() {
  open.value = false
}

function confirmAdd() {
  if (!props.product) {
    return
  }

  emit('add', {
    id: props.product.id,
    name: props.product.name,
    price: props.product.price,
    description: props.product.description,
    image: props.product.image,
    modifiers: Object.values(selectedModifiers).filter(Boolean),
    note: note.value.trim() || undefined
  })

  closeModal()
}
</script>
