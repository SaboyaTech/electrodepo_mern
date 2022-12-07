import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import colors from 'colors'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/products', productRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


// Error Middlewares - Will over-write the default Error handling
app.use(notFound)

// Handles 200 code front-end
// But a 500 error code (server error)
app.use(errorHandler)

app.listen(
	PORT,
	console.log(
		`\nSERVER RUNNING ON ${process.env.NODE_ENV} mode on port: ${PORT} Launch it here --> http://localhost:${PORT}\n`
			.yellow.bold
	)
)
