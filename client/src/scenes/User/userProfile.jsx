import {React, useState, useEffect} from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";

const Profile =  () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const [loading, setLoading] = useState(false);

    let data = localStorage.getItem('user');
    data= JSON.parse(data)
    // console.log(data)
    
        useEffect(() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
            }, 500)    
          }, [])
        
    
    return (
        <>
            {
        loading ? <div className="flex justify-center p-5 mt-10 mb-10 h-full">
          <ClipLoader className='align-self-center' color="c7d2fe"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader" /> </div>
          :
                        <div className="app">
      <Sidebar isSidebar={isSidebar} /> 
      <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
                            <div class="mb-20">
                                <div class=" py-5 sm:px-6">
                                    <h3 class=" text-center -mt-5 mb-2 ml-10 leading-6 font-bold text-gray-900  text-uppercase  text-lg text-decoration-underline ">
                                        <button className=" ml-10 bg-indigo-950 text-white rounded-lg px-10 py-2 ">User Profile</button>
                                    </h3>
                                </div>
                                <div class="flex flex-row">
                                    <div>
                                       
                                    </div>
                                    <div class="border-t border-gray-400 px-10 sm:p-0 w-full -mt-8">
                                        <dl class="sm:divide-y sm:divide-gray-400 border-2 ml-10 mt-10 rounded-lg">
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-bold text-indigo-800">
                                                    Name:
                                                </dt>
                                                <dd class="mt-1 text-sm font-bold text-white sm:mt-0 sm:col-span-2">
                                                    {data.name}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-bold text-indigo-800">
                                                    Age:
                                                </dt>
                                                <dd class="mt-1 text-sm font-bold text-white sm:mt-0 sm:col-span-2">
                                                    {data.age}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-bold text-indigo-800">
                                                    Email address:
                                                </dt>
                                                <dd class="mt-1 text-sm font-bold text-white sm:mt-0 sm:col-span-2">
                                                    {data.email}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-bold text-indigo-800">
                                                    Password:
                                                </dt>
                                                <dd class="mt-1 text-sm font-bold text-white sm:mt-0 sm:col-span-2">
                                                    {data.password}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-bold text-indigo-800">
                                                    Phone Number:
                                                </dt>
                                                <dd class="mt-1 text-sm font-bold text-white sm:mt-0 sm:col-span-2">
                                                    {data.phoneNo}
                                                </dd>
                                            </div>
                                            
                                            
                                        </dl>
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                            </main>
    </div>
            }
                        </>
                  
    );
};

export default Profile;