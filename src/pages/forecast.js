import React from "react"
import { Weather, Layout, SEO } from "../components"

const forecast = () => {
  return (
    <Layout>
      <SEO title="Weather Forecast" />
      <Weather />
    </Layout>
  )
}

export default forecast
