import React from 'react'
import { Badge, Col } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperTextHeaderSmall, WrapperHeaderAccount } from './style';
import { UserOutlined,ShoppingCartOutlined, CaretDownOutlined} from '@ant-design/icons';
import { ButtonInputSearch } from '../ButtonInputSearch/ButtonInputSearch';

export const HeaderComponent = () => {
  return (
    <div style={{ width:'100%', background:'rgb(26,148,255', display:'flex', justifyContent:'center' }} >
        <WrapperHeader gutter={16} >
          <Col span={5}>
            <WrapperTextHeader>Store</WrapperTextHeader>
          </Col>
          <Col span={13}>
            <ButtonInputSearch
              size="large"
              bordered="false"
              textButton="Search"
              placeholder="imput search text..."
              // onSearch={onSearch}
            />
          </Col>
          <Col span={6} style={{ display: 'flex', gap:'54px', alignItems:'center' }}>
            <WrapperHeaderAccount >
              <UserOutlined style={{ fontSize: '30px '}} />
              <div>
                <WrapperTextHeaderSmall>Login/logout</WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>User</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            </WrapperHeaderAccount>
            
            <div>
              <Badge count={4} size='small'>
                <ShoppingCartOutlined style={{ fontSize: '30px', color:'#fff' }} />
              </Badge>
              
              <WrapperTextHeaderSmall>Cart</WrapperTextHeaderSmall>
            </div>
          </Col>
        </WrapperHeader>
    </div>
   
  )
}
