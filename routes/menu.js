//router is sending to a specific controller
const menuController= require('../controllers/menu')
const express = require('express')
const { route } = require('.')
const router = express.Router()
//add controllers

//const { ensureAuth, ensureGuest } = require('../middleware/auth')

//GET routes
router.get('/', menuController.getIndex)
//update menu
router.get('/:id', menuController.editMenu)
router.get('/delete/:id', menuController.deleteMenu)

//POST routes
//saving menu items
router.post('/save', menuController.saveMenu)
router.post('/new', menuController.newMenu)





module.exports = router