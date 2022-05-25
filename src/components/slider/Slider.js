import React, { useState } from 'react'
import { SliderList } from '../../utils/List'
import './Slider.scss'
import { BsArrowRightSquare, BsArrowLeftSquare} from 'react-icons/bs'

function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1)

  const nextSlide = () => {
    if(sliderIndex !== SliderList.length){
      setSliderIndex(() => sliderIndex + 1)
    }else if(sliderIndex === SliderList.length){
      setSliderIndex(1)
    }
  }
  const prevSlide = () => {
    if (sliderIndex !== 1) {
      setSliderIndex(() => sliderIndex - 1)
    } else if (sliderIndex === 1){
      setSliderIndex(SliderList.length)
    }
  }

  return (
    <>
      <div className="slider">
        {
          SliderList.map((img, index) => <img className={sliderIndex === index + 1 ? 'slider_img active' : 'slider_img'} src={img} key={index}/>)
        }
        <button className='next_btn' onClick={nextSlide}>
          <BsArrowRightSquare />
        </button>
        <button className='prev_btn' onClick={prevSlide}>
          <BsArrowLeftSquare />
        </button>
      </div>
      <div className="dots">
        {
          Array.from({ length: SliderList.length })
          .map((dot, index) => <div className={ sliderIndex === index + 1 ? 'dot_item active' : 'dot_item'} key={index}>

          </div>)
        }
      </div>
    </>
  )
}

export default Slider
