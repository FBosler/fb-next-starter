import { Dispatch, FC, SetStateAction, useState } from 'react'
import cn from 'classnames'
import { Cart } from 'types/types'

type Props = {
  products: any
  cart: Cart
  setCart: Dispatch<SetStateAction<Cart>>
}

const options = {
  hard: 'hart',
  normal: 'mittelhart',
  soft: 'weich',
}
const optionsArr: string[] = Object.keys(options)

const VariantSelector: FC<Props> = ({ products, cart, setCart }) => {
  const [activeVariant, setActiveVariant] = useState('hard')

  const variantHandler = (objKey: string): void => {
    setActiveVariant(objKey)
    const updatedCart = [...cart]
    updatedCart.forEach((cartItem, idx) =>
      products[idx].variant_ids[objKey]
        ? (cartItem.variant_id = products[idx].variant_ids[objKey])
        : (cartItem.variant_id = products[idx].variant_ids.hard)
    )
    setCart(updatedCart)
  }

  return (
    <div className="pb-6">
      <div className="flex items-end justify-between"></div>
      <div className="flex flex-row w-40 pt-4 mb-6">
        {optionsArr.map((objKey) => (
          <a
            onClick={() => variantHandler(objKey)}
            className={cn(
              {
                'border-2': objKey === activeVariant,
              },
              'px-4 underline'
            )}
            key={objKey}
          >
            {(options as any)[objKey]}
          </a>
        ))}
      </div>
      <div>selected:{activeVariant}</div>
    </div>
  )
}

export default VariantSelector
