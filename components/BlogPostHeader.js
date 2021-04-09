import parse from 'html-react-parser';

export default function BlogPostHeader(props) {
  return (
    <div className={`blogPostHeader ${props.centered && 'centered'}`}>
      <h1 className={`${props.centered && 'centered'}`}>{parse(props.title)}</h1>
      {props.subtitle && <h3 className='caption'>{props.subtitle}</h3>}
      <div className={`${props.centered && 'centered'} post-meta d-flex mb-4`}>
        <div className="vcard">
          <span className="date">
            {new Date(props.date).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})}
            <span className="readTime mx-1">
              {props.readTime}
            </span>
          </span>
        </div>
      </div>
      <style jsx>{`
      .readTime {
        color: #69665b;
      }
      .date{
        color: #32312d;
        font-family: Prata;
      }
      .blogPostHeader {
        margin-bottom: 0;
      }
      .blogPostHeader.centered {
        display: flex;
        flex-direction: column;
      }
      .centered {
        align-self: center;
      }
      h1 {
        padding-bottom: 0;
      }
    `}</style>
    </div>
  )
}
