import Head from 'next/head'
import AtcButton from 'components/AtcButton'
import FrequencySlider from 'components/FrequencySlider'
import VariantSelector from 'components/VariantSelector'
import WaterhardnessCalculator from 'components/WaterhardnessCalculator'
import products from 'data/products.json'
import handler from 'api/checkout'
import { NextApiResponse } from 'next'
import { useState } from 'react'

const productBundle = products.map((item) => {
  return {
    title: item.title,
    product_id: item.product_id,
    variant_id: item.variant_ids.hard,
    quantity: item.quantity,
    charge_interval_frequency: item.default_interval,
    order_interval_frequency: item.default_interval,
    order_interval_unit: 'day',
    fulfillment_service: 'manual',
    requires_shipping: true,
    taxable: true,
  }
})

const Home = (res: NextApiResponse): JSX.Element => {
  const addToCart = async (res: NextApiResponse): Promise<void> => {
    try {
      await handler(res, cart)
      //trackAddToCart()
    } catch (err) {
      console.log(err)
    }
  }

  const [cart, setCart] = useState(productBundle)
  const [activeVariant, setActiveVariant] = useState('hard')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1>current cart</h1>
        {productBundle.map((item) => (
          <p key={item.product_id}>
            {item.title} | Interval: {item.order_interval_frequency} | variant
            id: {item.variant_id}
          </p>
        ))}
        <AtcButton price="110" addToCart={addToCart} res={res} />
        {products.map((item) => (
          <FrequencySlider
            key={item.product_id}
            title={item.title}
            calculation_factor={item.calculation_factor}
            default_interval={item.default_interval}
            product_id={item.product_id}
            setCart={setCart}
            cart={cart}
          />
        ))}
        <WaterhardnessCalculator
          products={products}
          activeVariant={activeVariant}
          setActiveVariant={setActiveVariant}
          cart={cart}
          setCart={setCart}
        />
        <VariantSelector
          products={products}
          activeVariant={activeVariant}
          setActiveVariant={setActiveVariant}
          cart={cart}
          setCart={setCart}
        />
      </main>
    </div>
  )
}

export default Home
