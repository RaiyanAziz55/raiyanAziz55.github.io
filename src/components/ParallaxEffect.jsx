import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';


export default function ParallaxEffect(props){
    return(
        <ParallaxProvider>
        <ParallaxBanner 
        layers={[{image: props.imgsrc , amount: 0.6}]}
        style={{height: props.height}}
        disabled= {false}
        >
            <div>
                {props.children}
            </div>

        </ParallaxBanner>
        </ParallaxProvider>
    )
}
