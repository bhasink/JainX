import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import AOS from 'aos'
import Link from 'next/link'
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

const Institutes = () => {
  const [institute, setInstitute] = useState({})
  const router = useRouter()
  const institutes = router.query.institutes

  useEffect(() => {
    if (!router.isReady) return

    getInstitute()

    AOS.init({
      duration: 2000,
    })
  }, [router.isReady])

  const getInstitute = async (value) => {
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/get-institute`,
        {
          slug: institutes,
        },
        config,
      )

      const getInstitute = data.get_institute

      setInstitute(getInstitute)
    } catch (err) {
      console.log(err)
    }
  }

  const state = {
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
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
        dots: false,
        loop: true,
      },
    },
    responsive_trust_comp: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      300: {
        items: 3,
        nav: false,
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
                {institute && institute.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="coursedetailmain">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 align-self-center text-center text-lg-left">
              <div className="coursepls">
                <h1 className="mainhds">{institute && institute.name}</h1>
                <p>{institute && institute.certifications}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-center text-lg-right">
              <img
                src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/deake.png`}
                className="ms"
              />
            </div>
          </div>
          <div className="coursepackdtls">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/1.png`}
                />
                <h6 className="mainhds">Courses</h6>
                <h4 className="insnames">
                  {institute && institute.courses && institute.courses.length}
                </h4>
              </div>
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/7.png`}
                />
                <h6 className="mainhds">Hours</h6>
                <h4 className="insnames">250</h4>
              </div>
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/5.png`}
                />
                <h6 className="mainhds">Enrolled</h6>
                <h4 className="insnames">
                  {institute && institute.students_enrolled}+ Students
                </h4>
              </div>
              <div className="col-6 col-lg-3 col-md-3 mx-auto ctypeinl">
                <img
                  src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/courseinf/8.png`}
                />
                <h6 className="mainhds">Certification</h6>
                <h4 className="insnames">
                  {institute && institute.certifications}
                </h4>
              </div>
            </div>
          </div>
          <div className="coursetextmoreinf">
            <h4 className="mainhds mb-lg-5"> About</h4>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p>{institute && institute.about}</p>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p>
                  Instead of writing a static business plan, the learner will
                  learn to design rapid prototypes to test and iterate business
                  concepts. Whether for new initiatives and ventures inside an
                  existing business or organization, or for an entrepreneur
                  ready to bring a startup to life, this course will help them
                  de-risk your business ideas and craft a sustainable business
                  model that is rooted in the people they wish to serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimoniapn pb-0">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">All Courses</h2>
          </div>
          <div className="dtabasedcateg mt-lg-5 mt-5">
            <div className="row">
              {institute &&
                institute.courses &&
                institute.courses.map((course, key) => (
                  <div className="col-md-6 col-lg-4">
                    <div className="coursepanel">
                      <div className="twycol">
                        <div className="coursecontens">
                          <h4>{course.name}</h4>
                          <p>
                            {course.short_desc} <a href="#">Read more..</a>
                          </p>
                        </div>
                      </div>
                      <div className="coursedurtime">
                        <span>
                          <img
                            src={`${process.env.NEXT_PUBLIC_B_API}/images/scheduleicon.png`}
                          />{' '}
                          {course.duration} Months
                        </span>
                        <span>
                          <img
                            src={`${process.env.NEXT_PUBLIC_B_API}/images/ppp.png`}
                          />{' '}
                          pgp-courses
                        </span>
                      </div>
                      <div className="keydts">
                        <img
                          src={`${process.env.NEXT_PUBLIC_B_API}/images/keychain.png`}
                        />
                        <p>
                          <span>Key Learnings:</span>
                          {course.key_learnings}
                        </p>
                      </div>
                      <div className="dtlsctaviews">
                        <Link href={`${course.institute.slug}/${course.slug}`}>
                          <a href="#" className="grylghtcta">
                            View Details
                          </a>
                        </Link>
                        <a href="#" className="blulghtcta">
                          Enquire
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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
              margin={50}
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
      <section className="whtsects trustbycoms roundicon ">
        <div className="container">
          <div className="text-center hdingst">
            <h2 className="mainhds">Hiring Companies</h2>
          </div>
          <div className="cpmslide">
            <OwlCarousel
              className="trustcmpcarso owl-theme owl-carousel"
              loop
              margin={20}
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

      <Footer />
    </>
  )
}

export default Institutes
