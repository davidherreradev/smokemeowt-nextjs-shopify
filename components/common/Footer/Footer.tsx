import { IconDiscord, IconInstagram, IconTikTok } from '@components/icons'
import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <div id="footer" className="bg-green">
      <div className="container mx-auto flex flex-col items-center md:p-12 py-12 px-8">
            <div className="flex flex-col items-center md:w-3/5">
              <h3 className="heading-text text-center">Contact</h3>
              <p className="heading-tag text-center mb-0">SMS: (323) 200-9793</p>
              <p className="heading-tag text-center">pspsps@smokemeowt.com</p>
            </div>
            <div className="flex flex-row space-x-4 items-center mb-8">
              <IconInstagram fill="purple" />
              <IconDiscord fill="purple" />
              <IconTikTok fill="purple" />
            </div>
            <p className="heading-tag text-center">© 2022 SmokeMeowt</p>
            <p className="heading-tag text-center mb-0">Terms & Conditions</p>
            <p className="heading-tag text-center mb-0">Privacy Policy</p>
          </div>
    </div>
  )
}

export default Footer
