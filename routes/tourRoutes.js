const express = require('express');
const tourController = require('../controllers/tourController');
const router = express.Router();

//an aliase route - manipulated with a middleware
router
  .route('/top-5-cheap')
  .get(tourController.aliaseGetTopFive, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
