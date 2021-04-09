import styles from '../../components/PodcastPage.module.css';

import HeadTag from '../../components/HeadTag';
import Header from '../../components/Header';
import SubscribeSection from '../../components/Subscribe';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Podcasts() {
  return (
    <>
      <HeadTag pageTitle="Jiana's Other Internet Dwellings"/>
      <Header activePage='podcasts'/>
      <div className='body' data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <span className='caption d-block medium'>More places I blab away on the internet</span>
              </div>
            </div>
            <div className="row">
              <style type="text/css">
                {`
                .card {
                  width: 19rem;
                  margin: 2em;
                }
                `}
              </style>
              <Card>
                <Card.Img variant="top" src="../images/podcasts/devinprogressicon.png" />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>Dev In Progress</Card.Title>
                  <Card.Text className={styles.cardText}>
                    I give a technical sprinkle to my wide array of interests and lessons learned in hopes that you can find this content useful, helpful, or relatable.
                  </Card.Text>
                  <div className='button-holder'>
                    <Button className={styles.buttonLink} variant="primary">
                      <a href='https://anchor.fm/jianajavier'>Let's Talk Kinda-Tech</a>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="../images/podcasts/onestepahead.png" />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>One Step Ahead</Card.Title>
                  <Card.Text className={styles.cardText}>
                    My best friend and I talk milestones, lessons, relationships, and try to give our best advice on navigating life as people who may only just be one step ahead.
                  </Card.Text>
                  <div className='button-holder'>
                    <Button className={styles.buttonLink} variant="primary">
                      <a href='https://anchor.fm/one-step-ahead-podcast'>Let's Get Personal</a>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <style jsx>{`
            .row {
              justify-content: center;
            }
            .button-holder {
              justify-content: center;
              display: flex;
            }
            .caption {
              font-size: large;
              color: #afaaa0;
            }
          `}</style>
          </div>
        </div>
      </div>
      <SubscribeSection/>
      <Loader/>
      <Footer/>
    </>
  )
}
