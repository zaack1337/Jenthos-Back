import express from "express"
import {router} from "./routes/routes.js"
const app = express()
app.use(router)
const port = 5000

app.get("/secret", (req, res) => {res.send("tu leu o codigo fonte né seu gay")})

app.listen(port, () => {
    console.log("server is running 🚀")
})

