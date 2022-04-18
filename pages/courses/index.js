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

const Listing = (props) => {
  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState([])
  const [filterData, setfilterData] = useState([])


  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  const [checkDevice, setCheckDevice] = useState({})

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
        `https://phplaravel-709751-2547471.cloudwaysapps.com/api/listing?page=${currentPage}`,
      )
      const getCourses = data.get_courses.data
      setLastPage(data.get_courses.last_page)

      console.log(lastPage)
      console.log(currentPage)
      console.log(hasMore)

      if (lastPage != currentPage) {
        setCurrentPage((currentPage = currentPage + 1))
      } else {
        setHasMore(false)
      }

      setCourses((get_course) => [...get_course, ...getCourses])
      // setCourses(getCourses)

      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getData =  (value) => {
    setfilterData(value);
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

  

  return (
    <>
      <Nav />

      {JSON.stringify(courses,null,2)}

      <style
        dangerouslySetInnerHTML={{
          __html: '\nbody{\n    background: #e5e8ec;\n}\n',
        }}
      />
      <section className="pageinforhd pt-5 pb-5">
        <div className="container">
          <div className="hdingst">
            <h2 className="mainhds">All Courses</h2>
          </div>
          <nav aria-label="breadcrumb">
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
                  <DesktopContent sendData={getData}/>
                )}
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="sortbyfllnx">
                <div className="tgselectdata">
                {/* {JSON.stringify(filterData)} */}


                { filterData.map((filter, key) => (

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
              <div className="dtabasedcateg">
                <div className="row">
                  <InfiniteScroll
                    dataLength={courses.length}
                    next={getAllCourses}
                    hasMore={hasMore}
                    // loader={<h3> Loading...</h3>}
                    endMessage={<h4>Nothing more to show</h4>}
                    className="row"
                  >
                    {courses &&
                      courses.map((course, key) => (
                        <div className="col-md-4 col-lg-4" key={key}>
                          <div className="coursepanel">
                            <div className="twycol">
                              <div className="scllogoswr">
                                <img
                                  src={`/images/courseslogo/` + course.logo}
                                />
                                <a href="compare.html" className="cmprs">
                                  Compare
                                </a>
                              </div>
                              <div className="coursecontens">
                                <h4>{course.name}</h4>
                                <p>
                                  {course.short_desc}
                                  <Link href={`courses/${course.slug}`}>
                                    <a>Read more..</a>
                                  </Link>
                                </p>
                              </div>
                            </div>
                            <div className="coursedurtime">
                              <span>
                                <img src="./images/scheduleicon.png" />{' '}
                                {course.duration} Months
                              </span>
                              <span>
                                <img src="./images/ppp.png" /> pgp-courses
                              </span>
                            </div>
                            <div className="keydts">
                              <img src="./images/keychain.png" />
                              <p>
                                <span>Key Learnings:</span>{' '}
                                {course.key_learnings}
                              </p>
                            </div>
                            <div className="dtlsctaviews">
                              <Link href={`courses/${course.slug}`}>
                                <a className="grylghtcta">View Details</a>
                              </Link>
                              <a href="#" className="blulghtcta">
                                Enquire
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </InfiniteScroll>

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

export default Listing
