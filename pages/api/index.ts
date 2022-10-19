// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: any[] }>
) {
  try {
    res.status(200).json({ data: [] })
  } catch (error) {
    res.status(500).send({ data: [] })
  }
}
