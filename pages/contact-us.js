import { useEffect } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <Nav />

      <section className="pageinforhd pt-lg-5 pb-lg-5">
        <div className="container">
          <div className="hdingst">
            <h2 className="mainhds">Contact us</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact us
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="aboutlayouts">
        <div className="container">
          <div className="pgbanners">
            <img src="./images/contactbanner.jpg" className="fllimg" />
          </div>
          <div className="contentares  pt-5 pb-5">
            <div className="text-center hdingst">
              <h2 className="mainhds">
                For more information about
                <br />
                our courses, get in touch with JAIN
                <span className="ogx">x</span>
              </h2>
            </div>
            <div className="contactcrds">
              <div className="row">
                <div className="col-md-6 col-lg-8  mx-auto text-center">
                  <img src="./images/location.png" />
                  <p>
                    #18/3, 9th Main, 3rd Block, Jayanagar, Bangalore,
                    <br /> Karnataka-560011
                  </p>
                </div>
                <div className="col-md-6 col-lg-8  mx-auto text-center">
                  <img src="./images/maitlocta.png" />
                  <a href="mailto:enquiry@jainxacademy.com">
                    enquiry@jainxacademy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tpcateg contlast">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <form>
                <div className="customfrms lssmg">
                  <div className="form-group">
                    <input
                      type="textr"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Id"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group text-center">
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-lg-6 align-self-center">
              <div className="hdingst whtxt">
                <h2 className="mainhds">
                  <span className="ogx">Reach Out To Us</span>
                </h2>
                <p className="text-white">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet,
                  <br />
                  consectetur, adipisci velit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactUs
