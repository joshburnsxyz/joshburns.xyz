import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Github",
    url: "https://www.github.com/joshburnsxyz",
    description:
      "My open source code stored on Github. Projects, snippets, scripts and more. All provided as-is without warranty.",
  },
  {
    text: "Odysee",
    url: "https://odysee.com/@joshburnsxyz:d",
    description:
      "I randomly post code / tech related videos on Odysee.",
  },
  {
    text: "Downloads",
    url: "/downloads",
    description:
      "Public downloads page.",
  },
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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
        JOSHBURNS.XYZ
      </h1>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
