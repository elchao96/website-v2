import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface ISeoProps {
  title?: string;
}

const Seo = ({ title }: ISeoProps) => {
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
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
