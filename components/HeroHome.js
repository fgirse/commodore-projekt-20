/* eslint-disable prettier/prettier */
import react from 'react';
import styled from'styled-components';
import { device } from "../components/device";


const StyledHeroHome = styled.div`
 position: relative;
 height: 100vh;
 width: 100vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('../public/Logo_neu.png');
 background-repeat: no-repeat;
 background-position: 0vw 0vh;
 background-size: contain;
 border-bottom: .2rem  orange solid;
 border-top: .2rem orange solid:
 ; 
  /* eslint-disable prettier/prettier */
  

  @media ${device.mobileM} {
 position: relative;
 height: 100vh;
 width: 100vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('/Logo_neu.png');
 background-repeat: no-repeat;
 background-position: 0vw 0vh;
 background-size: contain;

  }

  @media ${device.mobileL} {
 position: relative;
 height: 50vh;
 width: 100vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('/Logo_neu.png');
 background-repeat: no-repeat;
 background-position: 0vw 0vh;
 background-size: contain;
 
  }

  @media ${device.tablet} {
 position: relative;
 height: 33vh;
 width: 100vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('/Logo_neu.png');
 background-repeat: no-repeat;
 background-position: 0vw 0vh;
 background-size: 100vw 33vh;
 margin-left: auto;
 margin-right: auto;
   }

  @media ${device.laptop} {
 position: relative;
 height: 66vh;
 width: 99vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('/Hero.png');
 background-repeat: no-repeat;
 background-position: 0vw 0vh;
 background-size: 100vw 66vh;
   }

  @media ${device.laptopL} {
 position: relative;
 height: 75vh;
 width: 99.5vw;
 margin-top: 0vh;
 background-color: #102242;
 background-image: url('/Hero.png');
 background-repeat: no-repeat;
 background-position: 0vw 0vh;
 background-size: 100vw 75vh;
   }

  @media ${device.desktop} {
 position: relative;
 height: 100vh;
 width: 97.5vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('/Hero.png');
 background-repeat: no-repeat;
 background-position: 0vw 0vh;
 background-size: 100vw 66vh;
}
`

export default StyledHeroHome