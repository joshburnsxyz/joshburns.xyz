import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
query {
  allMdx {
    edges {
      node {
        id
        slug
        frontmatter {
          title
          date
        }
      }
    }
  }
}
`)

  return (
    <Layout>
      <Seo title="Blog" />
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
          My Blog
          <br />
          <br />
          <hr />
          <div className={styles.blogContainer}>
            {
              data.allMdx.edges.map(e => (
                <>
                  <a style={{textDecoration: 'none'}} key={e.node.id}>
                    <p><a href="/">&nbsp;{e.node.frontmatter.title}</a></p>
                    <p><small style={{fontSize: 16, color: "slategray", fontWeight: "lighter"}}>Posted on: {new Date(e.node.frontmatter.date).toDateString()}</small></p>  
                  </a>
                  <hr/>
                </>
              ))
            }
          </div>
        </h1>
      </div>
    </Layout>
  )
}

export default BlogPage
