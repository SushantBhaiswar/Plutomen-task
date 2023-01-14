const express = require("express")
const { Createcontact, SearchContactlist } = require("./controllers/contactcontroller")
const { Createuser, getcontactlist, filterUser } = require("./controllers/usercontrollers")
const Router = express.Router()

Router.post("/createuser", Createuser)
Router.get("/filterUser/:id", filterUser)
Router.get("/getcontactlist/:userid", getcontactlist)

Router.post("/createcontact", Createcontact)
Router.get("/SearchContactlist/:key", SearchContactlist)

module.exports = Router