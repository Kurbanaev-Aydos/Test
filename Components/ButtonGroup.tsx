import React from 'react'

const ButtonGroup = () => {
  return (
    <>
      <button className="w-full border-r border-[#00C48C] text-white bg-[#00C48C]">
        3 мес
      </button>
      <button className="w-full border-r border-[#00C48C] text-[#00C48C]">
        6 мес
      </button>
      <button className="w-full border-r border-[#00C48C] text-[#00C48C]">
        12 мес
      </button>
      <button className="w-full border-r border-[#00C48C] text-[#00C48C] last:border-none">
        24 мес
      </button>
    </>
  )
}

export default ButtonGroup