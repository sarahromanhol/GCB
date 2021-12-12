import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: none
    height: 93px;
    width: 100vw;
    display: grid;
    grid-template-columns: 2fr 4fr;
    column-gap: 100px;
    align-items: center;
    h2{
        justify-self: center;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GeneralHeaderButton = styled.button`
    margin-right: 15px;
    background-color: transparent;
    color: #FFFFFF
    font-family: muli, sans-serif;
    font-weight: 400;
    font-style: normal;
    border: none;
`