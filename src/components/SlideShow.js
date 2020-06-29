import React from 'react'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'
import slide5 from '../images/slide5.jpg'

const SlideShow = () => {
  return (
    <div className="slidershow">
      <div className="slides">
        <input type="radio" name="r" id="r1" defaultChecked/>
        <input type="radio" name="r" id="r2"/>
        <input type="radio" name="r" id="r3"/>
        <input type="radio" name="r" id="r4"/>
        <input type="radio" name="r" id="r5"/>
        <div className="slide s1">
          <img src={slide1} alt=""/>
        </div>
        <div className="slide">
          <img src={slide2} alt=""/>
        </div>
        <div className="slide">
          <img src={slide3} alt=""/>
        </div>
        <div className="slide">
          <img src={slide4} alt=""/>
        </div>
        <div className="slide">
          <img src={slide5} alt=""/>
        </div>
      </div>
      <div className="navigation">
        <label htmlFor="r1" className="bar"></label>
        <label htmlFor="r2" className="bar"></label>
        <label htmlFor="r3" className="bar"></label>
        <label htmlFor="r4" className="bar"></label>
        <label htmlFor="r5" className="bar"></label>
      </div>
    </div>

  )
}

export default SlideShow