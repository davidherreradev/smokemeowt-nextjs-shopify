import { Layout } from '@components/common'
import { StoreLocator } from '@components/ui'
import type { NextPage } from 'next'
import Script from 'next/script'
import { FC } from 'react'

const Stores: NextPage & {Layout: FC} = () => {
    
    return (
        <>
            <div className="storerocket-store-locator h-[80vh] -mt-8"></div>
            <Script src="//cdn.storerocket.io/widget.js" strategy='beforeInteractive'></Script>
            <Script src="get-storelocator.js"></Script>
        </>
    )
}

Stores.Layout = Layout

export default Stores