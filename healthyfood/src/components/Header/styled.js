import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'
import ativaCor from '../../App'


export const HeaderContainer = styled.header`
    background-color: ${props => props.ativaCor ? primaryColor : 'none'};
    height: 93px;
    width: 100vw;
    display: grid;
    grid-template-columns: 2fr 4fr;
    column-gap: 100px;
    align-items: center;
    position: fixed;
    transition: all ease 0.3s;
`



export const Logo = styled.h2`
    justify-self: center;
    font-family: Montserrat;
    color: ${props => props.ativaCor ? '#FFFFFF' : primaryColor };
    transition: all ease 0.3s;
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GeneralHeaderButton = styled.button`
    margin-right: 20px;
    background-color: transparent;
    color: #FFFFFF;
    font-family: muli;
    font-weight: bold;
    font-style: normal;
    border: none;
    font-size: 16px;
    cursor: pointer;
`

export const RegisterButton = styled.button`
    color: ${primaryColor};
    font-family: Muli;
    background-color: #FFFFFF;
    border: none;
    height: 52px;
    width: 130px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
`