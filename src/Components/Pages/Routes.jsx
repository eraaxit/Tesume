import { Routes, Route } from "react-router-dom";
import BrowseTemplates from "./BrowseTemplates/BrowseTemplates";
import FillData from "./FillData/FillData";

const Routes_ = () => {
    return (
        <div className="routes">
            <Routes>
                <Route exact path="/" element={<FillData />} /> 
                <Route exact path="/Templates" element={<BrowseTemplates />} /> 
            </Routes>
        </div>
    )
}

export default Routes_
