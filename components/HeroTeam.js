/* eslint-disable prettier/prettier */
import React from 'react';
import styled from'styled-components';
import { device } from "./device";


    const StyledHeroTeam = styled.div`
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/illumaritim-2.png');
    background-repeat: background-position: 8vw 3vh, 22vw  0vh, 0vh 0vw;           

    
    
    
    @media ${device.mobileM} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 8vw 4vh, 15vw 80vh, 100vw 266vh;
    background-position: 48vw 3vh, 22vw  0vh, 0vh 0vw;           
  }

    @media ${device.mobileL} {
    position: relative;
    height: 366vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 8vw 14vh, 30vw 80vh, 100vw 366vh;
    background-position: 75vw 0vh, 1vw  0vh, 0vh 0vw;           
  }
    
    @media ${device.tablet} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 8vw 4vh, 15vw 80vh, 100vw 266vh;
    background-position: 48vw 3vh, 22vw  0vh, 0vh 0vw;           
  }

  
  @media ${device.laptop} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 8vw 4vh, 15vw 80vh, 100vw 266vh;
    background-position: 48vw 3vh, 22vw  0vh, 0vh 0vw;           
  }

  @media ${device.laptopL} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 8vw 4vh, 15vw 80vh, 100vw 266vh;
    background-position: 48vw 3vh, 22vw  0vh, 0vh 0vw;           
  }
  
  @media ${device.desktop} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 8vw 4vh, 15vw 80vh, 100vw 266vh;
    background-position: 48vw 3vh, 22vw  0vh, 0vh 0vw;           
  }

`

export default StyledHeroTeam

