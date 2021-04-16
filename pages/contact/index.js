import styles from '../../components/PodcastPage.module.css';

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

  let submitArea =
  <div className={`row submitArea`}>
    { submitted && <div className='submittedMessage'><p className='caption'>Submitted! Thank you. It's greatly appreciated.</p></div>}
    { !submitted && <input type="submit" value="Send Message" className={styles.buttonLink}/> }
    <style jsx>{`
    .row.submitArea {
      padding: 1em 15px 2em 15px;
    }
    [type=submit] {
      padding: 1em 0 1em 0em;
      border-radius: 30px;
      font-size: small;
      font-weight: 600;
      letter-spacing: .1rem;
      text-transform: uppercase;
      color: #fff;
    }
    .submittedMessage {
      display: flex;
      justify-content: center;
      width: 100%;
      border-radius: 30px;
      background-color: #e0d4c2;
      padding: 1em;
    }
    .submittedMessage p {
      margin-bottom: 0;
      font-weight: 600;
    }
    `}</style>
  </div>
  
  return (
    <>
      <HeadTag pageTitle="she is sometimes social"/>
      <Header activePage='contact'/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className='caption'>Let's Chat</h2>
                  <style jsx>{`
                  .section-title {
                    padding: 0em 15px;
                    margin: 1em 0 1em 0;
                  }
                  `}</style>
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
                    {submitArea}

                    <style jsx>{`
                    label {
                      color: #6a675d;
                      font-size: small;
                      letter-spacing: .1rem;
                      text-transform: uppercase;
                    }
                    input[type=text] {
                      font-family: 'B612 Mono';
                      font-size: small;
                      border: 1px solid rgb(236 212 212 / 50%);
                    }
                    textarea {
                      font-family: 'B612 Mono';
                      font-size: small;
                      border: 1px solid rgb(236 212 212 / 50%);
                    }
                    `}</style>
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
