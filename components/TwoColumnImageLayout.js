import React, { useState, useEffect } from 'react';
import { Post, BlogPostPreview } from '../components';
import dateFormat from 'dateformat';

// Refactor so this doesn't get all 
import { posts, resources, sortPosts } from "../lib/getAllPosts";

export default function TwoColumnImageLayout() {
  const postsToShow = 3

  let blogps = sortPosts(posts).slice(0, postsToShow).map((blogPost, index) => {
    return (
      <Post key={index} post={blogPost} folder='blog'/>
    )
  });

  let resourceps = sortPosts(resources).slice(0, postsToShow).map((blogPost, index) => {
    return (
      <Post key={index} post={blogPost} folder='resources'/>
    )
  });

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h2 className='caption'>Blog Posts</h2>
            </div>
            { blogps }
            <div className='additional-links-container'>
              <a className='additional-links' href="/blogs">More Good Blogg-y Stuff</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title">
              <h2 className='caption'>Learning Resources</h2>
            </div>
            { resourceps }
            <div className='additional-links-container'>
              <a className='additional-links' href="/resources">Additional Cool Learn-y Doodads</a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .site-section {
        padding: 2em var(--default-padding);
      }

      .additional-links-container {
        margin-bottom: 3em;
        white-space: nowrap;
      }
      .additional-links {
        font-size: small;
        font-weight: 600;
        text-transform: uppercase;
        border: 0px solid;
        border-radius: 30px;
        padding: 10px;
        background-color: #acb2a1;
        color: #000;
      }
      .additional-links:hover {
        background-color: #7e8277;
      }
    `}</style>
    </div>
  )
}
