import UserModel from '../Models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// -------------------------------------------------------------------------

// Registration Controller Route 

// -------------------------------------------------------------------------


export const Registration = async (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    if (!username || !password || !lastName || !firstName) {
        res.json({ success: false, message: "Please Complete All the feilds which are given " })
    }
    else {
        const findUser = await UserModel.findOne({ username: username })
        if (findUser) {
            res.status(400).json({ success: false, message: "User Already exist with this email :(" })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const newUser = new UserModel({ username, password: hashPassword, firstName, lastName })
            try {
                const user = await newUser.save()
                const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_KEY, { expiresIn: "1h" })
                res.status(200).json({ token, user })
                console.log(token);
            } catch (err) {
                res.status(500).json({ message: err.message })
                console.log(err);
            }
        }
    }
}

// -------------------------------------------------------------------------

// Login Controller Route 

// -------------------------------------------------------------------------

export const Login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.json({ success: false, message: "Please Enter userName or Password to login" })
    }
    else {
        try {
            const findUser = await UserModel.findOne({ username: username })
            if (!findUser) {
                res.status(404).json({ success: false, message: "Invalid Email or Password" })
            }
            else {
                const checkPassword = await bcrypt.compare(password, findUser.password)
                if (!checkPassword) {
                    res.status(400).json("Invaild Password Or email")
                }
                else {
                    const token = jwt.sign({
                        username: findUser.username, id: findUser._id
                    }, process.env.JWT_KEY, { expiresIn: '1h' })
                    res.status(200).json({ token, user: findUser })
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

