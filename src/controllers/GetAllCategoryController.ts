import {Request, Response} from "express"
import { GetAllCategoryService } from "../services/GetAllCategoryService"

export class GetAllCategoryController {
  async handler(request: Request, response: Response) {
    const service = new GetAllCategoryService()

    const categories = await service.execute()

    return response.json(categories)
  }
}