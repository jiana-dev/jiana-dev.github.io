import dateFormat from 'dateformat';

export default function ResourcePostFooter(props) {
  return (
    <div className={`blogPostHeader centered`}>
      <p className="date centered">
        <strong>Last updated at:&nbsp;</strong>
        {dateFormat(props.blogPost.date, "dddd, mmmm dS, yyyy, h:MM TT")}
      </p>
      <style jsx>{`
        .blogPostHeader.centered {
          display: flex;
          flex-direction: column;
          margin-bottom: 2em;
        }
        .centered {
          align-self: center;
        }
        p {
          font-size: small;
        }
      `}</style>
    </div>
  )
}
