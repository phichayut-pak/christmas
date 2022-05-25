import React, { useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiLoader } from 'react-icons/fi'
const LoadingBar = ({ doneLoading }) => {
  const [isTextOn, setIsTextOn] = useState(true)
  
  useEffect(() => {
    setInterval(() => {
      setIsTextOn(false)
      doneLoading()
    }, 5000);
  }, [])

  return (
    <AnimatePresence>
      {isTextOn && (
      <motion.div className='flex flex-col justify-center items-center space-y-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeIn' }}
      >
        <motion.div
          initial={{ scale: 1, opacity: 0.25 }}
          animate={{ scale: 0.9, opacity: 0.75 }}
          exit={{ scale: 1, opacity: 0}}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
            ease: 'linear'
          }}
          className="text-white text-6xl md:text-8xl"
        >
          <FiLoader />
        </motion.div>

        <div className='font-medium font-poppins text-2xl md:text-3xl text-[#F2AA4CFF]'>
          <span className='text-white'>🎅 Santa Pak</span> is preparing...
        </div>
      </motion.div>
      )}
      
    </AnimatePresence>
  )
}

export default LoadingBar