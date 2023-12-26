const express = require("express")
const Outing  = require('../models/outingModel')
const {
    getOuting,
    getOutings,
    createOuting,
    deleteOuting,
    updateOuting
} = require('../controllers/outingController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//Debug Route
//router.route("/").get((req, res) => res.send("Hello World!"))
router.get('/', getOutings) 

router.get('/:id', getOuting) 

router.post('/', createOuting) 

router.delete('/:id', deleteOuting) 

router.patch('/:id', updateOuting) 

module.exports = router 