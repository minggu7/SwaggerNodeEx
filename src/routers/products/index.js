const router = require("express").Router()
const products = require("./products")

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: 상품 추가 수정 삭제 조회
 */
router.use("/products", products) //기본적으로 /products 경로를 설정

module.exports = router
