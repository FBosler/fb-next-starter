import { useState, FC, SetStateAction, Dispatch } from 'react'
//TODO: Revisit Repo Issue https://github.com/react-component/slider/issues/780
//Slider lib has a preventDefault bug on mobile known Bug with React 17
import Slider from 'rc-slider'
import type { Bundle } from 'types/types'

const frequencyToSlider = (
  interval: number,
  calculation_factor: number
): number => {
  return (calculation_factor / interval) * 7
}

type Props = {
  title: string
  calculation_factor: number
  default_interval: number
  setBundle: Dispatch<SetStateAction<Bundle>>
}

const FrequencyChooser: FC<Props> = ({
  title,
  calculation_factor,
  default_interval,
}) => {
  const sliderMax = 20

  const initialSliderValue = frequencyToSlider(
    default_interval,
    calculation_factor
  )

  const [sliderValue, setSliderValue] = useState(
    Math.min(sliderMax, Math.ceil(initialSliderValue))
  )
  console.log(initialSliderValue)

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
              setSliderValue(value)
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
