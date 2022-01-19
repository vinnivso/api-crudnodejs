import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

interface VideoUpdateRequest {
  id: string
  name: string
  description: string
  duration: number
  category_id: string
}

export class UpdateVideoService {
  async execute({id, name, description, duration, category_id}: VideoUpdateRequest) {
    const repo = getRepository(Video)

    const video = await repo.findOne(id)

    if(!video) {
      return new Error(`Video does not exists!`)
    }

    video.name = name ? name : video.name //Se tiver algo na requisição que afeta name, então será atribuído name, caso contrário, manterá o antigo.
    video.description = description ? description : video.description //Se tiver algo na requisição que afeta description, então será atribuído description, caso contrário, manterá o antigo.
    video.duration = duration ? duration : video.duration //Se tiver algo na requisição que afeta duration, então será atribuído duration, caso contrário, manterá o antigo.
    video.category_id = category_id ? category_id : video.category_id //Se tiver algo na requisição que afeta category_id, então será atribuído category_id, caso contrário, manterá o antigo.

    await repo.save(video)

    return video
  }
}