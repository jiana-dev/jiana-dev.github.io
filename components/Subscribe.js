import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

export default function SubscribeSection() {
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
  <div className="subscribe-section subscribe">
    <div className="container">
      <form className="row align-items-center" method="post" id='newsletter' name='newsletter' onSubmit={handleSubmit(onSubmit)} data-netlify='true' netlify-honeypot="bot-field">
        <input hidden name="form-name" defaultValue="newsletter" {...register("form-name")}/>
        <div className="newsletter-desc col-md-6 mr-auto">
          <h2>Newsletter Pre-Subscribe</h2>
          <p>This doesn't exist yet, but when it does, I promise it'll be full of good things.
          <br/>
          But please, subscribe to let me know you're interested!
          <br/>
          <span>(only if ya wanna, of course)</span></p>
          <style jsx>{`
            h2 {
              /*font-family: 'Playfair Display';*/
              font-size: medium;
              font-weight: 600;
            }
            span {
              color: #c7c7c7;
            }
          `}</style>
        </div>
        <div className="email-enter col-md-6 ml-auto">
          <div className="d-flex flex-column">
            <p className="hidden" hidden>
              <label>Don’t fill this out if you’re human: <input name="bot-field" {...register("bot-field")}/></label>
            </p>
            <div className="d-flex">
              <input type="email" className="form-control" placeholder="Enter your email" {...register("email")}/>
              <button type="submit" className="btn btn-secondary" ><span className="icon-paper-plane"></span></button>
            </div>
            <div className="d-flex justify-content-end">
              { submitted && <p className='submitted'>wow, i'm flattered, thank you so much</p>}
            </div>
            <style jsx>{`
              input {
                font-family: 'B612 Mono';
                font-size: small;
              }
              p.submitted {
                font-size: small;
                color: #9e927b;
              }
            `}</style>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}
