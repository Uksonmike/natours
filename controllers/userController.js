exports.getAllUsers = (req, res) => {
  res.status(505).json({
    status: 'failed',
    message: 'route not created yet',
  });
};

exports.getUser = (req, res) => {
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

exports.createUser = (req, res) => {
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

exports.updateUser = (req, res) => {
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

exports.deleteUser = (req, res) => {
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
