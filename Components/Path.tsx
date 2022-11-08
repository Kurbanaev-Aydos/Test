import Link from 'next/link'
import React from 'react'

const Path = () => {
  return (
    <>
      <Link href={'/'}>
        <span className="text-[#BBC2D0] font-normal">Заявки</span>
      </Link>
      <span className="text-[#BBC2D0] font-normal w-4 h-3 flex items-center justify-center">
        {<img src="/arrowGray.svg" className="mx-[3px] h-[11px]" alt="right" />}
      </span>
      <Link href={'/details'}>
        <span className="text-[#00C48C] font-medium">Оформить заказ</span>
      </Link>
    </>
  )
}

export default Path
