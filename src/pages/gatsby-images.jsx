// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// export default function Image() {
//   const data = useStaticQuery(graphql`
//     query {
//       file(relativePath: { eq: "../images/cat.jpeg" }) {
//         childImageSharp {
//           # Specify a fixed image and fragment.
//           # The default width is 400 pixels
//           fixed {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h1>Hello gatsby-image</h1>
//       <Img
//         fixed={data.file.childImageSharp.fixed}
//         alt="Gatsby Docs are awesome"
//       />
//     </div>
//   )
// }

import React from 'react'

export default function GatsbyImages() {
  return (
    <>GatsbyImages
    DEBUG ME
    </>
  )
}
