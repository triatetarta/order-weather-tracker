import React from "react"
import { motion } from "framer-motion"
import { loaderVariants } from "../animations/animations"

const Loader = () => {
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate="animationOne"
        className="loader"
      ></motion.div>
    </>
  )
}

export default Loader
