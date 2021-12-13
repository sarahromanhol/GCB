import styled from 'styled-components'

export const BlogCard = styled.div`
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 348px;
    border-radius: 7px;
    box-shadow: 0px 1px 10px -1px #d9d8df;
    h6 {
        font-family: Montserrat;
        font-size: 24px;
        font-weight: bold;
        color: #1D164D;
        margin-top: 30px;
        margin-bottom: 20px;
        margin-left: 20px;
        max-width: 290px;
        text-align: left;
    }
    div {
        display: flex;
    }
    p{
        margin-left: 10px;
        font-family: muli;
        font-size: 16px;
        font-weight: 400;
        color: #9E9BAF;
    }
`

export const UserIcon = styled.img`
    margin-left: 20px;
`