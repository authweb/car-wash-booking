const express = require('express');
const router = express.Router();

const clientsRoutes = require('../clients');
const employeesRoutes = require('../employees');
const servicesRoutes = require('../services');
const serviceSuppliesRoutes = require('../service_supplies');
const bookingRoutes = require('../booking');

router.use('/clients', clientsRoutes);
router.use('/employees', employeesRoutes);
router.use('/services', servicesRoutes);
router.use('/service_supplies', serviceSuppliesRoutes);
router.use('/booking', bookingRoutes);

module.exports = router;
