import React from 'react'
import SliderImg from './SliderImg'
import './slider.css'

const Slider = () => {

  const photos = [
    { url: 'assets/photos/slide-4.jpg' },
    { url: 'assets/photos/slide-5.jpg' },
    { url: 'assets/photos/slide-6.jpg' },
    { url: 'assets/photos/slide-1.jpg' },
    { url: 'assets/photos/slide-2.jpg' },
    { url: 'assets/photos/slide-3.jpg' },
    { url: 'assets/photos/slide-4.jpg' },
    { url: 'assets/photos/slide-5.jpg' },
    { url: 'assets/photos/slide-6.jpg' }
  ]

  const styles = {
    root: {
      height: '15rem',
      display: 'flex',
      overflow: 'hidden'
    }
  }

  return (
    <div style={styles.root}>
      <div className='sliderWrapper'>
        {photos.map(photo => {
          return (
            <SliderImg url={photo.url}/>
          )
        })}
      </div>
    </div>
  )
}


export default Slider
