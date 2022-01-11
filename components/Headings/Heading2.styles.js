import React from 'react';
import styled from'styled-components';
import { device } from "../device";

const Heading2 = styled.h2`
  font-family: 'Bowlby One SC', cursive;
  color: #ffffff;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 6rem;
  font-weight: bold; 
  -webkit-text-stroke-width: .15rem;
  -webkit-text-stroke-color: orange;

  @media ${device.mobileM} {
    font-size: 6rem; 
    width:66vw;
    text-aligne: center;
    margin-top:5vh
  }
  
  @media ${device.mobileL} {
    font-size: 6rem;
       
  }

  @media ${device.tablet} {
    font-size: 8rem;     
  }

  @media ${device.laptop} {
    font-size: 4rem;     
  }

  @media ${device.laptopL} {
    font-size: 7rem;
    margin-top: 13vh;     
  }

  @media ${device.desktop} {
    font-size: 8rem;  
    text-aligne: center;   
  }
  `

export { Heading2 }