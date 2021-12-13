import React from "react";
import * as S from './styled'

export const RecipeCard = (props) => {
    return (
        <S.RecipeCard>
            <img src={props.image} alt='imagem da receita' />
            <div>
                <p>{props.title}</p>
                <button>See Recipe</button>
            </div>
        </S.RecipeCard>
    )
}