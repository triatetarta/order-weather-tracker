import React, { useContext } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { GatsbyContext } from "../context/context"
import { modal, backdrop } from "../animations/animations"

const Modal = () => {
  const { showModal, setShowModal } = useContext(GatsbyContext)

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="from"
          animate="to"
          exit="from"
          className="modal-backdrop"
        >
          <motion.div variants={modal} className="modal-box">
            <h3>Your order has been placed!</h3>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
