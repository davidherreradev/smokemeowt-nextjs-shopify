import { Product } from '@common/types/product'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
    product: Product
}

const ProductCard: FC<Props> = ({product}) => {

  return (
    <Link href={`/products/${product.slug}`}>
        <a href={"products" + product.path} className="w-100 bg-green rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-hidden">
                <div className="w-100 aspect-square relative transition-all duration-500 hover:scale-110">
                    { product.images && (
                        <Image
                            alt={product.name}
                            src={product.images[0].url}
                            layout="fill"
                            objectFit="fill"
                        />
                    )}
                </div>
            </div>
            <div className="p-4">
                <h5 className="text-purple text-sm leading-none mb-1">{product.name}</h5>
                <p className="text-black/80 text-xs font-bold">${product.price.value}</p>
            </div>
        </a>
    </Link>
  )
}

export default ProductCard