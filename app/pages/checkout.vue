<template>
  <div
    class="min-h-screen pb-12"
    :style="pageBackgroundStyle"
  >
    <AppHeader />

    <main class="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_24rem]">
      <section class="space-y-6">
        <UCard
          class="overflow-hidden border border-gray-200/80 bg-white/95 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_16px_50px_rgba(2,6,23,0.45)]"
          :ui="sectionCardUi"
        >
          <template #header>
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-xs font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-slate-400">
                  Checkout
                </p>
                <h1 class="mt-1 text-3xl font-black tracking-tight text-gray-950 dark:text-slate-50">
                  Finaliza tu pedido
                </h1>
                <p class="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
                  Confirma cantidades, añade tus datos de entrega y genera el mensaje listo para WhatsApp.
                </p>
              </div>
              <UBadge
                color="success"
                variant="solid"
                class="bg-emerald-500 text-white"
              >
                <UIcon
                  name="i-heroicons-lock-closed-solid"
                  class="mr-1 h-4 w-4"
                /> Flujo seguro
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
              Tu carrito está vacío.
            </p>
            <UButton
              to="/menu"
              color="neutral"
              variant="solid"
              class="mt-5 justify-center font-bold"
            >
              Volver al menú
            </UButton>
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
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h2 class="truncate text-base font-black text-gray-950 dark:text-slate-50">
                      {{ item.name }}
                    </h2>
                    <UBadge
                      color="neutral"
                      variant="soft"
                      class="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                    >
                      x{{ item.quantity }}
                    </UBadge>
                  </div>

                  <p class="mt-2 text-xs text-gray-500 dark:text-slate-400">
                    {{ item.modifiers?.length ? item.modifiers.join(' · ') : 'Sin modificadores' }}
                  </p>
                  <p
                    v-if="item.note"
                    class="mt-1 text-xs italic text-gray-500 dark:text-slate-500"
                  >
                    “{{ item.note }}”
                  </p>
                </div>

                <span class="shrink-0 text-sm font-black text-gray-950 dark:text-slate-50">{{ formatMoney(item.price * item.quantity) }}</span>
              </div>

              <div class="mt-4 flex items-center justify-between rounded-full border border-gray-200 bg-white px-2 py-1.5 dark:border-slate-700 dark:bg-slate-900">
                <UButton
                  color="neutral"
                  variant="ghost"
                  icon="i-heroicons-minus"
                  class="rounded-full transition hover:-translate-y-0.5"
                  :aria-label="`Disminuir ${item.name}`"
                  @click="cart.decrementItem(item)"
                />
                <span class="min-w-10 text-center text-sm font-black text-gray-950 dark:text-slate-50">{{ item.quantity }}</span>
                <UButton
                  color="neutral"
                  variant="ghost"
                  icon="i-heroicons-plus"
                  class="rounded-full transition hover:-translate-y-0.5"
                  :aria-label="`Aumentar ${item.name}`"
                  @click="cart.addToCart(item)"
                />
              </div>
            </div>
          </div>
        </UCard>

        <UCard
          class="border border-gray-200/80 bg-white/95 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_16px_50px_rgba(2,6,23,0.45)]"
          :ui="sectionCardUi"
        >
          <template #header>
            <div class="flex items-center justify-between gap-4">
              <div>
                <h2 class="text-xl font-black text-gray-950 dark:text-slate-50">
                  Datos de entrega
                </h2>
                <p class="mt-1 text-sm text-gray-500 dark:text-slate-400">
                  Usa campos claros y deja todo listo para enviar.
                </p>
              </div>
              <UBadge
                color="neutral"
                variant="soft"
                class="rounded-full px-3 py-1 text-xs font-semibold"
              >
                Validación visual
              </UBadge>
            </div>
          </template>

          <div class="grid gap-4 sm:grid-cols-2">
            <UFormField
              label="Nombre"
              required
              :error="nameError"
            >
              <UInput
                id="customer-name"
                v-model="customerName"
                name="customerName"
                autocomplete="name"
                placeholder="Tu nombre completo"
                size="lg"
                color="neutral"
                variant="subtle"
                :highlight="Boolean(nameError)"
              />
            </UFormField>

            <UFormField
              label="Dirección"
              required
              :error="addressError"
            >
              <UInput
                id="customer-address"
                v-model="customerAddress"
                name="customerAddress"
                autocomplete="street-address"
                placeholder="Calle, número, depto."
                size="lg"
                color="neutral"
                variant="subtle"
                :highlight="Boolean(addressError)"
              />
            </UFormField>
          </div>
        </UCard>
      </section>

      <aside class="lg:sticky lg:top-24 lg:self-start">
        <UCard
          class="overflow-hidden border border-gray-200/80 bg-white/95 shadow-[0_16px_50px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_16px_50px_rgba(2,6,23,0.45)]"
          :ui="summaryCardUi"
        >
          <template #header>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <p class="text-xs font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-slate-400">
                  Resumen
                </p>
                <UBadge
                  color="neutral"
                  variant="soft"
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {{ cart.totalItems }} items
                </UBadge>
              </div>

              <div class="rounded-2xl bg-gray-950 p-4 text-white dark:bg-slate-50 dark:text-slate-950">
                <div class="flex items-center justify-between text-sm text-white/70 dark:text-slate-900">
                  <span>Total a pagar</span>
                  <UIcon
                    name="i-heroicons-credit-card-solid"
                    class="h-5 w-5"
                  />
                </div>
                <p class="mt-2 text-3xl font-black tracking-tight">
                  {{ formatMoney(cart.total) }}
                </p>
              </div>
            </div>
          </template>

          <div class="space-y-3">
            <div class="flex items-center justify-between text-sm text-gray-600 dark:text-slate-400">
              <span>Subtotal</span>
              <span class="font-semibold text-gray-950 dark:text-slate-50">{{ formatMoney(cart.subtotal) }}</span>
            </div>
            <div class="flex items-center justify-between text-sm text-gray-600 dark:text-slate-400">
              <span>Envío</span>
              <span class="font-semibold text-gray-950 dark:text-slate-50">{{ formatMoney(cart.shippingCost) }}</span>
            </div>

            <div class="border-t border-gray-200 pt-4 dark:border-slate-800">
              <p class="text-xs font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-slate-400">
                Vista previa del mensaje
              </p>
              <div class="mt-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs leading-6 text-gray-700 whitespace-pre-wrap dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300">
                {{ whatsappMessagePreview }}
              </div>
            </div>

            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300">
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-heroicons-information-circle-solid"
                  class="mt-0.5 h-5 w-5 text-gray-900 dark:text-slate-100"
                />
                <p>
                  Si confirmas, serás redirigido a WhatsApp con el pedido ya formateado y codificado correctamente.
                </p>
              </div>
            </div>

            <UButton
              color="neutral"
              variant="solid"
              block
              size="xl"
              class="justify-center font-bold transition hover:-translate-y-0.5 hover:shadow-xl"
              :disabled="isSendDisabled"
              @click="sendToWhatsApp"
            >
              <template #leading>
                <UIcon
                  name="i-heroicons-paper-airplane"
                  class="h-5 w-5 rotate-45"
                />
              </template>
              Enviar pedido por WhatsApp
            </UButton>

            <p class="text-center text-[11px] text-gray-400 dark:text-slate-500">
              El mensaje incluye nombres, modificadores y notas especiales.
            </p>
          </div>
        </UCard>
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '~/stores/cart'
import { buildWhatsAppMessage, formatMoney } from '~/utils/formatting'

const cart = useCartStore()
const { customerName, customerAddress } = storeToRefs(cart)

const WHATSAPP_PHONE = '56912345678'

const nameError = computed(() => {
  return cart.items.length > 0 && !customerName.value.trim() ? 'Ingresa tu nombre para continuar.' : ''
})

const addressError = computed(() => {
  return cart.items.length > 0 && !customerAddress.value.trim() ? 'Ingresa una dirección de entrega.' : ''
})

const isSendDisabled = computed(() => {
  return cart.items.length === 0 || Boolean(nameError.value) || Boolean(addressError.value)
})

const whatsappMessagePreview = computed(() => {
  return buildWhatsAppMessage({
    customerName: customerName.value,
    customerAddress: customerAddress.value,
    subtotal: cart.subtotal,
    shippingCost: cart.shippingCost,
    total: cart.total,
    items: cart.items
  })
})

const sectionCardUi = {
  body: 'p-5 sm:p-6',
  header: 'p-5 sm:p-6 pb-0'
}

const summaryCardUi = {
  body: 'p-5 sm:p-6',
  header: 'p-5 sm:p-6 pb-0'
}

const pageBackgroundStyle = {
  backgroundImage: 'var(--belcar-page-gradient)'
}

function sendToWhatsApp() {
  if (isSendDisabled.value) {
    return
  }

  const whatsappUrl = new URL(`https://wa.me/${WHATSAPP_PHONE}`)
  whatsappUrl.searchParams.set('text', whatsappMessagePreview.value)

  window.location.assign(whatsappUrl.toString())
}
</script>
