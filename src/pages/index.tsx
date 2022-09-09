import React from "react"
import type { HeadFC } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <main className="main">
      <section className="main__heading">
        <StaticImage className="main__heading-title-img" alt="Blue Haven logo" src={"../images/blue_haven_white.png"} objectFit="contain" />
      </section>

      <section className="container">
        <h2>Coming soon...</h2>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Blue Haven</title>
