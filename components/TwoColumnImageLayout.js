import React from 'react';
import { Post, BlogPostPreview, ImageWithCaption } from '../components';
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
    <div className="row">
      <div className="col-lg-6">
        <div className="section-title">
          <a href="/blog">
            <ImageWithCaption className='hover' src="/images/text/write-header.png" alt="sometimes i write" style={{ width: '60%'}}/>
          </a>
        </div>
        { blogps }
        <div className='additional-links-container'>
          <a className='additional-links' href="/blogs">More Good Blogg-y Stuff</a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="section-title">
          <a href="/resources">
            <ImageWithCaption className='hover' src="/images/text/learn-header.png" alt="sometimes i learn" style={{ width: '60%'}}/>
          </a>
        </div>
        { resourceps }
        <div className='additional-links-container'>
          <a className='additional-links' href="/resources">Additional Cool Learn-y Doodads</a>
        </div>
      </div>
    <style jsx>{`
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
