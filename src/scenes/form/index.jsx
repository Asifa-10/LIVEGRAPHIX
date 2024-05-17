import { useState, useEffect} from "react";
import { Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios'

const Form = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [address, setAdd] = useState("");
  const [isSidebar, setIsSidebar] = useState(true);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }, [])

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const FormSubmit = (e) =>{
    e.preventDefault()

    axios.post('http://localhost:3001/details', {name,email,age,address,city})
    .then(result => {
      console.log(result)
    })
    .catch(err => console.log(err))
  }
  return (
    <>
    <div className="app">
      <Sidebar isSidebar={isSidebar} /> 
      <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
    {
        loading ? <div className="flex justify-center p-5 -mt-20 mb-10 h-full">
          <ClipLoader className='align-self-center' color="c7d2fe"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader" /> </div>
          :
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <section class="text-gray-600 body-font  relative">
                <div class="container  mx-auto">
                <form  onSubmit={FormSubmit}>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-1">
                            <div class="p-2 w-1/2">
                                <div class="relative text-black">
                                    <label for="name" class="leading-7 text-md text-indigo-800 font-bold">Name</label>
                                    <input  type="text" id="name" onChange={(e) => setName(e.target.value)}  name="name" class="w-full text-sm bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4  font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative text-indigo-800">
                                    <label for="email" class="leading-7 text-md font-bold ">Email</label>
                                    <input  type="email" id="email" name="useremail" onChange={(e) => setEmail(e.target.value)}  class="text-sm w-full  bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4 font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative text-indigo-800">
                                    <label for="email" class="leading-7 text-md font-bold ">Age</label>
                                    <input  type="number" id="age" name="useremail" onChange={(e) => setAge(e.target.value)}  class="text-sm w-full  bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4 font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative text-indigo-800">
                                    <label for="email" class="leading-7 text-md font-bold ">Address</label>
                                    <input  type="text" id="add" name="useremail" onChange={(e) => setAdd(e.target.value)}  class="text-sm w-full  bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4 font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative text-indigo-800">
                                    <label for="email" class="leading-7 text-md font-bold ">City</label>
                                    <input  type="text" id="no" name="useremail" onChange={(e) => setCity(e.target.value)}  class="text-sm w-full  bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4 font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            
                            <div class="p-2 w-full">
                                <button type='submit'  class="flex ml-60 btn btn-lg hover:bg-green-800 bg-indigo-950 text-white font-bold">
                                <span className='text-lg'>Send</span> 
                                <svg className='ml-1 mt-1' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" height="20px">
                                <path d="M3 3l3 9-3 9 19-9zM6 12h16" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
    </Box>
    }
    </main>
    </div>
    </>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "" ,
};

export default Form;