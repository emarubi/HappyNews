/*
 routes creation
*/
// require express server created in app.js
const express = require('express');

const userRouter = require('./userRouter');
const articleRouter = require('./articleRouter');
const activityRouter = require('./activityRouter');
const authController = require('../controllers/authController');
const errorController = require('../controllers/errorController');
const auth = require('../middlewares/auth');
const userSchema = require('../validation/schema/user');
const { validateBody } = require('../validation/validationMiddleware');

const router = express.Router();

router.use('/user', userRouter);
router.use('/article', articleRouter);
router.use('/activity', activityRouter);

// "auth" routes
router.post('/login', authController.handleLoginForm);
// router.post('/signup', authController.handleSignForm);
router.post('/signup', validateBody(userSchema), authController.handleSignForm);

router.use(auth);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;