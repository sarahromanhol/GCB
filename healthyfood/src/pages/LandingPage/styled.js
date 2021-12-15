import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'



// -------------- Primeiro container ----------------------
export const FirstContainer = styled.div`
height: 768px;
width: 100%;
display: grid;
grid-template-columns: 3fr 4fr;
h2{
    font-family: Montserrat;
    color: #1D164D;
    height: 200px;
    width: 350px;
    font-size: 48px;
    font-weight: bold;
}
@media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2 {
            width: 90%;
        }
    } 
`

export const TitleAndInputContainer = styled.div`
    align-self: center;
    justify-self: center;
    margin-left: 50px;
    
`

export const FirstPic = styled.img`
    justify-self: right;
    @media(max-width: 500px) {
        display: none;
    } 
`

export const SearchRecipeInput = styled.div`
    display: flex;
    input {
        height: 52px;
        width: 343px;
        border-radius: 5px;
        border: 1px solid #2D3561;
        font-family: muli;
        font-size: 16px;
        padding-left: 10px;
        @media(max-width: 500px) {
        width: 60%;
    }}
    img {
        background-color: ${primaryColor};
        height: 18px;
        width: 18px;
        padding: 20px;
        border-radius: 5px;
        margin-left: 20px; 
    }
`











// -------------- Segundo container ----------------------
export const SecondContainer = styled.div`
    padding: 50px 0;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FAFAFC;
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
        @media(max-width: 500px) {
        width: 70%;
    }}
`

export const RecipeCardsContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 25px;
    column-gap: 25px;
    @media(max-width: 500px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    } 
`















// -------------- Terceiro container ----------------------
export const ThirdContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    @media(max-width: 500px) {
        height: auto;
        padding: 20px 0px;
        grid-template-columns: 1fr;
        img {
            display: none;
        }
    } 
`

export const ThirdContainerText = styled.div`
    height: 454px;
    width: 410px;
    align-self: center;
    justify-self: center;
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
        width: 385px;
        margin-top: 20px;
        line-height: 1.5;
        text-align: left;
    } 
    button {
        font-family: Muli;
        background-color: ${primaryColor};
        color: #FFFFFF;
        border: none;
        height: 52px;
        width: 150px;
        font-weight: 100;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        margin-top: 30px;
        box-shadow: 0px 1px 20px 2px ${primaryColor};
    }
    @media(max-width: 500px) {
        position: static;
        height: auto;
        width: 75%;
        p {
            width: 90%;
        }
        button {
            margin-top: 10px;
        }
    } 
`
















// -------------- Quarto container ----------------------
export const FourthContainer = styled.div`
    height: 768px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    background-color: #FAFAFC;
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
    @media(max-width: 500px) {
        h6 {
            width: 70%;
        }
    }
`

export const Carousel = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    height: 460px;
    margin-left: 200px;
    margin-right: 200px;
    @media(max-width: 500px) {
        margin-right: 50px;
        margin-left: 50px;
    }
`


















// -------------- Quinto container ----------------------
export const FifthContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    height: 672px;
    width: 100%;
    h2 {
        font-family: Montserrat;
        color: #1D164D;
        height: 120px;
        width: 350px;
        font-size: 32px;
        font-weight: bold;
    }
    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        height: 600px;
        h2 {
            width: 90%;
            margin-bottom: 10px;
        }
    } 
`

export const TitleAndInputContainer2 = styled.div`
    align-self: center;
    justify-self: center;
    @media(max-width: 500px) {
        padding: 20px 30px;
    } 
`

export const EmailInput = styled.div`
    display: flex;
    input {
        height: 52px;
        width: 343px;
        border-radius: 5px;
        border: 1px solid #2D3561;
        font-family: muli;
        font-size: 16px;
        padding-left: 10px;
    }
    button {
        background-color: ${primaryColor};
        height: 54px;
        width: 93px;
        padding: 20px;
        border-radius: 5px;
        margin-left: 20px;
        font-family: muli;
        font-size: 16px;
        color: #FFFFFF;
        border: none;
        box-shadow: 0px 1px 20px 2px ${primaryColor};
        cursor: pointer;
    }
    @media(max-width: 500px) {
        margin-top: 25px;
        input {
            width: 70%;
        }
        button {
            width: 20%;
        }
    } 
`

export const ThirdPic = styled.img`
    align-self: flex-end;
    justify-self: end;
    z-index: 1;
    height: 672px;
    @media(max-width: 500px) {
        display: none;
    } 
`
