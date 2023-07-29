import React from 'react'
import { TypeProduct } from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style';
import { SliderComponent } from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slide1.webp'
import slider2 from '../../assets/images/slide2.webp'
import slider3 from '../../assets/images/slide3.webp'
import { CardComponent } from '../../components/CardComponent/CardComponent';
//import { NavBarComponent } from '../../components/NavBarComponent/NavBarComponent';


export const HomePage = () => {
  const arr = ['TV','Tu Lanh','Laptop'];

  return (
    <div>
          <div style={{width:'1270px', margin:'0 auto'}} >
            <WrapperTypeProduct>
              {arr.map((item)=>{
                return <TypeProduct key={item} name={item} />})}
            </WrapperTypeProduct>
          </div>
          <div className='body' style={{ width:'100%', backgroundColor:'#efefef' }} >
            <div id='container' style={{ height:'1000px', width:'1270px', margin:'0 auto' }}>
              <SliderComponent arrImages = {[slider1, slider2, slider3]} /> 
              <WrapperProducts span={24} >
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
              </WrapperProducts>
              <div style={{ width:'100%', display:'flex', justifyContent:'center', marginTop:'10px' }}>
                <WrapperButtonMore textButton='Xem Them' type='outline' styleButton={{
                  border: '1px solid rgb(11,116,229)',color:'rgb(11,16,229)',
                  width:'240px', height:'38px', borderRadius: '4px'
                }}
                styleTextButton={{ fontWeight: 500 }} />
              </div>
            </div>
          </div>
          
              
    </div>
    
  )
}
