import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

// @desc     auth user & get token
// @route    POST /api/user/login
// @access   Public
const authUser = asyncHandler(async (req, res) => {

    // try {
        const { email, password } = req.body
        // const user = await User.findOne({ email })
        // if(user) { 
            res.send(
                { 
                    email, 
                    password 
                }
            ) 
    //     }
    // } catch (error) {
    //     console.log(error)
    // }
})


export { authUser }