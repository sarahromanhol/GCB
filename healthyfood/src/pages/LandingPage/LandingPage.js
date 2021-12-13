import React from "react"
import firstPic from '../../assets/imgs/Illustration.svg'
import * as S from './styled'
import lupa from '../../assets/imgs/lupa.svg'
import comida_1 from '../../assets/imgs/comida_1.svg'
import comida_2 from '../../assets/imgs/comida_2.svg'
import comida_3 from '../../assets/imgs/comida_3.svg'
import comida_4 from '../../assets/imgs/comida_4.svg'
import { RecipeCard } from "../../components/RecipeCard/RecipeCard"
import secondPic from '../../assets/imgs/bloco_services.svg'


export const LandingPage = () => {
    return (
        <div>
            <S.FirstContainer>
                <h2>Ready for Trying a new recipe?</h2>
                <S.SearchRecipeInput>
                    <input placeholder='Search healthy recipes' />
                    <img src={lupa} />
                </S.SearchRecipeInput>
                <S.FirstPic src={firstPic} alt='Ilustração' />
            </S.FirstContainer>

            <S.SecondContainer>
                <h3>Our Best Recipes</h3>
                <h6>
                    Far far away, behind the word mountains,  far from
                    the countries Vokalia and Consonantia, there live
                    the blind texts.
                </h6>
                <S.RecipeCardsContainer>
                    <RecipeCard image={comida_1} title={'Broccoli Salad with Bacon'} />
                    <RecipeCard image={comida_2} title={'Classic Beef Burgers'} />
                    <RecipeCard image={comida_3} title={'Classic Potato Salad'} />
                    <RecipeCard image={comida_4} title={'Cherry Cobbler on the Grill'} />
                </S.RecipeCardsContainer>
            </S.SecondContainer>

            <div>
                <img src={secondPic} />
                <S.ThirdContainerText>
                    <h3>The best services ready To serve you</h3>
                    <p>
                        Far far away, behind the word mountains,  far from 
                        the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <p>
                        Separated they live in Bookmarksgrove right at the 
                        coast of the Semantics, a large language ocean.
                    </p>
                    <p>
                        A small river named Duden flows by their place 
                        and supplies it with the necessary regelialia.
                    </p>
                    <button>Know More</button>
                </S.ThirdContainerText>
            </div>

            <div>Container 4</div>
            <div>Container 5</div>
        </div>
    )
}