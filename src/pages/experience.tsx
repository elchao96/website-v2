import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ExperiencePage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Experience">
      <></>
    </Layout>
  );
};

export default ExperiencePage;

export const Head: HeadFC = () => <Seo title="Experience" />;
