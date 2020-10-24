import React from 'react'
import styled from 'styled-components'


export const Root = styled.div`
  height: 15rem;
  display: flex;
  overflow: hidden;
  position: relative;
  &:before {
    height: 100%;
    content: '';
    box-shadow: 40px 0px 110px 100px rgba(255,255,255,1);
    position: absolute;
    z-index: 10;
  }
  &:after {
    height: 100%;
    content: '';
    box-shadow: -50px 0px 110px 100px rgba(255,255,255,1);
    position: absolute;
    right: 0;
    z-index: 10;
  }
`

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  animation: slide 7s infinite;
  animation-timing-function: linear;
  @keyframes slide {
    0% {
      transform: translateX(-800px);
    }
    100% {
      transform: translateX(-200px);
    }
  }
`

export const SliderImg = styled.div`
  background-image: url(${props => props.url});
  height: 9rem;
  width: 14rem;
  margin: 0 .7rem;
  background-size: cover;
  border-radius: .3rem;
`
