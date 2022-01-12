/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Phoneillustra from '../components/icons/svg/phoneillustra.js'
import LogoNeu from './icons/svg/SvgLogoNeu'
import Image from "next/image"
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="md:w-screen mx-auto md:flex md:flex-col md:justify-between minh-screen bg-gray-800">
        <header className="md:grid md:overflow-hidden md:grid-cols-2 md:grid-rows-4 mdgap-10 justify-evvenly md:items-center lg:flex lg:items-center lg:justify-end lg:py-8">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="p-4 w-36 md:py-4md:w-24 mr-3 lg:flex md:flex-row md:justify-around md:gap-10 md:items-center">
                  <LogoNeu />
                  <div className='w-24 sm:w-12 lg:w-12 xl:w-12'>
                  <Image src="/phone-Illustration.png" layout="responsive" height="489" width="524" alt="Illustration"/>  
                  </div>
                  
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden lg:h-6 lg:text-sm lg:font-mono lg:text-gray-300 lg:font-semibold">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-end text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-xs p-1 font-bold font-sans text-gray-200 hover:text-yellow-400 hover:border-b hover: border-yellow-400 sm:p-4  md:text-xl md:leading-16 md:hover:bg-indigo-900 md: md:border md:mr-5 md:bordr-red-500 lg:border-none lg:text-2xl lg:text-1xl xl:text-2xl dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
export default LayoutWrapper