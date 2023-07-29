import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import { InputForm } from '../../components/InputForm/InputForm'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imageLogo from '../../assets/images/logosignin.png'
import {EyeFilled} from '@ant-design/icons'
import {EyeInvisibleFilled} from '@ant-design/icons'
 
var isShowConfirmPassword;

export const SignInPage = () => {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', background: 'rgba(0,0,0,0.53)', height:'1000px' }}>
      <div style={{ width: '800px',height:'445px', borderRadius:'6px', background:'#fff', display:'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chao</h1>
          <p>Dang nhap vao tai khoan</p>
          <InputForm style={{ marginBottom:'10px' }} placeholder="abc@gmail.com" />
          <div  style={{ position: 'relative' }}>
            <span style={{zIndex: '10', position:'absolute', top:'4px',right:'8px' }}>
              {
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm style={{ marginBottom:'10px' }} placeholder="password" />
          </div>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background:'rgb(255,57,69',
              height:'48px',
              width:'100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px',
          }}
          textButton={'Sign In'}
          styleTextButton={{ color:'#fff', fontSize:'15px', fontWeight:'700'}}
          ></ButtonComponent>
          <p><WrapperTextLight>Quen mat khau</WrapperTextLight></p>
          <p>Chua co tai khoan? <WrapperTextLight> Tao tai khoan</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='image-logo' height="203px" width="203px" />
        </WrapperContainerRight>
      </div>
    </div>
    
  )
}
