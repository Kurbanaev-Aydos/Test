import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { items } from '../Constants/Constants'
// import { PageContext } from '../context/context';

const Products = () => {
  const [product, setProduct] = useState(items)
  return (
    <>
      <p className="mb-5 font-semibold tracking-[-0.3px] text-[16px] text-[#262728] leading-[19px]">
        Bce товары <span>{`(${'121'})`}</span>
      </p>
      <div className="grid grid-cols-5 gap-5">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[192px] h-[265px] bg-white rounded-[10px] p-3 flex justify-center gap-[6px] items-start flex-col tracking-[-0.3px]"
            >
              <div className=" flex items-center justify-center w-[168px] bg-[#F7F7F7] h-[168px] rounded-md relative">
                <img src={item.img} alt={item.title} />
                <div className=" absolute top-3 left-[6px] flex gap-[6px] flex-col">
                  {item.bonus?.map((b, i) => (
                    <img key={i + 1} src={b} alt="discount" />
                  ))}
                </div>
              </div>
              <Link href={'/details'}>
                <p className="text-[15px] leading-[17px] tracking-[-0.3px]">
                  {item.title}
                </p>
              </Link>

              <p className="font-semibold leading-[18px] tracking-[-0.3px] text-[#262728]">
                {item.price}
              </p>

              <div className="flex gap-[6px] w-auto items-center text-white">
                <span className="bg-[#FF647C] rounded-sm px-[6px] text-[13px] leading-4 py-[2px]">
                  {item.starter}
                </span>
                <span className="text-[#BBC2D0] text-[11px] leading-[13px] font-normal">
                  {'x' + item.amount}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Products
