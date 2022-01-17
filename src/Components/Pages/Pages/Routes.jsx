import { Routes, Route } from "react-router-dom";
import T5 from "../Templates/T5/T5";
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
                <Route exact path="/test" element ={<T5 />} />
            </Routes>
        </div>
    )
}

export default Routes_
