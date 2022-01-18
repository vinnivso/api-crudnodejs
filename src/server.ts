import "reflect-metadata"
import cors from "cors"
import express from "express"
import { routes } from "./routes"
import "./database"

export const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Server is running on port ${port}`))