//router is sending to a specific controller
const indexController= require('../controllers/index')
const express = require('express')
const router = express.Router()
//add controllers

//const { ensureAuth, ensureGuest } = require('../middleware/auth')

//add routes

//hm pg   get request, go to root pg, use the indexController with the getHome method on it
router.get('/', indexController.getHome)

//search bar
router.post('/q', indexController.getSearch)

module.exports = router