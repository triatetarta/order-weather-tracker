import React, { useContext } from "react"
import { motion } from "framer-motion"
import { Card } from "../components"
import { parentVariants, ChildVariants } from "../animations/animations"
import { GatsbyContext } from "../context/context"

const StockItems = () => {
  const { addItem, removeItem, items, setShowModal } = useContext(GatsbyContext)

  const itemsPrice = items.reduce(
    (a, c) => a + c.fields.price * c.fields.quantity,
    0
  )

  return (
    <motion.div
      variants={parentVariants}
      initial="from"
      animate="to"
      exit="exit"
      className="stock container"
    >
      <h3>Start placing your orders:</h3>
      <div className="row">
        {items.map(item => {
          const { id } = item
          return (
            <motion.div variants={ChildVariants} className="products" key={id}>
              <Card addItem={addItem} removeItem={removeItem} item={item} />
            </motion.div>
          )
        })}
      </div>

      <div>Total NET Cost: £{itemsPrice.toFixed(2)}</div>

      {itemsPrice > 0 && (
        <div>
          <button onClick={() => setShowModal(true)}>Place Order</button>
        </div>
      )}
    </motion.div>
  )
}

export default StockItems
