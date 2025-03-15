const express = require("express");
const router = express.Router();
const {getContact, 
    postContact, 
    findContact, 
    updateContact, 
    deleteContact} = require ("../controller/donorController");

router.route("/").get(getContact);

router.route("/").post(postContact);

router.route("/:id").get(findContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;