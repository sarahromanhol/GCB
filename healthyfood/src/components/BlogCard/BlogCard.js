import React from "react";
import * as S from './styled'

export const BlogCard = (props) => {
    return (
        <S.BlogCard>
            <img src={props.imageRecipe} alt='Foto de post no blog' />
            <h6>{props.title}</h6>
            <div>
                <S.UserIcon src={props.imageUser} alt='Ícone de usuário' />
                <p>{props.userName}</p>
            </div>
        </S.BlogCard>
    )
}