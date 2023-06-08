import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';


export default function ParallaxEffect(props){
    return(
        <ParallaxBanner 
        layers={[{image: props.imgsrc , amount: 0.6}]}
        style={{height: props.height}}
        >
            <div>
                {props.children}
            </div>

        </ParallaxBanner>
    )
}
