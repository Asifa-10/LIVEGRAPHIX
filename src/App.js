import { useState,useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import SignUp from "./scenes/signup/signup";
import Loading from "./components/loading";
import Footer from "./scenes/footer/footer";
import SignIn from "./scenes/signup/signin";
import DownloadButton from "./scenes/download";
import ContactUs from "./scenes/contacts/contactUs";
import Profile from "./scenes/User/userProfile";
import EditProfile from "./scenes/User/editProfile";
import About from "./scenes/About/about";
import Services from "./scenes/About/services";


function App() {
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },1000)
  },[])

  const [theme, colorMode] = useMode();

  return (
    <>
    {
      loading ? <Loading loading={loading}/> : 
    <BrowserRouter>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
           
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/" element={  <SignUp />} />
              <Route path="/sigin" element={  <SignIn/>} />
              <Route path="/download" element={  <DownloadButton/>} />
              <Route path="/profile/:id" element={  <Profile/>} />
              <Route path="/editProfile" element={  <EditProfile/>} />
              <Route path="/about" element={  <About/>} />
              <Route path="/services" element={  <Services/>} />
            </Routes>
            
        
      </ThemeProvider>
    </ColorModeContext.Provider>
    <Footer/>
    </BrowserRouter>
    
}

    </>
  );
}

export default App;
