export function formatMoney(value: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(value)
}

export function buildWhatsAppMessage(options: {
  customerName: string
  customerAddress: string
  subtotal: number
  shippingCost: number
  total: number
  items: Array<{
    quantity: number
    name: string
    price: number
    modifiers?: string[]
    note?: string
  }>
}) {
  const lines = [
    'Hola Belcar Fast Food! 🍔',
    '',
    'Me gustaría realizar el siguiente pedido:'
  ]

  for (const item of options.items) {
    const modifiers = item.modifiers?.length ? ` | ${item.modifiers.join(', ')}` : ''
    const note = item.note ? ` | Nota: ${item.note}` : ''
    lines.push(`• ${item.quantity}x ${item.name}${modifiers}${note} (${formatMoney(item.price * item.quantity)})`)
  }

  lines.push(
    '',
    `*Subtotal: ${formatMoney(options.subtotal)}*`,
    `*Envío: ${formatMoney(options.shippingCost)}*`,
    `*Total: ${formatMoney(options.total)}*`,
    '',
    `Entrega en: ${options.customerAddress.trim() || '[Tu Dirección]'}`,
    `Nombre: ${options.customerName.trim() || '[Tu Nombre]'}`
  )

  return lines.join('\n')
}
