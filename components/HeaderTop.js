import styles from './Header.module.css';
import Icons from './Icons.js';

export default function HeaderTop() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 d-flex">
          <a href="/" className={styles.siteLogo}>
            JIANA
          </a>
          <div className="col-12 col-lg-6 ml-auto d-flex">
            <Icons class="ml-md-auto top-social d-none d-lg-inline-block"/>
          </div>
          <a href="#" className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
              className="icon-menu h3"></span></a>
        </div>
      </div>
    </div>
  )
}
