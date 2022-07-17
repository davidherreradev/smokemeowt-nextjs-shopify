
import React from "react"


interface Message {
    message: string
}


const StoreNotice = ({message}: Message) => {
    return (
        <>
            <div className="bg-orange text-center text-[10px] py-2">
                {message}
            </div>
        </>
    )
}

export default StoreNotice