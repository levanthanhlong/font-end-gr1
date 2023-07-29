import {Row} from 'antd'
import styled from 'styled-components'


export const WrapperHeader = styled(Row)`
    padding: 10px 0;
    background-color: rgb(26, 148, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    //width: 100%;
`

export const WrapperTextHeader = styled.span`
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    text-align: left;

`
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`
