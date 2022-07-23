import type { NextPage } from 'next'
import React, { useState } from "react"
import { Layout } from '@components/common'
import {  Wave } from '@components/ui'
import { getPrivacyPolicy } from '@framework/policies/get-privacy'

export async function getStaticProps() {
  const privacyPolicy = (await getPrivacyPolicy()) || []

  return {
    props: {
      privacyPolicy
    },
    revalidate: 4 * 60 * 60
  }
  
}

export default function PrivacyPolicy({privacyPolicy}: any) {
  return (
      <> 
        <div className="container max-w-3xl mx-auto px-6 md:px-0 py-8">
          <h1 className="text-3xl text-left text-purple mb-8">{privacyPolicy.policy.title}</h1>
          <div className="paragraph-text" dangerouslySetInnerHTML={ {__html: privacyPolicy.policy.body.html} }></div>
        </div>
        
        <Wave className="fill-green" />
      </>
  )

  
}

PrivacyPolicy.Layout = Layout