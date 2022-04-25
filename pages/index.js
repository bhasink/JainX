import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import AOS from 'aos'
import Nav from '../components/header/Nav'
import Footer from '../components/footer/Footer'
import Select from 'react-select'
var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import dynamic from 'next/dynamic'
import Autosuggest from 'react-autosuggest'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'

const Home = () => {
  const [cities, setCities] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [catSelected, setCatSelected] = useState('')
  const [courseMode, setCourseMode] = useState('Hybrid')
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setLoading(true)

    getCities()
    getCourseCategory()
    getFeaturedCourses()

    AOS.init({
      duration: 2000,
    })
  }, [])

  const [value, setValue] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const getFeaturedCourses = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-featured-course`,
      )
      const getCourses = data.get_courses
      // const l_page = data.get_courses.last_page;
      // setLastPage(data.get_courses.last_page)
      setCourses(getCourses)

      // console.log(lastPage)
      // console.log(currentPage)
      // console.log(hasMore)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const onChange = (event, { newValue, method }) => {
    setValue(newValue)
    setCatSelected(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    placeholder: 'Find the perfect course for you.....',
    value,
    onChange: onChange,
  }

  const getSuggestionValue = (suggestion) => suggestion.name

  const renderSuggestion = (suggestion) => (
    <p>
      <BsSearch size="12px" style={{ marginTop: '-0.4em' }} /> {suggestion.name}
    </p>
  )

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    // Here I get data from cities.json
    return inputLength === 0
      ? []
      : categories
          .filter(
            (lang) =>
              lang.name.toLowerCase().slice(0, inputLength) === inputValue,
          )
          .slice(0, 5)
  }

  const getCities = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-cities`,
      )
      const get_cities = data.get_cities
      setCities(
        get_cities.map((opt) => ({
          label: opt.name,
          value: opt.id,
          slug: opt.slug,
        })),
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleCity = (selectedOptions) => {
    setSelectedCity(selectedOptions)
  }

  const getCourseCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-categories`,
      )
      const get_categories = data.get_course_category
      setCategories(get_categories)
      setLoading(true)
    } catch (err) {
      console.log(err)
    }
  }

  const styles = {
    menuList: (base) => ({
      ...base,

      '::-webkit-scrollbar': {
        width: '4px',
        height: '0px',
      },
      '::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    }),
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
        items: 2,
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
        items: 4,
        nav: true,
        dots: false,
        loop: true,
      },
    },
    responsive_top_cat: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },

      766: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 3,
        nav: true,
        dots: true,
      },
    },
    responsive_top_catnew: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        loop: true,
      },
      300: {
        items: 1,
        nav: true,
        dots: false,
        loop: true,
      },

      766: {
        items: 3,
        nav: true,
        dots: false,
        loop: true,
      },

      1200: {
        items: 4,
        nav: false,
        dots: true,
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let city = ''

      if (selectedCity != null) {
        city = selectedCity.slug
      } else {
        city = ''
      }

      const slug = convertToSlug(catSelected)
      const mode = convertToSlug(courseMode)

      if (city != '' && slug != '') {
        router.push({
          pathname: '/courses',
          query: { city: city, category: slug, mode: mode },
        })
      } else if (city != '') {
        router.push({
          pathname: '/courses',
          query: { city: city, mode: mode },
        })
      } else if (slug != '') {
        router.push({
          pathname: '/courses',
          query: { category: slug, mode: mode },
        })
      } else {
        router.push({
          pathname: '/courses',
          query: { mode: mode },
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  }

  const handleMode = (event) => {
    const { value } = event.target
    setCourseMode(value)
  }

  return (
    <>
      <Nav />

      {/* {courseMode} */}
      {/* {JSON.stringify(courses,null,2)} */}

      {loading && (
        <>
          <section className="homemainbanner">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-7 text-center align-self-center">
                  <h1
                    className="bnrhd"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <span>YOUR GATEWAY TO A</span>
                    Successful Career
                  </h1>
                  <p>
                    Our handpicked, high demand industry programs transform you
                    to be global leaders
                  </p>

                  <div className="cusjnbar">
                    <form onSubmit={handleSubmit}>
                      <div className="btn-group btn-group-toggle">
                        <label
                          className={
                            courseMode == 'Hybrid'
                              ? 'btn btn-secondary active'
                              : 'btn btn-secondary'
                          }
                        >
                          <input
                            type="radio"
                            name="options"
                            value="Hybrid"
                            onChange={(e) => handleMode(e)}
                          />{' '}
                          Hybrid
                        </label>
                        <label
                          className={
                            courseMode == 'Online'
                              ? 'btn btn-secondary active'
                              : 'btn btn-secondary'
                          }
                        >
                          <input
                            type="radio"
                            name="options"
                            value="Online"
                            onChange={(e) => handleMode(e)}
                          />{' '}
                          Online
                        </label>
                        <label
                          className={
                            courseMode == 'Offline'
                              ? 'btn btn-secondary active'
                              : 'btn btn-secondary'
                          }
                        >
                          <input
                            type="radio"
                            name="options"
                            value="Offline"
                            onChange={(e) => handleMode(e)}
                          />{' '}
                          Offline
                        </label>
                      </div>

                      <div className="srchbar">
                        <Select
                          className="form-control"
                          options={cities}
                          placeholder="City"
                          onChange={handleCity}
                          styles={styles}
                        />

                        <Autosuggest
                          className="form-control"
                          suggestions={suggestions}
                          onSuggestionsFetchRequested={
                            onSuggestionsFetchRequested
                          }
                          onSuggestionsClearRequested={
                            onSuggestionsClearRequested
                          }
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion}
                          inputProps={inputProps}
                        />

                        <button type="submit">
                          <i className="far fa-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 text-center">
                  {/* <select className="form-control locationslcts">
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select> */}

                  <img
                    src={`${process.env.NEXT_PUBLIC_B_API}/images/rightviewmain.png`}
                    className="rgtmds"
                    data-aos="fade-up"
                    data-aos-duration={3000}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="aboutsect">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 col-lg-6 text-center"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-sine"
                >
                  <div className="vdthmbs">
                    <img src={`${process.env.NEXT_PUBLIC_B_API}/images/playicon.png`} className="plicon" />
                    <img src={`${process.env.NEXT_PUBLIC_B_API}/images/about.jpg`} className="fllimg" />
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6  align-self-center"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <h2 className="mainhds mb-lg-4">About Us</h2>
                  <p>
                    Ranked among the top universities in India &amp; considered
                    a cerebral destination for students across the world &amp;
                    Bangalore in particular, for its illustrious history of
                    developing talent,Jain (Deemed-to-be University) is a hub
                    for learning in every sense of the word.
                  </p>
                </div>
              </div>
              <div className="counters numbers">
                <div className="row">
                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <h3 className="orgmds numbround number-item">
                      <span className="value">100000</span>+
                    </h3>
                    <p>ONLINE LEARNERS</p>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <h3 className="orgmds">
                      <span className="value">2000</span>+
                    </h3>
                    <p>hiring partners</p>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 text-center">
                    <h3 className="orgmds">
                      <span className="value">300</span>+
                    </h3>
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

          {courses.length && (
            <section className="featuredcls">
              <div className="container">
                <div className="text-center hdingst">
                  <h2 className="mainhds">Featured Courses</h2>
                </div>
                <div className="coursespanels">
                  {/* {JSON.stringify(courses,null,2)} */}

                  <OwlCarousel
                    className="featuredslide owl-theme owl-carousel"
                    loop
                    margin={15}
                    nav
                    items={4}
                    responsive={state.responsive}
                  >
                    {courses.map((coursesData, key) => (
                      <div className="item">
                        <div className="panelcards">
                          <img
                            src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/` + coursesData.logo}
                            className="fllimg"
                          />
                          <h5 className="csnms">{coursesData.name}</h5>
                          <p>
                            {coursesData.short_desc}
                            <Link
                              href={`courses/${coursesData.institute.slug}/${coursesData.slug}`}
                            >
                              <a>Read more..</a>
                            </Link>
                          </p>
                          <div className="tmclcs">
                            <img
                              src={`${process.env.NEXT_PUBLIC_B_API}/images/wallclock.png`}
                              className="tmicn"
                            />
                            <p>{coursesData.duration} Months</p>
                          </div>
                          <Link
                            href={`courses/${coursesData.institute.slug}/${coursesData.slug}`}
                          >
                            <a className="aplcta">View Details</a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </section>
          )}

          {categories.length && (
            <section className="tpcateg">
              <div className="container">
                <div className="text-center hdingst whtxt">
                  <h2 className="mainhds">Top Categories</h2>
                </div>

                {/* {JSON.stringify(categories,null,2)} */}

                <OwlCarousel
                  className="categchecks userreview owl-theme owl-carousel"
                  loop
                  margin={20}
                  responsive={state.responsive_top_catnew}
                >
                  {categories.map((category, key) => (
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-12">
                          <Link href={'/courses?category=' + category.slug}>
                            <a className="catcheck">{category.name}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </section>
          )}

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
                      <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur adipisci velit
                      </p>
                      <div className="usrthmbs">
                        <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/1.jpg`} />
                      </div>
                      <p className="usrnmtst">Neque porro quisquam</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testipnlpts">
                      <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur adipisci velit
                      </p>
                      <div className="usrthmbs">
                        <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/3.jpg`} />
                      </div>
                      <p className="usrnmtst">Neque porro quisquam</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testipnlpts">
                      <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur adipisci velit
                      </p>
                      <div className="usrthmbs">
                        <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/3.jpg`} />
                      </div>
                      <p className="usrnmtst">Neque porro quisquam</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testipnlpts">
                      <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur adipisci velit
                      </p>
                      <div className="usrthmbs">
                        <img src={`${process.env.NEXT_PUBLIC_B_API}/images/reviews/2.jpg`} />
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
                </OwlCarousel>
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

              <OwlCarousel
                className="advantfeat owl-carousel owl-theme text-center pt-5"
                loop
                margin={10}
                nav
                responsive={state.responsive_top_cat}
              >
                <div className="item">
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/1.png`} />
                  <h4>Crafted Carefully</h4>
                  <p>
                    Each course handpicked to enhance your knowledge and skills.
                  </p>
                </div>
                <div className="item">
                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/2.png`} />
                  <h4>Expert Facilitators</h4>
                  <p>
                    Learn from passionate and industry experienced subject
                    matter experts.
                  </p>
                </div>
                <div className="item">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/3.png`} />
                  <h4>Get Hands-on Exposure</h4>
                  <p>
                    Gain practical experience and skills through
                    industry/in-house projects.
                  </p>
                </div>
                <div className="item">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/1.png`} />
                  <h4>Crafted Carefully</h4>
                  <p>
                    Each course handpicked to enhance your knowledge and skills.
                  </p>
                </div>
                <div className="item">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/2.png`} />
                  <h4>Expert Facilitators</h4>
                  <p>
                    Learn from passionate and industry experienced subject
                    matter experts.
                  </p>
                </div>
                <div className="item">
                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/jnadicon/3.png`} />
                  <h4>Get Hands-on Exposure</h4>
                  <p>
                    Gain practical experience and skills through
                    industry/in-house projects.
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  )
}

export default Home
