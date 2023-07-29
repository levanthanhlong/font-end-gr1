import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { InputComponent } from '../InputComponent/InputComponent';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';


export const ButtonInputSearch = (props) => {

    const {
        size, placeholder, textButton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButton = 'rgba(13, 92, 182)',
        colorButton = '#fff'
    } = props;
    return (
        <div style={{ display: 'flex', background:'#fff' }} >
            <InputComponent 
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColorInput: backgroundColorInput, borderRadius:0, border:0} }
            />
            <ButtonComponent
                sizeButton={size}
                bordered={bordered}
                styleButton={{ background: backgroundColorButton, borderRadius:0, border:0, height:'38px'}}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
           
                
        </div>
    )
}
