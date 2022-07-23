import { MobileSidebar, MobileNav, Sidebar, StoreNotice, AgeGate } from '@components/ui'
import { FC } from 'react'
import { Navbar, Footer } from '@components/common'
import s from "./Layout.module.css"
import { CartSidebar } from "@components/cart"
import { useUI } from "@components/ui/context"
import { ApiProvider } from '@framework'

const Layout: FC = ({ children }: any) => {
  const {isSidebarOpen, closeSidebar} = useUI()
  const {isMobileNavOpen, closeMobileNav} = useUI()


  return (
    <ApiProvider>
      <AgeGate />
      <Navbar />
      <MobileSidebar onClose={closeMobileNav} isOpen={isMobileNavOpen}>
        <MobileNav />
      </MobileSidebar>
      <Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <div className={s.root}>
        <main className="fit">
          { children }
        </main>
      </div>
      <Footer />
    </ApiProvider>
  )
}


export default Layout