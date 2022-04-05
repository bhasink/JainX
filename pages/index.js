import { useEffect } from "react";
import AOS from 'aos';

const Home = () => {

useEffect(() => {
    AOS.init({
    duration : 2000
    });
}, []);

return (
    <>
  <header className="site-header topmain mobexheight norm">
    {/*--New Updates---*/}   
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <img src="./images/logo.jpg" className="navbar-brand-img" alt="logo" />
        </a>
        {/* Toggler */}
        <button className="navbar-toggler openhdas" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fal fa-bars" />
          <i className="fal fa-times" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="mobile-widgets">
            <div className="cross" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
              <i className="fal fa-times" />
            </div>
          </div>
          {/* Navigation */}
          <div className="ml-auto" id="accordionExample">
            <ul className="navbar-nav ml-auto position-relative" id="menu-center">
              <li className="nav-item nosublnk active">
                <a className="nav-link bidevices" href="about.html">About </a>
              </li>
              <li className="nav-item nosublnk">
                <a className="nav-link  bidevices subarrs" href="allcourses.html">Find a Course</a>
                <h3 data-toggle="collapse" data-target="#collapsemenusTwo" aria-expanded="false" aria-controls="collapsemenusTwo" className="mobclick collapsed">
                  Find a Course  <i className="fal fa-angle-up" /> <i className="fal fa-angle-down" />
                </h3>
                <div id="collapsemenusTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="megamenu">
                    <div className="row">
                      <div className="col-lg-12 colorchng">
                        <ul>
                          <li><a href="#">Inner Link 1</a></li>
                          <li><a href="#">Inner Link 2</a></li>
                          <li><a href="#">Inner Link 3</a></li>
                          <li><a href="#">Inner Link 4</a></li>
                          <li><a href="#">Inner Link 5</a></li>
                          <li><a href="#">Inner Link 5</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nosublnk">
                <a className="nav-link bidevices subarrs" href="#">Partner With Us </a>
                <h3 data-toggle="collapse" data-target="#collapsemenusThree" aria-expanded="false" aria-controls="collapsemenusThree" className="mobclick collapsed">
                  Partner With Us <i className="fal fa-angle-up" /> <i className="fal fa-angle-down" />
                </h3>
                <div id="collapsemenusThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="megamenu">
                    <div className="row">
                      <div className="col-lg-12 colorchng">
                        <ul>
                          <li><a href="flnmission.php">Inner Link 1</a>
                            <div className="megamenu subdropsmen">
                              <div className="row">
                                <div className="col-lg-12 colorchng">
                                  <ul>
                                    <li><a href="#">Inner Sub Link 1</a></li>
                                    <li><a href="#">Inner Sub Link 2</a></li>
                                    <li><a href="#">Inner Sub Link 3</a></li>
                                    <li><a href="#">Inner Sub Link 4</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li><a href="#">Inner Link 2</a> 
                            <div className="megamenu subdropsmen">
                              <div className="row">
                                <div className="col-lg-12 colorchng">
                                  <ul>
                                    <li><a href="#">Inner Sub Link 1</a></li>
                                    <li><a href="#">Inner Sub Link 2</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nosublnk">
                <a className="nav-link bidevices nosublnk subarrs" href="contactus.html">Contact</a>
                <h3 data-toggle="collapse" data-target="#collapsemenusFive" aria-expanded="false" aria-controls="collapsemenusFive" className="mobclick collapsed">
                  Contact<i className="fal fa-angle-up" /> <i className="fal fa-angle-down" />
                </h3>
                <div id="collapsemenusFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                  <div className="megamenu">
                    <div className="row">
                      <div className="col-lg-12 colorchng">
                        <ul>
                          <li><a href="#">Inner Link 1</a></li>
                          <li><a href="#">Inner Link 2</a></li>
                          <li><a href="#">Inner Link 3</a></li>
                          <li><a href="#">Inner Link 4</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nosublnk sgnorg">
                <a className="nav-link bidevices" href="#">Login /</a>
                <a className="nav-link bidevices" href="#">Sign Up </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
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

        <div className="featuredslide owl-theme owl-carousel">
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
        </div>
      </div>
    </div>
  </section>
  <section className="tpcateg">
    <div className="container">
      <div className="text-center hdingst whtxt">
        <h2 className="mainhds">Top Categories</h2>
      </div>
      <div className="categchecks userreview owl-theme owl-carousel">
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
      </div>
    </div>
  </section>
  <section className="testimoniapn">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Testimonials</h2>
      </div>
      <div className="testimparts">
        <div className="reviewtestim owl-carousel owl-theme">
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
        </div>
      </div>
    </div>
  </section>
  <section className="whtsects trustbycoms">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Trust by Companies</h2>
      </div>
      <div className="cpmslide">
        <div className="trustcmpcarso owl-theme owl-carousel">
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
        </div>
      </div>
    </div>
  </section>
  <section className="whtsects jnadvts">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Jain<span className="ogx">x</span> Advantage</h2>
      </div>
      <div className="advantfeat owl-carousel owl-theme text-center pt-5">
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
      </div>
    </div>
  </section>
  <footer className="stfooter">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <iframe className="ftaddrs" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.206939350353!2d77.5920295!3d12.9204609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9959213171933e2c!2sJAINx!5e0!3m2!1sen!2sin!4v1646737105968!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" />
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="ftad">
            <p># 18/3, 9th Main, 3rd Block, Jayanagar,
              Bangalore, Karnataka - 560011</p>
            <a href="tel:+91-9606333232"> +91-9606333232</a>
            <a href="mailto:enquiry@jainxacademy.com">enquiry@jainxacademy.com</a>
            <div className="sclics">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="usfllinks">
        <div className="accordion2" id="accordionExample2">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseOneft" aria-expanded="true" aria-controls="collapseOneft" className="mobclick">ABOUT US
                <i className="fal fa-plus" /> <i className="fal fa-minus" /></h4>
              <h4>ABOUT US</h4>
              <div id="collapseOneft" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample2">
                <ul>
                  <li><a href="#">About Aakash</a></li>
                  <li><a href="#">Why Aakash</a></li>
                  <li><a href="#">Aakash Methodology &amp; Concept</a></li>
                  <li><a href="#">Aakash in Media</a></li>
                  <li><a href="#">Aakash Nationwide Centers</a></li>
                  <li><a href="#">Franchise Information</a></li>
                  <li><a href="#">Investor Corner</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="mobclick collapsed">COURSES &amp; SCHOLARSHIPS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>COURSES &amp; SCHOLARSHIPS</h4>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">Aakash Hybrid Course</a></li>
                  <li><a href="#">Classroom Courses at Aakash</a></li>
                  <li><a href="#">Aakash Digital</a></li>
                  <li><a href="#">Aakash Distance Learning </a></li>
                  <li><a href="#">Aakash National Talent Hunt Exam (ANTHE)</a></li>
                  <li><a href="#">Admission Cum Scholarship Test (ACST)</a></li>
                  <li><a href="#">Various Scholarships at Aakash</a></li>
                  <li><a href="#">Aakash CBT</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="mobclick collapsed">COURSES &amp; SCHOLARSHIPS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>COURSES &amp; SCHOLARSHIPS</h4>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">Aakash Hybrid Course</a></li>
                  <li><a href="#">Classroom Courses at Aakash</a></li>
                  <li><a href="#">Aakash Digital</a></li>
                  <li><a href="#">Aakash Distance Learning </a></li>
                  <li><a href="#">Aakash National Talent Hunt Exam (ANTHE)</a></li>
                  <li><a href="#">Admission Cum Scholarship Test (ACST)</a></li>
                  <li><a href="#">Various Scholarships at Aakash</a></li>
                  <li><a href="#">Aakash CBT</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="mobclick collapsed">ABOUT US
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>ABOUT US</h4>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">About Aakash</a></li>
                  <li><a href="#">Why Aakash</a></li>
                  <li><a href="#">Aakash Methodology &amp; Concept</a></li>
                  <li><a href="#">Aakash in Media</a></li>
                  <li><a href="#">Aakash Nationwide Centers</a></li>
                  <li><a href="#">Franchise Information</a></li>
                  <li><a href="#">Investor Corner</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section className="mobileiconpanel">
    <ul>
      <li><a href="#"><img src="./images/homeic.png" /><span>Home<span /></span></a></li>
      <li><a href="#"><img src="./images/allcourses.png" /><span>All Courses<span /></span></a></li>
      <li><a href="#"><img src="./images/becomept.png" /><span>Become a partners<span /></span></a></li>
      <li><a href="#"><img src="./images/contico.png" /><span>Contact<span /></span></a></li>
    </ul>
  </section>
        </>
    );
};

export default Home;