import React , {FunctionComponent } from "react";
import { Route, Redirect } from "react-router-dom";

type Protected = {
    component : any,
    exact : any,
    path : string
}




//import Login from "../pages/Authenticate/Login/Login";

const ProtectedRoute : FunctionComponent<Protected> = ({ component : Component,  ...rest }) => {
//    const user = useSelector(selectUser);

  return (
    <Route
      {...rest}
      render={(props : any) => {
        // if ((user && !user.bitSuccess) || !user) {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/login",
        //         state: { from: props.location.pathname },
        //       }}
        //     />
        //   );
        // }

        return  <Component {...props} /> ;
      }}
    />
  );
};

export default ProtectedRoute;
