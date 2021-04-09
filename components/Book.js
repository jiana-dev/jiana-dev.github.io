import Card from 'react-bootstrap/Card';
import styles from './Book.module.css';

export default function Book(props) {
  return (
    <>
      <Card className={`${styles.bookCard} p-1 m-4`}>
        <Card.Body>
          <Card.Title className={`${styles.bookTitle} pt-1 mb-1`}>
            <a href={props.url}>{props.title}</a>
          </Card.Title>
          <Card.Subtitle className={`${styles.bookAuthor} mb-2 text-muted caption`}>{props.author}</Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
