import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { parentVariants, ChildVariants } from "../animations/animations"

const Home = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="from"
      animate="to"
      exit="exit"
      className="home container"
    >
      <motion.h1 variants={ChildVariants}>Greetings, Manager!</motion.h1>
      <motion.h2 variants={ChildVariants}>
        Are you ready to start your orders?
      </motion.h2>
      <Link to="/forecast">
        <motion.button variants={ChildVariants}>Start Orders</motion.button>
      </Link>
    </motion.div>
  )
}

export default Home
