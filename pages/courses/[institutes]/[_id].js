import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AOS from 'aos'
import Nav from '../../../components/header/Nav'
import Footer from '../../../components/footer/Footer'
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})
import { useToasts } from 'react-toast-notifications'
import FileSaver from 'file-saver'

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState({})
  const [keyHighlights, setKeyHighlightss] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [query, setQuery] = useState('')

  const myRef = useRef(null)
  const { addToast } = useToasts()
  const executeScroll = () => myRef.current.scrollIntoView()

  const router = useRouter()
  const _id = router.query._id

  useEffect(() => {
    if (!router.isReady) return

    getCourseDetails()

    AOS.init({
      duration: 2000,
    })
  }, [router.isReady])

  const getCourseDetails = async (value) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-course-details`,
        {
          slug: _id,
        },
        config,
      )

      const getCoursesDetails = data.get_course_details
      const keyHlits = getCoursesDetails.key_highlights.split(',')

      setKeyHighlightss(keyHlits)

      setCourseDetails(getCoursesDetails)
    } catch (err) {
      console.log(err)
    }
  }

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

    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $('#exampleModalEnquirenow').hide()

    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course-leads`,
        {
          name: name,
          email: email,
          mobile_no: mobileNo,
          query: query,
          course_id: courseDetails.id,
        },
      )

      if (data.status == 200) {
        addToast('Success!', { appearance: 'success' })
        router.push('/thanks')
      }

      //
    } catch (err) {
      console.log(err)
      addToast('Invalid! Please try again.', { appearance: 'error' })
    }
  }

  const handleSubmit2 = async (e) => {
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

    $('body').removeClass('modal-open')
    $('.modal-backdrop').remove()
    $('#exampleModalEnquirenow').hide()

    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/course-leads`,
        {
          name: name,
          email: email,
          mobile_no: mobileNo,
          query: query,
          course_id: courseDetails.id,
        },
      )

      if (data.status == 200) {
        FileSaver.saveAs(
          process.env.NEXT_PUBLIC_B_API + '/brochure/1639503210_41536.csv',
          '1639503210_41536.csv',
        )

        addToast('Success!', { appearance: 'success' })
        router.push('/thanks')
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

  const state = {
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true,
        autoplay:true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: true,
        autoplay:true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        margin: 10,
        loop: true,
      },

      766: {
        items: 2,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 3,
        nav: true,
        dots: true,
        autoplay:true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        loop: true,
      },
    },
    responsive_trust_comp: {
      0: {
        items: 1,
        nav: false,
        autoplay:true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: true,
        loop: true,
      },
      300: {
        items: 3,
        nav: false,
        autoplay:true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        dots: true,
        loop: true,
      },

      766: {
        items: 3,
        nav: false,
        dots: false,
        loop: true,
      },

      1200: {
        items: 5,
        nav: false,
        dots: true,
        autoplay:true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        center: true,
      },
    },
  }

  return (
    <>
      <Nav />

      <section className="pageinforhd pt-5 pb-5 nohdleftbrdcm">
        <div className="container">
          <nav aria-label="breadcrumb" className="float-lg-right">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">All Course</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Individual Course Page
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="coursedetailmain">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="coursepls">
                <h1 className="mainhds">
                  {courseDetails && courseDetails.name}
                </h1>
                <h4 className="insnames">
                  {courseDetails &&
                    courseDetails.institute &&
                    courseDetails.institute.name}
                </h4>
                <p>{courseDetails && courseDetails.short_desc}</p>
                <div className="dtlsctaviews desktopcopy">
                  <a onClick={executeScroll} className="grylghtcta">
                    Apply Now
                  </a>
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#exampleModalEnquirenow"
                    className="blulghtcta"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center text-lg-right">
              {courseDetails && courseDetails.logo && (
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/` +
                    courseDetails.logo
                  }
                  className="ms"
                />
              )}
            </div>
          </div>
          <div className="coursepackdtls">
            <div className="row">
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/1.png`}
                />
                <h6 className="mainhds">Delivery Type</h6>
                <h4 className="insnames">Online</h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/2.png`}
                />
                <h6 className="mainhds">Start Date</h6>
                <h4 className="insnames">
                  {courseDetails && courseDetails.start_date}
                </h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/3.png`}
                />
                <h6 className="mainhds">Duration</h6>
                <h4 className="insnames">
                  {courseDetails && courseDetails.duration} Months
                </h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/4.png`}
                />
                <h6 className="mainhds">Projects</h6>
                <h4 className="insnames">
                  {courseDetails && courseDetails.projects}
                </h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/5.png`}
                />
                <h6 className="mainhds">Enrolled</h6>
                <h4 className="insnames">
                  {courseDetails && courseDetails.students_enrolled}+ Students
                </h4>
              </div>
              <div className="col-6 col-lg-2 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/6.png`}
                />
                <h6 className="mainhds">Fee</h6>
                <h4 className="insnames">
                  {courseDetails && courseDetails.fees}
                </h4>
              </div>
              <div className="dtlsctaviews mobilecopy">
                <a onClick={executeScroll} className="grylghtcta">
                  Apply Now
                </a>
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#exampleModalEnquirenow"
                  className="blulghtcta"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="coursetextmoreinf">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Curriculm
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p>{courseDetails && courseDetails.overview}</p>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p>{courseDetails && courseDetails.curriculum}</p>
              </div>
            </div>
          </div>
          <div className="keyftscours">
            <h4 className="mainhds">
              <span className="ogx">Key</span> Highlights
            </h4>
            <ul>
              {keyHighlights &&
                keyHighlights.map((hilts, key) => <li>{hilts}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="brochuregalblue">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 align-self-center">
              <div className="hdingst whtxt">
                <h2 className="mainhds">Brochure</h2>
              </div>
              <p>
                Best-in-class content by leading faculty and industry leaders in
                the form of videos, cases and projects.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <a
                href="javascript:void(0);"
                data-toggle="modal"
                data-target="#exampleModalEnquirenow"
                className="orangejncta"
              >
                <i className="fas fa-download" /> Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="instituredemosd">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 whtxt align-self-center">
              <h4 className="mainhds">
                <span className="ogx">About</span> the institute
              </h4>
              <p>
                {courseDetails &&
                  courseDetails.institute &&
                  courseDetails.institute.about}
              </p>

              {courseDetails && courseDetails.institute && (
                <Link href={'/courses/' + courseDetails.institute.slug}>
                  <a className="orangejncta">Know More</a>
                </Link>
              )}
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src={`${process.env.NEXT_PUBLIC_B_API}/images/aboutinst.jpg`}
                className="fllimg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="testimoniapn">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">What Our Learners Say</h2>
          </div>
          <div className="testimparts">
            <OwlCarousel
              className="reviewtestim owl-theme owl-carousel"
              loop
              margin={40}
              nav
              center
              responsive={state.responsive}
            >
              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img
                      src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/1.jpg`}
                    />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>

              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img
                      src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/2.jpg`}
                    />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>

              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img
                      src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/3.jpg`}
                    />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>

              <div className="item">
                <div className="testipnlpts">
                  <p>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur adipisci velit
                  </p>
                  <div className="usrthmbs">
                    <img
                      src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/1.jpg`}
                    />
                  </div>
                  <p className="usrnmtst">Neque porro quisquam</p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="whtsects trustbycoms roundicon">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">
              Trust by <span className="ogx"> Companies</span>
            </h2>
          </div>
          <div className="cpmslide">
            <OwlCarousel
              className="trustcmpcarso owl-theme owl-carousel"
              loop
              margin={40}
              items={5}
              center
              responsive={state.responsive_trust_comp}
            >
              <div className="item">
                <div className="lgocirc">
                  <img
                    src={`${process.env.NEXT_PUBLIC_B_API}/images/client/1.png`}
                  />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img
                    src={`${process.env.NEXT_PUBLIC_B_API}/images/client/2.png`}
                  />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img
                    src={`${process.env.NEXT_PUBLIC_B_API}/images/client/3.png`}
                  />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img
                    src={`${process.env.NEXT_PUBLIC_B_API}/images/client/4.png`}
                  />
                </div>
              </div>
              <div className="item">
                <div className="lgocirc">
                  <img
                    src={`${process.env.NEXT_PUBLIC_B_API}/images/client/5.png`}
                  />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="faqnewtys">
        <div className="container">
          <div className="text-center hdingst midtwhdfq align-self-center">
            <h2 className="mainhds">
              F<span className="ogx">requently</span>
              <br />F<span className="ogx">Asked</span>
              <br />Q<span className="ogx">uestions</span>
            </h2>
            <img
              src={`${process.env.NEXT_PUBLIC_B_API}/images/faqroundimgs.png`}
              className="rouim"
            />
          </div>
          <div id="accordion8">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Is the online degree program offered by JAIN (Deemed- to-be
                    University) UGC entitled?
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Yes, the University is entitled by the University Grants
                  Commission (UGC) to offer online degree programs.
                  Additionally, our MBA and MCA programs are approved by AICTE.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How many credits does the program have?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How will I be notified about the admission confirmation?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How will I be notified about the admission confirmation?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What is the eligibility criteria for online degree programs?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSix">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How many credits does the program have?
                  </button>
                </h5>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSeven">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How will I be notified about the admission confirmation?
                  </button>
                </h5>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingEight">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How many credits does the program have?
                  </button>
                </h5>
              </div>
              <div
                id="collapseEight"
                className="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordion8"
              >
                <div className="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tpcateg contlast" ref={myRef}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="customfrms lssmg">
                  <div className="form-group">
                    <input
                      type="textr"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
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
                      placeholder="Mobile No."
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
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
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-lg-6 align-self-center">
              <div className="hdingst whtxt">
                <h2 className="mainhds">
                  <span className="ogx">Apply now!</span>
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

      <div
        className="modal fade"
        id="exampleModalEnquirenow"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalEnquirenowTitle3"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered   jncustm trasntypes"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              <div className="basicenqforms">
                <form onSubmit={handleSubmit2}>
                  <div className="row">
                    <div className="col-lg-12 mx-auto">
                      <h3>Download Brochure</h3>
                      <div className="form-groupsets">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="form-groupsets">
                        <label>Email id</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-groupsets">
                        <label>Mobile No.</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          value={mobileNo}
                          onChange={(e) => setMobileNo(e.target.value)}
                        />
                      </div>

                      <div className="form-groupsets">
                        <label>Query</label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder=""
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12 text-center roundbotms">
                      <button type="submit" className="orangectadms">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CourseDetails
