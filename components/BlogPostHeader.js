import parse from 'html-react-parser';

export default function BlogPostHeader(props) {
  console.log(props.subtitle);
  console.log(parse(props.subtitle));
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{parse(props.subtitle)}</h3>
      <div className="post-meta d-flex mb-5">
        <div className="vcard">
          <span className="date">
            {new Date(props.date).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})}
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
