const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: 상품 관리 API
 */

/**
 * @swagger
 * /products/list:
 *   get:
 *     summary: 상품 목록 조회
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "상품 목록입니다."
 * 
 * /products/input:
 *   post:
 *     summary: 상품 추가
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "상품이 추가되었습니다."
 */

router.get("/list", (req, res) => {
  res.json({ message: "상품 목록입니다." });
});

router.post("/input", (req, res) => {
  res.json({ message: "상품이 추가되었습니다." });
});

module.exports = router;
