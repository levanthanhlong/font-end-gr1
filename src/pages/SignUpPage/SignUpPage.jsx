import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight } from '../SignInPage/style'
import { InputForm } from '../../components/InputForm/InputForm'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imageLogo from '../../assets/images/logosignin.png'
import {EyeFilled} from '@ant-design/icons'
import {EyeInvisibleFilled} from '@ant-design/icons'

var isShowConfirmPassword;
 
export const SignUpPage = () => {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', background: 'rgba(0,0,0,0.53)', height:'1000px' }}>
      <div style={{ width: '800px',height:'445px', borderRadius:'6px', background:'#fff', display:'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chao</h1>
          <p>Dang ky tai khoan</p>
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
            <InputForm placeholder="confirm password" />
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
          textButton={'Sign up'}
          styleTextButton={{ color:'#fff', fontSize:'15px', fontWeight:'700'}}
          ></ButtonComponent>
          <p>Chua da co tai khoan?</p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='image-logo' height="203px" width="203px" />
        </WrapperContainerRight>
      </div>
    </div>
  )
}
