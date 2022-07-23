import { request, gql } from 'graphql-request'
import { useEffect, useState } from 'react'

const graphqlAPI = "https://api-us-west-2.hygraph.com/v2/cl5vlw7ah09ye01t3dnim7ag6/master"
      


export const getStoreNotice = async () => {
  
    const getStoreNoticeMessage = gql`
    {
      storeNotice(where: {id: "cl5vnvcvo7s360an3podd441z"}) {
            id
            showStoreNotice
            storeNoticeMessage
      }
    }`
  
    const results = await request(graphqlAPI, getStoreNoticeMessage)

    return results
  
}

export default function StoreNotice() {

    const [storeNotice, setstoreNotice] = useState('hidden')


    useEffect(() => {
        console.log(getStoreNotice())
    }, [])

    return (
        <div className={storeNotice}> 
            hi
        </div>
    )

}