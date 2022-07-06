import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const links = [
  {
    text: "laptop.sh",
    url: "https://raw.githubusercontent.com/joshburnsxyz/scripts/main/laptop.sh",
    description: "script to provision new machines (MacOS)"
  },
  {
    text: "reindent-buffer.el",
    url: "https://raw.githubusercontent.com/joshburnsxyz/reindent-buffer.el/main/reindent-buffer.el",
    description: "Emacs plugin to quickly re-indent the active Emacs buffer."
  },
]

const DownloadsPage = () => {
  return (
    <Layout>
      <Seo title="Downloads" />
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
        <h1>Downloads</h1>
        <br/>
        <br/>
        <hr/>
        <div>
          <ul className={styles.downloadsList}>    
            {links.map(link => (
              <li><a href={link.url}><pre><code>{link.text}</code></pre>{link.description}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default DownloadsPage
