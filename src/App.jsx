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
import Home from "./pages/Home"
import { GroupImage } from "./components/Image";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg">
        <div className="navdar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Header />
          <Team />
        </div>
        <Mainbg />
      </div>

      <div className="bigMain">
        <div className="mainTextAndImg">
          <div className="activityContainer">
            <div className="test">
              <div className="shit">
                <h1 className="testH1">Your Hub for teamwork</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <a></a>
              </div>
            </div>
            <GroupImage />
          </div>

          <div className="activityContainer">
            <GroupImage />
            <div className="test">
              <div className="shit">
                <h1 className="testH1">Your Hub for teamwork</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
          </div>

          <div className="activityContainer">
            <div className="test">
              <div className="shit">
                <h1 className="testH1">Your Hub for teamwork</h1>
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

        <h2></h2>
      </div>

      <div className="tesiCon">
        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2]}
        />
        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2]}
        />

        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2]}
        />
        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2]}
        />
        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2]}
        />
        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2]}
        />
        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2, 3, 4]}
        />
        <Testimonials
          image="https://sneakernews.com/wp-content/uploads/2022/03/kobe-bryant-nike-contract-2022.jpg"
          name="Kobe"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sGive everyone you work with -- inside"
          star={[0, 1, 2]}
        />
      </div>
      <Footer className="footer" />
    </BrowserRouter>
  );
};

export default App;
