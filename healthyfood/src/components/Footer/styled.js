import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const Footer = styled.footer`
    background-color: ${props => props.coloreFooter ? primaryColor : 'none'};
    height: 103px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    p {
        color: #1D164D;
        font-family: muli;
        font-size: 16px;
    }
    button {
        border: none;
        color: #9E9BAF;
        font-family: muli;
        font-size: 16px;
        background-color: transparent;
        margin-right: 10px;
    }
`