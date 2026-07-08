<script setup>
import { computed } from 'vue'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

const colorMode = useColorMode()
const loadingIndicatorColor = computed(() => colorMode.value === 'dark' ? '#f8fafc' : '#111827')
const title = 'Belcar'
const description = 'Aplicación de pedido de comida rápida para Belcar con menú, carrito global y confirmación por WhatsApp.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/belcar.jpeg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator :color="loadingIndicatorColor" />
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
