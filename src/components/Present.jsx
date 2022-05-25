import React, { useEffect, useState } from 'react'
import * as unicodeEmoji from 'unicode-emoji';
import { AnimatePresence, motion } from 'framer-motion'

const Present = ({ donePresent }) => {
  const [emoji, setEmoji] = useState('')
  useEffect(() => {
    const emojis = unicodeEmoji.getEmojis()
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)].emoji)


  }, [])



  return (
    <div className='text-white text-8xl'>
      <AnimatePresence>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="cursor-pointer transition duration-100 transform ease-in hover:rotate-[30deg]"
        >
          {emoji}
        </motion.div>
      </AnimatePresence>
      
    </div>
  )
}

export default Present