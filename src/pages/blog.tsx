import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Blog">
      <p>I did this blog</p>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>Blog</title>;
