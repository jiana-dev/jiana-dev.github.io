import { Layout } from '../../components';
import styles from '../../components/PodcastPage.module.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Podcasts(props) {
  let pageContent = 
    <>
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
    </>

  return (
    <Layout pageTitle='she talks a lot' activePage='podcasts' children={pageContent} classes='nopadding'/>
  )
}
