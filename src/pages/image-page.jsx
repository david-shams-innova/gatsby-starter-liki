import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allFile {
      totalCount
      nodes {
        childImageSharp {
          id
          original {
            src
          }
        }
      }
    }
  }
`

export default ComponentName
