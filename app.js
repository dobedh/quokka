import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import routes from "./routes"
import globalRouter from "./router/globalRouter"
import { localMiddleware } from "./localMiddleware"

const app = express()

app.use(helmet())
app.use(morgan("dev"))
app.use(bodyParser())
app.use(cookieParser())

app.use(localMiddleware)

app.use(routes.home, globalRouter)


export default app

