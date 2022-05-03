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


      <div className="compareanadata">
        <div className="row">
          <div className="col-lg-3 blankspcs">
              <div className="firstembox">

              </div>

              <div className="featureinfossts">
                <p>Price</p>
                <p>Duration</p>
                <p>Key Learnings</p>
                <p>Delivery Type</p>
                <p>Start Date</p>
                <p>Projects</p>
                <p>Enrolled</p>
                <div className="bxformts">
                  
                </div>
              </div>
          </div>

          <div className="col-4 col-lg-3 actdatacompsets">
            <div className="firstembox">
              <div className="coursepls">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/2.jpg`} className="ms fllimg" />
                <h1 className="mainhds">Sports Management</h1>
                <p>Master the Trends and Technologies in the Business
                  Side of Sports Management.</p>
                <div className="dtlsctaviews">
                  <a href="#" className="orangejncta">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="featureinfossts">
                <p className="bxformts">42,373</p>
                <p className="bxformts">12 months</p>
                <p className="bxformts">Basic to Advanced level ready. 250 hours of wisdom by industry experts</p>
                <p className="bxformts">Online</p>
                <p className="bxformts">July 2022</p>
                <p className="bxformts">2 Months Live Projects</p>
                <p className="bxformts">+ Students</p>
                <div className="bxformts">
                  <a href="#" class="orangejncta">Apply Now</a>
                </div>
              </div>


          </div>

          <div className="col-4 col-lg-3 actdatacompsets">
            <div className="firstembox">
              <div className="coursepls">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/2.jpg`} className="ms fllimg" />
                <h1 className="mainhds">Sports Management</h1>
                <p>Master the Trends and Technologies in the Business
                  Side of Sports Management.</p>
                <div className="dtlsctaviews">
                  <a href="#" className="orangejncta">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="featureinfossts">
                <p className="bxformts">42,373</p>
                <p className="bxformts">12 months</p>
                <p className="bxformts">Basic to Advanced level ready. 250 hours of wisdom by industry experts</p>
                <p className="bxformts">Online</p>
                <p className="bxformts">July 2022</p>
                <p className="bxformts">2 Months Live Projects</p>
                <p className="bxformts">+ Students</p>
                <div className="bxformts">
                <a href="#" class="grylghtcta">Apply Now</a>
                </div>
              </div>


          </div>


          <div className="col-4 col-lg-3 actdatacompsets">
            <div className="firstembox">
              <div className="coursepls">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/2.jpg`} className="ms fllimg" />
                <h1 className="mainhds">Sports Management</h1>
                <p>Master the Trends and Technologies in the Business
                  Side of Sports Management.</p>
                <div className="dtlsctaviews">
                  <a href="#" className="orangejncta">Apply Now</a>
                </div>
              </div>
            </div>

            <div className="featureinfossts">
                <p className="bxformts">42,373</p>
                <p className="bxformts">12 months</p>
                <p className="bxformts">Basic to Advanced level ready. 250 hours of wisdom by industry experts</p>
                <p className="bxformts">Online</p>
                <p className="bxformts">July 2022</p>
                <p className="bxformts">2 Months Live Projects</p>
                <p className="bxformts">+ Students</p>
                <div className="bxformts">
                  <a href="#" class="orangejncta">Apply Now</a>
                </div>
              </div>


          </div>

          <div className="col-4 col-lg-3 actdatacompsets">
            <div className="firstembox midonlybox">
            <a href="#" class="orangejncta">Add+</a>
            </div>

            <div className="featureinfossts">
              <p className="bxformts"></p>
              <p className="bxformts"></p>
              <p className="bxformts"></p>
              <p className="bxformts"></p>
              <p className="bxformts"></p>
              <p className="bxformts"></p>
              <p className="bxformts"></p>
              <p className="bxformts"></p>
              </div>

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
