import { useState, useEffect} from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What technologies are used in building this weather dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We use ReactJS for the frontend user interface, NodeJS for the backend server, MongoDB for storing real-time weather data, and PowerBI for creating interactive dashboards.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How often is the weather data updated on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The weather data is updated in real-time or at predefined intervals, depending on the requirements and the frequency of data updates from the weather API.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How secure is the data stored in MongoDB?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          MongoDB provides robust security features such as authentication, access control, and encryption to ensure the security of the stored weather data.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How is PowerBI integrated into the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          PowerBI provides APIs and integration options that allow us to embed interactive dashboards directly into the ReactJS frontend, enabling seamless visualization of weather data.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Can historical weather data be accessed and visualized on the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Depending on the implementation, historical weather data can be stored in MongoDB and visualized alongside real-time data on the dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    }
    </main>
    </div>
    </>
  );
};

export default FAQ;