import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
const router = express.Router();


router.post('/signup', async (req, res) => {
  try {
    console.log('10');
    const { name, email, password } = req.body;

    // Check duplicate email
    const existEmail = await User.findOne({ email });
    if (existEmail)
      return res.json({ success: false, message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashed });

    // Create cookie
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax", // Cookie is allowed across your frontend + backend in localhost.
      secure: false,   // Required for localhost (no HTTPS).
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});



router.post("/login", async (req, res) => {
    try {
        console.log(1);
        const { email, password } = req.body;
        console.log(2);
        const user = await User.findOne({ email });
        if (!user) return res.json({ success: false, message: "User not found" });

        console.log(2);
        console.log(user);
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ success: false, message: "Wrong password" });

        // CREATE JWT TOKEN
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        if(token) console.log(token);

        // SEND TOKEN AS COOKIE ===========================
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ success: true, message: "Login successful" });

    } catch (err) {
        res.json({ success: false, message: err.message });
    }
});

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});

router.get('/me', async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const user = await User.findById(token).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;  