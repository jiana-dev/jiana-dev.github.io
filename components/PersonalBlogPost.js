import { MDXProvider } from '@mdx-js/react'
import { Layout, LoginForContentButton, BlogPostHeader, LoremIpsum } from '../components'
import netlifyIdentity from 'netlify-identity-widget';
import { useEffect, useState } from 'react'

export default function PersonalBlogPost({ children, meta}) {
  const [user, setUser] = useState(netlifyIdentity.currentUser());

  useEffect(() => {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.init();
    setUser(netlifyIdentity.currentUser());
  }, [])

  let authContent = user !== null ? (
    <div className="container">
      <BlogPostHeader title={meta.title} date={meta.date} readTime={meta.readTime} subtitle={meta.subtitle}/>
      <article className='post-data'>{children}</article>
    </div>
  ) : (
    <div className="container">
      <div className='authContent'>
        <BlogPostHeader title={meta.title} date={meta.date} readTime={meta.readTime} subtitle={meta.subtitle}/>
        <LoremIpsum/>
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

