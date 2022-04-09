import { useState,useEffect } from "react";
import AOS from 'aos';
import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer";
var $ = require("jquery");
    if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

const Home = () => {

const state ={
    responsive: {
        0: {
          items: 1,
          nav: true,
          dots: false,
          loop: true
        },
        300: {
          items: 2,
          nav: true,
         dots: false,
             margin: 10,
          loop: true
        },
  
        766: {
          items: 2,
          nav: true,
          dots: false,
          loop: true
        },
  
        1200: {
          items: 4,
          nav: true,
          dots: false,
          loop: true
        }
      },
      responsive_top_cat: {
        0: {
          items: 1,
          nav: false,
          dots: true,
          loop: true
        },
        300: {
          items: 1,
          nav: true,
         dots: false,
          loop: true
        },
  
        766: {
          items:3,
          nav: true,
          dots: false,
          loop: true
        },
  
        1200: {
          items: 3,
          nav: false,
          dots: true
        }
      },
      responsive_trust_comp: {
        0: {
          items: 1,
          nav: false,
          dots: true,
          loop: true
        },
        300: {
          items: 3,
          nav: false,
         dots: true,
          loop: true
        },
  
        766: {
          items: 3,
          nav: false,
          dots: false,
          loop: true
        },
  
        1200: {
          items: 5,
          nav: false,
          dots: true,
          center: true,
        }
      }
};


useEffect(() => {
    
    
    AOS.init({
    duration : 2000
    });
}, []);

return (
    <>
 
 <Nav />

  <section className="homemainbanner">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-7 text-center align-self-center">
          <h1 className="bnrhd" data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1500}><span>YOUR GATEWAY TO A</span>
            Successful Career</h1>
          <p>Our handpicked, high demand industry programs transform you to be global leaders</p>
          <div className="cusjnbar">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Hybrid</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Online</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Offline</a>
              </li>
            </ul>
            <div className="srchbar">
              <select className="form-control">
                <option>Select Course</option>
                <option>Course 1</option>
                <option>Course 2</option>
                <option>Course 3</option>
              </select>
              <input className="form-control" placeholder="Find the perfect course for you....." />
              <button><i className="far fa-search" /></button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 text-center">
          <select className="form-control locationslcts">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
          <img src="./images/rightviewmain.png" className="rgtmds" data-aos="fade-up" data-aos-duration={3000} />
        </div>
      </div>
    </div>
  </section>
  <section className="aboutsect">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6 text-center" data-aos="fade-right" data-aos-duration={1000} data-aos-easing="ease-in-sine">
          <div className="vdthmbs">
            <img src="./images/playicon.png" className="plicon" />
            <img src="./images/about.jpg" className="fllimg" />
          </div>
        </div>
        <div className="col-md-6 col-lg-6  align-self-center" data-aos="fade-up" data-aos-duration={1000}>
          <h2 className="mainhds mb-lg-4">About Us</h2>
          <p>Ranked among the top universities in India &amp; considered a cerebral destination for students  across the world &amp; Bangalore in particular, for its illustrious history of developing talent,Jain (Deemed-to-be University) is a hub for learning in every sense of the word.</p>
        </div>
      </div>
      <div className="counters numbers">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <h3 className="orgmds numbround number-item"><span className="value">100000</span>+</h3>
            <p>ONLINE LEARNERS</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <h3 className="orgmds"><span className="value">2000</span>+</h3>
            <p>hiring partners</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center">
            <h3 className="orgmds"><span className="value">300</span>+</h3>
            <p>top courses</p>
          </div>
          <div className="col-6 col-md-4 col-lg-3 text-center mx-md-auto">
            <h3 className="orgmds">24/7</h3>
            <p>lms support</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="featuredcls">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Featured Courses</h2>
      </div>
      <div className="coursespanels">


      <OwlCarousel
    className="featuredslide owl-theme owl-carousel"
    loop
    margin={15}
    nav
    items={4}
    responsive={state.responsive}
    >
<div className="item">
            <div className="panelcards">
              <img src="./images/ftcourses/1.jpg" className="fllimg" />
              <h5 className="csnms">Accounting &amp; Taxation</h5>
              <p>Post Graduate Certification in 
                Accounting &amp; Taxation <a href="#">Read more..</a></p>
              <div className="tmclcs">
                <img src="./images/wallclock.png" className="tmicn" />
                <p>12 Months</p>
              </div>
              <a href="#" className="aplcta">Apply Now</a>
            </div>
          </div>
          <div className="item">
            <div className="panelcards">
              <img src="./images/ftcourses/2.jpg" className="fllimg" />
              <h5 className="csnms">Data Analytics</h5>
              <p>Data Analytics refers to the methods
                used to analyse <a href="#">Read more..</a></p>
              <div className="tmclcs">
                <img src="./images/wallclock.png" className="tmicn" />
                <p>12 Months</p>
              </div>
              <a href="#" className="aplcta">Apply Now</a>
            </div>
          </div>
          <div className="item">
            <div className="panelcards">
              <img src="./images/ftcourses/3.jpg" className="fllimg" />
              <h5 className="csnms">Sports Management</h5>
              <p>Post Graduate Certification in 
                Accounting &amp; Taxation <a href="#">Read more..</a></p>
              <div className="tmclcs">
                <img src="./images/wallclock.png" className="tmicn" />
                <p>12 Months</p>
              </div>
              <a href="#" className="aplcta">Apply Now</a>
            </div>
          </div>
          <div className="item">
            <div className="panelcards">
              <img src="./images/ftcourses/4.jpg" className="fllimg" />
              <h5 className="csnms">Health Tech</h5>
              <p>This is a multi-disciplinary program
                that bridges the <a href="#">Read more..</a></p>
              <div className="tmclcs">
                <img src="./images/wallclock.png" className="tmicn" />
                <p>12 Months</p>
              </div>
              <a href="#" className="aplcta">Apply Now</a>
            </div>
          </div>
          <div className="item">
            <div className="panelcards">
              <img src="./images/ftcourses/1.jpg" className="fllimg" />
              <h5 className="csnms">Accounting &amp; Taxation</h5>
              <p>Post Graduate Certification in 
                Accounting &amp; Taxation <a href="#">Read more..</a></p>
              <div className="tmclcs">
                <img src="./images/wallclock.png" className="tmicn" />
                <p>12 Months</p>
              </div>
              <a href="#" className="aplcta">Apply Now</a>
            </div>
          </div>
          <div className="item">
            <div className="panelcards">
              <img src="./images/ftcourses/2.jpg" className="fllimg" />
              <h5 className="csnms">Data Analytics</h5>
              <p>Data Analytics refers to the methods
                used to analyse <a href="#">Read more..</a></p>
              <div className="tmclcs">
                <img src="./images/wallclock.png" className="tmicn" />
                <p>12 Months</p>
              </div>
              <a href="#" className="aplcta">Apply Now</a>
            </div>
          </div>
</OwlCarousel>

       
      </div>
    </div>
  </section>
  <section className="tpcateg">
    <div className="container">
      <div className="text-center hdingst whtxt">
        <h2 className="mainhds">Top Categories</h2>
      </div>

      <OwlCarousel
    className="categchecks userreview owl-theme owl-carousel"
    loop
    margin={20}
    responsive={state.responsive_top_cat}

>

<div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>
        <div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>
        <div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>
        <div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>
        <div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>
        <div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>
        <div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>
        <div className="item">
          <button className="catcheck">Digital Marketing</button>
          <a href="#" className="catcheck">Digital Marketing</a>
        </div>

    </OwlCarousel>

 
    </div>
  </section>
  <section className="testimoniapn">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Testimonials</h2>
      </div>
      <div className="testimparts">
      
        <OwlCarousel
    className="reviewtestim owl-carousel owl-theme"
    loop
    margin={40}
    nav
    center
    responsive={state.responsive_top_cat}

>
<div className="item">
            <div className="testipnlpts">
              <p>Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur
                adipisci velit</p>
              <div className="usrthmbs">
                <img src="./images/reviews/1.jpg" />
              </div>
              <p className="usrnmtst">Neque porro quisquam</p>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
              <p>Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur
                adipisci velit</p>
              <div className="usrthmbs">
                <img src="./images/reviews/3.jpg" />
              </div>
              <p className="usrnmtst">Neque porro quisquam</p>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
              <p>Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur
                adipisci velit</p>
              <div className="usrthmbs">
                <img src="./images/reviews/3.jpg" />
              </div>
              <p className="usrnmtst">Neque porro quisquam</p>
            </div>
          </div>
          <div className="item">
            <div className="testipnlpts">
              <p>Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur
                adipisci velit</p>
              <div className="usrthmbs">
                <img src="./images/reviews/2.jpg" />
              </div>
              <p className="usrnmtst">Neque porro quisquam</p>
            </div>
          </div>
    </OwlCarousel>
     
      </div>
    </div>
  </section>
  <section className="whtsects trustbycoms">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Trust by Companies</h2>
      </div>
      <div className="cpmslide">

              
    <OwlCarousel
    className="trustcmpcarso owl-carousel owl-theme"
    loop
    margin={10}
    center
    items={5}
    responsive={state.responsive_trust_comp}
>

<div className="item">
            <div className="lgocirc">
              <img src="./images/client/1.png" />
            </div>
          </div>
          <div className="item">
            <div className="lgocirc">
              <img src="./images/client/2.png" />
            </div>
          </div>
          <div className="item">
            <div className="lgocirc">
              <img src="./images/client/3.png" />
            </div>
          </div>
          <div className="item">
            <div className="lgocirc">
              <img src="./images/client/4.png" />
            </div>
          </div>
          <div className="item">
            <div className="lgocirc">
              <img src="./images/client/5.png" />
            </div>
          </div>
          <div className="item">
            <div className="lgocirc">
              <img src="./images/client/5.png" />
            </div>
          </div>

</OwlCarousel>
       
       
      </div>
    </div>
  </section>
  <section className="whtsects jnadvts">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Jain<span className="ogx">x</span> Advantage</h2>
      </div>
       
      <OwlCarousel
    className="advantfeat owl-carousel owl-theme text-center pt-5"
    loop
    margin={10}
    nav
    responsive={state.responsive_top_cat}
>
<div className="item">
          <img src="./images/jnadicon/1.png" />
          <h4>Crafted Carefully</h4>
          <p>Each course handpicked to enhance
            your knowledge and skills.</p>
        </div>
        <div className="item">
          <img src="./images/jnadicon/2.png" />
          <h4>Expert Facilitators</h4>
          <p>Learn from passionate and industry
            experienced subject matter experts.</p>
        </div>
        <div className="item">
          <img src="./images/jnadicon/3.png" />
          <h4>Get Hands-on Exposure</h4>
          <p>Gain practical experience and skills
            through industry/in-house projects.</p>
        </div>
        <div className="item">
          <img src="./images/jnadicon/1.png" />
          <h4>Crafted Carefully</h4>
          <p>Each course handpicked to enhance
            your knowledge and skills.</p>
        </div>
        <div className="item">
          <img src="./images/jnadicon/2.png" />
          <h4>Expert Facilitators</h4>
          <p>Learn from passionate and industry
            experienced subject matter experts.</p>
        </div>
        <div className="item">
          <img src="./images/jnadicon/3.png" />
          <h4>Get Hands-on Exposure</h4>
          <p>Gain practical experience and skills
            through industry/in-house projects.</p>
        </div>
</OwlCarousel>
       
      
    </div>
  </section>

    <Footer/>
        </>
    );
};

export default Home;