import User from "../models/userModel.js";
import handler from 'express-async-handler'
import {validationResult} from 'express-validator'

export const registerUser = handler(async(req,res)=>{
    try {
        const {firstName,lastName,email,password} = req.body
        console.log(req.body)
    } catch (error) {
        
    }
})