import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import blogs from '../data/blogs.json';
import styles from './BlogList.module.css';
import BlogPostPreview from './BlogPostPreview';

export default function BlogList() {
  const perPage = 4;

  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [pageCount, setPageCount] = useState(Math.ceil(blogs.posts.length/perPage));

  useEffect(() => {
    let postCount = blogs.posts.length
    let idx = 0
    let fetched = []

    // Is there a better solution than this? I kinda hate this
    blogs.posts.map(async(filename) => {
      await fetch(`../data/blogs/${filename}.json`)
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
            setPaginatedItems(fetched, 0);
          }
        })
    });
  }, []);

  let posts = blogPosts.map((blogPost, index) => {
    return (
      <BlogPostPreview key={index} index={index} blogPost={blogPost}/>
    )
  });

  function setPaginatedItems(items, offset) {
    setBlogPosts(items.slice(offset, offset + perPage));
  }

  function handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);

    setPaginatedItems(fetchedPosts, offset);
  };

  return (
    <div className="col-lg-12">
      <div className={styles.sectionTitle}>
        <span className="caption d-block medium">Jiana's Corner of Random Rambles</span>
      </div>
      <div className={styles.blogPagination}>
        { posts }
        <ReactPaginate previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={ handlePageClick }
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"} />
      </div>
    </div>
  )
}
