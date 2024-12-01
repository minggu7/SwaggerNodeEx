const router = require("express").Router()
const users = require("./users")

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
router.use("/users", users)

module.exports = router