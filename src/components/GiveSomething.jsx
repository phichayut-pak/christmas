import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const GiveSomething = ({ doneGive }) => {
  const [isTextOn, setIsTextOn] = useState(true)
  
  useEffect(() => {
    setInterval(() => {
      setIsTextOn(false)
      doneGive()
    }, 4000);
  }, [])

  return (
    <AnimatePresence>
      {isTextOn && (
        <motion.div className='font-poppins font-semibold text-center text-4xl md:text-6xl text-[#F2AA4CFF]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          
          I'll give you a <span className='text-white'>reward</span>✨
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GiveSomething