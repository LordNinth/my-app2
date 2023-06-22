import { BrowserRouter } from "react-router-dom";

import {NavigationBar} from "./components/NavigationBar"
import { AppRoutes } from "./AppRoute";
export const App = () =>{
    return (
        // wrap components in BrowserRouter
        <BrowserRouter> 
            <NavigationBar/>
            <AppRoutes/>
        
        </BrowserRouter>
    )
}