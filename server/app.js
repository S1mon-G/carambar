import express from "express"
import cors from "cors"
import jokeRoutes from "./route/jokeRoute.js"

const app = express()


app.use(express.json())
app.use(cors({origin:["http://localhost:5173"]}))

app.use("/jokes", jokeRoutes);

export default app