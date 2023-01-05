import {Index} from "./pages";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {About} from "./pages/About";
import {Services} from "./pages/Services";
import {Work} from "./pages/Work";
import {Contact} from "./pages/Contact";
import {Blog} from "./pages/Blog";
import {Navbar} from "./pages/Navbar";
import {Footer} from "./pages/Footer";
import React from "react";
import {Single} from "./pages/Single";

function App() {
    return (
        <div className="App" id="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Index/>}/>
                    <Route path='/home' element={<Index/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/work' element={<Work/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/single' element={<Single/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
