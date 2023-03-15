import React from "react";
import { slideShow } from "./database";

let curPicCount = 0;
let selectedPic = "";
let count = 0;
let cd = 4;
const SlideShow = function()
{
    return (
        <div>
        {/* {ShowSlideShow()} */}
           <img src= {selectedPic =slideShow[curPicCount]} alt="Pic Is Not Reachable" />
        </div>
    );
}
export default SlideShow;


function ShowSlideShow()
{
    
    
    if (count < cd)
    {
        count+= 0.5;
        console.log(count);
        curPicCount = Math.random() *slideShow.length;
    }

    if (count >= cd)
    {
        count = 0;
        ShowSlideShow();
    }
    selectedPic =slideShow[curPicCount]
    
  
}