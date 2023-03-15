import React from "react";
import { NavLink } from "react-router-dom";
const Activebar = function()
{
    return (
        <div className="activeBar">
            <NavLink className="activebar_btn1" to ="/" >Home</NavLink>
            <NavLink className="activebar_btn1" to ="/movies" >Movies</NavLink>
            <NavLink className="activebar_btn1" to ="/shows" >Shows</NavLink>
            <input type={'text'} id="serchbar" value={''} placeholder ="Enter Name To Search" />
            <NavLink className="activebar_btn" to ="" >Contact Us</NavLink>
        </div>
    );
}
export default Activebar;