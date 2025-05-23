import React, {useState} from 'react'
import {motion} from 'framer-motion'

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

// d:p-7 px-4 py-8 md:my-10 my-8
  return (
    <motion.section
    id='about' 
    className='md:w-[60%] w-[90%] md:text-[1.2rem] text-[1rem] text-gray-800 mx-auto md:py-20 py-16 px-4 border-b border-gray-200'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      amount:0.1, 
      once:true,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
      <div>
        <p className='md:text-[1.7rem] text-[1.5rem] font-semibold text-black'>
          About
        </p>
        <p className='mt-4'>
        Hi, I'm an undergraduate engineer, and I am learning and developing ML models, and curious about how different ML techniques can solve real-world problems.
        </p>
      </div>
    </motion.section>
  )
}

export default About