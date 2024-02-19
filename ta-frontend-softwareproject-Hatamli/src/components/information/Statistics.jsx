import React from 'react'
import Counts from '../common/Counts'

const Statistics = () => {
  return (
    <div className='max-w-[1050px] max-md:px-10 m-auto flex max-md:gap-20 max-md:justify-center flex-wrap justify-between my-20 items-center'>
    <Counts description={"Happy Customers"} title={"15K"}/>
    <Counts description={"Monthly Visitors"} title={"150K"}/>
    <Counts description={"Countries  Worldwide"} title={"15"}/>
    <Counts description={"Top Partners"} title={"100+"}/>
    </div>
  )
}

export default Statistics