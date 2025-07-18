import React from 'react'

export const Background = () => {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'></div>
    <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl'>Documents.</div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-9xl leading-none tracking-tighter font-semibold text-zinc-700'>Docs.</h1>
    </>
  )
}
