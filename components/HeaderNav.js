import styles from './HeaderNav.module.css';

export default function HeaderNav() {
  return (
    <div className={styles.nav + " site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"} role="banner">
      <div className="container">
        <div className="d-flex align-items-center">
          <nav className="site-navigation position-relative" role="navigation">
            <ul className="site-menu main-menu js-clone-nav mr-auto pl-0">
              <li className="active">
                <a href="/" className="nav-link text-left">Home</a>
              </li>
              <li>
                <a href="/blog" className="nav-link text-left">Blog</a>
              </li>
              <li>
                <a href="/learn" className="nav-link text-left">Learn</a>
              </li>
              <li>
                <a href="/podcasts" className="nav-link text-left">Podcasts</a>
              </li>
              <li>
                <a href="/contact" className="nav-link text-left">Contact</a>
              </li>
            </ul>
          </nav>
          <style jsx>{`
          .site-navigation {
            width: 100%;
          }
          .site-menu {
            display: inline-flex;
            width: 100%;
            justify-content: space-evenly;
          }
        `}</style>
        </div>
      </div>
    </div>
  )
}
