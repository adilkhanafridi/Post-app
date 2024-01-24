import React from 'react'
import img from './logo.png'
const Hero = () => {
  return (
    <div>
     <div className="container">
  <div className="row">
    <div className="col-4">
      <h1>
        Articale for <span>For-end devs</span>
      </h1>
      <p>Articale on web performance,responsive web design and more</p>
    </div>
    <div className="col-8">
      <img src={img} style={{width:"600px",height:"300px"}} />
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero
