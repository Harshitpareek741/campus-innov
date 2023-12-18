import React from "react";
import {Navigate , Outlet} from react-router-dom;

const PrivateCompo = ()=>{
    const auth = localStorage.getItem(college);
    return auth?<Outlet/>:<Navigate to="/college"/>
}

export default PrivateCompo;