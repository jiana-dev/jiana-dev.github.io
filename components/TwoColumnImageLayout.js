import React, { useState, useEffect } from 'react';
import blogs from '../data/blogs.json';
import resources from '../data/learning_resources.json';
import BlogPostPreview from './BlogPostPreview';

export default function TwoColumnImageLayout() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [learnPosts, setLearnPosts] = useState([]);
  const postsToShow = 3

  useEffect(() => {
    let idx = 0
    let fetched = []

    // Is there a better solution than this? I kinda hate this
    blogs.posts.slice(0, postsToShow).map(async(filename) => {
      await fetch(`../data/blogs/${filename}.json`)
        .then(response => response.json())
        .then(data => {
          data['date'] = new Date(data['date']).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})
          fetched.push(data)
          idx++;

          if (fetched.length === postsToShow) {
            fetched.sort(function(a,b){
              return Date.parse(b.date) - Date.parse(a.date)
            })
            setBlogPosts(fetched);
          }
        })
    });
  }, []);

  useEffect(() => {
    let idx = 0
    let fetched = []

    resources.posts.slice(0, postsToShow).map(async(filename) => {
      await fetch(`../data/resources/${filename}.json`)
        .then(response => response.json())
        .then(data => {
          data['date'] = new Date(data['date']).toLocaleString([], {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'})
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

  let blogps = blogPosts.map((blogPost, index) => {
    return (
      <BlogPostPreview key={index} index={index} blogPost={blogPost}/>
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
