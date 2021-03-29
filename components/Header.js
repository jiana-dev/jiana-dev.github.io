import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
  <div className="site-wrap">
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
    <div className="header-top">
      <HeaderTop/>
      <HeaderNav/>
    </div>
  </div>
  )
}
