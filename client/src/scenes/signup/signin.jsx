import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { images } from "../../assets";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import DialogBox from "../../components/DialogBox";
import Modal from 'react-modal';
import User from '../User/userProfile'

const SignIn = () => {
    const {id}= useParams();

    
    // console.log(id);
    const [email, setEmail] = useState();
    const [user, setUser] = useState([]);
    const [password, setPassword] = useState();
    const [dltConfrmDialog, setDltConfrmDialog] = useState(false);
    const [ErrConfrmDialog, setErrConfrmDialog] = useState(false);
    const [err, setErr] = useState("");
    const handleClose = () => {
      setDltConfrmDialog(false);
    };
    const navigate = useNavigate();

    const ConfirmDeletion= ()=>{
        // setDeleteAcc(true);
        handleClose()
        DeleteAcc();
    }
    const ConfirmErr= ()=>{
        // setDeleteAcc(true);
        handleClose()
        // ErrFunct();
    }

    const DltAccDialogBox= ()=>{
        toggleModal()
        setDltConfrmDialog(true);
    }
    const ErrDialogBox= ()=>{
        toggleModal()
        setErrConfrmDialog(true);
    }
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const DeleteAcc = ()=>{
        navigate("/home");
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password})
        .then(result => {
            console.log(result)
            if (result.status === 200) {
                setUser(result.data)
                
                alert("Login Successfully")
                // navigate('/home')
                DltAccDialogBox();
            }else{
                alert(result.data)
                ErrDialogBox();
                setErrConfrmDialog(true);
                setErr(result.data)
                // alert(result.data)
            }
                
        })
        .catch(err =>{
            console.log(err)

        })

    }

    const data = localStorage.setItem('user', JSON.stringify(user))
        console.log(dltConfrmDialog)
    // console.log(user)
    return (
        <>
            <section class="vh-90 ">
            {/* <User data={user.name}/> */}
            <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {dltConfrmDialog && (
            <DialogBox heading="Login Successfully.. Welcome to LIVEGRAPHIX!!" showNotes={false} notes="" btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={ConfirmDeletion} showDialogBox={true}/>    
      )}
        {ErrConfrmDialog && (
            <DialogBox heading="Error!!!" showNotes={true} notes={err} btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={ConfirmErr} showDialogBox={true}/>    
      )}
      </Modal>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 ">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-3 pt-5 pt-xl-0 ">
                                <form style={{ width: "25rem" }} onSubmit={handleSubmit}>
                                <h3 class="text-center text-white text-3xl font-bold pt-3 mt-5" style={{ letterSpacing: "1px;" }}>Log in</h3>
                                    <p className='text-center text-indigo-200 text-sm font-bold font-serif mb-3'>Welcome back, log in and let the journey continue!</p>

                                            <div class="mt-4 font-bold mb-4">
                                                <label class="form-label text-indigo-400" for="form2Example18" autocomplete="on">Email address</label>
                                                <input  name='email'  type="email" id="form2Example18" onChange={(e) => setEmail(e.target.value)} class="form-control border-2 border-indigo-900 hover:border-4 hover:border-indigo-900 focus:border-4  font-bold focus:border-indigo-900 form-control-lg" required />
                                            </div>
                                            <div class=" mt-4 font-bold mb-4">
                                        <label class="form-label text-indigo-400" for="form2Example28" autocomplete="on">Password</label>
                                        <input name='password' type="password" id="form2Example28" onChange={(e) => setPassword(e.target.value)} class="form-control border-2 border-indigo-900 hover:border-4 hover:border-indigo-900 focus:border-4  font-bold focus:border-indigo-900 form-control-lg" />
                                    </div>
                                    <div class="pt-1 mb-2">
                                        <button  className="btn btn-lg focus:bg-green-800 hover:bg-green-800 bg-indigo-900 text-white font-bold"> Login </button>
                                    </div>
                                    <p class="small mb-3 pb-lg-2"><a class="text-red-600 font-bold" href =" " >Forgot password?</a></p>
                                    <p className='text-md  font-semibold'>Don't have an account? <NavLink to="/" className="text-blue-700 hover:underline"> Register here</NavLink></p>
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

export default SignIn;