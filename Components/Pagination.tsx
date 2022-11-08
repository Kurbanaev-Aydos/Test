import React from 'react'
import { pages } from '../Constants/Constants';

const Pagination = () => {
  return (
    <>
      <button className="w-[30px] h-[30px] ">
        <img src="/arrowLeft.svg" alt="left" />
      </button>
      <div className="first:bg-[#00C48C]">
        {pages.map((page, i) => {
          return (
            <button
              key={i + 1}
              className="h-9 w-9 first:text-white font-medium first:bg-[#00C48C] text-[#262728] bg-inherit rounded-[10px]"
            >
              {page}
            </button>
          )
        })}
      </div>
      <button className="w-[30px] h-[30px] ">
        <img src="/arrowRight.svg" alt="right" />
      </button>
    </>
  )
}

export default Pagination