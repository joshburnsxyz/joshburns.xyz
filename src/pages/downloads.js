import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const DownloadsPage = () => {
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
          Downloads
          <br/>
          <br/>
          <hr/>
          <div>
            <ul>
              <li><a href="/"><pre><code>laptop.sh</code></pre> script to provision new machines (MacOS)</a></li>
            </ul>
          </div>
        </h1>
      </div>
    </Layout>
  )
}

export default DownloadsPage
