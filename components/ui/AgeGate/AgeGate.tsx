import Button from "../Button"
import s from "./AgeGate.module.css"
import Cookies from "js-cookie"
import { useEffect, useState, useRef } from 'react'
import { 
    disableBodyScroll, 
    enableBodyScroll, 
    clearAllBodyScrollLocks 
  } from "body-scroll-lock"
import Logo from "../Logo"
  

const AgeGate = () => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const [showAgeGate, setshowAgeGate] = useState('hidden')

    const ageGate = !Cookies.get("agegate")

    useEffect(() => {
        if(ref.current) {
            if(ageGate){
                disableBodyScroll(ref.current)
                setshowAgeGate(s.popupBackground)
            }else {
                enableBodyScroll(ref.current)
            }
          }
      
          return () => {
            clearAllBodyScrollLocks()
          }
    }, [ageGate])

    const closeAgeGate = () => {
        console.log("clicked")
        Cookies.set("agegate", "consented", { expires: 90 })
        setshowAgeGate('hidden')
    }


    return (
        <div ref={ref} className={showAgeGate}>
            <div className="container h-screen mx-auto flex flex-col justify-center p-8 max-w-lg">
                <div className="relative bg-green flex flex-col items-center rounded-lg shadow px-10 py-12">
                    <div className="flex fill-purple w-48 md:w-72 mb-6">
                        <Logo />
                    </div>
                    <div className="flex rounded-t mb-6">
                        <h3 className="text-sm md:text-lg text-purple">
                            Are you 21+ years of age?
                        </h3>
                    </div>
                    
                    <div className="flex around space-x-4 rounded-b">
                        <Button Component={"button"} className={s.button} onClick={closeAgeGate}>
                            Yes
                        </Button>
                        <Button Component={"a"} href="https://pbskids.org/" className={s.button}>
                            No
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgeGate