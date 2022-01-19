import { Router } from "express"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { DeleteCategoryController } from "./controllers/DeleteCategoryController"
import { GetAllCategoryController } from "./controllers/GetAllCategoryController"
import { UpdateCategoryController } from "./controllers/UpdateCategoryController"

const routes = Router()

/**
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
*/


routes.post("/categories", new CreateCategoryController().handler)
routes.get("/categories", new GetAllCategoryController().handler)
routes.delete("/categories/:id", new DeleteCategoryController().handler)
routes.put("/categories/:id", new UpdateCategoryController().handler)

export {routes}