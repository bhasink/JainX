import { useEffect } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'

const Compare = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <Nav />

  <section className="pageinforhd pt-5 pb-5 nohdleftbrdcm">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">All Course</a></li>
          <li className="breadcrumb-item active" aria-current="page">Compare Page</li>
        </ol>
      </nav>
    </div>
  </section>
  <section className="cmparepgds">
    <div className="container">
      <div className="topproductlisiings">
        <div className="row">
          <div className="col-lg-3">
          </div>
          <div className="col-6 col-lg-3">
            <div className="coursepls">
              <img src="./images/courseslogo/deake.png" className="ms fllimg" />
              <h1 className="mainhds">Sports Management</h1>
              <p>Master the Trends and Technologies in the Business
                Side of Sports Management.</p>
              <div className="dtlsctaviews">
                <a href="#" className="orangejncta">Apply Now</a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="coursepls">
              <img src="./images/courseslogo/2.jpg" className="ms fllimg" />
              <h1 className="mainhds">Sports Management</h1>
              <p>Master the Trends and Technologies in the Business
                Side of Sports Management.</p>
              <div className="dtlsctaviews">
                <a href="#" className="orangejncta">Apply Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 align-self-center text-center">
            <a href="#" className="orangejncta">+ Add</a>
          </div>
        </div>
      </div>
      <div className="bottomprdetails">
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp">Price</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>42,373</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>42,373</p>
          </div>
          <div className="col-lg-3 align-self-center">
            <p style={{opacity: 0}}>43,373</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp">Duration</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>12 months</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>12 months</p>
          </div>
          <div className="col-lg-3 align-self-center">
            <p style={{opacity: 0}}>43,373</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp">Key Learnings</p>
          </div>
          <div className="col-6 col-lg-3 text-center kylr">
            <p>Basic to Advanced level ready. 250 hours of 
              wisdom by industry experts</p>
          </div>
          <div className="col-6 col-lg-3 text-center kylr">
            <p>Basic to Advanced level ready. 250 hours of 
              wisdom by industry experts</p>
          </div>
          <div className="col-lg-3 align-self-center kylr">
            <p style={{opacity: 0}}>43,373</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp">Delivery Type</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>Online</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>Online</p>
          </div>
          <div className="col-lg-3 align-self-center">
            <p style={{opacity: 0}}>43,373</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp">Start Date</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>July 2022</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>July 2022</p>
          </div>
          <div className="col-lg-3 align-self-center">
            <p style={{opacity: 0}}>43,373</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp">Projects</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>2 Months Live
              Projects</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>2 Months Live
              Projects</p>
          </div>
          <div className="col-lg-3 align-self-center">
            <p style={{opacity: 0}}>43,373</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp">Enrolled</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>+ Students</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <p>+ Students</p>
          </div>
          <div className="col-lg-3 align-self-center">
            <p style={{opacity: 0}}>43,373</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-left">
            <p className="mnp" style={{opacity: 0}}>Enrolled</p>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <a href="#" className="orangejncta">Apply Now</a>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <a href="#" className="grylghtcta">Apply Now</a>
          </div>
          <div className="col-lg-3 align-self-center">
            <a href="#" className="grylghtcta" style={{opacity: 0}}>Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>


      <Footer />
    </>
  )
}

export default Compare
