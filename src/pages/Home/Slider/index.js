import React from 'react';


const Slider = () => {

  const photos = [
    { url: 'assets/photos/slide-1.jpg' },
    { url: 'assets/photos/slide-2.jpg' },
    { url: 'assets/photos/slide-3.jpg' },
    { url: 'assets/photos/slide-4.jpg' },
    { url: 'assets/photos/slide-5.jpg' },
    { url: 'assets/photos/slide-6.jpg' }
  ]

  const styles = {
    root: {

    },
    sliderWrapper: {

    },
  }

  return (
    <div style={styles.root}>
      <div style={styles.sliderWrapper}>
        Slider
      </div>
    </div>
  )
}


export default Slider;
