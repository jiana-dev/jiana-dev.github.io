import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('contact');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }

  return (
    <div className="container">
      <HeadTag pagetitle='Contact'/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title mb-5">
                  <h2>Contact Us</h2>
                </div>
                <form method="post" id='contact' name='contact' onSubmit={handleSubmit} data-netlify='true'>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" className="form-control form-control-lg"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" className="form-control form-control-lg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="eaddress">Email Address</label>
                            <input type="text" id="eaddress" className="form-control form-control-lg"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="tel">Tel. Number</label>
                            <input type="text" id="tel" className="form-control form-control-lg"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row" hidden>
                        <div className="col-md-12 form-group">
                            <label htmlFor="subject">Subject</label>
                            <textarea name="" id="subject" cols="30" rows="10" className="form-control"></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                        </div>
                    </div>
                </form>
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
