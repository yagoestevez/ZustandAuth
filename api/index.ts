import { app } from './app'
import { router } from './routes/auth.routes'

const PORT = process.env.PORT || 3000

app.use(router)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
