import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

const app = express()

app.use(helmet())
app.use(morgan("dev"))
app.use(bodyParser())
app.use(cookieParser)


const handleHome = (req,res) => res.send("Hello Quokka :)")

app.get("/", handleHome)


export default app

