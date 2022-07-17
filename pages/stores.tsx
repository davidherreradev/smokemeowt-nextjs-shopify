import { Layout } from '@components/common'
import { StoreLocator } from '@components/ui'
import type { NextPage } from 'next'
import { FC } from 'react'

const Stores: NextPage & {Layout: FC} = () => {
    return (
        <>
            <StoreLocator />
        </>
    )
}

Stores.Layout = Layout

export default Stores