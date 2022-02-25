import express from 'express'
import Database from 'better-sqlite3'
import cors from 'cors'

import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

const db = new Database('./data.db', { verbose: console.log })

const getAllDjs = db.prepare(`
SELECT * FROM djs;
`)

app.get('/djs', (req, res) => {
  const djs = getAllDjs.all()
  res.send(djs)
})

app.listen(process.env.PORT, () => {
  console.log(`
  Server up: ${process.env.PORT}
  My secret is: ${process.env.SECRET}
  `)
})
