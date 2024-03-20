import Header from "../compoments/Header/Header";
import Footer from "../compoments/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";



 function AppWrapperComponent (){

    return(

        <>
        <Toaster/>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
 }

 export default AppWrapperComponent