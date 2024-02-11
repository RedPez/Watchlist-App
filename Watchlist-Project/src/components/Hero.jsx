import React from 'react'

const Hero = () => {
  return (
    <div>
      <video muted autoPlay loop className='hero-vid' onClick={handleClick} src="../src/assets/images/hero-video.mp4" title="hero-video"></video>
    </div>
  )
}

const handleClick = (event) => {
  if (event.target.paused) {
    event.target.play()
  } else {
    event.target.pause()
  }
}

export default Hero