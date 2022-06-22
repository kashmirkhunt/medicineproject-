import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../../Utils/Index";


function PublicRoute({component:Component, restricated=false, ...rest})  {
    return (
       <Route {...rest} render={props=>(
       
        isLogin() && restricated ?
            <Redirect to={"/"}/>
            
            :
            <Component {...props}/> 
       )}/>
    );
}
export default PublicRoute;