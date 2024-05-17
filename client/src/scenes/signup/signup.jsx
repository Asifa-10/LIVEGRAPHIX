import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { images } from "../../assets";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import axios from 'axios'
import emailjs from '@emailjs/browser'


// import Modal from 'react-modal';
// const EmailValidator = require('email-validator');

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [Mailloading, setMailLoading] = useState(false);
    // const [access, setAccess] = useState();
    // const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const emailRef = useRef();
    const nameRef = useRef();
    const msgRef = useRef();

    useEffect(() => emailjs.init('7DR1C09nfxgfZ2HIp'), []);

    const sendEmail= async ()=>{

        const serviceId = 'service_98tmkqf';
        const templateId = 'template_wiseaea';
        try {
          setMailLoading(true);
          await emailjs.send(serviceId, templateId, {
        //    name: nameRef.current.value,
           recipient: emailRef.current.value
            // message: msgRef.current.value
          });
          alert("email successfully sent check inbox");
        } catch (error) {
          console.log(error);
        } finally {
          setMailLoading(false);
        }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        axios.post('http://localhost:3001/register', {name, email, age, phoneNo, password})
        .then(result => {console.log(result)
                // navigate('/sigin')
        })
        .catch(err => console.log(err))


        const res= await fetch("http://localhost:3001/email",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name:name,
                email:email,
                age:age,
                phoneNo:phoneNo,
                password:password
            })
        });

        const data = await res.json();
        console.log(data);

        if (data.status === 200 ) {
            console.log(data)
        } else {
            console.log("error")
           
        }

        

        sendEmail();
    }
   
    return (
        <>
       
            <section class="vh-90 ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 ">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-3 pt-5 pt-xl-0 ">
                                <form style={{ width: "25rem" }} onSubmit={handleSubmit}>
                                    <h3 class="text-center text-white text-3xl font-bold pt-3 mt-4" style={{ letterSpacing: "1px;" }}>Sign Up</h3>
                                    <p className='text-center text-indigo-200 font-bold text-sm font-serif mb-3'>Unlock a world of possibilities, sign up and explore!</p>

                                   
                                    <div class="mt-4 font-bold mb-4">
                                        <label class="form-label text-indigo-400" for="form2Example18">Name</label>
                                        <input  name='fullName' type="name" id="form2Example18" class="form-control border-2 border-indigo-900 hover:border-4 hover:border-indigo-900 focus:border-4  font-bold focus:border-indigo-900 form-control-lg" onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                        <label class="form-label text-indigo-400" for="form2Example18">Age</label>
                                        <input  name='age' type='number' id="form2Example18" class="form-control border-2 border-indigo-900 hover:border-4 hover:border-indigo-900 focus:border-4  font-bold focus:border-indigo-900 form-control-lg" onChange={(e) => setAge(e.target.value)} required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                        <label class="form-label text-indigo-400" for="form2Example18">Phone Number</label>
                                        <input  name='age' type='number' id="form2Example18" onChange={(e) => setPhone(e.target.value)} class="form-control border-2 border-indigo-900 hover:border-4 hover:border-indigo-900 focus:border-4  font-bold focus:border-indigo-900 form-control-lg" required />
                                    </div>

                                 <div class="mt-4 font-bold mb-4">
                                                <label class="form-label text-indigo-400" for="form2Example18">Email address</label>
                                                <input ref={emailRef}  name='email'  type="email" id="form2Example18" class="form-control border-2 border-indigo-900 hover:border-4 hover:border-indigo-900 focus:border-4  font-bold focus:border-indigo-900 form-control-lg" onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                            <div class=" mt-4 font-bold mb-4">
                                        <label class="form-label text-indigo-400" for="form2Example28">Password</label>
                                        <input name='password' type="password" id="form2Example28" onChange={(e) => setPassword(e.target.value)} class="form-control border-2 border-indigo-900 hover:border-4 hover:border-indigo-900 focus:border-4  font-bold focus:border-indigo-900 form-control-lg" />
                                    </div>
                                          
                                            <button className="btn btn-lg focus:bg-green-800 hover:bg-green-800 bg-indigo-900 text-white font-bold"> SignUp </button>
                                      
                                    <div class="mb-3 pt-2">
                                        <p className='text-md font-semibold'>Already have an account? <NavLink to="/sigin" className="text-blue-700 hover:underline">Login here</NavLink></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src={images.logo}
                                alt="" class="w-100 h-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;