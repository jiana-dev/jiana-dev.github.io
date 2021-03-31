export default function BlogPostHeader(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="post-meta d-flex mb-5">
        <div className="vcard">
          <span className="date">
            {props.date}
            <span className="readTime mx-1">
              {props.readTime}
            </span>
            <style jsx>{`
            .readTime {
              color: #69665b;
            }
            .date{
              color: #32312d;
            }
          `}</style>
          </span>
        </div>
      </div>
    </div>
  )
}
