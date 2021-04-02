import styles from './BlogList.module.css';

export default function BlogPostPreview(props) {
  return (
      <div className="post-entry-2 d-flex" key={props.index}>
        { /* <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div> */ }
        <div className="contents order-md-1 pl-0">
          <h2 className={styles.blogTitle}><a href={props.blogPost.link}>{props.blogPost.title}</a></h2>
          <p className="mb-3">{props.blogPost.preview}</p>
          <div className="post-meta">
            <span className={styles.date}>
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
