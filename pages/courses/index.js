import { useEffect, useState } from 'react'
import AOS from 'aos'
import Nav from '../../components/header/Nav'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Select from 'react-select'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const DesktopContent = dynamic(() => import('../../components/DeskFilter'))
const MobileContent = dynamic(() => import('../../components/MobFilter'))
import { useUserAgent } from 'next-useragent'
import { Puff } from 'react-loading-icons'
import ContentLoader from 'react-content-loader'
import { useToasts } from 'react-toast-notifications'
import { useRouter } from 'next/router'

const Listing = (props) => {
  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState([])
  const [filterData, setfilterData] = useState([])
  const [loader, setLoader] = useState(false)
  const [currentProject, setCurrentProject] = useState("")

  

  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(2)
  const [lastPage, setLastPage] = useState(0)

  const [checkDevice, setCheckDevice] = useState({})

  const { addToast } = useToasts()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [query, setQuery] = useState('')

  const router = useRouter()


  let ua

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    getAllCourses()

    if (props.uaString) {
      ua = useUserAgent(props.uaString)
    } else {
      ua = useUserAgent(window.navigator.userAgent)
    }
    setCheckDevice(ua)
  }, [])

  const getAllCourses = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/listing`,
      )
      const getCourses = data.get_courses.data
      // const l_page = data.get_courses.last_page;
      setLastPage(data.get_courses.last_page)
      setCourses(getCourses)

      // console.log(lastPage)
      // console.log(currentPage)
      // console.log(hasMore)

      if (getCourses.length == null || getCourses.length == 0) {
        setHasMore(false)
      }

      // if (l_page > currentPage) {
      //   setCurrentPage((currentPage = currentPage + 1))
      // } else {
      //   setHasMore(false)
      // }

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllCourses2 = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/listing?page=${currentPage}`,
      )
      const getCourses = data.get_courses.data
      const l_page = data.get_courses.last_page
      setLastPage(data.get_courses.last_page)
      setCourses((get_course) => [...get_course, ...getCourses])

      // console.log(lastPage)
      // console.log(currentPage)
      // console.log(hasMore)

      if (getCourses.length == null) {
        setHasMore(false)
      }

      if (l_page > currentPage) {
        setCurrentPage((currentPage = currentPage + 1))
      } else {
        setHasMore(false)
      }

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllCoursesByFilter = async (value) => {
    setLoader(true)

    try {
      // const { data } = await axios.get(
      //   `https://phplaravel-709751-2547471.cloudwaysapps.com/api/listingbyfilter?filters=${querystring.stringify(filterData)}`,
      // )

      const newFilterData = JSON.stringify(value)

      const config = {
        headers: { 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/listingbyfilter`,
        {
          prod_filters: newFilterData,
        },
        config,
      )

      const getCourses = data.get_courses.data
      setLastPage(data.get_courses.last_page)

      // console.log(lastPage)
      // console.log(currentPage)
      // console.log(hasMore)

      if (lastPage != currentPage) {
        // setCurrentPage((currentPage = currentPage + 1))
      } else {
        setHasMore(false)
      }

      setCourses(getCourses)
      // setCourses(getCourses)

      setLoader(false)
    } catch (err) {
      console.log(err)
    }
  }

  const getData = (value) => {
    console.log(value)
    if (value.length > 0) {
      setfilterData(value)
      getAllCoursesByFilter(value)
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
    

    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $("#exampleModalEnquirenow").hide()


    try {
      const data = await axios.post(`${process.env.NEXT_PUBLIC_API}/course-leads`,{
          "name":name,
          "email":email,
          "mobile_no":mobileNo,
          "query":query,
          "course_id":currentProject,
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


      {/* {JSON.stringify(currentProject,null,2)} */}

      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n      body{\n  background: #e5e8ec;\n      }\n\n      .css-13q5zx4-ToastContainer {\n        z-index: 9999;\n      }\n      ',
        }}
      />

      <section className="pageinforhd pt-5 pb-5">
        <div className="container">
          <div className="hdingst">
            <h2 className="mainhds">All Courses</h2>
          </div>
          <nav aria-label="breadcrumb" className="float-lg-right">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                All Courses
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="coursesjnxarea">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="custmfiltr">
                {checkDevice.deviceType ? (
                  <MobileContent />
                ) : (
                  <DesktopContent sendData={getData} />
                )}
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="sortbyfllnx">
                <div className="tgselectdata">
                  {/* {JSON.stringify(filterData)} */}

                  {filterData &&
                    filterData.map((filter, key) => (
                      <div className="ttpattrib">
                        <p>
                          {filter.label} <span>x</span>
                        </p>
                      </div>
                    ))}
                </div>
                <div className="sotfllshw" style={{ width: '20%' }}>
                  <Select
                    options={courseName}
                    placeholder="Sort By:"
                    styles={styles}
                  />

                  {/* <select className="selectpicker" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Sort By Tag">
                <option value="hide">Sort By:</option>
                <option value={2010}>Price: Low to High</option>
                <option value={2011}>Price: High to Low</option>
                <option value={2012}>Duration</option>
                <option value={2013}>Popularity</option>
                <option value={2014}>City</option>
              </select> */}
                </div>
              </div>
              <div className="dtabasedcateg dvv">
                <div className="">
                  {loader ? (
                    <ContentLoader
                      backgroundColor="#f5f5f5"
                      foregroundColor="#dbdbdb"
                      viewBox="0 0 900 400"
                      height={400}
                      width={900}
                      speed={1}
                      {...props}
                    >
                      <rect
                        x="0"
                        y="0"
                        rx="0"
                        ry="0"
                        width="280"
                        height="400"
                      />
                      <rect
                        x="310"
                        y="0"
                        rx="0"
                        ry="0"
                        width="280"
                        height="400"
                      />
                      <rect
                        x="620"
                        y="0"
                        rx="0"
                        ry="0"
                        width="280"
                        height="400"
                      />
                    </ContentLoader>
                  ) : (
                    <InfiniteScroll
                      dataLength={courses.length}
                      next={getAllCourses2}
                      hasMore={hasMore}
                      loader={
                        <>
                          <div
                            style={{
                              textAlign: 'center',
                              margin: '5em',
                              width: '100%',
                            }}
                          >
                            <Puff
                              stroke="#302e59"
                              strokeOpacity={1}
                              speed={0.75}
                            />
                          </div>
                        </>
                      }
                      endMessage={
                        <>
                          <div
                            className="col-md-12"
                            style={{
                              textAlign: 'center',
                              padding: '0em 0em 2em 0em',
                              color: '#676d76',
                            }}
                          >
                            <b>Yay! You have seen it all.</b>
                          </div>
                        </>
                      }
                      className="row"
                      // pullDownToRefreshThreshold={50}
                      scrollableTarget="dvvvvv"
                    >
                      {courses &&
                        courses.map((course, key) => (
                          <div className="col-md-6 col-lg-4" key={key}>
                            <div className="coursepanel">
                              <div className="twycol">
                                <div className="scllogoswr">
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_B_API}/images/courseslogo/` + course.logo}
                                  />
                                  <a href="compare.html" className="cmprs">
                                    Compare
                                  </a>
                                </div>
                                <div className="coursecontens">
                                  <h4>{course.name}</h4>
                                  <p>
                                    {course.short_desc}
                                    <Link
                                      href={`courses/${course.institute.slug}/${course.slug}`}
                                    >
                                      <a>Read more..</a>
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className="coursedurtime">
                                <span>
                                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/scheduleicon.png`} />{' '}
                                  {course.duration} Months
                                </span>
                                <span>
                                  <img src={`${process.env.NEXT_PUBLIC_B_API}/images/ppp.png`} /> pgp-courses
                                </span>
                              </div>
                              <div className="keydts">
                                <img src={`${process.env.NEXT_PUBLIC_B_API}/images/keychain.png`} />
                                <p>
                                  <span>Key Learnings:</span>{' '}
                                  {course.key_learnings}
                                </p>
                              </div>
                              <div className="dtlsctaviews">
                                <Link
                                  href={`courses/${course.institute.slug}/${course.slug}`}
                                >
                                  <a className="grylghtcta">View Details</a>
                                </Link>
                                <a
                                  href="javascript:void(0);"
                                  data-toggle="modal"
                                  data-target="#exampleModalEnquirenow"
                                  className="blulghtcta"
                                  onClick={(e) => setCurrentProject(course.id)}
                                >
                                  Enquire
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                    </InfiniteScroll>
                  )}

                  {/* Modal */}
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
                            <form onSubmit={handleSubmit}>
                              <div className="row">
                                <div className="col-lg-12 mx-auto">
                                  <h3>Enquire Now !</h3>
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
                                      onChange={(e) =>
                                        setMobileNo(e.target.value)
                                      }
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
                                  <button
                                    type="submit"
                                    className="orangectadms"
                                  >
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
                </div>
              </div>

              <div class="dvvvvv"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Listing
