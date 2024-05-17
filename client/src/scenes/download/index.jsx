import {React, useState} from 'react';
import html2canvas from 'html2canvas';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import jsPDF from 'jspdf';
import { tokens } from "../../theme";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { NavLink } from 'react-router-dom';



const DownloadButton = () => { 
    const [isSidebar, setIsSidebar] = useState(true);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    var sno =1;
    const handleDownloadPDF = () => {
        const input = document.getElementById('pdf-content'); 
        // Specify the id of the element you want to convert to PDF
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save('report.pdf'); 
          // Specify the name of the downloaded PDF file
        });
      };
    return ( 
        <>
            <div className="app">
      <Sidebar isSidebar={isSidebar} /> 
      <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
    <div id='pdf-content'>
        <div>
        
        <Box marginLeft={100} position="static" display="flex">
        <Box>
        <NavLink to="/home">
              <IconButton >
              <ArrowBackIcon
                  sx={{ fontSize: "20px", color: colors.grey[100]}} 
                />
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Back
            </Typography>
                
              </IconButton>
              </NavLink>
            </Box>
        <Box onClick={handleDownloadPDF}>
              <IconButton>
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Download
            </Typography>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "20px", color: colors.grey[100]}}
                />
              </IconButton>
            </Box>
            </Box>
       </div>

        
        <div class="relative overflow-x-auto shadow-md  overflow-auto  m-5 sm:rounded-lg">
                <table class=" text-center text-black text-xl dark:text-gray-400">
                    <thead class="text-xs text-white  bg-gray-50 dark:bg-indigo-800 dark:text-gray-400">
                        <tr className='text-xl rounded-lg'>
                            <th scope="col" class="px-2 py-2">
                                S.No.
                            </th>
                            <th scope="col" class="px-2 py-2">
                                Event
                            </th>
                            <th scope="col" class="px-2 py-2">
                                Data
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class=" px-3 py-3">
                                {sno++}
                            </td>
                            <td class="px-3 py-3">
                                Average Rainfall
                            </td>
                            <td class="px-3 py-3">
                                5.47
                            </td>
                        </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class=" px-3 py-3">
                                {sno++}
                            </td>
                            <td class="px-3 py-3">
                            Average Humidity 
                            </td>
                            <td class="px-3 py-3">
                                 49.13
                            </td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class="px-3 py-3">
                                {sno++}
                            </td>
                            <td class="px-3 py-3">
                            Average Gust Speed
                            </td>
                            <td class="px-3 py-3">
                                    9.88
                            </td>
                        </tr>

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class="px-3 py-3">
                                {sno++}
                            </td>
                            <td class="px-3 py-3">
                            Average Dewpoint 
                            </td>
                            <td class="px-3 py-3">
                                    23.09
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class="px-3 py-3">
                                {sno++}
                            </td>
                            <td class="px-3 py-3">
                            Min. Temperature 
                            </td>
                            <td class="px-3 py-3">
                                    11.95
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" class="px-3 py-3">
                                {sno++}
                            </td>
                            <td class="px-3 py-3">
                            Max. Temperature 
                            </td>
                            <td class="px-3 py-3">
                                    81.74
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>      
     
    </div>
    </main>
    </div>
    </>
); };

export default DownloadButton;