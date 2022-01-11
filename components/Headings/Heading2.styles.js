import React from 'react';
import styled from'styled-components';
import { device } from "../device";

const Heading2 = styled.h2`
  font-family: 'Bowlby One SC', cursive;
  color: #ffffff;
  text-align: right;
  padding: 1rem 6rem;
  font-size: 5rem;
  font-weight: bold; 
  -webkit-text-stroke-width: .15rem;
  -webkit-text-stroke-color: orange;

  @media ${device.mobileM} {
    font-size: 5rem; 
    text-aligne: right;    
  }
  
  @media ${device.mobileL} {
    font-size: 4rem;
    text-aligne: right;     
  }

  @media ${device.tablet} {
    font-size: rem;     
  }

  @media ${device.laptop} {
    font-size: 4rem;     
  }

  @media ${device.laptopL} {
    font-size: 5rem;     
  }

  @media ${device.desktop} {
    font-size: 6rem;     
  }
  `

export { Heading2 }