import React, { ReactElement, ReactNode } from 'react'
import { Navbar, Sidebar, Path } from './index'

const Layout = ({ children }: any) => (
  <>
    <Navbar />
    <div className="flex">
      <div className="w-[263px] gap-[10px] rounded-tr-[30px] bg-[#3D639D] flex items-end justify-start pt-[52px] last:bg-white flex-col">
        <Sidebar />
      </div>
      <div className="w-full bg-white flex items-center justify-center px-[21px] py-5">
        <div className="bg-[#F3F5F8] relative w-full h-full flex-col rounded-md flex items-start justify-start pb-[29px] px-[27px]">
          <div className="mt-5 flex items-center justify-start">
            <Path />
          </div>
          {children}
        </div>
      </div>
    </div>
  </>
)

export default Layout
