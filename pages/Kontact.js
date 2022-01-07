import React from 'react'
import StyledHeroWohin from '../components/HeroWohin';
import Heading2 from '@/components/Headings/Heading2'; 
import Image from 'next/image';
import Modal from '../components/Modal'
const Kontact = () => {
    return (
        <>
        <div className='mx-auto w-12/12 min-h-screen'>
            
        <div className="mx-auto">
         <StyledHeroWohin                                      >
            
              <Heading2 className="">Lageplan</Heading2>
    
            
            <div className="mt-60 mx-auto w-5/12 h-60 mt-4 flex flex-col items-start justify-center gapy-5">
                
                    <div className="mt-60 w-11/12 mx-auto bg-gray-900 opacity-80 flex flex-col items-center justify-center">
                       <p className='text-gray-300 text-1xl text-center md:text-4xl bg-transparent'>Adelhauserstr.7c</p>
                       <p className='text-gray-300 text-1xl text-center md:text-4xl bg-transparent'>79098 Freiburg</p>
                       <p className='text-gray-300 text-1xl text-center md:text-4xl bg-transparent'>Haltestelle Holzmarkt</p>
                       <p className='text-gray-300 text-1xl text-center md:text-4xl bg-transparent'>Linie 1 - 3 und 5</p>
                    </div>

                    <div className="mt-10 border-5 border-white">
                        <Modal></Modal>
                    </div>
            </div>
        </StyledHeroWohin>
                                          
        </div>
        
        </div>
        </>
    )
}

export default Kontact
