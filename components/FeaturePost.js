export default function FeaturePost() {
  return (
  <div className="site-section">
    <div className="container">
      <div className="half-post-entry d-block d-lg-flex bg-light">
        <div className="img-bg" style={{ backgroundImage: `url('images/me.png')`}}></div>
        <div className="contents">
          <p className="caption">Oh hey there, friends of Earth!</p>
          <p className="mb-3 intro">Thank you for visiting! I'm just a girl who (<i>please insert <em>sometimes</em> before all verbs</i>) builds things, journals, makes videos, plays music, learns, and is constantly trying to figure it all out.</p>
          <p className="mb-3 intro">I originally thought my purpose was to share my peculiarly particular way of doing things with others in hopes that someone somewhere will relate or find it useful. Although that might be one of my purposes, to be honest, I haven't figured it all out. I'm a constant work in progress in all aspects of my life so I'm not going to pretend I know exactly what I'm doing with this blog, or my channel, or anything for that matter.</p>
          <p className="mb-3 intro">What I do know, is that I plan to keep creating content that makes me happy, and that I hope you'll find relatable, useful, and/or inspiring. With all that said, I hope you'll still give me the pleasure of joining me along this journey.</p>
          <style jsx>{`
          .intro {
            font-size: small;
          }
        `}</style>
        </div>
      </div>
    </div>
  </div>
  )
}
