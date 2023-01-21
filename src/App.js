import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Dishes from "./Components/Dishes/Dishes";
import Branches from "./Components/Branches/Branches";
import Footer from "./Components/Footer/Footer";
import Reply from "./Components/Leave A Reply/Reply";
import PageNotFound from "./Components/Pagenotfound/PageNotFound";
import OrderFood from "./Components/OrderFood/OrderFood";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Confirmed from "./Components/Confirmed/Confirmed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar></Navbar>
                <About />
                <Dishes />
                <Branches />
                <Contact />
                <Reply />
                <Footer />
              </div>
            }
          ></Route>
          <Route path="/Order" element={<OrderFood />}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/Order/PlaceOrder" element={<PlaceOrder />}></Route>
          <Route
            path="/Order/PlaceOrder/Confirm"
            element={<Confirmed />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
