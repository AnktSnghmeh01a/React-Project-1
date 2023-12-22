import React from "react";
import img from "../asserts/pexels-christina-morillo-1181263.jpg";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,AiFillHeart
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>AnkitCodes</h1>
          <p>Solution to your all problems</p>
        </main>
      </div>

      <Services />

      <div className="home2">
        <img src={img} alt="Graphics" />

        <div>
          <p>
            There are hundreds of programming languages, each designed for
            specific purposes. Examples include Python, Java, C++, and
            JavaScript.The "Hello, World!" program is often the first program
            written by people learning a new programming language. It's a simple
            program that outputs the text "Hello, World!" to the screen.
          </p>
        </div>
      </div>

      <About />

      <div className="home3" id="brands">
        <h1>Brands</h1>

        <article>
          <div
            style={{
              animationDelay: "0.9s",
            }}
          >
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div
            style={{
              animationDelay: "0.5s",
            }}
          >
            <AiFillFacebook />
            <p>Facebook</p>
          </div>

          <div
            style={{
              animationDelay: "0.9s",
            }}
          >
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div
            style={{
              animationDelay: "0.5s",
            }}
          >
            <AiFillYoutube />
            <p>Youtube</p>
          </div>
        </article>
      </div>

      <Contact />

      {/* footer  section*/}

      <div className="footer">
        <h1>Connect with me</h1>

        <div className="footerLinks" id="footer-link">
          {/* 1 st link */}
          <a href="/">
            <AiFillFacebook id="icon1"/>
          </a>
          {/* 2nd link */}
          <a href="https://twitter.com/itzAnkitCodes01" target="_blank">
            <AiFillTwitterCircle id="icon2"/>
          </a>
          {/* third link */}
          <a href="https://www.linkedin.com/in/ankit-singh-mehra-03a211245/" target="_blank">
            <AiFillLinkedin id="icon3"/>
          </a>
          {/* 4 th link */}
          <a href="/">
            <AiFillInstagram id="icon4"/>
          </a>
        </div>

        <p>Made with <AiFillHeart/> by Ankit </p>

      </div>
    </>
  );
};

export default Home;
