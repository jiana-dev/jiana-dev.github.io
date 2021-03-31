import styles from './HeaderNav.module.css';

export default function HeaderNav() {
  return (
    <div className={styles.nav + " site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"} role="banner">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="mr-auto">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li className="active">
                  <a href="/" className="nav-link text-left">Home</a>
                </li>
                <li>
                  <a href="/blog" className="nav-link text-left">Blog</a>
                </li>
                <li>
                  <a href="/code" className="nav-link text-left">Code</a>
                </li>
                <li>
                  <a href="/learn" className="nav-link text-left">Learn</a>
                </li>
                <li>
                  <a href="/podcast" className="nav-link text-left">Podcast</a>
                </li>
                <li>
                  <a href="/youtube" className="nav-link text-left">Youtube</a>
                </li>
                <li>
                  <a href="/contact" className="nav-link text-left">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
