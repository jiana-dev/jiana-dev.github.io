import { Layout, ResourcePostHeader, Book } from '../components';
import styles from '../components/BlogPost.module.css';

export default function Library({ library, meta, folder, children }) {
  let books = library.map((book) => {
    const {
      link,
      module: { 
        meta: {
          title, author, description, topPick
        }
      },
    } = book
    return (
      <Book
        title={title}
        author={author}
        description={description}
        url={`/resources/${folder}${link}`}
        topPick={topPick}
        key={link}
      />
    )
  })

  const bookshelf =
    <div className={styles.postContent}>
      <div className='bookshelf'>
        { books }
      </div>
      <style jsx>{`
        .bookshelf {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>

  let pageContent = 
    <>
      <ResourcePostHeader title={meta.title} date={meta.date} readTime={meta.readTime} subtitle={meta.subtitle}/>
      { bookshelf }
    </>

  return (
    <Layout pageTitle='she reads sometimes' activePage='resources' children={pageContent} classes='nopadding'/>
  )
}

