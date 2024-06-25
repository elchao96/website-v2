import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Blog">
      <></>
    </Layout>
  );
};

export default ProjectsPage;

export const Head: HeadFC = () => <Seo title="Projects" />;
