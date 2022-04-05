const Footer = () => {
    return(
        <>
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
}

export default Footer;