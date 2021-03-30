import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import dataset from '../data/blogs.json';

export default function BlogList() {
  const perPage = 10;
  const pageCount = Math.ceil(dataset.length/perPage);

  const [blogPosts, setBlogPosts] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let currentPosts = getPaginatedItems(dataset);
    setBlogPosts(currentPosts)
  }, []);

  let posts = blogPosts.map((blogPost, index) => {
    return (
      <div className="post-entry-2 d-flex" key={index}>
        <div className="thumbnail order-md-2" style={{ backgroundImage: `url('images/img_v_1.jpg')`}}></div>
        <div className="contents order-md-1 pl-0">
          <h2><a href="blog-single.html">{blogPost.username}</a></h2>
          <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
          <div className="post-meta">
            <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
            <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
          </div>
        </div>
      </div>
    )
  });

  function getPaginatedItems(items) {
    return items.slice(offset, offset + perPage);
  }

  function handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * perPage);

    setOffset(offset)

    const currentPosts = getPaginatedItems(dataset);
    setBlogPosts(currentPosts)
  };

  return (
    <div className="col-lg-9">
      <div className="section-title">
        <span className="caption d-block small">Categories</span>
        <h2>Politics</h2>
      </div>
      <div className='blogPagination'>
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
