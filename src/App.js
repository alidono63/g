import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogList } from "./blogList";
import Home from "./home";
import { Upcoming } from "./upcoming";
import { Popular } from "./Popular";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { TopRated } from "./topRated";
import { useEffect ,useState } from "react";

const App = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme=() =>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme)
        localStorage.setItem("theme" , newTheme);
        }
    useEffect (() =>{
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }, []);
    
    return (
        <div className={`app ${theme}`}>
                <header className="header">
                <button className="nightmode" type="radio" onClick={toggleTheme}/>
                    <Navbar />
                </header>
                
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<BlogList />} />
                        <Route path="/popular" element={<Popular />} />
                        <Route path="/upcoming" element={<Upcoming />} />
                        <Route path="/topRated" element={<TopRated />} />
                    </Routes>
                </main>
              
                <footer>
                    <Footer />
                </footer>
            
        </div>
    );
};

export default App;