import {React, useState, useEffect, useRef} from 'react';
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";
import emailjs from '@emailjs/browser'
import axios from 'axios';

const ContactUs = () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const [loading, setLoading] = useState(false);
    const [Mailloading, setMailLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const emailRef = useRef();
    const nameRef = useRef();
    const msgRef = useRef();

    useEffect(() => emailjs.init('7DR1C09nfxgfZ2HIp'), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = 'service_98tmkqf';
        const templateId = 'template_xeqx56h';
        try {
          setMailLoading(true);
          await emailjs.send(serviceId, templateId, {
           name: nameRef.current.value,
           recipient: emailRef.current.value,
            message: msgRef.current.value
          });
          alert("email successfully sent check inbox");
        } catch (error) {
          console.log(error);
        } finally {
          setMailLoading(false);
        }
      };

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }, [])

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
            <section class="text-gray-600 body-font  relative">
                <div class="container  mx-auto">
                <form  onSubmit={handleSubmit}>
                <div class="flex flex-col text-center w-full mb-5">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-white">CONTACT US</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-200 font-bold font-serif">Questions? We're just a message away!</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-1">
                            <div class="p-2 w-1/2">
                                <div class="relative text-black">
                                    <label for="name" class="leading-7 text-md text-indigo-800 font-bold">Name</label>
                                    <input ref={nameRef} type="text" id="name" onChange={(e) => setName(e.target.value)}  name="name" class="w-full text-sm bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4  font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative text-indigo-800">
                                    <label for="email" class="leading-7 text-md font-bold ">Email</label>
                                    <input ref={emailRef} type="email" id="email" name="useremail" onChange={(e) => setEmail(e.target.value)}  class="text-sm w-full  bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4 font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full mt-3">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-md font-bold text-indigo-800">Message</label>
                                    <textarea ref={msgRef} id="message" name="message" onChange={(e) => setMsg(e.target.value)} class="w-full  bg-opacity-50 rounded  border-2 border-indigo-950 hover:border-4 hover:border-indigo-950 focus:border-4  font-bold focus:border-indigo-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-32"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button type='submit' disabled={Mailloading} class="flex ml-60 btn btn-lg hover:bg-green-800 bg-indigo-950 text-white font-bold">
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
    }
            </main>
    </div>
        </>
    );
};

export default ContactUs;