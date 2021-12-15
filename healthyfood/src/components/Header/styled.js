import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'




export const HeaderContainer = styled.header`
    background-color: ${props => props.ativaCor ? primaryColor : 'none'};
    height: 93px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    position: fixed;
    transition: all ease 0.3s;
    z-index: 3;

    @media(max-width: 500px) {
    display: flex;
    padding: 4px;
    }
`

export const Logo = styled.h2`
    justify-self: center;
    font-family: Montserrat;
    color: ${props => props.ativaCor ? '#FFFFFF' : primaryColor };
    transition: all ease 0.3s;
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
    justify-self: left;
    margin-left: 90px;
    @media(max-width: 500px) {
    font-size: 20px;
    margin-left: 5px;
    width: 20%;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
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

    @media(max-width: 500px) {
        font-size: 12px;
        color: ${props => props.ativaCor ? '#FFFFFF' : primaryColor };
        margin-right: 1px;
        width: 20%;
    }
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

    @media(max-width: 500px) {
        font-size: 14px;
        margin-right: 2px;
        margin-left: 0px;
        padding: 2px;
        width: 26%;
    }
`