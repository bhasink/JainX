import { useEffect } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'

const PartnerWithUs = () => {
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
          <li className="breadcrumb-item active" aria-current="page">Become Our Skilling Partner</li>
        </ol>
      </nav>
    </div>
  </section>
  <section className="becomeskillpt">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Become Our Skilling Partner</h2> 
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit<br />
          amet, consectetur adipisci velit</p>
        <a href="#" className="blulghtcta">Get Started</a>
      </div><div className="pgbanners">
        <img src={`${process.env.NEXT_PUBLIC_B_API}/images/partnerwitmain.jpg`} className="fllimg" />
      </div>
    </div>
  </section>
  <section className="partnercontsft">
    <div className="container">
      <div className="partsetsdipl">
        <div className="row">
          <div className="col-lg-6 col-md-6 align-self-center">
            <div className="coursepls">
              <h1 className="mainhds">What it means to become our partner</h1>
              <p>Neque porro quisquam est qui dolorem ipsum quia dolor 
                sit amet, consectetur adipisci velit</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/partnestats.jpg`} className="fllimg" />
          </div>
        </div>
      </div>
      <div className="partsetsdipl">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/partnerinfo1.jpg`} className="fllimg" />
          </div>
          <div className="col-lg-6 col-md-6 align-self-center">
            <div className="coursepls">
              <h1 className="mainhds">Provide services &amp; shape
                lives for better</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              <p>Neque porro quisquam est qui dolorem </p>
              <p>Neque porro quisquam est qui dolorem </p>
            </div>
          </div>
        </div>
      </div>
      <div className="partsetsdipl">
        <div className="row">
          <div className="col-lg-6 col-md-6 align-self-center">
            <div className="coursepls">
              <h1 className="mainhds">Take your institution to every
                corner of the world</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
              <p>Neque porro quisquam est qui dolorem </p>
              <p>Neque porro quisquam est qui dolorem </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/partnerinfo2.jpg`} className="fllimg" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimoniapn">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Testimonial</h2> 
      </div>
      <div className="testnorflow">
        <div className="testipnlpts">
          <div className="usrthmbs">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/1.jpg`} />
          </div>
          <div className="usrrightinfos">
            <p>Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur
              adipisci velit</p>
            <h6 className="mainhds">Scarlett Johansson</h6>
            <p className="usrnmtst">Star Industries</p>
          </div>
        </div>
        <div className="testipnlpts">
          <div className="usrthmbs">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/3.jpg`} />
          </div>
          <div className="usrrightinfos">
            <p>Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur
              adipisci velit</p>
            <h6 className="mainhds">Scarlett Johansson</h6>
            <p className="usrnmtst">Star Industries</p>
          </div>
        </div>
        <div className="testipnlpts">
          <div className="usrthmbs">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/2.jpg`} />
          </div>
          <div className="usrrightinfos">
            <p>Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur
              adipisci velit</p>
            <h6 className="mainhds">Scarlett Johansson</h6>
            <p className="usrnmtst">Star Industries</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="becomeskillpt pt-5">
    <div className="container">
      <div className="text-center hdingst">
        <h2 className="mainhds">Apply to become a partner</h2> 
        <a href="#" className="blulghtcta">Get Started</a>
      </div>
    </div>
  </section>




      <Footer />
    </>
  )
}

export default PartnerWithUs
