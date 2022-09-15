//router is sending to a specific controller
const loginController= require('../controllers/login')
const express = require('express')
const router = express.Router()
//add controllers

//const { ensureAuth, ensureGuest } = require('../middleware/auth')





//GET Reqs Route (getting pgs)

//get login pg, our server.js was already listening for the /login so once it gets to the router all it needs is /
//go to the loginController tha has the .Login method
router.get('/', loginController.Login)

//sign up route     same controller with diff method
router.get('/new-acct', loginController.getSignUp)

//logout
router.get('/logout', loginController.getLogout)


//Post routes (submitting info)
router.post('/', loginController.postLogin)
router.post('/new', loginController.postSignUp)


module.exports = router