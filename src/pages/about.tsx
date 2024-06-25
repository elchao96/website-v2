import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I did this</p>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Me</title>;
