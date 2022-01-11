/* eslint-disable prettier/prettier */
import React from 'react';
import StyledHeroTeam from '../components/HeroTeam';
import Image from 'next/image';
import { StyledButton } from "@/components/Buttons/Button.styles"
import { Heading2 } from "@/components/Headings/Heading2.styles";
import StyledHeroSportarena from "@/components/HeroSportarena";
import SVGSCFreiburgEmblem from "../components/icons/svg/SvgScFreiburg.js"
import DataSCFreiburg from 'components/DataSCFreiburg.js'
import LogoAlt from '../components/icons/svg/logoAlt';


const team = () => {
  return (
  
        <>
      <StyledHeroTeam>

      
        <section className="mx-auto w-11/12 py-12 px-6 text-center md:py-4 md:px-4">
        
        


    

        <div className='md:w-5/12 mx-auto'>
           <Heading2>DAS TEAM</Heading2>
        </div>
      <div className="mt-4 flex flex-wrap -mx-8">
              <div className="-mt-5 p-12 md:w-1/3 xl:p-36">
                <Image className="w-1/3 mx-auto mb-4 rounded-full" src="/matrose.png" layout="responsive" width="100" height="120" alt="Portrait"/>
                <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Simon</h3>
                <span className="text-2xl text-blue-800 font-bold ">Obermaat</span>
                <p className="mt-4  text-1xl text-gray-300 leading-relaxed xl:text-2xl">Simon ist Teammitglied der ersten Stunde. Im richtigen Leben studiert Simon an der Uni Erziehungswissenschaften und hat gerade seinee Master absolviert. Simon ist ausgewiesener SC Freiburg Fan und wann immer möglich begleited er das Team zu den Auswärtsspielen</p>
              </div> 
             <lr classname="w-9/12 text-red-400"/> 
              <div className="p-12 md:w-1/3 xl:p-36 ">
              <Image className="p-10 w-1/3 mx-auto mb-4 rounded-full" src="/portrait-mick1.png" layout="responsive" width="100" height="120" alt="Portrait"/>
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Mick</h3>
                <span className="text-2xl text-blue-800 font-bold ">Captain</span>
                <p className="mt-4 text-1xl text-gray-300 leading-relaxed xl:text-2xl">Volker Schneider und Michael Schreck haben 2017 die Idee und das Konzept des Rettungsankers initiert und liessen den Kahn in September 2017 vom Stapel laufen. Seit Januar 2020 zeigt sich Michael nun in alleiniger Verantwortung für den Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten verantwortungsvoll durch die hohen Wogen </p>
              </div>
              <div className=" p-8 md:w-1/3 xl:p-36">
              <Image className="-nt-w-1/3 mx-auto mb-4 rounded-full" src="/offizierin.png" layout="responsive" width="100" height="120" alt="Portrait"/>
              <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Anne</h3>
                <span className="text-2xl text-blue-800 font-bold ">I. Offizierin</span>
                <p className="mt-4 text-1xl xl:text-1xl text-gray-300 leading-relaxed xl:text-2xl ">Auch Anne ist Teammitglied derersten Stunde nach Stapelablauf des Rettungsanker-Mit Ihrer langjährigen Gastroerfahrung  ist sie ein wichtiger Pfeiler im Team des Rettungsankers</p>
              </div>
            </div>
</section>
        
        
      </StyledHeroTeam>
   
      
    
    </>


  )
}

export default team
