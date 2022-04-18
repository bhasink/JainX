import { useEffect,useState } from "react";
import Select from 'react-select';
import axios from 'axios'

const DeskFilter = props => {

const [courseName, setCourseName] = useState([]);
const [courseMode, setCourseMode] = useState([]);
const [institutes, setInstitutes] = useState([]);
const [cities, setCities] = useState([]);
const [courseCategory, setCourseCategory] = useState([]);

const [selectedCourseName, setSelectedCourseName] = useState(null);
const [selectedCourseMode, setSelectedCourseMode] = useState(null);
const [selectedCity, setSelectedCity] = useState(null);
const [selectedInstitute, setSelectedInstitute] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);

const [selectedFilters, setSelectedFilters] = useState([]);


useEffect(() => {
    AOS.init({
    duration : 2000
    });
    getCourseName();
    getCourseMode();
    getCities();
    getInstitutes();
    getCourseCategory();
}, []);

const getCourseCategory = async () => {
  try {
    const { data } = await axios.get(`https://phplaravel-709751-2547471.cloudwaysapps.com/api/get-categories`)
    const get_categories = data.get_course_category;
    setCourseCategory(get_categories.map(opt => ({ label: opt.name, value: opt.id })));

  } catch (err) {
    console.log(err);
  }
}

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

    const handleChangeCourseName = (selectedOptions ) => {
        setSelectedCourseName(selectedOptions);
        let pp = selectedFilters.filter( (ele, ind) => ind === selectedFilters.findIndex( elem => elem.label === ele.label && elem.value === ele.value));
        setSelectedFilters(oldArray => [...oldArray, selectedOptions]);
        props.sendData(oldArray => [...oldArray, selectedOptions]);
        console.log(pp);
    }

    const handleChangeCategory = (selectedOptions ) => {
      setSelectedCategory(selectedOptions);
      let pp = selectedFilters.filter( (ele, ind) => ind === selectedFilters.findIndex( elem => elem.label === ele.label && elem.value === ele.value));
      setSelectedFilters(oldArray => [...oldArray, selectedOptions]);
      props.sendData(oldArray => [...oldArray, selectedOptions]);
      console.log(pp);
  }

    const handleChangeCourseMode = (selectedOptions ) => {
        setSelectedCourseMode(selectedOptions);
        setSelectedFilters(oldArray => [...oldArray, selectedOptions]);
        props.sendData(oldArray => [...oldArray, selectedOptions]);
    }

    const handleCity = (selectedOptions ) => {
        setSelectedCity(selectedOptions);
        setSelectedFilters(oldArray => [...oldArray, selectedOptions]);
        props.sendData(oldArray => [...oldArray, selectedOptions]);
    }

    const handleInstitute = (selectedOptions ) => {
        setSelectedInstitute(selectedOptions);
        setSelectedFilters(oldArray => [...oldArray, selectedOptions]);
        props.sendData(oldArray => [...oldArray, selectedOptions]);
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

{JSON.stringify(selectedFilters)}

<div className="deskfilteronly">
              <div className="deskserachflls">



              <div className="deskserachflls">

              <Select
                options={courseCategory}
                placeholder="Category"
                onChange={handleChangeCategory}
                styles={styles}
              />
              </div>

              <Select
                options={courseName}
                placeholder="Course Type"
                onChange={handleChangeCourseName}
                styles={styles}
                />

              </div>



              <div className="deskserachflls">
              <Select
                options={courseMode}
                placeholder="Course Mode"
                onChange={handleChangeCourseMode}
                styles={styles}
              />
              </div>
              <div className="deskserachflls">
              <Select
                options={cities}
                placeholder="City"
                onChange={handleCity}
                styles={styles}
              />
              </div>
              <div className="deskserachflls">
              <Select
                options={institutes}
                placeholder="Institute"
                onChange={handleInstitute}
                styles={styles}
              />
              </div>
              <div className="grdfiltes" id>
                <h6 className="flxhds">Duration (In Months)</h6>
                <div className="range-slider durnr">
                  {/* <input type="range" min={0} max={100} step={5} defaultValue={75} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                  <output> M</output> */}
                  <div className="range-slider__progress" />
                </div>
                <h6 className="flxhds">Price Range</h6>
                <div className="range-slider grad pricerngs">
                  {/* <input type="range" min={0} max={10000} step={100} defaultValue={200} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify((+this.value).toLocaleString()))" />
                  <output /> */}
                  <div className="range-slider__progress" />
                </div>
                <h6 className="flxhds">Hours</h6>
                <div className="range-slider">
                  {/* <input type="range" min={0} max={100} step={5} defaultValue={75} oninput="this.parentNode.style.setProperty('--value',this.value); this.parentNode.style.setProperty('--text-value', JSON.stringify(this.value))" />
                  <output /> */}
                  <div className="range-slider__progress" />
                </div>
              </div>
            </div>
             
      </>
    )
  }
  
  export default DeskFilter
  