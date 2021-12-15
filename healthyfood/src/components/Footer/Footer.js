import React from "react";
import * as S from './styled'

export const Footer = ({coloreFooter}) => {
    return(
        <S.Footer coloreFooter={coloreFooter}>
            <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
            <div>
                <button>Privacy Policy</button>
                <button>Terms and Conditions</button>
            </div>
        </S.Footer>
    )
}