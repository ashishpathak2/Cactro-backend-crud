const jwt = require('jsonwebtoken');
const { User } = require('../models');
const {JsonWebTokenUtils} = require('../utils');



// User Registration
const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: 'User already exists' });
    }

    const user = await User.create({ email, password });
    const token = JsonWebTokenUtils.generateToken(user._id);

    res.status(201).json({ 
      success: true,
      message: 'User created successfully',
      user: {
        email: user.email,
      },
      token 
    });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      msg: 'Something went wrong. Please try again.' 
    });
  }
};

// User Login
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    const valid = user && await user.comparePassword(password);

    if (!valid) {
      return res.status(401).json({ msg: 'Invalid email or password' });
    }

    const token = JsonWebTokenUtils.generateToken(user._id);
    res.status(200).json({ 
      success: true,
      message: 'Login successful',
      user: {
        email: user.email,
      },
      token
     });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      msg: 'Something went wrong. Please try again.' 
    });
  }
};

module.exports = {
  register,
  login,
};
