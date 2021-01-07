import React, { createContext, useState, useEffect } from "react"
import { base } from "../components/"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)

  const getRecords = async () => {
    const records = await base("Products")
      .select({})
      .firstPage()
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
  }

  const addItem = async id => {
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        let { id, fields } = item
        fields = { ...fields, quantity: fields.quantity + 1 }
        return { id, fields }
      } else {
        return item
      }
    })
    const records = await base("Products")
      .update(tempItems)
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
  }

  const removeItem = async id => {
    const tempItems = [...items].map(item => {
      if (item.id === id) {
        let { id, fields } = item
        fields = { ...fields, quantity: fields.quantity - 1 }
        if (fields.quantity < 0) {
          return item
        } else {
          return { id, fields }
        }
      } else {
        return item
      }
    })
    const records = await base("Products")
      .update(tempItems)
      .catch(err => console.log(err))
    const newItems = records.map(record => {
      const { id, fields } = record
      return { id, fields }
    })
    setItems(newItems)
  }

  useEffect(() => {
    getRecords()
  }, [])

  return (
    <GatsbyContext.Provider
      value={{
        showModal,
        setShowModal,
        items,
        setItems,
        addItem,
        removeItem,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
