import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const RecipeCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: 225px;
    width: 510px;
    border-radius: 7px;
    box-shadow: 0px 1px 30px -1px #d9d8df;
    img {
        height: 225px;
        width: 253px;
        margin-right: 30px;
    }
    p {
        font-family: Montserrat;
        font-size: 24px;
        font-weight: bold;
        color: #1D164D;
        margin-top: 50px;
        width: 200px;
    }
    button {
        font-family: Muli;
        background-color: ${primaryColor};
        color: #FFFFFF;
        border: none;
        height: 48px;
        width: 134px;
        font-weight: 100;
        font-size: 16px;
        cursor: pointer;
        border-radius: 7px;
        text-align: center;
    }

    @media(max-width: 500px) {
        width: 70%;
        height: 130px;
        img {
            width: 145px;
            height: 132px;
            margin-right: 9px;
            align-self: flex-start;
        }
        p {
            font-size: 14px;
            margin-top: 25px;
            width: 100px;
        }
        button {
            height: 30px;
            width: 80px;
            font-size: 12px;
        }
    } 
`