import React from "react"
import firstPic from '../../assets/imgs/Illustration.svg'
import * as S from './styled'
import lupa from '../../assets/imgs/lupa.svg'
import comida_1 from '../../assets/imgs/comida_1.svg'


export const LandingPage = () => {
    return(
        <div>
            <S.FirstContainer>
                <h2>Ready for Trying a new recipe?</h2>
                <S.SearchRecipeInput>
                    <input placeholder='Search healthy recipes'/>
                    <img src={lupa} />
                </S.SearchRecipeInput>
                <S.FirstPic src={firstPic} alt='Ilustração'/>
            </S.FirstContainer>

            <S.SecondContainer>
                <h3>Our Best Recipes</h3>
                <h6>
                    Far far away, behind the word mountains,  far from 
                    the countries Vokalia and Consonantia, there live 
                    the blind texts.
                </h6>
                <S.RecipeCardContainer>
                    <div>
                        <img src={comida_1}/>
                        <p>Broccoli Salada bablaba</p>
                        <button>See Recipe</button>
                    </div>
                </S.RecipeCardContainer>
            </S.SecondContainer>
            <div>Container 3</div>
            <div>Container 4</div>
            <div>Container 5</div>
        </div>
    )
}