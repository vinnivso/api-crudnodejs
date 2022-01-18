import { Router } from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { GetAllCategoryController } from "./controllers/GetAllCategoryController"

const routes = Router()

routes.post("/categories", new CreateCategoryController().handler)
routes.get("/categories", new GetAllCategoryController().handler)

export {routes}