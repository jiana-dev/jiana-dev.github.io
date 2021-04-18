import styles from './Header.module.css';
import Icons from './Icons.js';

import LoginComponent from './LoginComponent';

export default function HeaderTop() {
  return (
    <div className="container">
      <div className="row align-items-center flex-nowrap">
        <a href="/" className={styles.siteLogo}>
          <img src='/../site-logo.png' className='logo'/>
        </a>
        <div className='d-flex align-items-center'>
          <Icons class="ml-md-auto top-social d-none d-lg-inline-block"/>
          <LoginComponent/>
          <a href="#" className="d-lg-none site-menu-toggle js-menu-toggle pl-3"><span className="icon-book h3"></span></a>
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
      .row {
        justify-content: space-between;
      }
      `}</style>
    </div>
  )
}
