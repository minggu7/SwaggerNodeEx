const router = require("express").Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 관리 API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: 유저 목록 조회
 *     tags: [Users]
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
 *                   example: "유저 목록입니다."
 */
router.get("/", (req, res) => {
  res.json({ message: "유저 목록입니다." });
});

module.exports = router;
