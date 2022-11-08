import React from 'react'
import { Bonuses, Characteristics, ButtonGroup } from '../Components'
import { product } from '../Constants/Constants'

const details = () => {
  return (
    <div className="w-full h-full bg-white p-[30px] rounded-[16px] mt-[31px]">
      {/* Title */}
      <h4 className="text-[#3D639D] font-semibold  leading-[26px]   text-[22px]">
        {product.title}
      </h4>
      <div className="w-full flex mt-[30px]">
        <div className="w-[50%] flex items-center justify-center bg-[#F3F5F8] rounded-2xl h-[385px] relative">
          {/* bonuses */}
          <div className="absolute top-5 left-5 flex items-center  justify-between gap-[6px] flex-col">
            {product.bonus.map((b: string, i) => (
              <img src={b} alt="bonus" key={i + 1} className="w-9 h-[28px]" />
            ))}
          </div>
          <img
            className="w-[271px] h-[271px]"
            src={product.img}
            alt={product.title}
          />
        </div>
        {/* Prices */}
        <div className="h-[380px] w-[50%] px-5">
          <h5 className="text-[#BBC2D0] leading-[19px] text-base font-normal">
            Цена телефона
          </h5>
          <p className="mt-2 text-[#262728] tracking-[0.01rem] leading-[19px] text-base font-semibold">
            6 000 000 сум{' '}
          </p>
          <div className="mt-5 w-full mr-[10px] border-y border-[#f7f7f7] py-5">
            <h5 className="text-[#BBC2D0] leading-[19px] text-base font-normal">
              Общая цена (c наценкой)
            </h5>
            <div className="flex w-full items-center justify-between mt-2">
              <span className="text-[#262728] tracking-[0.01rem] leading-[19px] text-base font-semibold">
                {product.price}
              </span>
              <div className="mb-1">
                <span className="bg-[#FF647C] rounded-sm px-[6px] font-semibold text-base mr-1 tracking-[-0.3px] leading-[19px] py-[2px] text-white">
                  2 433 333 сум
                </span>
                <span className="text-[#BBC2D0] leading-[16px] tracking-[-0.3px] text-[14px] font-normal">
                  x{product.amount}
                </span>
              </div>
            </div>
            {/* Button Group */}
            <div className="w-full h-10 rounded-[6px] border border-[#00C48C] mt-[19px] flex">
              <ButtonGroup />
            </div>
            <p className="text-center text-[#262728] leading-[19px] text-base font-normal mt-2">
              Наценка:{' '}
              <span className="text-[#262728] tracking-[-0.3px] leading-[19px] text-base font-semibold">
                {'5%'}
              </span>
            </p>
          </div>
          {/* Info about mobile phone */}
          <div className="mt-5">
            <Characteristics
              os={product.description.os}
              type={product.description.type}
              standard={product.description.standard}
            />
            <div className="w-full flex items-center justify-between mt-[15px]">
              <span className="text-[#00C48C] tracking-[0.01rem] leading-[19px] text-base font-semibold">
                Показать все
              </span>
              <button className="w-5 h-5">
                <img src="/greenArrow.svg" alt="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Discounts */}
      <div className="w-full h-[372px]  my-[30px] ">
        <h6 className="text-[#00C48C] tracking-[-0.3px] leading-[19px] text-base font-semibold">
          Акции
        </h6>
        {/* Bonuses */}
        <div className="w-full h-22 py-5 flex flex-col">
          <Bonuses />
        </div>
      </div>
      <button className="w-full h-[52px] bg-[#00C48C] rounded-[26px] mt-[30px] text-white text-base font-semibold leading-[19px] tracking-[0.01rem]">
        Добавить в корзину
      </button>
    </div>
  )
}

export default details
