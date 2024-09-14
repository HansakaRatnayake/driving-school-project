const express = require('express');
const bookingController = require('../controller/booking.controller');
const {saveBooking,findAllBookings,updateBooking,deleteBooking} = bookingController;

 
const router = express.Router();


router.get('/',findAllBookings);
router.post('/', saveBooking);
router.put('/', updateBooking);
router.delete('/:bookingId', deleteBooking);




module.exports = router;