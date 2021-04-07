import styles from './Header.module.css';
import Icons from './Icons.js';

export default function HeaderTop() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 d-flex">
          <a href="/" className={styles.siteLogo}>
            JIANA
          </a>
          <div className="ml-auto d-flex">
            <Icons class="ml-md-auto top-social d-none d-lg-inline-block"/>
          </div>
          <a href="#" className="ml-auto d-lg-none site-menu-toggle js-menu-toggle"><span className="icon-book h3"></span></a>
        </div>
      </div>
      <style jsx>{`
      @media (min-width: 992px) {
        .container {
          padding: 1em 5em 1em 5em;
        }
      }

      @media (max-width: 992px) {
        .container {
          padding: 1em 3em 1em 3em;
        }
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
