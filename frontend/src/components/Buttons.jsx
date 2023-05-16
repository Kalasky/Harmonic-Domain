import React from 'react'
import buttons from '../styles/buttons.module.scss'

export const GlowGrayPrimary = ({ onClick, children, padding = '', margin = 'auto' }) => {
  return (
    <button className={`${buttons.btnHover} ${buttons.color8} max-sm:w-full max-sm:mt-4 ${margin} ${padding}`} onClick={onClick}>
      {children}
    </button>
  )
}

export const GlowGreenPrimary = ({ onClick, children, padding = '', margin = 'auto' }) => {
  return (
    <button className={`${buttons.btnHover} ${buttons.color1} max-sm:w-full max-sm:mt-4 ${margin} ${padding}`} onClick={onClick}>
      {children}
    </button>
  )
}
