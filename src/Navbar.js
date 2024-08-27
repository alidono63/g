import Home from "./home";
import Popular from "./Popular";
import Logo from "./logo.svg"

export const Navbar = () => {
   
    return (
         
            <header className="navbar">
            <a href="/" className="logo">
            <img src={Logo} alt="Routemate Logo"/>
            <span className="title">cinemate</span></a>
            
            <nav className="navigation">
                <a href="/" className="link">Home</a>
                <a href="/Popular" className="link">Popular</a>
                <a href="/TopRated" className="link">TopRated</a>
                <a href="/upcoming" className="link">upcoming</a>
                
            </nav>
        </header>
       
    )};
    
 
