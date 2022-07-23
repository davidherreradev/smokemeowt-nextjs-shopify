import type { NextPage } from 'next'
import React, { useState } from "react"
import { Layout } from '@components/common'
import {  Wave } from '@components/ui'
import { getTermsOfService } from '@framework/policies/get-terms-of-service'

export async function getStaticProps() {
  const termsOfService = (await getTermsOfService()) || []

  return {
    props: {
        termsOfService
    }
  }
  
}

export default function PrivacyPolicy({termsOfService}: any) {
  console.log(termsOfService)
  return (
      <> 
        <div className="container max-w-3xl mx-auto px-6 md:px-0 py-8">
          <h1 className="text-3xl text-left text-purple mb-8">{termsOfService.policy.title}</h1>
          <div className="paragraph-text" dangerouslySetInnerHTML={ {__html: termsOfService.policy.body.html} }></div>
        </div>
        
        <Wave className="fill-green" />
      </>
  )

  
}

PrivacyPolicy.Layout = Layout