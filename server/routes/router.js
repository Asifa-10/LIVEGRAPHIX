const express = require("express")
const router = new express.Router();
const nodemailer = require('nodemailer');
const {getUser, getUserById}= require('../controllers/userController')


// router.route("/:id").get(getUserById);
// router.route("/teams/:_id").get(getUser);
router.post("/email",(req,res)=>{
    const {name,email,age,phoneNo,password} = req.body;

    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASSWORD
            }
        })

        const emailContent= `<div  style="background-color:#1e1b4b; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 class="heading" style="color:#dbeafe; text-align: center; margin-bottom: 30px; font:bold; font-size: 20px;"><strong> Welcome to <span style="color:white;">LIVEGRAPHIX!!</span></strong></h1>
        <p style="font-size: 18px; color:#dbeafe;">Dear <span style="color:#60a5fa; font-weight: bold;">${name}</span>,</p>
        <p style="font-size: 16px; color:#dbeafe;">We are delighted to welcome you to <strong style="color:white;">LIVEGRAPHIX!</strong> This email is to confirm that your account has been successfully created.</p>
        <h2 style="color:white; margin-top: 30px;margin-bottom: 3px; font-weight: bold;">Account Details:</h2>
        <ul style="list-style-type: none; padding-left:0;">
          <li style="font-size: 16px; margin-bottom: 10px; color:#dbeafe; font-weight: bold"><strong style="color:#60a5fa;">Name: </strong> ${name}</li>
          <li style="font-size: 16px; margin-bottom: 10px; color:#dbeafe; font-weight: bold"><strong style="color:#60a5fa;">Email address:</strong> ${email}</li>
          <li style="font-size: 16px; margin-bottom: 10px; color:#dbeafe; font-weight: bold"><strong style="color:#60a5fa;">Age:</strong> ${age}</li>
          <li style="font-size: 16px; margin-bottom: 10px; color:#dbeafe; font-weight: bold"><strong style="color:#60a5fa;">Phone number:</strong> ${phoneNo}</li>
          <li style="font-size: 16px; margin-bottom: 10px; color:#dbeafe; font-weight: bold"><strong style="color:#60a5fa;">Password:</strong> ${password}</li>
        </ul>
        <p style="font-size: 16px; color:#dbeafe;">Your account grants you access to a wide range of features and services, designed to enhance your <strong style="color:white;">LIVEGRAPHIX</strong> experience.</p>
        <p style="font-size: 16px; color:#dbeafe;">To get started, we recommend logging in to your account and exploring the various sections. If you have any questions or need assistance, our support team is here to help.</p>
        <p style="font-size: 16px; color:#dbeafe;">Thank you for choosing <strong style="color:white;">LIVEGRAPHIX</strong> . We look forward to serving you!</p>
        <p  style="font-size: 16px; margin-top: 30px; text-align: center; color:#dbeafe;">Best regards,</p>
        <p  style="font-size: 16px; margin-top: 5px; text-align: center; color:#dbeafe;">The <strong style="color:white;">LIVEGRAPHIX</strong> Team</p>
</div>`
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: `Account Created`,
            html: emailContent
        }

        transporter.sendMail(mailOptions,(err,info)=>{
            if (err) {
                console.log("Error",err)
            }else{
                console.log("Email sent",info.response);
                res.status(201).json({status:201,info})

            }
        })

    }catch(err){

    }
})

module.exports= router