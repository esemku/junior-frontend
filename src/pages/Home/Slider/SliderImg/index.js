import React from 'react'

const SliderImg = ({ url }) => {

  const styles = {
    box: {
      backgroundImage: `url(${url})`,
      height: '9rem',
      width: '14rem',
      margin: '0 .7rem',
      backgroundSize: 'cover',
      borderRadius: '.3rem'
    }

  }

  return (
    <div style={styles.box}></div>
  )
}


export default SliderImg
