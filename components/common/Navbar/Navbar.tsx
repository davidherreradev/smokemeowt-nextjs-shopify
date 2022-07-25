import Image from 'next/image'
import React, { FC } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@components/ui'
import { MenuIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import NavLinks from '../NavLinks'
import UserNav from '../UserNav'
import { useUI } from '@components/ui/context'


const Navbar: FC = ({storeNotice}: any) => {
  
  const {openMobileNav} = useUI()
  
  return (
    <div className="w-full bg-blue fixed z-10">
      

      <div className=" mx-auto flex flex-row items-center justify-between px-4 py-4  gap-8 lg:container">
        {/* Mobile Nav Icon */}
        <div className="h-10 w-10 z-30 cursor-pointer text-purple lg:hidden">
          <MenuIcon onClick={openMobileNav} />
        </div>

        {/* Nav Links */}
        <div className="hidden text-purple lg:flex lg:flex-1">
          <NavLinks />
        </div>

        {/* Brand / Logo */}
        <div className="w-52 md:w-80 cursor-pointer flex-0 pt-2">
          <Link href="/">
            <a className="fill-purple"><Logo /></a>
          </Link>
        </div>

        {/* User Nav / Cart */}
        <div className="h-12 w-10 md:h-12 md:w-12 cursor-pointer text-purple flex flex-col items-end justify-center md:flex-1">
            <div className="h-8 w-8">
              <UserNav />
            </div>
        </div>

      </div>
        
    </div>
  )
}

export default Navbar
