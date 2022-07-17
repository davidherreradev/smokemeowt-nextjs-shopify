import Image from 'next/image'
import React, { FC } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Logo, StoreNotice } from '@components/ui'
import { MenuIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import NavLinks from '../NavLinks'
import UserNav from '../UserNav'
import { useUI } from '@components/ui/context'


const Navbar: FC = () => {
  
  const {openMobileNav} = useUI()
  
  return (
    <div className="w-full bg-blue fixed z-10">

      <StoreNotice message="🔥 PSPSPSPSP ENJOY 10$ off with code smokemeowt 🔥" />
      

      <div className=" mx-auto flex flex-row items-center justify-between px-4 py-6 gap-8 lg:container">
        {/* Mobile Nav Icon */}
        <div className="h-12 w-12 z-30 cursor-pointer text-purple md:hidden">
          <MenuIcon onClick={openMobileNav} />
        </div>

        {/* Nav Links */}
        <div className="hidden text-purple md:flex md:flex-1">
          <NavLinks />
        </div>

        {/* Brand / Logo */}
        <div className="h-14 w-48 cursor-pointer flex-0 pt-2">
          <Link href="/">
            <a className="fill-purple"><Logo /></a>
          </Link>
        </div>

        {/* User Nav / Cart */}
        <div className="h-12 w-12 cursor-pointer text-purple flex flex-col items-end justify-center md:flex-1">
            <div className="h-8 w-8">
              <UserNav />
            </div>
        </div>

      </div>
        
    </div>
  )
}

export default Navbar
