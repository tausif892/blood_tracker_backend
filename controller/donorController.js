const asyncHandler = require("express-async-handler");
const Donor = require("../models/donorSchema");
const { MongoDecompressionError } = require("mongodb");

const getContact = asyncHandler(async (req,res) => {
    const contact = await Donor.find();
    res.status(200).json(contact);
});

const postContact = asyncHandler(async (req,res) => {
    console.log(`The body of the request is `, req.body);
    const {name, phone_number,age,blood_group,gender,alternate_contact} = req.body;
    if (!name||!phone_number||!age||!blood_group||!gender||!alternate_contact){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Donor.create({
        name,
        age,
        blood_group,
        phone_number,
        gender,
        alternate_contact
    });
    res.status(200).json(contact);
});

const findContact = asyncHandler(async (req,res) => {
    const contact = await Donor.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("The requested person was not found");
    }
    res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req,res) => {
    const contact = await Donor.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("The person does not exist");
    }

    const update = await Donor.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(update);
});

const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Donor.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("The donor does not exist");
    }
    const del = await Donor.deleteOne({_id: req.params.id});
    res.status(200).json(del);
});

module.exports = {getContact, postContact, findContact, updateContact, deleteContact};