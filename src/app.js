import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const tweets = [
  {
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!"
  }
]

app.get("/tweets", (req, res) => {
  res.send(tweets)
})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))