import parse from 'html-react-parser';

export default function ResourcePostHeader(props) {
  let dateText = undefined

  if (props.date !== undefined) {
    dateText = <p className="date centered">
                <strong>Last updated at:&nbsp;</strong>
                {new Date(props.date).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})}
                <style jsx>{`
                .date{
                  color: #32312d;
                  font-family: Prata;
                  font-size: small;
                }
                .centered {
                  align-self: center;
                }
              `}</style>
              </p>
  }

  return (
    <div className={`blogPostHeader centered`}>
      <h2 className={`centered pb-0`}>{parse(props.title)}</h2>
      { props.subtitle && <h5 className={`subtitle centered p-0`}>{parse(props.subtitle)}</h5>}
      { props.author && <h5 className={`subtitle centered p-0`}>by {parse(props.author)}</h5>}
      { dateText }
      <style jsx>{`
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
        justify-content: center;
      }
      .subtitle {
        font-size: larger;
        font-weight: 600;
      }
      h1 {
        padding-bottom: 0;
      }
    `}</style>
    </div>
  )
}
