import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { useStaticQuery, graphql } from "gatsby"

const BlogPostPage = () => {
  const data = useStaticQuery(graphql``)

  return (
    <Layout>
      <Seo title="Blog Post" />
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
          Blog Post Template
          <br />
          <br />
          <hr />
          <div className={styles.blogContainer}>
            Blog Post Body
          </div>
        </h1>
      </div>
    </Layout>
  )
}

export default BlogPostPage
