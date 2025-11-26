const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({ username, email, password: hashed });
    await newUser.save();

    res.status(201).json({ message: "Registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Register failed", error: err.message });
  }
});


// LOGIN-ROUTE
router.post('/login', async (req, res) => {
try{
  const {email, password, username} = req.body;
 
  

  const user =  await User.findOne({email});
  if(!user) return res.status(404).json({message: 'User not found'});

  const userName = await User.findOne({username});
  if(!userName) return res.status(404).json({message:'username not found'});

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch)return res.status(400).json({message: 'Invalid credentials'});

  // generate jwt
  const token = jwt.sign({id: user._id, email: user.email}, process.env.SECRET_KEY, {expiresIn: '1h'});

  res.status(200).json({message: 'Login successfully', token, user:{id: user._id ,email: user.email, userName: user.username}})

}catch(err){
  res.status(500).json({message: 'server error', error: err.message})

}
})


const verifyToken = require('../middlewares/authMiddleware');

router.get('/profile', verifyToken, async (req, res) => {
  res.json({message: `Welcome User`, user: req.user})
})

module.exports = router;
