import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import RotatingHero from "../components/RotatingHero"
// import { useStaticQuery } from "gatsby"

export const Head = () => (
  <>
    <title>Flavor Diner</title>
    <meta name="description" content="this is home page" />
  </>
)

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/brick2.jpg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>flavor diner</h1>
              <RotatingHero />
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `
