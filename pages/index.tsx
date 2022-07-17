import type { NextPage } from 'next'
import Image from 'next/image'
import { Button, Wave } from '@components/ui'
import { FC } from "react"
import { Layout } from '@components/common'
import Link from 'next/link'

const Home: NextPage & {Layout: FC}  = () => {
  return (

      <>

        {/* Hero */}
        <section className="bg-blue relative">
          <div className="container mx-auto flex flex-col md:flex-row md:items-center md:p-12 gap-12 pt-12">
            <div className="flex flex-1 flex-col items-center md:items-start md:px-0 px-8">
              <h1 className="heading-text">Good companions<br />better weed</h1>
              <p className="heading-tag">Premium indoor flower for<br className="lg:hidden" /> you and your best buds</p>
              <Button>
                <Link href={"/stores"}>
                  Find a Store
                </Link>
              </Button>
            </div>
            <div className="flex flex-1">
              <div className="w-full">
                <Image src="/hero.png" layout="responsive" width={362} height={362} priority/>
              </div>
            </div>            
          </div>
          <Wave className="fill-green" />
        </section>

        {/* Manifesto */}
        <section className="bg-green relative">
          <div className="container mx-auto flex flex-col md:flex-row md:items-center md:p-12 gap-12 pt-12">
            <div className="flex flex-1 flex-col items-center md:items-start md:px-0 px-8">
              <h2 className="heading-text">Manifesto</h2>
              <p className="heading-tag">We’re a weed brand that makes catnip for humans. Our goal is to make you laugh and support cat charities.</p>
              {/* <Button href="/stores" text="Find a Store" /> */}
            </div>
            <div className="flex flex-1 -mb-[72px] md:mb-0 relative z-1">
              <div className="w-full md:bg-purple md:pt-8 md:rounded-full lg:w-80 lg:mx-auto overflow-hidden">
                <Image src="/ryan.png" layout="responsive" width={800} height={1022} />
              </div>
            </div>            
          </div>
          <Wave className="fill-orange relative z-0" />
        </section>
        
        {/* Us VS Them */}
        <section className="bg-orange relative">
          <div className="container mx-auto flex flex-col-reverse md:flex-row md:items-center md:p-12 gap-12 py-12 px-8">
            
            <div className="flex flex-1">
              <div className="w-full md:p-12">
                <Image src="/grid-chart.png" layout="responsive" width={604} height={490} />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center md:items-start">
              <h3 className="heading-text">Us vs Them</h3>
              
            </div>           
          </div>
          <Wave className="fill-light-blue" />
        </section>
        
        {/* How it feels */}
        <section className="bg-light-blue relative">
          <div className="container mx-auto flex flex-col md:flex-row md:items-center md:p-12 gap-12 py-12 px-8">
            <div className="flex flex-1 flex-col items-center md:items-start">
              <h3 className="heading-text">How it feels</h3>
              {/* <Button href="/stores" className="hidden md:inline" text="Find a Store" /> */}
            </div>        
            <div className="flex flex-1">
              <div className="w-full">
                <Image src="/chart.svg" layout="responsive" width={604} height={490} />
              </div>
            </div>
            
          </div>
          <Wave className="fill-green" />
        </section>
        
        {/* Apparel */}
        <section className="bg-green relative">
          <div className="container mx-auto flex flex-col-reverse md:flex-row md:items-center md:p-12 gap-12 pt-12">
            <div className="flex flex-1">
              <div className="w-full scale-110 md:p-12">
                <Image src="/merch.png" layout="responsive" width={408} height={371} />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center md:items-start md:px-0 px-8">
              <h2 className="heading-text text-center">Apparel</h2>
              <p className="heading-tag">Shop our collection of shirts, sweatshirts, hats & accessories. You’ll look so good you’ll want to strut down the catwalk.</p>
              {/* <Button href="/products" text="Shop Catalog" /> */}
            </div>           
          </div>
          <Wave className="fill-orange" />
        </section>
        
        {/* Support Cat Charities */}
        <section className="bg-orange relative">
          <div  className="container mx-auto flex flex-col items-center gap-12 p-12">
            <div className="flex flex-col items-center md:w-3/5">
              <h4 className="heading-text text-center">Support Cat Charities</h4>
              <p className="heading-tag text-center">Inspired by the amazing times I had getting stoned in my bedroom with my cat buddy, a portion of every purchase goes to cat charities. Join our discord community of other cool cats and vote for the charities you’d like us to donate to.</p>
              {/* <Button href="/stores" text="Find a Store" /> */}
            </div>
          </div>
          <div className="absolute w-40 h-40 -bottom-5 -right-2 md:w-52 md:h-52 md:-bottom-8 md:right-0 lg:w-64 lg:h-64 lg:-bottom-10">
            <Image src="/thumbs-up-cat.png" layout="responsive" width={604} height={490} priority />
          </div>
          <Wave className="fill-light-blue relative z-1" />
        </section>
       
        {/* Join Newsletter */}
        <section className="bg-light-blue">
          <div className="container mx-auto flex flex-col items-center md:p-12 py-12 px-8">
            <div className="flex flex-col items-center md:w-3/5">
              <h3 className="heading-text text-center">You a cool cat?</h3>
              <p className="heading-tag text-center">Want dank memes & weed discounts in your inbox? Enter your email meow!</p>
              <input type="email" id="base-input" placeholder="enter email address" className="mb-3 text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 lg:w-1/2" />
              {/* <Button href="#" text="Subscribe" /> */}
            </div>
          </div>
          <Wave className="fill-green" />
        </section>
        
      </>
  )
}

Home.Layout = Layout

export default Home
