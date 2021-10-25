import { useState, FC, SetStateAction, Dispatch } from 'react'
//TODO: Revisit Repo Issue https://github.com/react-component/slider/issues/780
//Slider lib has a preventDefault bug on mobile known Bug with React 17
import Slider from 'rc-slider'
import type { Bundle } from 'types/types'
import 'rc-slider/assets/index.css'

const frequencyToSlider = (
  interval: number,
  calculation_factor: number
): number => {
  return (calculation_factor / interval) * 7
}

const sliderToFrequency = (
  sliderValue: number,
  calculation_factor: number
): number => {
  return Math.floor((calculation_factor / sliderValue) * 7)
}

type Props = {
  title: string
  calculation_factor: number
  default_interval: number
  product_id: string
  setBundle: Dispatch<SetStateAction<Bundle>>
  bundle: Bundle
}

const FrequencyChooser: FC<Props> = ({
  title,
  calculation_factor,
  default_interval,
  product_id,
  setBundle,
  bundle,
}) => {
  const sliderMax = 20

  const initialSliderValue = frequencyToSlider(
    default_interval,
    calculation_factor
  )

  const [sliderValue, setSliderValue] = useState(
    Math.min(sliderMax, Math.ceil(initialSliderValue))
  )

  const sliderChangeHandler = (value: number): void => {
    setSliderValue(value)
    const changedIdx = bundle.findIndex((el) => el.product_id === product_id)
    const updatedBundle = [...bundle]
    updatedBundle[changedIdx].order_interval_frequency = sliderToFrequency(
      value,
      calculation_factor
    )
    setBundle(updatedBundle)
  }

  return (
    <div className="mt-4">
      <div className="flex mb-1 font-semibold">
        <img alt="" src="" height="15px" width="15px" />
        <div className="ml-2">{title}</div>
      </div>

      <div className="flex items-center justify-center mt-2">
        <div className="w-20 py-2 mr-4 font-semibold text-center bg-white rounded-full">
          {sliderValue} x
        </div>
        <div className="w-full">
          <Slider
            onChange={(value) => {
              sliderChangeHandler(value)
            }}
            defaultValue={sliderValue}
            min={1}
            max={sliderMax}
            handleStyle={{
              backgroundColor: 'black',
              borderColor: 'black',
              height: 20,
              width: 20,
              boxShadow: 'none',
            }}
            trackStyle={{ backgroundColor: '#aaa', height: 7 }}
            railStyle={{ backgroundColor: '#ddd', height: 7 }}
          />
        </div>
      </div>
      <div className="mt-2 font-medium"></div>
    </div>
  )
}

export default FrequencyChooser
