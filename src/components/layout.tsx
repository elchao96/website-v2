import * as React from "react";
import { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Navbar, Nav } from "react-bootstrap";

interface ILayoutProps {
  pageTitle: string;
  children: ReactNode;
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
    <Container fluid="sm">
      <Navbar sticky="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>{data.site.siteMetadata.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link
                href="https://www.linkedin.com/in/elchao96/"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </Nav.Link>
              <Nav.Link href="https://github.com/elchao96" target="_blank">
                <i className="bi bi-github"></i>
              </Nav.Link>
              <Nav.Link href="http://instagram.com/emchao13" target="_blank">
                <i className="bi bi-instagram"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
