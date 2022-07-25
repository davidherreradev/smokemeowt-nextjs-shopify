
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
        <div ref={ref} className="fixed inset-0 h-full z-50 overflow-y-auto">
            <div onClick={onClose} className="fixed inset-0 backdrop-blur-lg bg-black bg-opacity-80 transition-opacity"/>
            <section className="bg-blue absolute top-0 bottom-0 right-0 h-full max-w-xs md:max-w-sm flex flex-col text-base shadow-xl">
              {children}
            </section>
        </div>
      ) : null }
    </>
  )
}

export default Sidebar