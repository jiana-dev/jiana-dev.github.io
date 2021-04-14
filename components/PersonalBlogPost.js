import { MDXProvider } from '@mdx-js/react'
import { Layout, LoginForContentButton, BlogPostHeader } from '../components'
import netlifyAuth from '../lib/netlifyAuth';

export default function PersonalBlogPost({ children, meta}) {
  let authContent = netlifyAuth.isAuthenticated ? (
    <div className="container">
      <BlogPostHeader title={meta.title} date={meta.date} readTime={meta.readTime} subtitle={meta.subtitle}/>
      <article className='post-data'>{children}</article>
    </div>
  ) : (
    <div className="container">
      <div className='authContent'>
        <BlogPostHeader title={meta.title} date={meta.date} readTime={meta.readTime} subtitle={meta.subtitle}/>
      </div>
      <LoginForContentButton/>
    </div>
  )

  const components = {
    img: ({ src, alt }) => <ImageWithCaption src={`/images/${meta.imageFolder}/${src}`} alt={alt}/>
  }

  let kids =
    <MDXProvider components={components}>
      {authContent}
      <style jsx>{`
      .container {
        padding: 0em 10em;
      }
      @media (max-width: 600px) {
        .container { padding: 0 2em 0em 2em; }
      }
      .post-data {
        margin-bottom: 5em;
      }
      `}</style>
    </MDXProvider>

  return (
     <Layout pageTitle={meta.title} children={kids}/>
  )
}

