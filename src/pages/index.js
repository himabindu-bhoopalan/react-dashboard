import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DocumentRoot from "../components/dashboard/dashboard";
const IndexPage = () => (
  
  <Layout>
     <SEO title="Home" />
    <DocumentRoot/>
  </Layout>
)

export default IndexPage
