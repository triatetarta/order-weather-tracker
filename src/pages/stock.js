import React, { useContext } from "react"
import { StockItems, Layout, Modal, SEO } from "../components/"
import { GatsbyContext } from "../context/context"

const Stock = () => {
  const { addItem, removeItem } = useContext(GatsbyContext)

  return (
    <Layout>
      <SEO title="Products" />
      <Modal />
      <StockItems addItem={addItem} removeItem={removeItem} />
    </Layout>
  )
}

export default Stock
