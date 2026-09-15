import "./App.css";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/SignUp.jsx";
import { Routes, Route } from "react-router-dom"
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Profile from "./Pages/Profile.jsx";
import Details from "./Pages/Details.jsx";
import Cart from "./Pages/Cart.jsx";

function App() {
  return (
   <div>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Login" element={<Login />} />
    <Route path="SignUp" element={<Signup />} />
    <Route path="About" element={<About />}  />
    <Route path="Contact" element={<Contact />} />
    <Route path="*" element={<PageNotFound/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Details/:id" element={<Details />} />
    <Route path="/Cart" element={<Cart />} />
   </Routes>
    </div>

  );
}
 
export default App;