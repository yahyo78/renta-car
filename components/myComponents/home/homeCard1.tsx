import Image from 'next/image'
import React from 'react'

const HomeCard1 = (props) => {
  return (
    <>
      <div className='xl:w-[26%] w-[90%] flex text-center flex-col items-center gap-[10px]'>
        <Image src={props.image} alt='' />
        <h1 className='font-bold text-[22px]'>{props.text}</h1>
        <p>{props.description}</p>
      </div>
    </>
  )
}

export default HomeCard1
