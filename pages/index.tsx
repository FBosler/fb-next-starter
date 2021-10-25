import Head from 'next/head'
import AtcButton from 'components/AtcButton'
import productBundle from 'data/productBundle.json'
import handler from 'api/checkout'
import { NextApiRequest, NextApiResponse } from 'next'
import { useState } from 'react'

const items = productBundle.map((item) => {
  return {
    title: item.title,
    product_id: item.product_id,
    variant_id: item.variant_id,
    quantity: 1,
    charge_interval_frequency: item.default_interval,
    order_interval_frequency: item.default_interval,
    order_interval_unit: 'day',
    fulfillment_service: 'manual',
    requires_shipping: true,
    taxable: true,
  }
})

const Home = (): JSX.Element => {
  const addToCart = async (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> => {
    try {
      await handler(req, res, items)
      //trackAddToCart()
    } catch (err) {
      console.log(err)
    }
  }

  const [bundle, setBundle] = useState(items)
  console.log(bundle)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <AtcButton price="110" addToCart={addToCart} />
      </main>
    </div>
  )
}

export default Home
