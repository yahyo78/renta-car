import Image from 'next/image'
import React from 'react'

const HomeCard3 = (props) => {
  return (
    <>
    <div className='flex xl:gap-[20px] gap-[10px] bg-white xl:w-[230px] w-[42%] xl:rounded-[20px] rounded-[10px] xl:p-[15px] p-[10px] px-[15px] items-center'>
        <Image className='xl:w-[80px] w-[50px]' src={props.img} alt='' />
        <div>
            <h1 className='xl:text-[25px] text-[22px] font-bold'>{props.text}</h1>
            <p>{props.description}</p>
        </div>
    </div>
    </>
  )
}

export default HomeCard3