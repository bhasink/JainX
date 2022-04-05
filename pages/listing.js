import { useEffect } from "react";
import AOS from 'aos';

const Listing = () => {

useEffect(() => {
    AOS.init({
    duration : 2000
    });
}, []);

return (
        <>

  <header className="site-header topmain mobexheight norm">
    {/*--New Updates---*/}   
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="/">
          <img src="./images/logo.jpg" className="navbar-brand-img" alt="logo" />
        </a>
        {/* Toggler */}
        <button className="navbar-toggler openhdas" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fal fa-bars" />
          <i className="fal fa-times" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="mobile-widgets">
            <div className="cross" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
              <i className="fal fa-times" />
            </div>
          </div>
          {/* Navigation */}
          <div className="ml-auto" id="accordionExample">
            <ul className="navbar-nav ml-auto position-relative" id="menu-center">
              <li className="nav-item nosublnk active">
                <a className="nav-link bidevices" href="about.html">About </a>
              </li>
              <li className="nav-item nosublnk">
                <a className="nav-link  bidevices subarrs" href="#">Find a Course</a>
                <h3 data-toggle="collapse" data-target="#collapsemenusTwo" aria-expanded="false" aria-controls="collapsemenusTwo" className="mobclick collapsed">
                  Find a Course  <i className="fal fa-angle-up" /> <i className="fal fa-angle-down" />
                </h3>
                <div id="collapsemenusTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="megamenu">
                    <div className="row">
                      <div className="col-lg-12 colorchng">
                        <ul>
                          <li><a href="#">Inner Link 1</a></li>
                          <li><a href="#">Inner Link 2</a></li>
                          <li><a href="#">Inner Link 3</a></li>
                          <li><a href="#">Inner Link 4</a></li>
                          <li><a href="#">Inner Link 5</a></li>
                          <li><a href="#">Inner Link 5</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nosublnk">
                <a className="nav-link bidevices subarrs" href="#">Partner With Us </a>
                <h3 data-toggle="collapse" data-target="#collapsemenusThree" aria-expanded="false" aria-controls="collapsemenusThree" className="mobclick collapsed">
                  Partner With Us <i className="fal fa-angle-up" /> <i className="fal fa-angle-down" />
                </h3>
                <div id="collapsemenusThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="megamenu">
                    <div className="row">
                      <div className="col-lg-12 colorchng">
                        <ul>
                          <li><a href="flnmission.php">Inner Link 1</a>
                            <div className="megamenu subdropsmen">
                              <div className="row">
                                <div className="col-lg-12 colorchng">
                                  <ul>
                                    <li><a href="#">Inner Sub Link 1</a></li>
                                    <li><a href="#">Inner Sub Link 2</a></li>
                                    <li><a href="#">Inner Sub Link 3</a></li>
                                    <li><a href="#">Inner Sub Link 4</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li><a href="#">Inner Link 2</a> 
                            <div className="megamenu subdropsmen">
                              <div className="row">
                                <div className="col-lg-12 colorchng">
                                  <ul>
                                    <li><a href="#">Inner Sub Link 1</a></li>
                                    <li><a href="#">Inner Sub Link 2</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nosublnk">
                <a className="nav-link bidevices nosublnk subarrs" href="contactus.html">Contact</a>
                <h3 data-toggle="collapse" data-target="#collapsemenusFive" aria-expanded="false" aria-controls="collapsemenusFive" className="mobclick collapsed">
                  Contact<i className="fal fa-angle-up" /> <i className="fal fa-angle-down" />
                </h3>
                <div id="collapsemenusFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                  <div className="megamenu">
                    <div className="row">
                      <div className="col-lg-12 colorchng">
                        <ul>
                          <li><a href="#">Inner Link 1</a></li>
                          <li><a href="#">Inner Link 2</a></li>
                          <li><a href="#">Inner Link 3</a></li>
                          <li><a href="#">Inner Link 4</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nosublnk sgnorg">
                <a className="nav-link bidevices" href="#">Login /</a>
                <a className="nav-link bidevices" href="#">Sign Up </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
  
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
              <div className="col-md-6 col-lg-6">
                <div className="coursepanel">
                  <div className="twycol">
                    <div className="scllogoswr">
                      <img src="./images/courseslogo/1.jpg" />
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
              </div>
              <div className="col-md-6 col-lg-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="stfooter">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <iframe className="ftaddrs" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.206939350353!2d77.5920295!3d12.9204609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9959213171933e2c!2sJAINx!5e0!3m2!1sen!2sin!4v1646737105968!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" />
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="ftad">
            <p># 18/3, 9th Main, 3rd Block, Jayanagar,
              Bangalore, Karnataka - 560011</p>
            <a href="tel:+91-9606333232"> +91-9606333232</a>
            <a href="mailto:enquiry@jainxacademy.com">enquiry@jainxacademy.com</a>
            <div className="sclics">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="usfllinks">
        <div className="accordion2" id="accordionExample2">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseOneft" aria-expanded="true" aria-controls="collapseOneft" className="mobclick">ABOUT US
                <i className="fal fa-plus" /> <i className="fal fa-minus" /></h4>
              <h4>ABOUT US</h4>
              <div id="collapseOneft" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample2">
                <ul>
                  <li><a href="#">About Aakash</a></li>
                  <li><a href="#">Why Aakash</a></li>
                  <li><a href="#">Aakash Methodology &amp; Concept</a></li>
                  <li><a href="#">Aakash in Media</a></li>
                  <li><a href="#">Aakash Nationwide Centers</a></li>
                  <li><a href="#">Franchise Information</a></li>
                  <li><a href="#">Investor Corner</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="mobclick collapsed">COURSES &amp; SCHOLARSHIPS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>COURSES &amp; SCHOLARSHIPS</h4>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">Aakash Hybrid Course</a></li>
                  <li><a href="#">Classroom Courses at Aakash</a></li>
                  <li><a href="#">Aakash Digital</a></li>
                  <li><a href="#">Aakash Distance Learning </a></li>
                  <li><a href="#">Aakash National Talent Hunt Exam (ANTHE)</a></li>
                  <li><a href="#">Admission Cum Scholarship Test (ACST)</a></li>
                  <li><a href="#">Various Scholarships at Aakash</a></li>
                  <li><a href="#">Aakash CBT</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="mobclick collapsed">COURSES &amp; SCHOLARSHIPS
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>COURSES &amp; SCHOLARSHIPS</h4>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">Aakash Hybrid Course</a></li>
                  <li><a href="#">Classroom Courses at Aakash</a></li>
                  <li><a href="#">Aakash Digital</a></li>
                  <li><a href="#">Aakash Distance Learning </a></li>
                  <li><a href="#">Aakash National Talent Hunt Exam (ANTHE)</a></li>
                  <li><a href="#">Admission Cum Scholarship Test (ACST)</a></li>
                  <li><a href="#">Various Scholarships at Aakash</a></li>
                  <li><a href="#">Aakash CBT</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <h4 data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" className="mobclick collapsed">ABOUT US
                <i className="fal fa-plus" /> <i className="fal fa-minus" />
              </h4>
              <h4>ABOUT US</h4>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample2">  
                <ul>
                  <li><a href="#">About Aakash</a></li>
                  <li><a href="#">Why Aakash</a></li>
                  <li><a href="#">Aakash Methodology &amp; Concept</a></li>
                  <li><a href="#">Aakash in Media</a></li>
                  <li><a href="#">Aakash Nationwide Centers</a></li>
                  <li><a href="#">Franchise Information</a></li>
                  <li><a href="#">Investor Corner</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section className="mobileiconpanel">
    <ul>
      <li><a href="#"><img src="./images/homeic.png" /><span>Home<span /></span></a></li>
      <li><a href="#"><img src="./images/allcourses.png" /><span>All Courses<span /></span></a></li>
      <li><a href="#"><img src="./images/becomept.png" /><span>Become a partners<span /></span></a></li>
      <li><a href="#"><img src="./images/contico.png" /><span>Contact<span /></span></a></li>
    </ul>
  </section>
        </>
    );
};

export default Listing;