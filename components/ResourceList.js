import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import resources from '../data/learning_resources.json';
import styles from './BlogList.module.css';
import BlogPostPreview from './BlogPostPreview';
import { useRouter } from 'next/router'

export default function ResourceList(props) {
  const router = useRouter()
  const perPage = 4;

  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [learnPosts, setLearnPosts] = useState([]);
  const [pageCount, setPageCount] = useState(Math.ceil(resources.posts.length/perPage));
  const [currentPage, setCurrentPage] = useState(props.page);

  useEffect(() => {
    let postCount = resources.posts.length
    let idx = 0
    let fetched = []

    setCurrentPage(props.page);
    // Is there a better solution than this? I kinda hate this
    resources.posts.map(async(filename) => {
      await fetch(`../data/resources/${filename}.json`)
        .then(response => response.json())
        .then(data => {
          data['date'] = new Date(data['date']).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})
          fetched.push(data)
          idx++;

          if (fetched.length === postCount) {
            fetched.sort(function(a,b){
              return Date.parse(b.date) - Date.parse(a.date)
            })
            setFetchedPosts(fetched);
            setPaginatedItems(fetched, props.page * perPage);
          }
        })
    });
  }, [props.page]);

  let posts = learnPosts.map((blogPost, index) => {
    return (
      <BlogPostPreview key={index} index={index} blogPost={blogPost} lastUpdated={true}/>
    )
  });

  function setPaginatedItems(items, offset) {
    setLearnPosts(items.slice(offset, offset + perPage));
  }

  function handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);

    let pageNum = selected + 1
    router.push('/resources/' + pageNum, undefined, { shallow: true })
    setPaginatedItems(fetchedPosts, offset);
    setCurrentPage(selected);
  };

  return (
    <>
      <div className={styles.blogPagination}>
        { posts }
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
