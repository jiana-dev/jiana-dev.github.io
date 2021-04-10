import Card from 'react-bootstrap/Card';
import styles from './Book.module.css';
import parse from 'html-react-parser';

export default function Book(props) {
  console.log(props)
  return (
    <>
      <Card className={`${styles.bookCard} ${props.topPick && styles.topPick} p-1 m-4`}>
        <Card.Body>
          <div className={`${props.topPick && styles.headerHolder}`}>
            <div>
              <Card.Title className={`${styles.bookTitle} pt-1 mb-1`}>
                <a href={props.url}>{props.title}</a>
              </Card.Title>
              <Card.Subtitle className={`${styles.bookAuthor} mb-2 text-muted caption`}>{props.author}</Card.Subtitle>
            </div>
            {props.topPick && <Card.Subtitle className={`${styles.topPickTitle} mb-2 caption`}>Top pick!</Card.Subtitle>}
          </div>
          <Card.Text>
            {parse(props.description)}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
