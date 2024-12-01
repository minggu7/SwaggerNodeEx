const express = require('express');
const { swaggerUi, specs } = require('./swagger/swagger');
const userRouter = require('./routers/users/users');
const app = express();

// Swagger UI 설정
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// 라우터 연결
app.use('/users', userRouter);

// Express 서버 설정
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Express server is running on port 3000');
  console.log('Swagger UI is available on http://localhost:3000/api-docs');
});