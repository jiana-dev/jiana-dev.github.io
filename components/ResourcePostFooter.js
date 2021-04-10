export default function ResourcePostFooter(props) {
  return (
    <div className={`blogPostHeader centered`}>
      <p className="date centered">
        <strong>Last updated at:&nbsp;</strong>
        {new Date(props.date).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})}
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
