import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const tweets = []
const user = []

app.get("/tweets", (req, res) => {
  res.send(tweets)
})

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body
  user.push({ username, avatar })
  res.send("Ok")
})

app.post("tweets", (req, res) => {
  const { username, tweet } = req.body
  const userCadastrado = user.find((u) => u.username === username)

  if (!userCadastrado) {
    tweets.push({ username, tweet })
    res.send("Ok")
  } else {
    res.send("UNAUTHORIZED")
  }
})

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))