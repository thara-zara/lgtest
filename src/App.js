import { Route, Routes } from "react-router-dom";
import Footer from "./components/Foot/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
