import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import blogs from '../data/blogs.json';
import styles from './BlogList.module.css';

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
          fetched.push(data)
          idx++;

          if (idx === postCount - 1) {
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
      <div className="post-entry-2 d-flex" key={index}>
        { /* <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div> */ }
        <div className="contents order-md-1 pl-0">
          <h2 className={styles.blogTitle}><a href={blogPost.link}>{blogPost.title}</a></h2>
          <p className="mb-3">{blogPost.preview}</p>
          <div className="post-meta">
            <span className={styles.date}>
              {blogPost.date}
              <span className={styles.read + " mx-1"}>
                {blogPost.readTime}
              </span>
            </span>
          </div>
        </div>
      </div>
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
