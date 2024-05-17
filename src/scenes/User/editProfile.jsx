import {React, useState, useEffect} from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";

const EditProfile = () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [password, setPassword] = useState("");

    let data = localStorage.getItem('user');
    data= JSON.parse(data)

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

                <div class="bg-black-900 overflow-hidden shadow rounded-lg ">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class=" text-center -mt-3 mb-2 leading-6 font-weight-bold text-gray-900  text-uppercase font-bold text-lg text-decoration-underline ">
                            <button className="mt-2 ml-10 bg-indigo-950 text-white rounded-lg px-10 py-2 ">Edit Profile</button>
                        </h3>
                    </div>
                    <div class="flex flex-row">
                       
                        <div class="border-t border-gray-400 px-4 sm:p-0 w-full -mt-8 -ml-40 mb-30">
                            <dl class="sm:divide-y sm:divide-gray-400 border-2 ml-40 mt-10 rounded-lg">
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg font-bold text-indigo-800 py-2">
                                        Name:
                                    </dt>
                                    <dd class="mt-1 text-sm font-bold text-black sm:mt-0 sm:col-span-2">
                                        <input type="text" value={data.name} name="fullName" onChange={(e) => setName(e.target.value)} className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full"  />
                                    </dd>
                                </div>

                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg font-bold text-indigo-800 py-2">
                                        Age
                                    </dt>
                                    <dd class="mt-1 text-sm font-bold text-black sm:mt-0 sm:col-span-2">
                                        <input type="text" value={data.age} name="instagram" onChange={(e) => setAge(e.target.value)} className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" />
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg font-bold text-indigo-800 py-2">
                                        Email Address:
                                    </dt>
                                    <dd class="mt-1 text-sm font-bold text-black sm:mt-0 sm:col-span-2">
                                        <input type="text" value={data.email} name="linkdin" onChange={(e) => setEmail(e.target.value)} className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" />
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg font-bold text-indigo-800 py-2">
                                        Password:
                                    </dt>
                                    <dd class="mt-1 text-sm font-bold text-black sm:mt-0 sm:col-span-2">
                                        <input type="text" value={data.password} name="github" onChange={(e) => setPassword(e.target.value)} className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" />
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg font-bold text-indigo-800 py-2">
                                        Phone Number:
                                    </dt>
                                    <dd class="mt-1 text-sm font-bold text-black sm:mt-0 sm:col-span-2">
                                        <input type="text" value={data.phoneNo} name="detail" onChange={(e) => setPhone(e.target.value)} className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" />
                                    </dd>
                                </div>
                               
                            </dl>
                            <div class="px-4 py-5 sm:px-6">
                        <h3 class=" text-center -mt-3 mb-2 leading-6 font-weight-bold text-gray-900  text-uppercase font-bold text-lg text-decoration-underline ">
                            <button className="mt-2 ml-10 bg-indigo-950 text-white rounded-lg px-10 py-2 ">Update</button>
                        </h3>
                    </div>
                        </div>
                    
                    </div>
                    <br /><br />
  
                </div>
    }
                </main>
    </div>

        </>
    );
};

export default EditProfile;