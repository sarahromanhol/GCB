import React from "react"
import * as S from './styled'
import { useCoordinator } from "../../hooks/useCoordinator"


export const Header = ({ativaCor}) => {
    const goTo = useCoordinator()

    return (
        <S.HeaderContainer ativaCor={ativaCor}>
            <S.Logo ativaCor={ativaCor} onClick={goTo.LandingPage}>Healthy Food</S.Logo>
            <S.ButtonsContainer>
                <S.GeneralHeaderButton ativaCor={ativaCor} >HEALTHY RECIPES</S.GeneralHeaderButton>
                <S.GeneralHeaderButton ativaCor={ativaCor} >BLOG</S.GeneralHeaderButton>
                <S.GeneralHeaderButton ativaCor={ativaCor} >JOIN</S.GeneralHeaderButton>
                <S.RegisterButton onClick={goTo.Register} >REGISTER</S.RegisterButton>
            </S.ButtonsContainer>
        </S.HeaderContainer>
    )
}
