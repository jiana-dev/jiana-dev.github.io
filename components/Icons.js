export default function Icons(props) {
  return (
    <div className={props.class}>
      <a href="https://www.youtube.com/jianajavier" className="d-inline-block p-3"><span className="icon-youtube-play"></span></a>
      <a href="https://twitter.com/devasdraft" className="d-inline-block p-3"><span className="icon-twitter"></span></a>
      <a href="https://open.spotify.com/show/40nhZFMSgYYfpXjQ1K3q8j" className="d-inline-block p-3"><span className="icon-podcast"></span></a>
      <a href="https://github.com/jianajavier" className="d-inline-block p-3"><span className="icon-github"></span></a>
      <style jsx>{`
      .mobile-menu-icons {
        width: max-content;
        padding-left: 1em;
      }
      `}</style>
    </div>
  )
}
