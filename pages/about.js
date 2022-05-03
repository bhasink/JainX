import { useEffect, useState } from 'react'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useToasts } from 'react-toast-notifications'

const About = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { addToast } = useToasts()

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name == '') {
      addToast('Please enter the name!', { appearance: 'error' })

      return false
    }

    if (email == '') {
      addToast('Please enter the email!', { appearance: 'error' })
      return false
    }

    if (IsEmail(email) == false) {
      addToast('Incorrect email!', { appearance: 'error' })

      return false
    }

    if (mobileNo == '') {
      addToast('Please enter the mobile number!', { appearance: 'error' })
      return false
    }

    if (mobileNo.length != 10) {
      addToast('Mobile number must be of ten digits!', { appearance: 'error' })
      return false
    }

    if (query == '') {
      addToast('Please enter the query!', { appearance: 'error' })
      return false
    }


    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API}/contact-us`,{
          "name":name,
          "email":email,
          "mobile_no":mobileNo,
          "query":query,
      });
  
      if(data.status == 200){
        addToast("Success!", { appearance: 'success' });
        router.push("/thanks");
      }

      //
    } catch (err) {
      console.log(err)
      addToast('Invalid! Please try again.', { appearance: 'error' })
    }
  }

  const IsEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regex.test(email)) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <Nav />

      <section className="pageinforhd pt-lg-5 pb-lg-5">
        <div className="container">
          <div className="hdingst">
            <h2 className="mainhds">About US</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About us
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="aboutlayouts">
        <div className="container">
          <div className="pgbanners">
            <img src={`${process.env.NEXT_PUBLIC_B_API}/images/aboutbanner.jpg`} className="fllimg" />
          </div>
          <div className="contentares  pt-5 pb-lg-5">
            <div className="text-center hdingst">
              <h2 className="mainhds">
                Jain<span className="ogx">x</span> The Learning Hub
              </h2>
            </div>
            <div className="row  pt-5 pb-5">
              <div className="col-md-6 col-lg-6 pb-5 pb-lg-1">
                <div className="vdthmbs">
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/playicon.png`} className="plicon" />
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/aboutthumb.jpg`} className="fllimg" />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 align-self-center">
                <p>
                  JAINx is the Skilling Academy of Jain (Deemed-to-be
                  University) providing industry relevant programs with an
                  objective to acmcess world class education from anywhere,
                  inheriting Jain (Deemed-to-be University) as vision of
                  fostering human development through excellence in Quality
                  Education, Research and Entrepreneurial Development.
                </p>
                <p>
                  JAINx is working towards creating an eco-system consisting of
                  Learner's, industry and mentors. We want our Learner's to
                  learn new skills, get a dream job, or create an entirely new
                  future with our robust catalogue of courses which are
                  specially designed for Working Professionals offering one of
                  the best learning experiences with the amalgamation of
                  technology and pedagogies.
                </p>
              </div>
              <div className="col-lg-12  pt-lg-5 ">
                <p>
                  {' '}
                  Our Learning Management System hosts High Quality Content
                  developed by top academicians and Industry Experts and also
                  provides features such as Live Classes, Webinars, one-to-one
                  discussions with faculty, Discussion Forums, Mentorship and
                  Career Support. JAINx Offers non credit Programs.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whtsects jnadvts">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">
              Jain<span className="ogx">x</span> Advantage
            </h2>
          </div>
          <div className="row text-center pt-5">
            <div className="col-lg-4 col-md-6">
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/1.png`} />
              <h4>Crafted Carefully</h4>
              <p>
                Each course handpicked to enhance your knowledge and skills.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/2.png`} />
              <h4>Expert Facilitators</h4>
              <p>
                Learn from passionate and industry experienced subject matter
                experts.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/3.png`} />
              <h4>Get Hands-on Exposure</h4>
              <p>
                Gain practical experience and skills through industry/in-house
                projects.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/4.png`} />
              <h4>Live Projects &amp; Case Studies</h4>
              <p>
                Gain practical experience and skills through industry /in-house
                projects.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/5.png`} />
              <h4>Trending Programs</h4>
              <p>Learn the most trending programs &amp; be industry ready.</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/6.png`} />
              <h4>Industry Relevant Curriculum</h4>
              <p>
                Learn from passionate and industry experienced subject matter
                experts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="whtsects trustbycoms pt-2 pb-3">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds smll">
              We collaborate with top companies spanning various industrial
              segments, business models, and sectors. Our 500+ hiring partners
              offer students job openings across multiple job roles to suit
              their skills.
            </h2>
          </div>
          <div className="cpmslide border-bottom-0">
            <div className="trustcmpcarso owl-theme owl-carousel">
              <div className="item">
                <div className="lgocirc">
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/1.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/2.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/3.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/4.png`} />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/client/5.png`} />
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      <section className="tpcateg">
        <div className="container">
          <div className="text-center hdingst whtxt">
            <h2 className="mainhds">
              <span className="ogx">Reach Out To Us</span>
            </h2>
            <p className="text-white">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              <br />
              consectetur, adipisci velit...
            </p>
            <form onSubmit={handleSubmit}>
                <div className="customfrms lssmg">
                  <div className="form-group">
                    <input
                      type="textr"
                      className="form-control"
                      placeholder="First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile Number"
                      value={mobileNo}
                      onChange={(e) =>setMobileNo(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                                    <textarea
                                      type="text"
                                      className="form-control"
                                      placeholder="Query"
                                      value={query}
                                      onChange={(e) => setQuery(e.target.value)}
                                    ></textarea>
                                  </div>

                  <div className="form-group text-center">
                    <button type='submit'>Submit</button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
