import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const BeforePresent = ({ doneBeforePresent }) => {
  const [isTextOn, setIsTextOn] = useState(true)
  
  useEffect(() => {
    setInterval(() => {
      setIsTextOn(false)
      doneBeforePresent()
    }, 4000);
  }, [])

  return (
    <AnimatePresence>
      {isTextOn && <motion.div className="font-poppins font-semibold text-center text-4xl md:text-6xl text-[#F2AA4CFF]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
      >
        And here is your
        <br />
        <span className='text-white mt-2'>Present</span>🎁
      </motion.div>}

    </AnimatePresence>
  )
}

export default BeforePresent