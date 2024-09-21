import React from 'react'

function Button({children, color, bg, border, fn}) {
    const buttonStyle = {
      color:color,
      backgroundColor:bg,
      border:`1px solid ${border}`
    }
  return (
    <button onClick={fn} style={buttonStyle} className='font-semibold px-4 py-1 rounded-full'>{children}</button>
  )
}

export default Button
