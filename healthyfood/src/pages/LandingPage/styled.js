import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const FirstContainer = styled.div`
height: 768px;
width: 100vw;
h2{
    font-family: Montserrat;
    color: #1D164D;
    height: 200px;
    width: 350px;
    font-size: 48px;
    font-weight: bold;
    position: absolute;
    left: 137px;
    top: 260px;
}
`

export const FirstPic = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
`

export const SearchRecipeInput = styled.div`
    display: flex;
    position: absolute;
    left: 137px;
    top: 530px;

    input {
        height: 52px;
        width: 343px;
        border-radius: 5px;
        border: 1px solid #2D3561;
        font-family: muli;
        font-size: 16px;
        padding-left: 10px;
    }

    img {
        background-color: ${primaryColor};
        height: 18px;
        width: 18px;
        padding: 20px;
        border-radius: 5px;
        margin-left: 20px;
    }
`

export const SecondContainer = styled.div`
    height: 768px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    h3{
        font-family: Montserrat;
        font-size: 32px;
        font-weight: bold;
        color: #1D164D;
        margin-bottom: 0px;
    }
    h6{
        font-family: muli;
        font-size: 16px;
        font-weight: 400;
        color: #9E9BAF;
        width: 510px;
        margin-top: 20px;
        text-align: center;
        line-height: 1.5;
    }
`

export const RecipeCardsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 25px;
    column-gap: 25px;
`

export const ThirdContainerText = styled.div`
    position: absolute;
    top: 1680px;
    right: 200px;
    height: 454px;
    width: 410px;
    h3{
        font-family: Montserrat;
        font-size: 32px;
        font-weight: bold;
        color: #1D164D;
        margin-bottom: 40px;
    }
    p{
        font-family: muli;
        font-size: 16px;
        font-weight: 400;
        color: #9E9BAF;
        width: 510px;
        margin-top: 20px;
        text-align: center;
        line-height: 1.5;
        text-align: left;
    }
`
