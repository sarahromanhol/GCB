import React from "react"
import * as S from './styled'
import { RecipeCard } from "../../components/RecipeCard/RecipeCard"
import { BlogCard } from "../../components/BlogCard/BlogCard"
import firstPic from '../../assets/imgs/Illustration.svg'
import secondPic from '../../assets/imgs/bloco_services.svg'
import thirdPic from '../../assets/imgs/bloco_final_image.svg'
import lupa from '../../assets/imgs/lupa.svg'
import comida_1 from '../../assets/imgs/comida_1.svg'
import comida_2 from '../../assets/imgs/comida_2.svg'
import comida_3 from '../../assets/imgs/comida_3.svg'
import comida_4 from '../../assets/imgs/comida_4.svg'
import blog_1 from '../../assets/imgs/blog_image_1.svg'
import blog_2 from '../../assets/imgs/blog_image_2.svg'
import blog_3 from '../../assets/imgs/blog_image_3.svg'
import blog_4 from '../../assets/imgs/blog_image_4.svg'
import user_1 from '../../assets/imgs/user_1.svg'
import user_2 from '../../assets/imgs/user_2.svg'
import user_3 from '../../assets/imgs/user_3.svg'
import user_4 from '../../assets/imgs/user_4.svg'
import HorizontalScroll from "react-scroll-horizontal"



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

            <S.FourthContainer>
                <h3>Read Our Blog</h3>
                <h6>
                    Far far away, behind the word mountains,  far from
                    the countries Vokalia and Consonantia, there live
                    the blind texts.
                </h6>
                <HorizontalScroll>
                    <S.Carousel>
                        <BlogCard
                            imageRecipe={blog_1}
                            title={'Quick-start guide to nuts and seeds'}
                            imageUser={user_1}
                            userName={'Kevin Ibrahim'}
                        />
                        <BlogCard
                            imageRecipe={blog_2}
                            title={'Nutrition: Tips for Improving Your Health'}
                            imageUser={user_2}
                            userName={'Mike Jackson'}
                        />
                        <BlogCard
                            imageRecipe={blog_3}
                            title={'The top 10 benefits of eating healthy'}
                            imageUser={user_3}
                            userName={'Bryan McGregor'}
                        />
                        <BlogCard
                            imageRecipe={blog_4}
                            title={'What Makes a Healthy Diet?'}
                            imageUser={user_4}
                            userName={'Joshua'}
                        />
                    </S.Carousel>
                </HorizontalScroll>
            </S.FourthContainer>

            <S.FifthContainer>
                <h2>Join our membership to get special offer</h2>
                <S.EmailInput>
                    <input placeholder='Enter your email address' />
                    <button>Join</button>
                </S.EmailInput>
                <S.ThirdPic src={thirdPic} />
            </S.FifthContainer>
        </div>
    )
}