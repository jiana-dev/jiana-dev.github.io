import Card from 'react-bootstrap/Card';
import styles from './Book.module.css';
import parse from 'html-react-parser';

export default function Book({title, author, description, url, topPick}) {
  return (
    <>
      <Card className={`${styles.bookCard} ${topPick && styles.topPick} p-1 m-4`}>
        <Card.Body>
          <div className={`${topPick && styles.headerHolder}`}>
            <div>
              <Card.Title className={`${styles.bookTitle} pt-1 mb-1`}>
                <a href={url}>{title}</a>
              </Card.Title>
              <Card.Subtitle className={`${styles.bookAuthor} mb-2 text-muted caption`}>{author}</Card.Subtitle>
            </div>
            {topPick && <Card.Subtitle className={`${styles.topPickTitle} mb-2 caption`}>Top pick!</Card.Subtitle>}
          </div>
          <Card.Text>
            {parse(description)}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
