import { Routes, Route } from "react-router-dom";
import BrowseTemplates from "./BrowseTemplates/BrowseTemplates";
import FillData from "./FillData/FillData"
import Home from "./Home/Home";

const Routes_ = () => {
    return (
        <div className="routes">
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/details" element={<FillData />} />
                <Route exact path="/templates" element={<BrowseTemplates />} /> 
            </Routes>
        </div>
    )
}

export default Routes_
// <Route exact path="/1" element ={<T7 />} />
