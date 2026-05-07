import { Outlet } from "react-router-dom"
import { NavbarComponent } from "../Components/NavBarComponent"
import { NewsLetter } from "../Sections/NewsLetter"
import { Footer } from "../Components/Footer"


export const Layout=()=>{

    return(
        <>
        <NavbarComponent/>
        <Outlet/>
        <NewsLetter/>
        <Footer/>
        </>
    )
}