import { useState, useEffect} from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";

const Bar = () => {
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
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
      <iframe className="mx-10" title="ColumnCharts" width="900" height="500" src="https://app.powerbi.com/reportEmbed?reportId=5f8d8f3b-90db-4d56-b341-8a85ae1a3282&autoAuth=true&ctid=4122e40d-e6ae-4a6d-b5b5-e13276b00456" frameborder="0" allowFullScreen="true"></iframe>
      </Box>
    </Box>
    }
    </main>
    </div>
    </>
  );
};

export default Bar;