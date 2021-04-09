import parse from 'html-react-parser';

export default function ResourcePostHeader(props) {
  return (
    <div className={`blogPostHeader centered`}>
      <h6 className={`centered`}>{parse(props.title)}</h6>
      <p className="date centered">
        <strong>Last updated at:&nbsp;</strong>
        {new Date(props.date).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})}
        <span className="readTime mx-1">
          {props.readTime}
        </span>
      </p>
      <style jsx>{`
      .readTime {
        color: #69665b;
      }
      .date{
        color: #32312d;
        font-family: Prata;
        font-size: x-small;
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
