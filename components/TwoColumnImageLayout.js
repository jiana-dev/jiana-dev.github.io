import React, { useState, useEffect } from 'react';
import resources from '../data/learning_resources.json';
import { Post, BlogPostPreview } from '../components';
import dateFormat from 'dateformat';

// Refactor so this doesn't get all 
import { posts } from "../lib/getAllPosts";

export default function TwoColumnImageLayout() {
  const [learnPosts, setLearnPosts] = useState([]);
  const postsToShow = 3

  useEffect(() => {
    let idx = 0
    let fetched = []

    resources.posts.slice(0, postsToShow).map(async(filename) => {
      await fetch(`../data/resources/${filename}.json`)
        .then(response => response.json())
        .then(data => {
          fetched.push(data)
          idx++;

          if (fetched.length === postsToShow) {
            fetched.sort(function(a,b){
              return Date.parse(b.date) - Date.parse(a.date)
            })
            setLearnPosts(fetched);
          }
        })
    });
  }, []);

  let blogps = posts.slice(0, 3).map((blogPost, index) => {
    return (
      <Post key={index} post={blogPost}/>
    )
  });

  let learns = learnPosts.map((blogPost, index) => {
    return (
      <BlogPostPreview key={index} index={index} blogPost={blogPost} lastUpdated={true}/>
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
            { learns }
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
