const fs = require('fs');
const express = require('express');
const app = express();

//middleware

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

//route handlers

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
};

const getTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((el) => el.id === id);
  !tour
    ? res.status(404).json({
        status: 'failed',
        message: 'invalid id',
      })
    : res.status(200).json({
        status: 'success',
        data: {
          tour: tour,
        },
      });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(200).json({
        status: 'success',
        data: { newTour },
      });
    }
  );
};

const updateTour = (req, res) => {
  if (Number(req.params.id > tours.length)) {
    return res.status(404).json({
      status: 'failed',
      message: 'invalid id',
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'tour has been successfully updated',
  });
};

const deleteTour = (req, res) => {
  if (Number(req.params.id > tours.length)) {
    return res.status(404).json({
      status: 'failed',
      message: 'invalid id',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(505).json({
    status: 'failed',
    message: 'route not created yet',
  });
};

const getUser = (req, res) => {
  // const id = Number(req.params.id);
  // const tour = tours.find((el) => el.id === id);
  // !tour
  //   ? res.status(404).json({
  //       status: 'failed',
  //       message: 'invalid id',
  //     })
  //   : res.status(200).json({
  //       status: 'success',
  //       data: {
  //         tour: tour,
  //       },
  //     });
  res.status(505).json({
    status: 'failed',
    message: 'route not created yet',
  });
};

const createUser = (req, res) => {
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(200).json({
  //       status: 'success',
  //       data: { newTour },
  //     });
  //   }
  // );
  res.status(500).json({
    status: 'failed',
    message: 'route not created',
  });
};

const updateUser = (req, res) => {
  // if (Number(req.params.id > tours.length)) {
  //   return res.status(404).json({
  //     status: 'failed',
  //     message: 'invalid id',
  //   });
  // }
  res.status(500).json({
    status: 'failed',
    message: 'route not created',
  });
};

const deleteUser = (req, res) => {
  // if (Number(req.params.id > tours.length)) {
  //   return res.status(404).json({
  //     status: 'failed',
  //     message: 'invalid id',
  //   });
  // }
  res.status(500).json({
    status: 'failed',
    message: 'route not created',
  });
};

// routes

app.route('/api/v1/tours').get(getAllTours).post(createTour);
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
