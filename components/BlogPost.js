import { MDXProvider } from '@mdx-js/react'
import { Layout, ImageWithCaption, BlogPostPreview, BlogPostHeader } from '../components'

export default function BlogPost({ children, meta}) {
  const components = {
    img: ({ src, alt }) => <ImageWithCaption src={`/images/${meta.imageFolder}/${src}`} alt={alt}/>
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

