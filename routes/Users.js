const express= require('express')
const router = express.Router()
const userControllers = require('../controlers/Users')


router.post("/create",userControllers.register)
router.get("/show",userControllers.getUser)
router.put("/edit/:userId",userControllers.updateUser)
router.delete("/del/:userId",userControllers.deleteUser)
router.get("/show/:userId",userControllers.deleteUser)

module.exports = router;
