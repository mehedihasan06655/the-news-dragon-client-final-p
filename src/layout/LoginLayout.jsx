import { Outlet } from "react-router-dom";
import NavigationBar from "../page/shared/NavigationBar/NavigationBar";

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar/>            
            <Outlet/>
        </div>
    );
};

export default LoginLayout;