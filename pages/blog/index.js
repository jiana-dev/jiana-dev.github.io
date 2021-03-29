import Head from 'next/head'

import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>JIANA</title>
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/jquery.countdown.min.js"></script>
        <script src="js/bootstrap-datepicker.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.fancybox.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/main.js"></script>
      </Head>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="section-title">
                  <span className="caption d-block small">Categories</span>
                  <h2>Politics</h2>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="section-title">
                  <h2>Popular Posts</h2>
                </div>

                <div className="trend-entry d-flex">
                  <div className="number align-self-start">01</div>
                  <div className="trend-contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="trend-entry d-flex">
                  <div className="number align-self-start">02</div>
                  <div className="trend-contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="trend-entry d-flex">
                  <div className="number align-self-start">03</div>
                  <div className="trend-contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="trend-entry d-flex pl-0">
                  <div className="number align-self-start">04</div>
                  <div className="trend-contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
                
                <p>
                  <a href="#" className="more">See All Popular <span className="icon-keyboard_arrow_right"></span></a>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <ul className="custom-pagination list-unstyled">
                  <li><a href="#">1</a></li>
                  <li className="active">2</li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </div>
  )
}
