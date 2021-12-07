import "./BrowseTemplates.css"
import T1 from "../../Templates/T1/T1";
import T2 from "../../Templates/T1/T2";
import T3 from "../../Templates/T1/T3";
import T4 from "../../Templates/T1/T4";
import Carousel from "react-elastic-corousel";
const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
];
import React,{useState} from 'react';
const BrowseTemplates = () => {
    return (
        <div className="all_templates">
            <Carousel breakPoints={breakPoints}>
                <Item><T1 /></Item>
                <Item><T2 /></Item>
                <Item><T3 /></Item>
                
                <ion-icon name="arrow-dropright-circle"></ion-icon>

                <Item><T4 /></Item>
            </Carousel>             
        </div>
    )
}

export default BrowseTemplates;
