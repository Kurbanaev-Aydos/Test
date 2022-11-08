import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[70px] bg-[#fff]">
      <img src="/Logo.svg" alt="logo" className="h-11 w-[111px] ml-[60px]" />
      <div className="flex items-center justify-end gap-10 h-full ">
        <div className="relative">
          <img src="/Bell.svg" alt="bell" />
          <div className="bg-[#00C48C] rounded-full w-4 h-4 flex items-center justify-center text-white text-[10px] absolute bottom-4 left-3">
            7
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 h-full w-[292px] rounded-bl-[30px] bg-[#3D639D]">
          <span className="text-white text-base">Личный кабинет</span>
          <img src="/Profile.svg" alt="profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar