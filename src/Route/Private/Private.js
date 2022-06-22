import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../../Utils/Index';

function Private({ component: Component, ...rest }) {
   
     //  console.log(isLogin());

     return (



          <Route {...rest}

               render={props => (
                    isLogin() ?
                         <Component {...props} />
                         :
                         <Redirect to={"/primary"} />
               )}

          />
     );
}

export default Private;
