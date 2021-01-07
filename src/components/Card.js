import React from "react"
import { motion } from "framer-motion"

const Card = ({ addItem, removeItem, item }) => {
  const {
    id,
    fields: { name, in_stock, price, quantity },
  } = item

  const url = item.fields.image[0].url

  return (
    <div className="card">
      <div className="card-image">
        <img src={url} className="img" alt={name} />
      </div>
      <div className="card-title">
        <h3>{name}</h3>
      </div>
      <div className="card-stock">
        <p>in your stock: {in_stock}</p>
      </div>
      <div className="card-quantity">
        <p>quantity: {quantity}</p>
      </div>
      <div className="card-price">
        <p>NET price: £{price}</p>
      </div>
      <div className="card-button">
        <div className="btn">
          <motion.button
            onClick={() => removeItem(id)}
            whileHover={{ backgroundColor: "#ff3cac" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-minus"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f5f5f5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.button>
        </div>
        <div className="btn">
          <motion.button
            onClick={() => addItem(id)}
            whileHover={{ backgroundColor: "#ff3cac" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f5f5f5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Card
