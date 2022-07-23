import type { NextPage } from 'next'
import React, { useState } from "react"
import Head from 'next/head'
import { ProductCard } from '@components/product' 
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from '@framework/product'
import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import { Grid, Wave } from '@components/ui'
import { Product } from '@common/types/product'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)
  

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}


export default function Products({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible: boolean | ((prevState: boolean) => boolean)) => {
    setPageIsVisible(isVisible)
  }
  
  return (
      <> 
        <div className="container mx-auto px-4 md:px-12 mb-8">
          <h1 className="text-3xl text-left text-purple">Products</h1>
        </div>
        <Grid>
          {products.map(( product: Product ) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
        <Wave className="fill-green" />
      </>
  )

  
}

Products.Layout = Layout