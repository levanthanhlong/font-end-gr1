import { Col, Pagination, Row } from 'antd'
import React from 'react'
import { NavBarComponent } from '../../components/NavBarComponent/NavBarComponent'
import { CardComponent } from '../../components/CardComponent/CardComponent'
import { WrapperNavbar, WrapperProducts } from './style'

export const TypeProductPage = () => {
    const onChange = () => {};
    return (
        <div style={{ width:'100%', background:'#efefef' }} >
            <div style={{ width:'1270px', margin:'0 auto' }}>
                <Row style={{flexWrap:'nowrap', paddingTop: '10px' }}>
                    
                        <WrapperNavbar span={4}>
                            <NavBarComponent />           
                        </WrapperNavbar>
                        <Col span={20}>
                            <WrapperProducts >
                                <CardComponent /> 
                                <CardComponent /> 
                                <CardComponent /> 
                                <CardComponent /> 
                                <CardComponent /> 
                                <CardComponent /> 
                            </WrapperProducts>
                            <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign:'center', marginTop:'20px' }} />   
                        </Col>   
                </Row>
            </div>
        </div>
        
    )
}
