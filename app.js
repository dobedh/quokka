import express from "express"
const app = express()

const handleHome = (req,res) => res.send("Hello Quokka :)")

app.get("/", handleHome)


export default app

