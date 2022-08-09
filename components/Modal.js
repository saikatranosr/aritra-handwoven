import React from "react"
import Icon from "./Icon"
import { motion } from "framer-motion"
import PropTypes from 'prop-types'

function Modal({ children, title, cancel, setState }) {
  const variants = {
    hidden: {
      scale: 0,
    },
    enter: {
      scale: 1,
    },
    exit: {
      scale: 0,
    },
  }

  const handleCloseClick = () => {
    setState && setState(false)
  }

  return (
    <motion.main
      variants={variants}
      // Pass the variant object into Framer Motion
      initial='hidden'
      // Set the initial state to variants.hidden
      animate='enter'
      // Animated state to variants.enter
      // exit="exit"
      // Exit state (used later) to variants.exit
      transition={{ type: "linear" }}
      className='fixed inset-0 flex w-screen h-screen justify-center items-center z-50 select-none backdrop-blur-sm backdrop-brightness-75'
    >
      <div className='bg-semitp dark:bg-semitpdark shadow-lg max-w-screen-sm w-96 mx-2 rounded-lg p-2 max-h-screen overflow-y-auto scrollbar-hide'>
        {/* Modal Head */}
        <div className='flex items-center justify-between'>
          {/* Title */}
          <h2 className='text-lg font-semibold text-sky-500'>{title}</h2>
        {cancel && <button onClick={handleCloseClick} className='flex items-center p-1 transition-all rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 border active:border-slate-200 dark:active:border-slate-500 border-white dark:border-slate-800'>
        <Icon className='dark:text-slate-100' size='1.7rem'>
            close
        </Icon>
        </button>}
        </div>
        <hr />
        <div className='my-2 dark:text-slate-200'>{children}</div>
      </div>
    </motion.main>
  )
}

Modal.propTypes = {
    title: PropTypes.string,
    cancel: PropTypes.bool,
}

Modal.defaultProps = {
    title: "Meaasge",
    cancel: true
}

export default Modal
