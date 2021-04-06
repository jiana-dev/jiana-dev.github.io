import React, { useState, useEffect } from 'react';
import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'; // unused
import { useForm } from "react-hook-form";

export default function Contact() {
  const router = useRouter()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    }).then(() => {
      setSubmitted(true)
      reset()
  }).catch((error) =>
      alert(error))
  }

  return (
    <>
      <HeadTag pagetitle='JIANA - Contact'/>
      <Header/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title mb-5">
                  <h2>Contact Us</h2>
                </div>
                <form method="post" id='contact' name='contact' onSubmit={handleSubmit(onSubmit)} data-netlify='true' netlify-honeypot="bot-field">
                    <input hidden name="form-name" defaultValue="contact" {...register("form-name")}/>
                    <p className="hidden" hidden>
                      <label>Don’t fill this out if you’re human: <input name="bot-field" {...register("bot-field")}/></label>
                    </p>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" className="form-control form-control-lg" {...register("first_name")}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" className="form-control form-control-lg" {...register("last_name")}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label htmlFor="eaddress">Email Address</label>
                            <input type="text" id="eaddress" className="form-control form-control-lg" {...register("email_address")}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="" id="message" cols="30" rows="10" className="form-control" {...register("message")}></textarea>
                        </div>
                    </div>
                    <div className="row" hidden>
                        <div className="col-md-12 form-group">
                            <label htmlFor="subject">Subject</label>
                            <textarea name="" id="subject" cols="30" rows="10" className="form-control" {...register("subject")}></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                        </div>
                    </div>
                    <div className="row">
                      { submitted && <p>Submitted! Thank you!</p>}
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
    </>
  )
}
