import { Layout } from '@components/common'
import { Button, Wave } from '@components/ui'
import { count } from 'console'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Marquee from 'react-fast-marquee'

const Weed: NextPage & {Layout: FC} = () => {
    const carouselCount = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
           <section className="bg-blue relative">
                <div className="container mx-auto flex flex-col md:p-12 gap-12 py-12 px-8">
                    <div className="flex flex-1 flex-col items-center md:items-start md:px-0 px-8">
                        <h1 className="heading-text">Pspsps. Resistance is futile.</h1>
                        <Button>
                            <Link href={"/stores"}>
                            Find a Store
                            </Link>
                        </Button>
                    </div> 
                </div>
                <Marquee speed={30} gradient={false} className="mt-4 mb-6">
                    {carouselCount.map(( item ) => (
                        <img key={item} className="w-56 md:w-80 p-4" alt="Premium cannabis from Smoke Meowt" src={"./carousel/" + item + ".png"} />
                    ))}
                </Marquee>
                
            </section>
        </>
    )
}

Weed.Layout = Layout

export default Weed