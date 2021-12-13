import styled from 'styled-components'
import registerPageBG from '../../assets/imgs/register-page-bg.jpg'
import { primaryColor } from '../../constants/colors'

export const RegisterPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${registerPageBG});
    background-size: cover; 
    opacity: 0.7;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 280px;
    right: -400px;

    input {
        height: 52px;
        width: 343px;
        border-radius: 5px;
        border: 1px solid #2D3561;
        font-family: muli;
        font-size: 16px;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 20px;
    }

    button {
        background-color: #96b148;
        height: 52px;
        width: 200px;
        padding: 20px;
        border-radius: 5px;
        margin-left: 20px;
        font-family: muli;
        font-size: 20px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
`

export const BirthDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
    justify-content: left;
    font-family: muli;
`

