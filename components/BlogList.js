import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import dataset from '../data/blogs.json';
import styles from './BlogList.module.css';

export default function BlogList() {
  const perPage = 4;
  const pageCount = Math.ceil(dataset.length/perPage);

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    let currentPosts = getPaginatedItems(dataset, 0);
    setBlogPosts(currentPosts)
  }, []);

  let posts = blogPosts.map((blogPost, index) => {
    return (
      <div className="post-entry-2 d-flex" key={index}>
        { /* <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div> */ }
        <div className="contents order-md-1 pl-0">
          <h2 className={styles.blogTitle}><a href="blog-single.html">{blogPost.title}</a></h2>
          <p className="mb-3">{blogPost.preview}</p>
          <div className="post-meta">
            <span className={styles.dateRead}>{blogPost.date}</span>
          </div>
        </div>
      </div>
    )
  });

  function getPaginatedItems(items, offset) {
    return items.slice(offset, offset + perPage);
  }

  function handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);

    const currentPosts = getPaginatedItems(dataset, offset);
    setBlogPosts(currentPosts)
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
