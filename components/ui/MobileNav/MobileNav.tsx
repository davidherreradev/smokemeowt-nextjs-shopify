import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { XIcon } from '@heroicons/react/outline'
import cn from "classnames"
import { Button } from '@components/ui'
import { useUI } from "@components/ui/context"
import { NavLinks } from '@components/common'
import { useRouter } from 'next/router'


const MobileNav: FC = (onClose) => {
  const {closeMobileNav} = useUI()

  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeStart", closeMobileNav);
    return () => router.events.off("routeChangeStart", closeMobileNav);
  }, [router.events]);

  const rootClass = cn(
    "bg-green text-purple h-full flex flex-col min-w-[200px]"
  )

  return (
    <div className={rootClass}>
        <header className="px-4 pt-6 pb-4 sm:px-6">
            <div className="flex items-start justify-between space-x-3">
                <div className="h-7 flex items-center">
                    <button type="button" title="close cart"
                        onClick={closeMobileNav}
                        className="hover:opacity-50 text-purple transition ease-in-out duration-150"
                    >
                        <XIcon className="w-8 h-8" />
                        
                    </button>
                </div>
            </div>
        </header>
      
        <div className="pt-4 px-4 sm:px-6 flex-1">
           <NavLinks />
        </div>
    </div>
  )
}

export default MobileNav