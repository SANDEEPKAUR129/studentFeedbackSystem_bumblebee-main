const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const adminController = require('../controllers/adminController.js')
const {isLoggedIn} = require('../middlewares/isLoggedIn.js');


//STUDENT ROUTES
router.get('/fetchUsers', userController.fetchUsers);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/signout', userController.signout);
router.get('/fetchdetail',isLoggedIn, userController.fetchDetail);
router.get('/dashboard',isLoggedIn, userController.dashboard);
router.put('/modifyUser/:id', userController.modifyUser);

router.post('/comment/:postId', userController.comment);

//ADMIN ROUTES
router.post('/admin/createfeed', adminController.createfeed); 
router.get('/admin/fetchpost', adminController.fetchpost); 
router.get('/admin/fetchUsers', userController.fetchUsers);
router.get('/admin/comments', adminController.comments);












module.exports = router;