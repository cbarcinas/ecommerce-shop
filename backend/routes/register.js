// imports
const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require("express");
const { User } = require("../models/user");

// create router

const router = express.router();

// Create endpoints

router.post("/", async (req, res) => {
  // Create Validation Schema
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  // Verify incoming data matches schema Validation
  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // If the user email currently exists then we need to let the
  // new user know that that email already exists
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already exists..");

  // Create user document if user does not exist
  user = new User({
    name: req.body.name,
    email: req.body.email,
    // note that our password is raw text which needs to be
    // hashed so that we do not need to store it in a db.
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);

  await bcrypt.hash(user.password, salt);

  await user.save();
});
