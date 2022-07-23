import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'
import type { AppProps } from 'next/app'
import { Layout } from '@components/common'
import { FC } from "react"
import { UIProvider, useUI } from "@components/ui/context"
import { getStoreNotice } from "@components/ui/StoreNotice/StoreNotice"

const Noop: FC = ({children}: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps & {Component: {Layout: FC}}) {
  const Layout: any = Component.Layout ?? Noop
  return (
    <> 
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  ) 
}


export default MyApp
