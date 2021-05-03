import styles from './BlogList.module.css';
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown'
import dateFormat from 'dateformat';
import netlifyIdentity from 'netlify-identity-widget';

export default function BlogPostPreview(props) {
  let notLoggedIn = netlifyIdentity.currentUser() === null
  let blogTitle;
  if (props.blogPost.subtitle) {
    let parsedTitle = parse(props.blogPost.title);
    blogTitle = <a href={props.disable && notLoggedIn ? '' : (props.blogPost.link || props.link)}>{parsedTitle} - {props.blogPost.subtitle}</a>
  } else {
    blogTitle = <a href={props.disable && notLoggedIn ? '' : (props.blogPost.link || props.link)}>{props.blogPost.title}</a>
  }
  return (
      <div className="post-entry-2 d-flex" key={props.index}>
        { /* <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div> */ }
        <div className="contents order-md-1 pl-0">
          <h2 className={styles.blogTitle + ' pb-0'}>
            {blogTitle}
          </h2>
          <ReactMarkdown className='preview'>
            {props.blogPost.preview}
          </ReactMarkdown>
          <style type="text/css">
            {`
            p {
              margin-bottom: 0.5rem;
            }
          `}</style>
          <div className="post-meta">
            <span className={styles.date}>
              {props.lastUpdated && <span className={styles.updateLabel}>Updated at: </span>}
              {dateFormat(props.blogPost.date, "dddd, mmmm dS, yyyy, h:MM TT")}
              <span className={styles.read + " mx-1"}>
                {props.blogPost.readTime}
              </span>
              {props.blogPost.tag &&
                <span className={styles.tags + " mx-1"}>
                  {props.blogPost.tag}
                </span>
              }
            </span>
          </div>
        </div>
      </div>
  )
}
