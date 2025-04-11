const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/userSchema');
const JWT_SECRET = process.env.JWT_SECRET;


module.exports.signup = async (req, res) => {
    try {
        const { username, email, password, role, phoneno, image, location, city, worktype, typeofContractor } = req.body;

        if (!["user", "admin", "contractor"].includes(role)) {
            return res.status(400).json({ message: 'Invalid role' });
        }

        let existingUser;
        if (role === 'user') {
            existingUser = await User.findOne({ phoneno });
        }
        else if (role === 'contractor') {
            existingUser = await Contractor.findOne({ phoneno });
        }
        else if (role === 'admin') {
            existingUser = await Admin.findOne({ phoneno });
        }
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let newUser;
        if (role === 'user') {
            newUser = new User({
                username,
                email,
                password: hashedPassword,
                role,
                phoneno,
            });
        }
        else if (role === 'contractor') {
            newUser = new Contractor({
                username,
                email,
                password: hashedPassword,
                role,
                phoneno,
                image,
                location,
                city,
                worktype,
                typeofContractor
            });
        }
        else if (role === 'admin') {
            newUser = new Admin({
                username,
                email,
                password: hashedPassword,
                role,
                phoneno,
            });
        }

        await newUser.save();

        // Generate JWT
        const token = jwt.sign(
            {
                userId: newUser._id,
                role: newUser.role,
                email: newUser.email,
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({ message: `${role} created successfully`, token, user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'password is incorrect' });
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.status(200).json({ token, user, message: "User logged In successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}