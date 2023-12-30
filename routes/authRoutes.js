const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {
  validateName,
  validateEmail,
  validatePassword
} = require('../utils/validator.js');
let users = {};

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Periksa apakah pengguna sudah ada
    const userExist = users.hasOwnProperty(email);

    if (userExist) {
      return res.status(400).send("User already exists");
    }

    if(!validateName(name)){
      res.send("Invalid name");
    }

    if(!validateEmail(email)){
      res.send("Invalid email");
    }

    if(!validatePassword(password)){
      res.send("Invalid password");
    }

    if(!validateName(name)){
      res.send("Invalid name");
    }

    const Epassword = await bcrypt.hash(password, 10);

    console.log('password', Epassword);

    // Simpan informasi pengguna
    users[email] = { name, password : Epassword };
    console.log(name, email, Epassword);

    // Kirim respons ke klien
    res.status(200).send("Sign up successful!");
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
