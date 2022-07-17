
import { Layout } from "@components/common"
import Image from 'next/image'
import { Button, Wave } from "@components/ui"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { getProduct, getAllProductsPaths } from "@framework/product"
import { getConfig } from "@framework/api/config"
import { ProductView } from "@components/product"


// fetch all product slugs
export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
    const { products } = await getAllProductsPaths(config)

    return {
        paths: products.map(p => ({params: {slug: p.slug}})),
        fallback: false
    }
}

// provide specfic product slug details to page
export const getStaticProps = async ({
    params }: GetStaticPropsContext<{slug: string}>
  ) => {
    const config = getConfig()
  
    const { product } = await getProduct({
        config,
        variables: {slug: params?.slug}
    })
      
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)) 
        }
    }
}


export default function ProductDetailPage({ 
    product }: InferGetStaticPropsType<typeof getStaticProps>
) {
    
    return (
        <>
            <section className="bg-blue relative">
                <div className="container mx-auto px-4 py-8">
                    { product && <ProductView product={product} />}
                </div>
                <Wave className={"fill-green"} />
            </section>
        </>
    )
}


ProductDetailPage.Layout = Layout