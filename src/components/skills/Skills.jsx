import React, {useState} from 'react'
import SkillBox from './skillBox'
import {motion} from 'framer-motion'
import SkillBoxOr from './SkillBoxOr'

const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false)

  return (
    <motion.section 
    className='md:w-[60%] w-[90%] md:p-7 px-4 py-6 md:text-[1.25rem] text-[1rem] text-gray-300 mx-auto md:mt-10 mt-8'
    initial={{opacity:0, y:50}}
    whileInView={hasAnimated ? {opacity:0, y:50} : {opacity:1, y:0}}
    transition={{duration:0.5, ease:'easeOut'}}
    viewport={{
      once:false, 
      amount:0.1,
      onEnter: ()=>setHasAnimated(true),
      onExit: ()=>setHasAnimated(false)
    }}
    >
      <p className='md:text-[1.5rem] text-[1.25rem] font-semibold text-[#e5e5e5]'>
        Technical Skills
      </p>
      <div className='flex flex-wrap gap-1 mt-4'>
        <SkillBoxOr skill={"Python"}/>
        <SkillBox skill={"Supervised Learning"}/>
        <SkillBox skill={"Unsupervised Learning"}/>
        <SkillBox skill={"Tenserflow"}/>
        <SkillBox skill={"Pytorch"}/>
        <SkillBox skill={"Sklearn"}/>
        <SkillBox skill={"Flask"}/>
        <SkillBox skill={"Streamlit"}/>
        <SkillBox skill={"Natural Language Processing"}/>
        <SkillBox skill={"Deep Learning"}/>
      </div>
    </motion.section>
  )
}

export default Skills