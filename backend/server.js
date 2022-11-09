import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import colors from 'colors'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.send('REST API is running...')
})

app.use('/api/products', productRoutes)

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
