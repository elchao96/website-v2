import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "../styles/index.scss";

interface ILayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: ILayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="container">
      <header className="site-title">{data.site.siteMetadata.title}</header>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-link-item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
