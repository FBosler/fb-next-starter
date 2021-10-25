import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'

type Props = {
  addToCart: () => Promise<void>
  price: string
  style?: 'fixed' | 'static'
}

const AtcButton: FC<Props> = ({ addToCart, price, style = 'fixed' }) => {
  return (
    <div
      className={cn(
        'bottom-0 left-0 z-40 w-full p-3 mt-6 bg-yellow sm:relative sm:p-0 sm: rounded-t-xl',
        { fixed: style === 'fixed' }
      )}
    >
      <a
        aria-label="Add to Cart"
        type="button"
        className="flex justify-between w-full"
        onClick={addToCart}
      >
        <div>add_to_cart</div>
        <div>{price}</div>
      </a>
      <div className="flex justify-center mt-3 text-xs sm:ml-2 sm:justify-start">
        <div className="flex items-center pr-2 border-r border-black">
          <div className="w-3 h-3 mr-2 rounded-full bg-green"></div>
          <p></p>
        </div>
        <p className="pl-2">
          <span className="underline">
            <Link href="#">delivery_shipping</Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default AtcButton
