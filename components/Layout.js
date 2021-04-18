import { HeadTag, Header, SubscribeSection, Loader, Footer } from '../components';

export default function Layout({ children, pageTitle, activePage, classes, authProps }) {
  return (
    <>
      <HeadTag pageTitle={pageTitle}/>
      <Header activePage={activePage} authProps={authProps}/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className={`site-section ${classes}`}>
          <div className="container">
            {children}
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </>
  );
}
