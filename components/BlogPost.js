import { MDXProvider } from '@mdx-js/react'
import { Layout, ImageWithCaption, BlogPostPreview, BlogPostHeader } from '../components'

export default function BlogPost({ children, meta }) {
  const components = {
    img: ({ src, alt }) => <ImageWithCaption src={`/images/${meta.imageFolder}/${src}`} alt={alt}/>,
    h2: ({ children }) => <p className='caption pt-5 pb-2'>{children}<style jsx>{`.caption {
        font-family: 'DM Sans';
        font-size: x-large;
        font-weight: 500;
      }`}</style></p>
  }

  let kids =
    <MDXProvider components={components}>
      <BlogPostHeader title={meta.title} date={meta.date} readTime={meta.readTime} subtitle={meta.subtitle}/>
      <article>{children}</article>
    </MDXProvider>

  return (
     <Layout pageTitle={meta.title} children={kids}/>
  )
}

