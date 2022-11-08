import React from 'react'

const Bonuses = () => {
  // In Tailwind CSS, checkboxes are not so flexible for styling
  return (
    <>
      <div className="w-full py-[20px] flex items-center justify-between  border-b border-[#BBC2D0] ">
        <div className="flex leading-[19px] text-[16px] font-normal">
          <img src="/exchange.svg" className="w-9 h-[28px]" alt="exchange" />
          <div className="ml-4">
            <h6 className="text-[#262728] tracking-[-0.03px] font-normal">
              Обменяй свой старый айфон и получи скидку на новый
            </h6>
            <p className="text-[#BBC2D0] mt-[10px]">- 400 000 сум</p>
          </div>
        </div>
        <input
          type="checkbox"
          className="w-6 h-6 border-none mb-[15px] rounded-[6px] bg-[#F3F5F8] accent-[#00C48C]"
        />
      </div>

      <div className="w-full py-[20px]  flex items-center justify-between  border-b border-[#BBC2D0] ">
        <div className="flex leading-[19px] text-[16px] font-normal">
          <img src="/surprise.svg" className="w-9 h-[28px]" alt="surprise" />
          <div className="ml-4">
            <h6 className="text-[#262728] tracking-[-0.03px] font-normal">
              Наушники в подарок
            </h6>
            <p className="text-[#BBC2D0] mt-[10px]">Apple EarPods</p>
          </div>
        </div>
        <input
          type="checkbox"
          className="w-6 h-6 border-none mb-[15px] rounded-[6px] bg-[#F3F5F8] accent-[#00C48C]"
        />
      </div>

      <div className="w-full py-[20px] flex items-center justify-between  border-b border-[#BBC2D0] ">
        <div className="flex leading-[19px] text-[16px] font-normal">
          <img src="/discount.svg" className="w-9 h-[28px]" alt="discount" />
          <div className="ml-4">
            <h6 className="text-[#262728] tracking-[-0.03px] font-normal">
              Скидка 20% на смартфоны
            </h6>
            <p className="text-[#BBC2D0] mt-[10px]">- 10 000 сум</p>
          </div>
        </div>
        <input
          type="checkbox"
          className="w-6 h-6 border-none mb-[15px] rounded-[6px] bg-[#F3F5F8] accent-[#00C48C]"
        />
      </div>

      <div className="w-full py-[20px] flex items-center justify-between">
        <div className="flex leading-[19px] text-[16px] font-normal">
          <img src="/imei.svg" className="w-9 h-[28px]" alt="imei" />
          <div className="ml-4">
            <h6 className="text-[#262728] tracking-[-0.03px] font-normal">
              Скидка на айфоны
            </h6>
            <p className="text-[#262728] mt-[10px] leading-[17px] text-[15px] font-normal">
              IMEI 012345678901234
            </p>
            <p className="text-[#BBC2D0] text-[13px] leading-[15px] mt-[10px]">
              - 10 000 сум
            </p>
          </div>
        </div>
        <input
          type="checkbox"
          className="w-6 h-6 border-none mb-[15px] rounded-[6px] bg-[#F3F5F8] accent-[#00C48C]"
        />
      </div>
    </>
  )
}

export default Bonuses
