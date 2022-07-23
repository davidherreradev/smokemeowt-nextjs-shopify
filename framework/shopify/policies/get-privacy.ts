import { request, gql } from 'graphql-request'

const graphqlAPI = "https://api-us-west-2.hygraph.com/v2/cl5vlw7ah09ye01t3dnim7ag6/master"
      


export async function getPrivacyPolicy() {
  
  const query = gql`
  {
    policy(where: {id: "cl5vm02xq6q6n0an3wjornar9"}) {
      title
      body {
        html
      }
    }
  }`

  const results = await request(graphqlAPI, query)
  
  return results

}