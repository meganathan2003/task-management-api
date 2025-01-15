import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// direcly we can export the method 
export const register = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        await User.create({ name, email, password });
        res.status(201).json({ message: 'User Registerd sucessfully' });
    }
    catch (err) {
        res.status(400).json({ message: 'Registration failed', error: err.message });
    }

};


// login
export const login = async (req, res) => {

    // extract the user
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        // now check the json token
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
        res.status(200).json({ message: 'login done', 'token': token });
    }

    catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
}