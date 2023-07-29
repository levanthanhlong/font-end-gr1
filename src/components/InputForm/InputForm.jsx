import React, { useState } from 'react'
import { WrapperInputStyle } from './style';

export const InputForm = (props) => {

    //const [valueInput, setValueInput] = useState('');
    const [valueInput] = useState('');
    const { placeholder = 'Nhap text', ...rest} = props

    return (
        <WrapperInputStyle placeholder={placeholder} valueInput={valueInput} {...rest}/>
    )
}
