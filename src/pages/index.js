import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import RotatingHero from "../components/RotatingHero"
// import { useStaticQuery } from "gatsby"

export const Head = () => (
  <>
    <title>Flavor Diner</title>
    <meta name="description" content="Your place for top notch recipes!" />
  </>
)

// export const onRenderBody = gatsbyUtils => {
//   const { setHtmlAttributes } = gatsbyUtils
//   setHtmlAttributes({ lang: "en" })
// }

// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: "en" })
// }

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/brick2.jpg"
            alt="flavor diner"
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
