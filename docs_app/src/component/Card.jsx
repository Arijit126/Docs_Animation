import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { motion } from "motion/react"
const Card = ({reference}) => {
  return (
    <motion.div drag dragConstraints={reference} className='relative flex-shrink-0 w-50 h-62 rounded-[20px] bg-zinc-900/90 text-white p-7 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-8 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute w-full bottom-0 left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-2'>
                <h5>.9mb</h5>
                <HiOutlineFolderDownload />
            </div>
            <div className={`tag w-full py-4 bg-green-600 flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
        </div>
    </motion.div>
  )
}

export default Card