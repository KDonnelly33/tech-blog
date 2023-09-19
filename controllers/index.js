const router = require('express').Router();
const dashboardRoutes = require('./dash-routes.js');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;


