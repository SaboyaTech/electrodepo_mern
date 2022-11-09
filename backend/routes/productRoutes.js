import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../model/productModel.js'

const router = express.Router() //Creates a new router object

// @desc Fetch all products
// @route GET /api/products
// @acess Public
router.get(
	'/',
	asyncHandler(async (req, res, next) => {
		const products = await Product.find({})

		res.json(products)
		console.log(products)
	})
)

// @desc Fetch single products
// @route GET /api/products/:id
// @acess Public
router.get(
	'/:productId',
	asyncHandler(async (req, res, next) => {
		const product = await Product.findById(req.params.productId)

		if (product) {
			res.json(product)
		} else {
			res.status(404)
			throw new Error('Product not found')
		}
	})
)

export default router
