import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'
import registerPageBG from '../../assets/imgs/registerBG.svg'

export const RegisterPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        z-index: -1;
        background: url(${registerPageBG}) center center no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
    }
    /* background-image: url(${registerPageBG});
    background-size: cover; 
    opacity: 0.5; */
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 280px;
    /* right: 100px; */

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
        border: none;
        box-shadow: 1px 1px 20px 2px #e4cece;
        color: black;
    }

    button {
        background-color: ${primaryColor};
        height: 52px;
        width: 200px;
        padding: 20px;
        border-radius: 5px;
        margin-top: 20px;
        margin-left: 20px;
        font-family: muli;
        font-size: 20px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
        box-shadow: 0px 1px 20px 1px ${primaryColor};
    }
`

export const BirthDateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    font-family: muli;
`

export const SubmitedFormMessage = styled.p`
    position: absolute;
    top: 280px;
    right: 600px;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 700;
    color: #2D3561;
`

