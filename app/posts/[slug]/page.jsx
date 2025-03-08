import { getPostBySlug } from '@/lib/posts'

const Page = async ({ params }) => {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug)

  return (
    <section className='py-24'>
      <div className='container'>
        <div className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='text-sm uppercase text-gray-600'>
            By {frontmatter.author}
          </p>
        </div>
        <div className='prose mt-12'>{content}</div>
      </div>
    </section>
  )
}

export default Page
