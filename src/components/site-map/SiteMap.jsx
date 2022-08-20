import React from "react";
import { graphql } from "gatsby";

const SiteMap = ({ data }) => (
  <>
  <h3>Site Map</h3>
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </>
);

export const query = graphql`
  {
    allSitePage(limit: 10) {
      edges {
        node {
          id
          internalComponentName
        }
      }
    }
  }
`;

export default SiteMap;
