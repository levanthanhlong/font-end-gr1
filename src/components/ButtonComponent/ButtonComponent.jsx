import { Button } from 'antd'
import React from 'react'

export const ButtonComponent = ({size, styleButton, textButton, styleTextButton, ...rest}) => {
  return (
    <Button
        size={size}
        style={styleButton}
        {...rest}
    >
       <span style={styleTextButton} > {textButton} </span> 
    </Button>
  )
}
