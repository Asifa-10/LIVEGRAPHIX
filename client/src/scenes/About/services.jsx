import {React, useState, useEffect} from "react";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";

const Services = () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const [loading, setLoading] = useState(false);

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
            <section class="text-white body-font">
                <div class="container px-5">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-white">OUR SERVICES</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-200 font-bold font-serif">Unravel the mysteries with our query service.</p>
                    </div>
                    <div class="flex flex-wrap ml-16">

                        <div class="ml-10 p-4 lg:w-1/4 bg-indigo-950 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                            <svg fill="none" viewBox="0 0 24 24" height="50px">
                                    <path fill="currentColor" fillRule="evenodd" d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                                    <path fill="currentColor" fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z" clipRule="evenodd" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">User Management</h2>
                                    <p className="text-sm text-white ">Effortlessly manage user accounts, permissions, and access levels with our intuitive user management tools. Ensure security and efficiency across your organization.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 p-4 lg:w-1/4 bg-indigo-950 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg baseProfile="tiny" viewBox="0 0 24 24" fill="currentColor" height="50px">
                                    <path d="M12 2c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 6a1 1 0 112 0v3a1 1 0 101 1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2V9c-1 0-1 1-1 1l-.561-.561-1.652-1.651A7.004 7.004 0 0112 4c.688 0 1.353.104 1.981.29C13.895 5.185 13.402 6 12.5 6c-1 0-1.5 1-1.5 2v3s1 0 1-3zm0 10c-3.859 0-7-3.14-7-7 0-.776.133-1.521.367-2.219l1.926 1.926 1 1L10 13.414V15a1 1 0 001 1c.779 0 1.651 0 2.006.091a1.028 1.028 0 001.02.902.946.946 0 00.422-.098c2.348-1.174 2.539-1.644 2.552-4.479l.708-.708a.999.999 0 000-1.414l-1-1A1.001 1.001 0 0015 10V8a2 2 0 00-.883-1.658c.421-.411.712-.995.826-1.685C17.335 5.772 19 8.192 19 11c0 3.86-3.141 7-7 7z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">Data Analytics</h2>
                                    <p className="text-sm text-white ">Gain valuable insights into your business performance with our powerful data analytics features. Visualize key metrics, track trends, and make informed decisions.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 p-4 lg:w-1/4 bg-indigo-950 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg className="mt-2" viewBox="0 0 24 24" fill="currentColor" height="40px">
                                    <path d="M20.625 8.127q-.55 0-1.025-.205-.475-.205-.832-.563-.358-.357-.563-.832Q18 6.053 18 5.502q0-.54.205-1.02t.563-.837q.357-.358.832-.563.474-.205 1.025-.205.54 0 1.02.205t.837.563q.358.357.563.837.205.48.205 1.02 0 .55-.205 1.025-.205.475-.563.832-.357.358-.837.563-.48.205-1.02.205zm0-3.75q-.469 0-.797.328-.328.328-.328.797 0 .469.328.797.328.328.797.328.469 0 .797-.328.328-.328.328-.797 0-.469-.328-.797-.328-.328-.797-.328zM24 10.002v5.578q0 .774-.293 1.46-.293.685-.803 1.194-.51.51-1.195.803-.686.293-1.459.293-.445 0-.908-.105-.463-.106-.85-.329-.293.95-.855 1.729-.563.78-1.319 1.336-.756.557-1.67.861-.914.305-1.898.305-1.148 0-2.162-.398-1.014-.399-1.805-1.102-.79-.703-1.312-1.664t-.674-2.086h-5.8q-.411 0-.704-.293T0 16.881V6.873q0-.41.293-.703t.703-.293h8.59q-.34-.715-.34-1.5 0-.727.275-1.365.276-.639.75-1.114.475-.474 1.114-.75.638-.275 1.365-.275t1.365.275q.639.276 1.114.75.474.475.75 1.114.275.638.275 1.365t-.275 1.365q-.276.639-.75 1.113-.475.475-1.114.75-.638.276-1.365.276-.188 0-.375-.024-.188-.023-.375-.058v1.078h10.875q.469 0 .797.328.328.328.328.797zM12.75 2.373q-.41 0-.78.158-.368.158-.638.434-.27.275-.428.639-.158.363-.158.773 0 .41.158.78.159.368.428.638.27.27.639.428.369.158.779.158.41 0 .773-.158.364-.159.64-.428.274-.27.433-.639.158-.369.158-.779 0-.41-.158-.773-.159-.364-.434-.64-.275-.275-.639-.433-.363-.158-.773-.158zM6.937 9.814h2.25V7.94H2.814v1.875h2.25v6h1.875zm10.313 7.313v-6.75H12v6.504q0 .41-.293.703t-.703.293H8.309q.152.809.556 1.5.405.691.985 1.19.58.497 1.318.779.738.281 1.582.281.926 0 1.746-.352.82-.351 1.436-.966.615-.616.966-1.43.352-.815.352-1.752zm5.25-1.547v-5.203h-3.75v6.855q.305.305.691.452.387.146.809.146.469 0 .879-.176.41-.175.715-.48.304-.305.48-.715t.176-.879z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">Task Management</h2>
                                    <p className="text-sm text-white ">Stay organized and on track with our task management tools. Assign tasks, set deadlines, and collaborate seamlessly with your team to accomplish goals efficiently.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-indigo-950 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg viewBox="0 0 512 512" fill="currentColor" height="50px">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M344 280l88-88M232 216l64 64M80 320l104-104" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M480 168 A24 24 0 0 1 456 192 A24 24 0 0 1 432 168 A24 24 0 0 1 480 168 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M344 304 A24 24 0 0 1 320 328 A24 24 0 0 1 296 304 A24 24 0 0 1 344 304 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M232 192 A24 24 0 0 1 208 216 A24 24 0 0 1 184 192 A24 24 0 0 1 232 192 z" />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M80 344 A24 24 0 0 1 56 368 A24 24 0 0 1 32 344 A24 24 0 0 1 80 344 z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">Customization Options</h2>
                                    <p className="text-sm text-white ">Tailor [Your Admin Dashboard Name] to fit your unique needs with our customizable features. From branding to layout, make it your own for a personalized experience.</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-indigo-950 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                            <svg fill="currentColor" viewBox="0 0 16 16" height="40px">
                                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                                    <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z" />
                                    <path d="M7.001 11a1 1 0 112 0 1 1 0 01-2 0z" />
                                </svg>
                                
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">Support and Training</h2>
                                    <p className="text-sm text-white ">Count on our dedicated support team for assistance whenever you need it. Plus, take advantage of our comprehensive training resources to maximize your use of [Your Admin Dashboard Name].</p>
                                </div>
                            </div>
                        </div>

                        <div class="ml-10 mt-5 p-4 lg:w-1/4 bg-indigo-950 shadow-lg shadow-red-900 drop-shadow-xl rounded-xl">
                            <div class="h-full flex flex-col items-center text-center">
                                <svg viewBox="0 0 24 24" fill="currentColor" height="50px">
                                    <path d="M6 6.9L3.87 4.78l1.41-1.41L7.4 5.5 6 6.9M13 1v3h-2V1h2m7.13 3.78L18 6.9l-1.4-1.4 2.12-2.13 1.41 1.41M4.5 10.5v2h-3v-2h3m15 0h3v2h-3v-2M6 20h12a2 2 0 012 2H4a2 2 0 012-2m6-15a6 6 0 016 6v8H6v-8a6 6 0 016-6m0 2a4 4 0 00-4 4v6h8v-6a4 4 0 00-4-4z" />
                                </svg>
                                <div class="w-full font-sans">
                                    <h2 class="title-font font-medium text-md text-white mb-4 mt-2">Continuous Updates</h2>
                                    <p className="text-sm text-white ">We're committed to staying ahead of the curve. Benefit from regular updates and new features that ensure [Your Admin Dashboard Name] remains cutting-edge and relevant.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    }
            </main>
    </div>
        </>
    )
}

export default Services;