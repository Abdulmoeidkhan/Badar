// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import {todos} from "../../todo"

const todo = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(todos)
}

export default todo