import Link from 'next/link'
import React from 'react'
import { sidebar } from '../Constants/Constants'

const Sidebar = () => {
  return (
    <>
      {sidebar.map((s) => (
        <div
          key={s.id}
          className="flex items-center justify-start ml-[30px] w-[233px] h-[50px] bg-inherit pl-[30px] gap-4 last:text-[#3D639D] last:bg-white rounded-l-[30px]  tracking-[-0.3px]"
        >
          <img src={s.icon} alt={s.title} className="w-5" />
          <Link href={'#'}>
            <span className="text-white text-base leading-[19px]">
              {s.title}
            </span>
          </Link>
        </div>
      ))}
      <div className="flex items-center justify-start w-[233px] ml-[30px] h-[50px] text-base pl-[30px] gap-4 text-[#3D639D] bg-white rounded-l-[30px]  tracking-[-0.3px]">
        <img src="/basket.svg" alt="basket" className="w-5" />
        <Link href={'#'}>
          <span className=" leading-[19px]">Оформить заказ</span>
        </Link>
      </div>
    </>
  )
}

export default Sidebar
