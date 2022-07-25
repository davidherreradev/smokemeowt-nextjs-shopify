import Script from 'next/script'
import React from 'react'

const StoreLocator = () => {
  

  return (
    <>
      <div className="relative storerocket-store-locator h-full -mt-12 lg:h-[80vh] overflow-y-hidden"></div>
      <Script src="//cdn.storerocket.io/widget.js" strategy='beforeInteractive'></Script>
      <Script src='get-storelocator.js' strategy='afterInteractive'></Script>
    </>
  )
}

export default StoreLocator
