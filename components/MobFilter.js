import { useEffect,useState } from "react";
import Select from 'react-select';
import axios from 'axios'

const MobFilter = () => {

const [courseName, setCourseName] = useState([]);
const [courseMode, setCourseMode] = useState([]);
const [institutes, setInstitutes] = useState([]);
const [cities, setCities] = useState([]);

useEffect(() => {
    AOS.init({
    duration : 2000
    });
    getCourseName();
    getCourseMode();
    getCities();
    getInstitutes();

}, []);

    const getCourseName = async () => {
        try {
          const { data } = await axios.get(`https://phplaravel-709751-2547471.cloudwaysapps.com/api/get-course-name`)
          const get_course_name = data.get_course_name;
          setCourseName(get_course_name.map(opt => ({ label: opt.name, value: opt.id })));
    
        } catch (err) {
          console.log(err);
        }
    }
    
    const getCourseMode = async () => {
      try {
        const { data } = await axios.get(`https://phplaravel-709751-2547471.cloudwaysapps.com/api/get-course-mode`)
        const get_course_mode = data.get_course_mode;
        setCourseMode(get_course_mode.map(opt => ({ label: opt.name, value: opt.id })));
    
      } catch (err) {
        console.log(err);
      }
    }
    
    const getInstitutes = async () => {
      try {
        const { data } = await axios.get(`https://phplaravel-709751-2547471.cloudwaysapps.com/api/get-institutes`)
        const get_institutes = data.get_institutes;
        setInstitutes(get_institutes.map(opt => ({ label: opt.name, value: opt.id })));
    
      } catch (err) {
        console.log(err);
      }
    }
    
    
    const getCities = async () => {
      try {
        const { data } = await axios.get(`https://phplaravel-709751-2547471.cloudwaysapps.com/api/get-cities`)
        const get_cities = data.get_cities;
        setCities(get_cities.map(opt => ({ label: opt.name, value: opt.id })));
    
      } catch (err) {
        console.log(err);
      }
    }
    
    const styles = {
      menuList: (base) => ({
        ...base,
    
        "::-webkit-scrollbar": {
          width: "4px",
          height: "0px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1"
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888"
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555"
        }
      })
    }

  return (
    <>
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
                        {/* <input type="range" min={0} max={100} step={5} defaultValue={75} onInput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                        <output> M</output> */}
                        <div className="range-slider__progress" />
                      </div>
                      <h6 className="flxhds">Price Range</h6>
                      <div className="range-slider grad pricerngs">
                        {/* <input type="range" min={0} max={10000} step={100} defaultValue={200} onInput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify((+this.value).toLocaleString()))" />
                        <output /> */}
                        <div className="range-slider__progress" />
                      </div>
                      <h6 className="flxhds">Hours</h6>
                      <div className="range-slider">
                        {/* <input type="range" min={0} max={100} step={5} defaultValue={75} onInput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                        <output /> */}
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
           
    </>
  )
}

export default MobFilter
