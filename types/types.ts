type BundleComponent = {
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

export type Bundle = BundleComponent[]
