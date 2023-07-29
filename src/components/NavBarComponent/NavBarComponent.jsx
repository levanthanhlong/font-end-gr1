import React from 'react';
import { WrapperContent, WrapperLabelText, WrapperTextPrice } from './style';
import { Checkbox, Rate } from 'antd';

export const NavBarComponent = () => {
    const renderContent = (type, options) => {
        switch(type){
            case 'text':
                return options.map((option) => {
                    return <span>{option}</span>
                })
            case 'checkbox':
                return(
                <Checkbox.Group style={{ width: '100%', display:'flex', flexDirection:'column', gap:'12px' }}>
                    {options.map((option)=>{
                        return (
                            <Checkbox style={{ marginLeft:0 }} value={option.value}>{option.label}</Checkbox>
                        )
                    })}
                    <Checkbox value="B">B</Checkbox>
                 
                </Checkbox.Group>)

            case 'star':
                return options.map((option) =>{
                    return(
                        <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                            <Rate style={{ fontSize:'12px' }} disabled defaultValue={option} />
                            <span>{ `tu ${option} sao` }</span>
                        </div>
                    )
                })
            
            case 'price':
                return options.map((option) =>{
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )

                }) 
            
            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
            {renderContent('text', ['Tu Lanh','TV','May Giat'])}
            </WrapperContent>
            <WrapperContent>
            {renderContent('checkbox', [
                {value: 'a', label: 'A'},
                {value: 'b', label: 'B'},
        
            ])}
            </WrapperContent>
            <WrapperContent>
            {renderContent('star', [1,2,3,4,5])}
            </WrapperContent>
            <WrapperContent>
            {renderContent('price', ['duoi 40.000', 'tren 50.000'])}
            </WrapperContent>
        </div>
    )
}
