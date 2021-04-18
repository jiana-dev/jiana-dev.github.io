import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';
import Icons from './Icons.js';

export default function Header({authProps, activePage}) {
  return (
  <div className={`site-wrap`}>
    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <>
        <div className="site-mobile-menu-body">
        </div>
        <Icons class='mobile-menu-icons'/>
      </>
    </div>
    <div className={`header-top`}>
      <HeaderTop authProps={authProps}/>
      <HeaderNav activePage={activePage}/>
    </div>
  </div>
  )
}
