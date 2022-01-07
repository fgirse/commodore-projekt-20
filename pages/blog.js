import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { Heading2 } from '@/components/Headings/Heading2.styles'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog() {
  return (
    <>
    <section className='mx-auto bg-gray-700 w-11/12 h-1/21 '>
        <Heading2>Rettungsanker Blog</Heading2>
        <div className='text-3xl text-gray-100'>
          <h2 className='p-12'>Willkommen in unserem Blog des Rettungsanker Freiburg. Registrieren Sie sich mit email-Adresse und Passwort um am Blog teilzunehmen. Mit Ihrer Anmeldung erkennen Sie die rechtlichen Rahmenbedingungen des Rettungsanker-Freiburg an.   </h2>
        </div>
        <div className='-mt-60 mx-auto flex flex-col items-center justify-center w-8/12 min-h-screen'>
              <iframe className='w-full h-3/3 bg-gray-200 border border-white' name="cpo_Table_Contacts Web Form" title="cpo_Table_Contacts Web Form" height="150vh" src="https://c1dca991.caspio.com/dp/f8aca00069f86174e88f482cb0fb">Sorry, but your browser does not support frames.</iframe>
         </div>

    </section>
       
              
         
      
    </>
  )
}
