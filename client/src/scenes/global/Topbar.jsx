import React, {useEffect, useState, useRef} from 'react';
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { images } from "../../assets";
import { NavLink, useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import DialogBox from "../../components/DialogBox";
import Modal from 'react-modal';
import emailjs from '@emailjs/browser'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [dltConfrmDialog, setDltConfrmDialog] = useState(false);
    const [deleteAcc, setDeleteAcc] = useState(false);
    const [Mailloading, setMailLoading] = useState(false);

    const emailRef = useRef();
    const nameRef = useRef();

    let data = localStorage.getItem('user');
    data= JSON.parse(data)

    useEffect(() => emailjs.init('5wGPARGfjnTCBEHQ-'), []);

    const sendEmail= async ()=>{

        const serviceId = 'service_7a85mbr';
        const templateId = 'template_9l6qxdo';
        try {
          setMailLoading(true);
          await emailjs.send(serviceId, templateId, {
           name: data.name,
           recipient: data.email
          });
        } catch (error) {
          console.log(error);
        } finally {
          setMailLoading(false);
        }
    }

    const handleClose = () => {
      setDltConfrmDialog(false);
    };

    const navigate = useNavigate();

    const ConfirmDeletion= ()=>{
        setDeleteAcc(true);
        handleClose()
        DeleteAcc();
    }

    const DltAccDialogBox= ()=>{
        toggleModal()
        setDltConfrmDialog(true);
    }
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const DeleteAcc = ()=>{
        sendEmail()
        navigate("/sigin");
    }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box  display="flex"
        borderRadius="3px">
        <NavLink to="/home">
        <img src={images.logo} alt='' width={50} height={10} className='rounded-lg -ml-3' /> </NavLink>
      </Box>
      
      <Box position="static" display="flex">
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {dltConfrmDialog && (
            <DialogBox heading="Are you sure you want to delete your account?" showNotes={true} notes="Once Account is Deleted then all your queries, answer and comments will also be deleted automatically." btnData="Yes" cancelBtn={true} cancelBtnData="No" btnFunct={ConfirmDeletion} showDialogBox={true}/>    
      )}</Modal>
      <Tooltip title="Mode">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        </Tooltip>
        <Tooltip title="Updates">
        <IconButton>
        <button class="" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false"><NotificationsOutlinedIcon />
            </button>
            <ul class="dropdown-menu text-center py-2 text-white hover:text-black font-bold bg-indigo-900" aria-labelledby="dropdownMenuButton">
                <li>
                    <NavLink to="https://mail.google.com/mail/u/0/#inbox" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg'>Check Email</button>
                    </NavLink>
                </li>
                
            </ul> 
        </IconButton>
        </Tooltip>
        <Tooltip title="About">
        <IconButton>
        <button class="" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false"><SettingsOutlinedIcon />
            </button>
            <ul class="dropdown-menu text-center py-2 text-white hover:text-black font-bold bg-indigo-900" aria-labelledby="dropdownMenuButton">
                <li>
                    <NavLink to="/home" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg'>Home</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg'>About</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg' >Services</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg' >Contact</button>
                    </NavLink>
                </li>
                
            </ul>  
        </IconButton>
        </Tooltip>
        <Tooltip title="Profile">
        <IconButton>
            <button class="" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false"><PersonOutlinedIcon />
            </button>
            <ul class="dropdown-menu text-center py-2 text-white hover:text-black font-bold bg-indigo-900" aria-labelledby="dropdownMenuButton">
                <li>
                    <NavLink to="/profile/:id" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg'>My Profile</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/editProfile" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg'>Edit Profile</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sigin" class="dropdown-item" href="a">
                        <button className='hover:bg-white p-2 rounded-lg' >Logout</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink class="dropdown-item" href="a">
                        <button className=' hover:text-red-600 hover:bg-white p-2 rounded-lg'onClick={DltAccDialogBox} >Delete Account</button>
                    </NavLink>
                </li>
            </ul>  
        </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;