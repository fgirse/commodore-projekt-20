import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/SvgLogoNeu'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between bg-gray-800 h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="mx-auto ml-7 flex items-center justify-between">
                <div className="mr-3 flex flex-row justify-center items-center">
                  <Logo className="px-3" />
                  <div className="ml- 2 w-10">
                  <Image className="w- mx-auto mb-4 rounded-full" src="/phone-Illustration.png" layout="responsive" width="524" height="489" alt="Illustration"/>
                  </div>
                   
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className=" text-xs sx:text-sm h-6 md:text-2xl text-gray-300 font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden md:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-xl text-gray-100 hover:text-yellwow-500 sm:p-4 dark:text-gray-100 hover:border-b hover:border-yellow-500 md:text-indigo md:text-2xl lg:text-pink-400 2xl:text-1xl xl:text-green-400 xl:text-2xl 2xl:text-blue-400 2xl:text-3xl"
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