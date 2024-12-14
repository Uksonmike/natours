const fs = require('fs');
const express = require('express');
const app = express();

const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');

//middleware
app.use(express.json());
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
