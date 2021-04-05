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
  <div className="site-section subscribe bg-light">
    <div className="container">
      <form className="row align-items-center" method="post" id='newsletter' name='newsletter' onSubmit={handleSubmit(onSubmit)} data-netlify='true' netlify-honeypot="bot-field">
        <input hidden name="form-name" defaultValue="newsletter" {...register("form-name")}/>
        <div className="col-md-5 mr-auto">
          <h2>Newsletter Subscribe</h2>
          <p>This doesn't exist yet, but when it does, I promise it'll be full of good things. Subscribe to let me know you're interested so I know I should prioritize this!</p>
        </div>
        <div className="col-md-6 ml-auto">
          <div className="d-flex">
            <p className="hidden" hidden>
              <label>Don’t fill this out if you’re human: <input name="bot-field" {...register("bot-field")}/></label>
            </p>
            <input type="email" className="form-control" placeholder="Enter your email" {...register("email")}/>
            <button type="submit" className="btn btn-secondary" ><span className="icon-paper-plane"></span></button>
          </div>
        </div>
        <div>
          { submitted && <p>Submitted! Thank you!</p>}
        </div>
      </form>
    </div>
  </div>
  )
}
