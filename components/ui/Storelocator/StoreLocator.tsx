import React from 'react'

const isServer = typeof window === 'undefined'

const storeRocket = ():any => {
    if(!isServer) {
        const a = document.createElement('script')
        a.type = 'text/javascript'
        a.async = !0
        a.src = 'https://cdn.storerocket.io/js/widget-mb.js'
        var b = document.getElementsByTagName('script')[0]
        b.parentNode?.insertBefore(a,b)
    }
    
}

const StoreLocator = () => {
  return (
    <div className="relative w-100 h-100">
        <div id='storerocket-widget' className="w-100 h-100" data-storerocket-env='p' data-storerocket-id='BrJqvPl8qE'>
        <p>Store locator is loading from StoreRocket <a rel="noopener" target='_blank' href='https://storerocket.io'>Store Locator Widget</a>..</p>
        </div>
        <script>
            {storeRocket()}
        </script>
    </div>
  )
}

export default StoreLocator
