import { IconDiscord, IconInstagram, IconTikTok } from '@components/icons'
import Link from 'next/link'
import React, { FC } from 'react'

const Footer: FC = () => {

  const year = new Date().getFullYear();

  return (
    <div id="footer" className="bg-green">
      <div className="container mx-auto flex flex-col items-center md:p-12 py-12 px-8">
        <div className="flex flex-col items-center md:w-3/5">
          <h3 className="heading-text text-center">Contact</h3>
          <p className="heading-tag text-center">pspsps@smokemeowt.com</p>
        </div>
        <div className="flex flex-row space-x-4 items-center mb-8">
          <IconInstagram fill="purple" />
          <IconDiscord fill="purple" />
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-purple text-center mb-4 space-x-4">
            <Link href="/terms-and-conditions">
              <a>
                Terms & Conditions
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a>
                Privacy Policy
              </a>
            </Link>
          </p>
          <p className="text-sm text-purple text-center">© {year} SmokeMeowt</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
