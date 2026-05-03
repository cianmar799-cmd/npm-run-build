import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = 3000

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')))

// SPA routing: all routes → index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
