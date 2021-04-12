import styles from './Header.module.css';
import Icons from './Icons.js';

import LoginComponent from './LoginComponent';

export default function HeaderTop(props) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 d-flex">
          <a href="/" className={styles.siteLogo}>
            <img src='/../site-logo.png' className='logo'/>
          </a>
          <div className="ml-auto d-flex align-items-center">
            <Icons class="ml-md-auto top-social d-none d-lg-inline-block"/>
            <LoginComponent/>
          </div>
          <a href="#" className="ml-auto d-lg-none site-menu-toggle js-menu-toggle"><span className="icon-book h3"></span></a>
        </div>
      </div>
      <style jsx>{`
      .logo {
        width: 40%;
      }
      .container {
        padding: 1em var(--default-padding);
        background-color: var(--header-color);
      }

      .site-menu-toggle {
        display: flex;
        align-items: center;
      }
      .icon-book {
        font-size: large;
      }
      `}</style>
    </div>
  )
}
