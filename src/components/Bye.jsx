import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Bye = () => {
  return (
    <AnimatePresence>      
      <motion.div 
        className="font-poppins font-semibold text-4xl md:text-6xl text-[#F2AA4CFF] inline-flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        >
        Bye! 
        <motion.div
          className=""
          animate={{ rotate: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            // from: 0,
            duration: 0.2,
            ease: 'easeInOut',
            type: 'tween',
          }}
        >
          👋
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Bye