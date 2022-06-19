import { Component } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Parent from "../Parent/Parent";
import Products from "../Products/Products";
import Recipes from "../Recipes/Recipes";
import News from "../News/News";
import { Routes, Route } from "react-router-dom"
import Footer from "../Footer/Footer";
import Login from './../Login/Login';
import Register from './../Register/Register';


class App extends Component {
    state = {}
    render() {
        return (
            <>

                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="Home" element={<Home />}></Route>
                        <Route path="About" element={<About />}>
                            <Route path="" element={<h2>lets have a look about us</h2>}></Route>                            
                            <Route path="Portfolio" element={<h2>This is our Portifolio</h2>}></Route>
                            <Route path="History" element={<h2>This is our History</h2>}></Route>
                        </Route>
                        <Route path="Contact" element={<Contact />}>
                            <Route path="" element={<h2>My Projects</h2>}></Route>
                            <Route path="Projects" element={<h2>My Projects</h2>}></Route>
                            <Route path="Services" element={<h2>My Services</h2>}></Route>
                        </Route>

                        <Route path="Products" element={<Products />}></Route>
                        <Route path="Recipes" element={<Recipes />}></Route>
                        <Route path="News" element={<News />}></Route>
                        <Route path="Login" element={<Login />}> </Route>
                        <Route path="Register" element={<Register />}> </Route>

                        <Route path="*" element={<h2>404 Page not Found</h2>}></Route>
                    </Routes>
                </div>

                <Footer />
            </>

        );
    }
}


export default App;