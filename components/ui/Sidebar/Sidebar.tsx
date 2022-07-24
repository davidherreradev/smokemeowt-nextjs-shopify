
import { FC, useEffect, useRef } from 'react'
import { 
  disableBodyScroll, 
  enableBodyScroll, 
  clearAllBodyScrollLocks 
} from "body-scroll-lock"

interface Props {
  children: any
  isOpen: boolean
  onClose: () => void
}

const Sidebar: FC<Props> = ({ children, isOpen, onClose}) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>
  
  useEffect(() => {
    if(ref.current) {
      if(isOpen) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isOpen])

  return (
    <>
      { isOpen ? (
        <div ref={ref} className="fixed overflow-hidden inset-0 h-full z-50">
          <div className="absolute inset-0">
            <div
              onClick={onClose}
              className="absolute inset-0 backdrop-blur-lg bg-black bg-opacity-80 transition-opacity"
            />
            <section className="absolute bottom-0 top-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="bg-blue h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null }
    </>
  )
}

export default Sidebar