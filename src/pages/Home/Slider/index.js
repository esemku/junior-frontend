import React from 'react'
import SliderImg from './SliderImg'

import { Root, SliderWrapper } from './styles'


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

  return (
    <Root>
      <SliderWrapper>
        {photos.map(photo => {
          return (
            <SliderImg url={photo.url}/>
          )
        })}
      </SliderWrapper>
    </Root>
  )
}


export default Slider
