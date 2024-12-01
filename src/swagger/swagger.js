const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")
const path = require('path');

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "API 문서",
      description: "API 설명",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [
    path.join(__dirname, '../routers/**/*.js')  // 모든 라우터 파일을 찾을 수 있도록 설정
  ],
}

const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }