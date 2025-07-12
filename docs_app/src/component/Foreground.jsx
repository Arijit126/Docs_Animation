import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null)

  return (
        <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-8 flex-wrap p-6'>
            <Card reference={ref}/>
            <Card reference={ref}/>
            <Card reference={ref}/>
            <Card reference={ref}/>
      </div>
    
  )
}

export default Foreground