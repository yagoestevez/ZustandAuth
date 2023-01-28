import express from 'express'
import authRoutes from './routes/auth.routes'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
app.use(authRoutes)

export { app }
