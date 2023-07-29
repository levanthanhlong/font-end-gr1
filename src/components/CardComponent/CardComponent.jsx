import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style';
import { StarFilled} from '@ant-design/icons';


export const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        headStyle={{ width:'200px', height:'200px' }}
        style={{ width: 240 }}
        bodyStyle={{ padding: '10px'}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span>
                <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
            </span>
            <span> | Da ban 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            <span style={{marginRight:'8px'}} >1.000.000 VND</span>
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>

    </WrapperCardStyle>
  )
}
