// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import axios from 'axios'

type Data = {
    name: string
}

function initMiddleware(middleware: any) {
    return (
        req: NextApiRequest,
        res: NextApiResponse<Data>
    ) =>
        new Promise((resolve, reject) => {
        middleware(req, res, (result: any) => {
            if (result instanceof Error) {
            return reject(result)
            }
            return resolve(result)
        })
    })
}
  
const cors = initMiddleware(
    Cors({
        methods: ['GET', 'POST', 'OPTIONS']
    })
)
async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    await cors(req, res)

    let config = {
        method: 'POST',
        url: `https://a.klaviyo.com/api/v2/list/XyX6vU/subscribe?api_key=${process.env.NEXT_PUBLIC_KLAVIYO_API}`,
        headers: {
            'Content-type': 'application/JSON',
        },
        data: JSON.stringify({profiles: [{email: req.body.email}]})
    }
    try {
        const response = await axios(config)
        res.status(200).json(req.body.email)
    } catch (error) {
        console.error(error)
    }
}

export default handler