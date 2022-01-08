/* eslint-disable prettier/prettier */
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Flensburger from '../components/icons/svg/SVGFlensburger';
import Ganter from '../components/icons/svg/SVGGanter';
import Astra from '../components/icons/svg/SVGAstra';
import StyledHeroHome from "../components/HeroHome.js";
import { Heading3 } from '../components/Headings/Heading3.styles';
import { Heading1 } from '@/components/Headings/Heading1.styles';
import Image from 'next/image';
import sketchy from "theme-ui-sketchy-preset";
import Modal2 from '../components/Modal2'
import {
  jsx,
  Flex,
  Box,
  NavLink,
  ThemeProvider,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Badge,
  Alert,
  Divider,
  Styled as S
} from "theme-ui";


const theme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },

}
export default function Home() {

  return (
    <>
       <Heading3>Dein Treffpunkt<br/>in Freiburg !!!</Heading3>

      <StyledHeroHome>
     
      </StyledHeroHome>
      <section className="ml-3 mt-5 w-11/12 h-48 bg-gray-800 flex flex-wrap -mx-4 -mb-4 md:mb-0">


<div className="px-10 h-full md:px-8 z-10 md:w-1/3 px-4 mb-4 md:mb-0">
  <p className="text-2xl p-3 md:text-4xl font-bold uppercase text-yellow-500">öffnungszeiten</p>
  <p className="text-center mt-2 text-xs md:text-2xl  text-gray-300">Montag bis Donnerstag: 18 bis 24 Uhr</p>
  <p className="text-center text-xs md:text-2xl  text-gray-300">Freitag und Samstag: 15 bis 03 Uhr</p>
  <p className="text-center text-xs md:text-2xl  text-gray-300">Sonntag: Ruhetag</p>
</div>


<div href="#" class="flex flex-col items-center bg-red-800 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img class="-mt-60 px-2 object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/portrait-mick1.png" alt=""></img>
<div class="flex flex-col justify-between p-5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        leading-normal">
<h5 class="mb-2 text-3xl font-bold tracking-tight text-yellow-400 dark:text-white">"Moin - Moin"</h5>
<p class="mb-3 font-normal text-gray-100 dark:text-gray-400">In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feierabend nette und interessante Menschen kennenzulernen. Wir sind stolz auf unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale Location zur Durchführung Ihres privaten oder geschäftlichen Events. Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br /><br />Michael Schreck und das Team des Rettungsanker.</p>
</div>
</div>


</section>

      <div className='right-4 transform -translate-y-20 absolute md:right-16 z-10 w-4/12 float-right md:transform md:-translate-y-' >
        <Image className='absolute' src="/Astraballons.png" alt="portrait" layout="responsive" height={473} width={473} />
      </div>
      <Heading1 className='md:mt-96'>Die Kneipe</Heading1>
      <div className='w-2/12 left-32 transform -translate-y-20 absolute md:left-80 z-20 md:transform md:-translate-y-0' >
        <Image src="/rettungsring.png" alt="illustration" layout="responsive" height={473} width={473} />
      </div>
      <div className=' transform -translate-y-24 absolute w-5/12 z-4 transform md:-translate-y-3/4' >
        <Image src="/lighthousebw.svg" alt="illustrtion" layout="responsive" height={473} width={473} />
      </div>

      <section className='mt-96 md:mt-60 mx=auto w-11/12'>
        <ThemeProvider theme={theme}>
          <div className="mx-auto grid grid-cols-1 gap-0 justify-center aligne-center ml-32 mt-24 md:grid md:grid-cols-3 justify-center items-center gap-24" >

            <Card
              mb={5}
              mt={20}
              sx={{
                maxWidth: 400,
                padding: "30px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border- border-gray-100'>
                <Ganter height="24vh" width="20vw" objectfi="contain"></Ganter>
              </div>
              <Text>
                <p className="mt-10 text-4xl text-center text-sans font-bold uppercase">Ganter </p>
                <p className="text-xl text-center">leckeres Ganter Bräu vom Fass</p>
              </Text>
            </Card>

            <Card
              mb={5}
              mt={20}
              sx={{
                maxWidth: 400,
                padding: "30px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border- border-gray-100'>
                <Astra height="24vh" width="20vw"></Astra>
              </div>
              <Text>
                <p className="mt-10 text-4xl text-center text uppercase font-bold" >Astra Bier</p>
                <p className="text-xl text-center">natürlich direkt vom Kiez in den Anker</p>
              </Text>
            </Card>
            <Card
              mb={5}
              mt={20}
              sx={{
                maxWidth: 400,
                padding: "30px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border- border-gray-100'>
                <Flensburger height="24vh" width="wovw"></Flensburger>
              </div>
              <Text>
                <p className="mt-10 text-4xl text-center text uppercase font-bold">Flensburger</p>
                <p className="text-xl text-center">das blonde Herbe aus dem hohen Norden</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>
      <h1 className='mt-5 text-center text-3xl font-bold text-yellow-400 md:hidden 
      '>Impressionen Rettungsanker</h1>
      <Heading1 className="hidden md:block">Impressionen Rettungsanker</Heading1>
      <div className='w-2/12 absolute transform -translate-y-10'>
        <Image src="/Albers_Illu_white.png" top-5 alt="Impressionen" height="208 " width="195" layout="responsive" />
      </div>


      <section className='m mx=auto w-11/12'>
        <ThemeProvider theme={theme}>
          <div className="mt-12 px-1 mx-center grid-cols-1 justify-center items-center md:ml-16 md:grid md:grid-cols-3 md:gap-20 md:justify-between md:items-start " >

            <Card
              mb={5}
              mt={20}
              sx={{
                maxWidth: 433,
                padding: "30px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
            <div className=' border-8 border-gray-100'>
                <Image src="/Impress01.jpg" alt="Impressionen" height="168 " width="300" layout="responsive" />
              </div>
              <Text>
              <p className="mt-20 text-2xl md:text-4xl text-center font-bold">Impressionen</p>
              </Text>
            </Card>

            <Card
              mb={5}
              mt={20}
              sx={{
                maxWidth: 433,
                padding: "30px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='border-8 border-gray-100'>
                <Image src="/Impress02.jpg" alt="Impressionen" height="168 " width="300" layout="responsive" />
              </div>
              <Text>
              <p className="mt-10 text-2xl md:text-4xl text-center font-bold">Impressionen</p>
              </Text>
            </Card>
            <Card
              mb={5}
              mt={20}
              sx={{
                maxWidth: 433,
                padding: "30px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}        >
              <div className='border-8 border-gray-100'>
                <Image src="/Impress03.jpg" alt="Impressionen" height="168 " width="300" layout="responsive" />
              </div>
              <Text>
              <p className="mt-10 text-2xl md:text-4xl text-center font-bold">Impressionen</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>

      <section>
        <div>

          <hr className='w-48 mt-12 mx-auto md:w-9/12'/>
                
          <div className="w-36 mt-6 md:mt-24 mx-auto md:w-2/12">
          <Image  src="/Logo_neu.png" alt="LogoNeu" layout="responsive" height="1060" width="1920"/>
          </div>
                <Heading1 className="hidden md:block md:mt-12">Impressum</Heading1>
                <h1 className='mt-6 text-6xl text-center text-yellow-400 font-bold md:hidden' >Impressum</h1>
                  <div>
            <div className="mt-12 flex flex-col items-center justify-between">
            <h1 className='mx-auto w-9/12 md:text-4xl text-gray-100 text-center'>Rettungsanker Freiburg GbR</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Adelhauserstrasse 7c</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>79098 Freiburg / Breisgau</h1>
            </div>

            <div class Name="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Geschäftsführung:</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Michael Schreck</h1>
            </div>


            <div class Name="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Steuernummer:</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>1234567890</h1>
            </div>

            <div class Name="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Gerichtsstand:</h1>
              <h1 className='mb-10 mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Freiburg/ Breisgau</h1>
            </div>

          </div>





        </div>
            

      </section>
      
    </>



  )
   async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
  
    return { props: { posts } }
  }
  
}

  

