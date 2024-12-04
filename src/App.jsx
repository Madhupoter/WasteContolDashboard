
import { Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home"; 
// import Services from "./Components/Services/Services";
import Dashboard from "./Components/Dashboard/Dashboard";



const App = () => {
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<Home />} /> 
                <Route path="/services" element={<Services />} />  */}
                <Route path="/dashboard" element={<Dashboard />} /> 
            </Routes>
        </div>
    );
};

export default App;
