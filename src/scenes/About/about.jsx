import {React, useState, useEffect} from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";

const About = () =>{
    const [isSidebar, setIsSidebar] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }, [])

    return(
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
          <>
    <div class="flex flex-col text-center w-full mb-5">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-white">ABOUT US</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-200 font-bold font-serif">Our mission: Connecting seekers and knowledge providers</p>
                    </div>
            <div className="text-white font-bold ml-20 mr-10">
                <div className="mb-2 ">
                    Welcome to [Your Admin Dashboard Name], where efficiency meets simplicity. Our platform was born from a desire to streamline administrative tasks and empower businesses to focus on what matters most – growth and innovation.
                </div>
                <div className="mb-2 ">
                At [Your Admin Dashboard Name], our mission is clear: to provide intuitive tools that enhance productivity and elevate user experiences. Our team of dedicated professionals brings a wealth of expertise to the table, driven by a passion for creating impactful solutions.
                </div>
                <div className="mb-2 ">
                With a user-centric approach, we've designed [Your Admin Dashboard Name] to be not just functional, but delightful to use. From robust features to seamless navigation, every aspect is crafted with your needs in mind.
                </div>
                <div className="mb-2 ">
                But don't just take our word for it – hear what our satisfied users have to say. Their testimonials speak volumes about the value and effectiveness of our platform.

Beyond our commitment to excellence in software, we're also committed to fostering a positive company culture. Transparency, collaboration, and innovation are at the core of everything we do.
                </div>
                <div className="mb-2 ">
                Excited about the future? So are we. Stay tuned for upcoming updates and features as we continue to evolve and improve [Your Admin Dashboard Name].

                </div>
                <div className="mb-2 ">
                Ready to experience the difference for yourself? Get in touch with us today to learn more or sign up for a free trial. Thank you for considering [Your Admin Dashboard Name] for your administrative needs.
                </div>
                <div className="mb-2 ">
                Let's simplify success together.
                </div>
            </div>
            </>
    }
            </main>
    </div>
        
        </>
    )
}

export default About;