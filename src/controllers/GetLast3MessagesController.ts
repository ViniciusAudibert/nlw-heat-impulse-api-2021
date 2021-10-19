import { Request, Response } from 'express'
import { GetLast3MessagesService } from '../services/GetLast3MessagesService'

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetLast3MessagesService()
      const result = await service.execute()

      return res.json(result)
    } catch (error) {
      return res.json(error.message)
    }
  }
}

export { GetLast3MessagesController }
