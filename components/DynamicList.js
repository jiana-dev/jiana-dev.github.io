import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './BlogList.module.css';
import BlogPostPreview from './BlogPostPreview';
import { useRouter } from 'next/router'
import metadata from '../data/metadata.json';
import dateFormat from 'dateformat';

export default function DynamicList(props) {
  const router = useRouter()
  const perPage = metadata.perPage;
  const allPostsData = props.posts;

  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(Math.ceil(allPostsData.length/perPage));
  const [currentPage, setCurrentPage] = useState(props.page);

  useEffect(() => {
    let postCount = allPostsData.length
    let idx = 0
    let fetched = []

    setCurrentPage(props.page);
    setPaginatedItems(allPostsData, props.page * perPage)
  }, [props.page, props.posts]);

  function setPaginatedItems(items, offset) {
    setPosts(items.slice(offset, offset + perPage));
  }

  function handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);

    let pageNum = selected + 1
    router.push(`/${journal}/` + pageNum, undefined, { shallow: true })
    setPaginatedItems(allPostsData, offset);
    setCurrentPage(selected);
  }

  let displayedPosts = posts.map(({ id, title, date, preview, readTime }) => {
    let blogPost = {
      title: title,
      preview: preview,
      date: dateFormat(props.date, "dddd, mmmm dS, yyyy, h:MM TT"),
      readTime: readTime,
      link: `/${props.path}/${id}`
    }
    return <BlogPostPreview key={id} index={id} blogPost={blogPost}/>
  })

  return (
    <>
      <div className={styles.blogPagination}>
        { displayedPosts }
        <ReactPaginate previousLabel={"page.pre"}
              nextLabel={"page.next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={ handlePageClick }
              forcePage={currentPage}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"} />
      </div>
    </>
  )
}

