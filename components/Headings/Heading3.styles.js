  /* eslint-disable prettier/prettier */
  import react from 'react';
  import styled from'styled-components';
  import { device } from "../device";/* eslint-disable prettier/prettier */

const Heading3 = styled.h1`
     position: absolute;
  top: 5vh; left: 30vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.7);
  border: .75rem  solid rgb(0, 255, 114);
  text-align: center;
  padding: 1rem 1rem;
  font-size: 1.66666rem;
  border: rounded;
  font-weight: bold;
  transform: rotate(-15deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }
 

  @media ${device.laptop} {
  position: absolute;
  top: 14vh; left: 57vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.7);
  border: .75rem  solid rgb(0, 255, 114);
  text-align: center;
  padding: 1rem 6rem;
  font-size: 3rem;
  border: rounded;
  font-weight: bold;
  transform: rotate(-3deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }
  `
  export { Heading3 }



