import React from "react"
import firstPic from '../../assets/imgs/Illustration.svg'


export const LandingPage = () => {
    return(
        <div>
            <div>
                <div>
                    <input placeholder='Search healthy recipes'/>
                    <img />
                </div>
                <img src={firstPic} alt='Ilustração'/>
            </div>

            <div>Container 2</div>
            <div>Container 3</div>
            <div>Container 4</div>
            <div>Container 5</div>
        </div>
    )
}