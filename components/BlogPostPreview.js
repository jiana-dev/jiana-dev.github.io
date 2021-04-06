import Link from 'next/link'
import styles from './BlogList.module.css';
import parse from 'html-react-parser';

export default function BlogPostPreview(props) {
  let blogTitle;
  if (props.blogPost.subtitle) {
    let parsedTitle = parse(props.blogPost.subtitle);
    blogTitle = <a href={props.blogPost.link}>{props.blogPost.title} - {parsedTitle}</a>
  } else {
    blogTitle = <a href={props.blogPost.link}>{props.blogPost.title}</a>
  }

  return (
      <div className="post-entry-2 d-flex" key={props.index}>
        { /* <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div> */ }
        <div className="contents order-md-1 pl-0">
          <h2 className={styles.blogTitle}>
            {blogTitle}
          </h2>
          <p className="mb-3">{props.blogPost.preview}</p>
          <div className="post-meta">
            <span className={styles.date}>
              {props.lastUpdated && <span className={styles.updateLabel}>Updated at: </span>}
              {props.blogPost.date}
              <span className={styles.read + " mx-1"}>
                {props.blogPost.readTime}
              </span>
            </span>
          </div>
        </div>
      </div>
  )
}
