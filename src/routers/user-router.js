const express = require('express')
const router = express.Router()

router.get('/getAll', (req, res) => {
    res.send('About user')}
)
router.get('/getById/:userId', controller.getById)
router.get('/getByUsername/:username', controller.getByUsername)

module.exports = router