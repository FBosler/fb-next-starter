import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Cart } from 'types/types'

type Props = {
  products: any
  activeVariant: string
  setActiveVariant: Dispatch<SetStateAction<string>>
  cart: Cart
  setCart: Dispatch<SetStateAction<Cart>>
}

const availableCountries = ['de', 'at', 'ch', 'fr', 'it']

const COUNTRY_HARDNESS_CONVERSION: Record<string, number> = {
  ch: 0.56,
  fr: 0.56,
}

const waterhardnessValueToString = (
  hardnessValue: number,
  country: string
): string => {
  let hardnessAsString: 'soft' | 'medium' | 'hard' = 'hard'
  if (hardnessValue) {
    hardnessValue = hardnessValue * (COUNTRY_HARDNESS_CONVERSION[country] || 1)
    hardnessAsString =
      hardnessValue < 9 ? 'soft' : hardnessValue < 14 ? 'medium' : 'hard'
  }
  return hardnessAsString
}

const getWaterHardnessFromApi = async (
  postalCode: string,
  country: string
): Promise<string> => {
  const res = await fetch(
    `https://real-time-sponsor.com/api.v1/hardness?country_code=${country}&postal_code=${postalCode}`
  ).then((r) => r.json())
  const hardnessValue = res[0]?.hardness
  return waterhardnessValueToString(hardnessValue, country)
}

const WaterhardnessCalculator: FC<Props> = ({
  products,
  activeVariant,
  setActiveVariant,
  cart,
  setCart,
}) => {
  const [postalCode, setPostalCode] = useState({ code: '', country: '' })
  useEffect(() => {
    setPostalCode((values) => {
      return {
        ...values,
        country: 'de',
      }
    })
  }, [])

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const waterHardness = await getWaterHardnessFromApi(
      postalCode.code,
      postalCode.country
    )
    setActiveVariant(waterHardness)
    console.log(waterHardness)

    const updatedCart = [...cart]
    updatedCart.forEach((cartItem, idx) =>
      products[idx].variant_ids[waterHardness]
        ? (cartItem.variant_id = products[idx].variant_ids[waterHardness])
        : (cartItem.variant_id = products[idx].variant_ids.hard)
    )
    setCart(updatedCart)
  }

  const codeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostalCode((values) => {
      return {
        ...values,
        code: e.target.value,
      }
    })
  }

  const countryChangeHandler = (
    e: React.FocusEvent<HTMLSelectElement>
  ): void => {
    setPostalCode((values) => {
      return {
        ...values,
        country: e.target.value,
      }
    })
  }

  return (
    <div className="pb-6">
      <div className="flex items-end justify-between"></div>
      <div className="flex flex-row pt-4">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="relative flex items-center justify-between w-full p-4 bg-white rounded-xl"
        >
          <div className="flex w-full">
            <p className="mr-4 font-semibold">Postleitzahl</p>
            <select
              defaultValue={'de'}
              onBlur={(e) => countryChangeHandler(e)}
              className="mr-2 focus:outline-none"
              name="countries"
              id="countries"
            >
              {availableCountries.map((country) => (
                <option className="uppercase" key={country} value={country}>
                  {country.toUpperCase()}
                </option>
              ))}
            </select>
            <input
              value={postalCode.code}
              onChange={(e) => codeChangeHandler(e)}
              className="flex-grow mr-6 cursor-pointer postal-code focus:outline-none"
              placeholder="81369"
              type="number"
              name="postalcode"
              id="postalcode"
            />
          </div>
          <input
            disabled={postalCode.code.length < 4}
            type="submit"
            value="ok"
            className="absolute z-10 px-4 py-2 uppercase rounded-full cursor-pointer right-6 bg-yellow disabled:cursor-default disabled:opacity-25"
          />
        </form>
      </div>
      calculated (shared state): {activeVariant}
    </div>
  )
}

export default WaterhardnessCalculator
