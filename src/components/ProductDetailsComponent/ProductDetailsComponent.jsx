import { Col, Row, Image } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/conantest.webp'
import imageProductSmall from '../../assets/images/conantest.webp'
import {WrapperAdderssProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell} from './style';
import {WrapperStyleImageSmall} from './style';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';

export const ProductDetailsComponent = () => {
  const onChange = () => {}
  return (
    
    <Row style={{ padding: '16px', backgroundColor:'#fff'}}>
        <Col span={10} style={{backgroundColor:'#fff', borderRight:'1px solid #ccc'}}>
            <Image src={imageProduct} alt='imageProduct' preview={false} style={{padding:'10px'}} />
            <Row style={{ paddingTop:'10px', justifyContent:'space-between',display:'flex'}}>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt={imageProductSmall} preview={false} />

                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt={imageProductSmall} preview={false} />

                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt={imageProductSmall} preview={false} />

                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt={imageProductSmall} preview={false} />

                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt={imageProductSmall} preview={false} />

                </WrapperStyleColImage>
                <WrapperStyleColImage span={4}>
                    <WrapperStyleImageSmall src={imageProductSmall} alt={imageProductSmall} preview={false} />

                </WrapperStyleColImage>

            </Row>
            
        </Col>
        <Col span={14} style={{ paddingLeft:'20px'}}>
            <WrapperStyleNameProduct>Combo Thám Tử Lừng Danh Conan Tập 31 - 40 (Bộ 10 cuốn)</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                <WrapperStyleTextSell> | Da ban 1000+ </WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>200.000 VND</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAdderssProduct>
                <span>Giao den </span>
                <span className='address' >Q. Thanh Xuân, P. Khương Mai, Hà Nội</span>
                <span className='change-address'> edit </span>
            </WrapperAdderssProduct>
            <div style={{ margin:'29px 0 20px', borderTop:'1px solid #ccc', borderBottom: '1px solid #ccc' }} >
                <div style={{ marginBottom:'6px'}} >So luong</div>
                <WrapperQualityProduct>
                <button style={{ border: 'none', background:'transparent'}} >
                    <MinusOutlined style={{ color:'#000', fontSize:'20px' }}/>
                </button>
                <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />
                <button style={{ border: 'none', background:'transparent'}} >
                    <PlusOutlined style={{ color:'#000', fontSize:'20px' }}/>
                </button>
                </WrapperQualityProduct>
            </div>
            
            <div style={{ display:'flex', alignItems: 'center', gap:'12px' }} >
                <ButtonComponent
                    bordered={false} 
                    size={40}
                    styleButton={{
                        background: 'rgb(255,57,69',
                        height:'48px',
                        width:'220px',
                        borderRadius:'4px',
                        border:'none',
                    }}
                    textButton={'Mua ngay'}
                    styleTextButton={{ color:'#fff', fontSize:'15px', fontWeight: '700' }}
                ></ButtonComponent>
                <ButtonComponent
                    size={40}
                    styleButton={{
                        background: '#fff',
                        height:'48px',
                        width:'220px',
                        borderRadius:'4px',
                        border:'1px solid rgb(13,92,182)',
                    }}
                    textButton={'Mua trả sau'}
                    styleTextButton={{ color:'rgb(13,92,182)', fontSize:'15px', fontWeight: '700' }}
                ></ButtonComponent>
            </div>

        </Col>
    </Row>
  )
}
