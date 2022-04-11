import { useEffect,useState } from "react";
import AOS from 'aos';
import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer";
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

const Listing = () => {

const [courses, setCourses] = useState([]);
const [hasMore, setHasMore] = useState(true);
const [currentPage, setCurrentPage] = useState(1);
const [lastPage, setLastPage] = useState(0);

useEffect(() => {
    AOS.init({
    duration : 2000
    });
    getAllCourses();
}, []);

const getAllCourses = async () => {
    try {
      const { data } = await axios.get(`https://phplaravel-709751-2547471.cloudwaysapps.com/api/listing?page=${currentPage}`)
      const getCourses = data.get_courses.data;
      setLastPage(data.get_courses.last_page);
       
      
      console.log(lastPage);
      console.log(currentPage);
      console.log(hasMore);

      if(lastPage != currentPage){
        setCurrentPage(currentPage = currentPage+1);
      }else{
        setHasMore(false);
      }

      setCourses((get_course) => [...get_course, ...getCourses]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

return (
        <>

  <Nav />

  <style dangerouslySetInnerHTML={{__html: "\nbody{\n    background: #e5e8ec;\n}\n" }} />
  <section className="pageinforhd pt-5 pb-5">
    <div className="container">
      <div className="hdingst">
        <h2 className="mainhds">All Courses</h2>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">All Courses</li>
        </ol>
      </nav>
    </div>
  </section>
  <section className="coursesjnxarea">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="custmfiltr">
            <div className=" mobsonly">
              <button className=" collapsed ctfiljxs nobgtr" data-toggle="modal" data-target="#exampleModalCenter5">
                <img src="./images/sortby.png" />	
              </button>
              <button className=" collapsed ctfiljxs" data-toggle="modal" data-target="#exampleModalCenter1">
                Course Name
              </button>
              <button className=" collapsed ctfiljxs" data-toggle="modal" data-target="#exampleModalCenter2">
                Course Type
              </button>
              <button className=" collapsed ctfiljxs" data-toggle="modal" data-target="#exampleModalCenter3">
                City
              </button>
              <button className=" collapsed ctfiljxs nobgtr" data-toggle="modal" data-target="#exampleModalCenter">
                <img src="./images/filterbys.png" />	
              </button>
              <button className=" collapsed ctfiljxs" data-toggle="modal" data-target="#exampleModalCenter4">
                Select Institute
              </button>
              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered jncustm trasntypes" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="deskserachflls">
                        <select className="selectpicker form-control" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Search By Course Name">
                          <option>Course Name </option>
                          <option>Sports Management</option>
                          <option>Health Tech</option>
                          <option>Data Analytics</option>
                          <option>Digital Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer text-center mx-auto">
                      <button type="button" className="blulghtcta">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered jncustm" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <h6 className="flxhds">Duration</h6>
                      <div className="range-slider durnr">
                        <input type="range" min={0} max={100} step={5} defaultValue={75} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                        <output> M</output>
                        <div className="range-slider__progress" />
                      </div>
                      <h6 className="flxhds">Price Range</h6>
                      <div className="range-slider grad pricerngs">
                        <input type="range" min={0} max={10000} step={100} defaultValue={200} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify((+this.value).toLocaleString()))" />
                        <output />
                        <div className="range-slider__progress" />
                      </div>
                      <h6 className="flxhds">Hours</h6>
                      <div className="range-slider">
                        <input type="range" min={0} max={100} step={5} defaultValue={75} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                        <output />
                        <div className="range-slider__progress" />
                      </div>
                    </div>
                    <div className="modal-footer text-center mx-auto">
                      <button type="button" className="blulghtcta">View Courses</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle2" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered jncustm trasntypes" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="coursetype row">
                        <div className="col-lg-6 col-6">
                          <div className="crdcourse">
                            <img src="./images/hybridicon.png" />
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio8" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio8">Hybrid</label>
                            </div> 
                          </div>
                        </div>
                        <div className="col-lg-6 col-6">
                          <div className="crdcourse">
                            <img src="./images/onlinecrsicon.png" />
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio7" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio7">Online</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-6 mx-auto">
                          <div className="crdcourse">
                            <img src="./images/teachingicon.png" />
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio9" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio9">Offline</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer text-center mx-auto">
                      <button type="button" className="blulghtcta">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle3" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered jncustm trasntypes" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="deskserachflls">
                        <select className="selectpicker form-control" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Search By City Name">
                          <option>City</option>
                          <option>Ahamedabad</option>
                          <option>Banglore</option>
                          <option>Chennai</option>
                          <option>Delhi</option>
                          <option>Mumbai</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer text-center mx-auto">
                      <button type="button" className="blulghtcta">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter4" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle4" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered jncustm trasntypes" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="deskserachflls">
                        <select className="selectpicker form-control" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Search Institute">
                          <option>Select Institute</option>
                          <option>Aster Mims</option>
                          <option>IMS</option>
                          <option>AMITY</option>
                          <option>SRM</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer text-center mx-auto">
                      <button type="button" className="blulghtcta">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModalCenter5" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle5" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered jncustm trasntypes" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                      <div className="sortbjner">
                        <h6>Sort By:</h6>
                        <ul className>
                          <li> 
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio1">Price: Low to High</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio2">Price: High to Low</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio3">Duration</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio4">Popularity</label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-control custom-radio">
                              <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input" />
                              <label className="custom-control-label" htmlFor="customRadio5">City</label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="modal-footer text-center mx-auto">
                      <button type="button" className="blulghtcta">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* filter for dektop version */}
            <div className="deskfilteronly">
              <div className="deskserachflls">
                <select className="selectpicker form-control" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Search By Course Name">
                  <option>Course Name</option>
                  <option>Sports Management</option>
                  <option>Health Tech</option>
                  <option>Data Analytics</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div className="deskserachflls">
                <select className="selectpicker form-control" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Search By Course Type">
                  <option>Course Type</option>
                  <option>Hybrid</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>
              <div className="deskserachflls">
                <select className="selectpicker form-control" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Search By City Name">
                  <option>City</option>
                  <option>Ahamedabad</option>
                  <option>Banglore</option>
                  <option>Chennai</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>
              </div>
              <div className="deskserachflls">
                <select className="selectpicker form-control" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Search Institute">
                  <option>Select Institute</option>
                  <option>Aster Mims</option>
                  <option>IMS</option>
                  <option>AMITY</option>
                  <option>SRM</option>
                </select>
              </div>
              <div className="grdfiltes" id>
                <h6 className="flxhds">Duration (In Months)</h6>
                <div className="range-slider durnr">
                  <input type="range" min={0} max={100} step={5} defaultValue={75} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                  <output> M</output>
                  <div className="range-slider__progress" />
                </div>
                <h6 className="flxhds">Price Range</h6>
                <div className="range-slider grad pricerngs">
                  <input type="range" min={0} max={10000} step={100} defaultValue={200} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify((+this.value).toLocaleString()))" />
                  <output />
                  <div className="range-slider__progress" />
                </div>
                <h6 className="flxhds">Hours</h6>
                <div className="range-slider">
                  <input type="range" min={0} max={100} step={5} defaultValue={75} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                  <output />
                  <div className="range-slider__progress" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8">
          <div className="sortbyfllnx">
            <div className="tgselectdata">
              <div className="ttpattrib">
                <p>Delhi <span>x</span></p>
              </div>
              <div className="ttpattrib">
                <p>Digital Marketing <span>x</span></p>
              </div>
            </div>
            <div className="sotfllshw">
              <select className="selectpicker" data-show-subtext="true" data-live-search="true" data-live-search-placeholder="Sort By Tag">
                <option value="hide">Sort By:</option>
                <option value={2010}>Price: Low to High</option>
                <option value={2011}>Price: High to Low</option>
                <option value={2012}>Duration</option>
                <option value={2013}>Popularity</option>
                <option value={2014}>City</option>
              </select>
            </div>
          </div>
          <div className="dtabasedcateg">
            <div className="row">

            <InfiniteScroll
                dataLength={courses.length}
                next={getAllCourses}
                hasMore={hasMore}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
                className="row"
            >
            {courses &&
              courses.map((course,key) => (
              <div className="col-md-6 col-lg-6"  key={key}>
                <div className="coursepanel">
                  <div className="twycol">
                    <div className="scllogoswr">
                      <img src={`/images/courseslogo/`+course.logo} />
                      <a href="compare.html" className="cmprs">Compare</a>
                    </div>
                    <div className="coursecontens">
                      <h4>{course.name}</h4>
                      <p>{course.short_desc} <a href="#">Read more..</a>
                      </p></div>
                  </div>
                  <div className="coursedurtime">
                    <span><img src="./images/scheduleicon.png" /> {course.duration} Months</span>
                    <span><img src="./images/ppp.png" /> pgp-courses</span>
                  </div>
                  <div className="keydts">
                    <img src="./images/keychain.png" />
                    <p><span>Key Learnings:</span> {course.key_learnings}</p>
                  </div>
                  <div className="dtlsctaviews">
                    <a href="coursedetail.html" className="grylghtcta">View Details</a>
                    <a href="#" className="blulghtcta">Enquire</a>
                  </div>
                </div>
              </div>

              ))}

</InfiniteScroll>


              {/* <div className="col-md-6 col-lg-6">
                <div className="coursepanel">
                  <div className="twycol">
                    <div className="scllogoswr">
                      <img src="./images/courseslogo/1.jpg" />
                      <a href="compare.html" className="cmprs">Compare</a>
                    </div>
                    <div className="coursecontens">
                      <h4>Health Tech</h4>
                      <p>This is a multi-disciplinary program that bridges the gap 
                        between health and technology by blending both worlds <a href="#">Read more..</a>
                      </p></div>
                  </div>
                  <div className="coursedurtime">
                    <span><img src="./images/scheduleicon.png" /> 12 Months</span>
                    <span><img src="./images/ppp.png" /> pgp-courses</span>
                  </div>
                  <div className="keydts">
                    <img src="./images/keychain.png" />
                    <p><span>Key Learnings:</span> Advance level course backed 
                      by latest technology. Learn practical application. 
                      Taught by stalwarts of industry.</p>
                  </div>
                  <div className="dtlsctaviews">
                    <a href="coursedetail.html" className="grylghtcta">View Details</a>
                    <a href="#" className="blulghtcta">Enquire</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="coursepanel">
                  <div className="twycol">
                    <div className="scllogoswr">
                      <img src="./images/courseslogo/2.jpg" />
                      <a href="compare.html" className="cmprs">Compare</a>
                    </div>
                    <div className="coursecontens">
                      <h4>Data Analytics</h4>
                      <p>Data Analytics refers to the methods used to analyse data to 
                        enhance productivity and business gain  <a href="#">Read more..</a>
                      </p></div>
                  </div>
                  <div className="coursedurtime">
                    <span><img src="./images/scheduleicon.png" /> 12 Months</span>
                    <span><img src="./images/ppp.png" /> pgp-courses</span>
                  </div>
                  <div className="keydts">
                    <img src="./images/keychain.png" />
                    <p><span>Key Learnings:</span> Basic to Advanced level ready. 
                      250 hours of wisdom by industry experts</p>
                  </div>
                  <div className="dtlsctaviews">
                    <a href="coursedetail.html" className="grylghtcta">View Details</a>
                    <a href="#" className="blulghtcta">Enquire</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="coursepanel">
                  <div className="twycol">
                    <div className="scllogoswr">
                      <img src="./images/courseslogo/2.jpg" />
                      <a href="compare.html" className="cmprs">Compare</a>
                    </div>
                    <div className="coursecontens">
                      <h4>Sports Management</h4>
                      <p>Master the Trends and Technologies in the Business Side of Sports Management <a href="#">Read more..</a>
                      </p></div>
                  </div>
                  <div className="coursedurtime">
                    <span><img src="./images/scheduleicon.png" /> 12 Months</span>
                    <span><img src="./images/ppp.png" /> pgp-courses</span>
                  </div>
                  <div className="keydts">
                    <img src="./images/keychain.png" />
                    <p><span>Key Learnings:</span> Basic to Advanced level ready. 
                      250 hours of wisdom by industry experts</p>
                  </div>
                  <div className="dtlsctaviews">
                    <a href="coursedetail.html" className="grylghtcta">View Details</a>
                    <a href="#" className="blulghtcta">Enquire</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 
  <Footer/>


        </>
    );
};

export default Listing;