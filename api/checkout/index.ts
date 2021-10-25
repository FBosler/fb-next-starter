// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
  items: any
) => {
  const rechargeResponse = await fetch(
    'https://api.rechargeapps.com/checkouts',
    {
      method: 'POST',
      headers: {
        'X-Recharge-Access-Token': process.env.RECHARGE_TOKEN!,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ line_items: items }),
    }
  )

  const data = await rechargeResponse.json()
  console.log('data', data)
  // TODO NEED ERROR CHECK HERE
  // if data.errors raise
  const {
    checkout: { token: checkoutToken },
  } = data

  if (checkoutToken) {
    res.redirect(
      `https://checkout.rechargeapps.com/r/checkout/${checkoutToken}?myshopify_domain=ch-everdrop.myshopify.com`
    )
  } else {
    res.redirect('/')
  }
}

export default handler
