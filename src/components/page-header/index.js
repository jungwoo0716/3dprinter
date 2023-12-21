import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Post from '../../models/post';
import PostSearch from '../post-search';
import './style.scss';

function PageHeader({ siteTitle }) {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <header className="page-header-wrapper">  
          <Helmet>            
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1067668052326016"
              crossorigin="anonymous"></script>
              {/* Google Site Verification Meta Tag */}
            <meta name="google-site-verification" content="KzlsKQF7AFEoHXuXUBvLrXJehghsraUq0Kdc49wKbrA" />
          </Helmet>    
          <div className="page-header">
            <div className="front-section">
              <Link className="link" to="/">
                {siteTitle}
              </Link>
            </div>
            <div className="trailing-section">
              <Link className="link" to="/about">
                
              </Link>
              <Link className="link" to="/posts">
                
              </Link>
              <PostSearch
                posts={data.allMarkdownRemark.edges.map(({ node }) => new Post(node, true))}
              />
            </div>
          </div>
        </header>
      )}
    />
  );
}

export default PageHeader;
