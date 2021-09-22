import styles from '../../components/PodcastPage.module.css';

import React, { useState, useEffect } from 'react';
import { Layout } from '../../components';
import { useRouter } from 'next/router'; // unused
import { useForm } from "react-hook-form";
import Card from 'react-bootstrap/Card';

export default function Contact(props) {
  const router = useRouter()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  let children =
    <>
      <div className="d-block d-lg-flex flex-column justify-content-center">
        <h2>Developer Career Coaching Program</h2>
        <p>
          The career world as a developer can be <strong>daunting</strong>, I've been there. <em>Heck, I'm still there</em>. I went from a junior not knowing anything of anything to a senior, pretending to know more than I think I do. I've been navigating being a Software Engineer for three years, one year of which I spent as a manager, and along the way, I'd like to think I picked up some pretty cool things to share.</p>
        <p>Imposter syndrome, <em>I feel you</em>. Tech interviews? <em>I've been there.</em> General anxiety about where you are, where to go, and how to get better? <em>You're preaching to the choir.</em>
        </p>


        <p style={{paddingBottom: '2rem'}}><strong>I would love to help you get to where you want to be</strong>, wherever that is (or help you figure it out if you haven't already). Or we can just chat, but either way, let's get started!</p>
      </div>
      <div className="calendly-inline-widget" data-url="https://calendly.com/jiana?hide_landing_page_details=1&hide_gdpr_banner=1" style={{minWidth:"320px", height:"630px"}}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      <p style={{paddingTop: '2rem'}}>If after our initial consultation, you think we're a good fit, we can look into doing paid 1-hour career coaching sessions. More details will be sent after initial call.</p>
    </>

  return (
    <Layout pageTitle={`she wants to be your coach!`} activePage='coaching' children={children}/>
  )
}
