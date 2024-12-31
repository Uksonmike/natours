const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'tour name is required'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'tour duration is required'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'tour group size is required'],
  },
  difficulty: {
    type: String,
    required: [true, 'tour difficulty is required'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'tour price is required'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'tour summary is required'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'tour cover image is required'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    // select: false, // toggle this to either send or not send to the client
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tours', tourSchema);

module.exports = Tour;
