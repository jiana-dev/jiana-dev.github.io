import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

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

      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
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
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 d-flex">
                  <a href="index.html" className="site-logo">
                    Meranda
                  </a>
                  <a href="#" className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                      className="icon-menu h3"></span></a>
                </div>
                <div className="col-12 col-lg-6 ml-auto d-flex">
                  <div className="ml-md-auto top-social d-none d-lg-inline-block">
                    <a href="#" className="d-inline-block p-3"><span className="icon-facebook"></span></a>
                      <a href="#" className="d-inline-block p-3"><span className="icon-twitter"></span></a>
                      <a href="#" className="d-inline-block p-3"><span className="icon-instagram"></span></a>
                  </div>
                  <form action="#" className="search-form d-inline-block">

                    <div className="d-flex">
                      <input type="email" className="form-control" placeholder="Search..."/>
                      <button type="submit" className="btn btn-secondary" ><span className="icon-search"></span></button>
                    </div>
                  </form>
                </div>
                <div className="col-6 d-block d-lg-none text-right">
                </div>
              </div>
            </div>
            <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">
              <div className="container">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <nav className="site-navigation position-relative text-right" role="navigation">
                      <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                        <li className="active">
                          <a href="index.html" className="nav-link text-left">Home</a>
                        </li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Categories</a>
                        </li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Politics</a>
                        </li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Business</a>
                        </li>
                        <li>
                            <a href="categories.html" className="nav-link text-left">Health</a>
                        </li>
                        <li><a href="categories.html" className="nav-link text-left">Design</a></li>
                        <li>
                          <a href="categories.html" className="nav-link text-left">Sport</a>
                        </li>
                        <li><a href="contact.html" className="nav-link text-left">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section py-0">
          <div className="owl-carousel hero-slide owl-style">
            <div className="site-section">
              <div className="container">
                <div className="half-post-entry d-block d-lg-flex bg-light">
                  <div className="img-bg" style={{ backgroundImage: `url('images/big_img_1.jpg')`}}></div>
                  <div className="contents">
                    <span className="caption">Editor's Pick</span>
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-section">
              <div className="container">
                <div className="half-post-entry d-block d-lg-flex bg-light">
                  <div className="img-bg" style={{ backgroundImage: `url('images/big_img_1.jpg')`}}></div>
                  <div className="contents">
                    <span className="caption">Editor's Pick</span>
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title">
                      <h2>Editor's Pick</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="post-entry-1">
                      <a href="post-single.html"><img src="images/img_h_1.jpg" alt="Image" className="img-fluid"/></a>
                      <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div className="post-meta">
                        <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="post-entry-2 d-flex bg-light">
                      <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                      <div className="contents">
                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                        <div className="post-meta">
                          <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                          <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="post-entry-2 d-flex">
                      <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_2.jpg')`}}></div>
                      <div className="contents">
                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                        <div className="post-meta">
                          <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                          <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                        </div>
                      </div>
                    </div>
                    <div className="post-entry-2 d-flex">
                      <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_3.jpg')`}}></div>
                      <div className="contents">
                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                        <div className="post-meta">
                          <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                          <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="section-title">
                  <h2>Trending</h2>
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

                <div className="trend-entry d-flex">
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
                  <a href="#" className="more">See All Trends <span className="icon-keyboard_arrow_right"></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-0">
          <div className="container">
            <div className="half-post-entry d-block d-lg-flex bg-light">
              <div className="img-bg" style={{ backgroundImage: `url('images/big_img_1.jpg')`}}></div>
              <div className="contents">
                <span className="caption">Editor's Pick</span>
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Politics</h2>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_2.jpg')`}}></div>
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_3.jpg')`}}></div>
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>Business</h2>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_2.jpg')`}}></div>
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail" style={{ backgroundImage: `url('images/img_v_3.jpg')`}}></div>
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="section-title">
                  <h2>Recent News</h2>
                </div>
                <div className="post-entry-2 d-flex">
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_h_4.jpg')`}}></div>
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
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_h_3.jpg')`}}></div>
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
                  <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_h_3.jpg')`}}></div>
                  <div className="contents order-md-1 pl-0">
                    <span className="caption mb-4 d-block">Editor's Pick</span>
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

        <div className="site-section subscribe bg-light">
          <div className="container">
            <form action="#" className="row align-items-center">
              <div className="col-md-5 mr-auto">
                <h2>Newsletter Subcribe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
              </div>
              <div className="col-md-6 ml-auto">
                <div className="d-flex">
                  <input type="email" className="form-control" placeholder="Enter your email"/>
                  <button type="submit" className="btn btn-secondary" ><span className="icon-paper-plane"></span></button>
                </div>
              </div>
            </form>
          </div>
        </div>



        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright">
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#ff5e15"/></svg></div>
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

    </div>
  )
}
