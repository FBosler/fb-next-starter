type CartComponent = {
  title: string
  product_id: string
  variant_id: string
  quantity: number
  charge_interval_frequency: number
  order_interval_frequency: number
  order_interval_unit: string
  fulfillment_service: string
  requires_shipping: boolean
  taxable: boolean
}

export type Cart = CartComponent[]

type Product = {
  title: string
  product_id: string
  variant_ids: VariantIds
  price: number
  default_interval: number
  product_type: string
  calculation_factor: number
  quantity: number
}

type VariantIds = {
  hard: string
  normal: string
  soft: string
}

export type Products = Product[]
