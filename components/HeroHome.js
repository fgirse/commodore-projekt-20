/* eslint-disable prettier/prettier */
import react from 'react';
import styled from'styled-components';
import { device } from "./device";


const StyledHeroHome = styled.div`
 position: relative;
 height: 33vh;
 width: 100vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('/Logo_neu.png');
 background-repeat: no-repeat;
 background-position: 20vw 2vh;
 background-size: 66vw 30vh;
 border-bottom: .2rem  orange solid;
 border-top: .2rem orange solid:
 ; 
  /* eslint-disable prettier/prettier */

  @media ${device.laptop} {
 position: relative;
 height: 10vh;
 width: 10vw;
 margin-top: 0vh;
 margin-left: auto;
 margin-right: auto;
 background-color: #102242;
 background-image: url('/Logo_neu.png');
 background-repeat: no-repeat;
 background-position: 10vw 10vh;
 background-size: 50vw 50vh;
 border-bottom: .2rem  orange solid;
 border-top: .2rem orange solid:
  }
`

export default StyledHeroHome