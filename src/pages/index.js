import React from "react"
import { Home, Layout, SEO } from "../components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
