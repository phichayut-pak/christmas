import React, { useEffect, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const GoodKid = ({ doneGoodKid }) => {
  const [isTextOn, setIsTextOn] = useState(true)
  
  useEffect(() => {
    setInterval(() => {
      setIsTextOn(false)
      doneGoodKid()
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
        Since you have been 
        <br />
        <span className='text-white'>a good kid</span> this year
      </motion.div>}

    </AnimatePresence>
  )
}

export default GoodKid