import Link from 'next/link'
import BlogPostPreview from './BlogPostPreview';

export default function Post({ post, folder, disable, loggedIn }) {
  const {
    link,
    module: { meta },
  } = post

  return (
      <article>
        <BlogPostPreview link={`${folder}${link}`} blogPost={meta} disable={disable}/>
      </article>
  )
}
