import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Team from "./components/Team";
import Login from "./pages/Login";
import Mainbg from "./pages/Main";

import { GroupImage } from "./components/Image";
// import Contet from "./components/content";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg">
        <div className="navdar">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Header />
          <Team />
        </div>
        <Mainbg />
      </div>

      <div className="bigMain">
        <div className="mainTextAndImg">
          {/* <Contet text="is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using " />
          <Contet />
          <Contet /> */}
          <div className="activityContainer">
            <div className="test">
              <div className="shit">
                <h1 className="testH1">
                  Your Hub for teamwork</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <GroupImage />
          </div>

          <div className="activityContainer">
            <div className="test">
            <div className="shit">
                <h1 className="testH1">
                  Your Hub for teamwork</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <GroupImage />
          </div>

          <div className="activityContainer">
            <div className="test">
              <div className="shit">
                <h1 className="testH1">
                  Your Hub for teamwork</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <GroupImage />
          </div>
        </div>

        <div className="mainTestimonials"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
