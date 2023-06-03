import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../page/home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../page/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../page/Login/Login";
import Register from "../page/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Terms from "../page/shared/terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'terms',
                element: <Terms/>
            }
        ]
    },
    {
        path: 'category',
        element: <Main />,
        children: [
            {
                path: ':id',
                element: <Category/>,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path:':id',
                element: <PrivateRoute><News/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }

]);
export default router; 