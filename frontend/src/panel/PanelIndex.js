import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import District from "./scenes/basic/district";
import Kazi from "./scenes/basic/kazi";
import Roles from "./scenes/basic/roles";
import User from "./scenes/basic/users";
import ApplicantList from "./scenes/kazi/ApplicantList";
import ViewDetails from "./scenes/kazi/ViewDetails";
import ImageCaptureList from "./scenes/kazi/ImageCaptureList";
import GenerateAndUploadCertificate from "./scenes/kazi/GenerateAndUploadCertificate";
import DeliverCertificate from "./scenes/kazi/DeliverCertificate";
import FinalSuccessfullList from "./scenes/kazi/FinalSuccessfullList";

const PanelIndex = (props) => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);


    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const app_id = searchParams.get('app_id');
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar} decoded_data={props.decoded_data} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />

                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            {props.decoded_data.user.role === 1 && <Route path="/role" element={<Roles />} />}
                            {props.decoded_data.user.role === 1 && <Route path="/user" element={<User />} />}
                            {props.decoded_data.user.role === 1 && <Route path="/district" element={<District />} />}
                            {props.decoded_data.user.role === 1 && <Route path="/kazi" element={<Kazi />} />}

                            {props.decoded_data.user.role === 4 && <Route path="/kazi/applicationlist" element={<ApplicantList />} />}
                            {props.decoded_data.user.role === 4 && <Route path="/kazi/application" element={<ViewDetails />} />}
                            {props.decoded_data.user.role === 4 && <Route path="/kazi/imagecapture" element={<ImageCaptureList />} />}
                            {props.decoded_data.user.role === 4 && <Route path="/kazi/generate/certificate" element={<GenerateAndUploadCertificate />} />}
                            {props.decoded_data.user.role === 4 && <Route path="/kazi/certificate/deliver" element={<DeliverCertificate />} />}
                            {props.decoded_data.user.role === 4 && <Route path="/kazi/final/success/list" element={<FinalSuccessfullList />} />}
                            
                            {/* <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/geography" element={<Geography />} /> */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default PanelIndex