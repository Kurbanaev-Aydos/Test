import React from 'react'

interface CharacteristicsProp {
  type: string
  standard: string
  os: string
}

const Characteristics = ({ os, standard, type } : CharacteristicsProp) => {
  return (
    <div>
      <h5 className="text-[#BBC2D0] leading-[19px] text-base font-normal">
        Общие характеристики
      </h5>
      <p className=" text-[#262728] leading-[19px] text-base font-normal mt-2">
        Тип: <span>{type}</span>
      </p>
      <p className="text-[#262728] leading-[19px] text-base font-normal ">
        Стандарт: <span>{standard}</span>
      </p>
      <p className="text-[#262728] leading-[19px] text-base font-normal ">
        Операционная система: <span>{os}</span>
      </p>
    </div>
  )
}

export default Characteristics
