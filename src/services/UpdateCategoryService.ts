import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

interface CategoryUpdateRequest {
  id: string
  name: string
  description: string
}

export class UpdateCategoryService {
  async execute({id, name, description}: CategoryUpdateRequest) {
    const repo = getRepository(Category)

    const category = await repo.findOne(id)

    if(!category) {
      return new Error(`Category does not exists!`)
    }

    category.name = name ? name : category.name //Se tiver algo na requisição que afeta name, então será atribuído name, caso contrário, manterá o antigo.
    category.description = description ? description : category.description //Se tiver algo na requisição que afeta description, então será atribuído description, caso contrário, manterá o antigo.

    await repo.save(category)

    return category
  }
}