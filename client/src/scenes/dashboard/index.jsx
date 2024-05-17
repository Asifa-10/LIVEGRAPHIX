import { useState,useEffect } from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const [transactions, setTransactions]= useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      }, [])

  useEffect(() => {
    axios.get('http://localhost:3001/transactions')   
    .then (transactions => setTransactions(transactions.data))
    .catch(err => console.log(err))  
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
    <Box m="10px">

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
        <NavLink to="/download">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "10px",
              fontWeight: "bold",
              padding: "5px 5px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "5px" }} />
            Download Reports
          </Button>
          </NavLink>
        </Box>
      </Box>
      <iframe className="mx-10" title="WeatherDashboard" width="900" height="500" src="https://app.powerbi.com/reportEmbed?reportId=46dafd44-af9a-4ab6-ba62-ea4ac97d61c6&autoAuth=true&ctid=4122e40d-e6ae-4a6d-b5b5-e13276b00456" frameborder="0" allowFullScreen="true"></iframe>   
    </Box>
    }
    </main>
    </div>
    </>
  );
};

export default Dashboard;