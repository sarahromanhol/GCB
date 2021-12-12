import React from "react"
import * as S from './styled'
import { useCoordinator } from "../../hooks/useCoordinator"


export const Header = () => {
    const goTo = useCoordinator()

    return (
        <S.HeaderContainer>
            <h2 onClick={goTo.LandingPage}>Healthy Food</h2>
            <S.ButtonsContainer>
                <S.GeneralHeaderButton>HEALTHY RECIPES</S.GeneralHeaderButton>
                <S.GeneralHeaderButton>BLOG</S.GeneralHeaderButton>
                <S.GeneralHeaderButton>JOIN</S.GeneralHeaderButton>
                <button onClick={goTo.Register} >REGISTER</button>
            </S.ButtonsContainer>
        </S.HeaderContainer>
    )
}
