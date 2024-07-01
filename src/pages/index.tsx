import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="About">
      <></>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
