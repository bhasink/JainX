import { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
const SliderWithTooltip = Slider.createSliderWithTooltip;

const DeskFilter = (props) => {
  const [courseName, setCourseName] = useState([])
  const [courseMode, setCourseMode] = useState([])
  const [institutes, setInstitutes] = useState([])
  const [cities, setCities] = useState([])
  const [courseCategory, setCourseCategory] = useState([])


  const [selectedOption, setSelectedOption] = useState([])

  

  const [selectedCourseName, setSelectedCourseName] = useState(null)
  const [selectedCourseMode, setSelectedCourseMode] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedInstitute, setSelectedInstitute] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const [selectedFilters, setSelectedFilters] = useState([])

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    getCourseName()
    getCourseMode()
    getCities()
    getInstitutes()
    getCourseCategory()
  }, [])

  useEffect(() => {
    let pp = selectedFilters.filter(
      (ele, ind) =>
        ind === selectedFilters.findIndex((elem) => elem.type === ele.type),
    )

    props.sendData(pp)
  }, [selectedFilters])

  const getCourseCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-categories`,
      )
      const get_categories = data.get_course_category

      // setSelectedOption({
      //   label: 'Testing',
      //   value: '2',
      //   type: 'course_categories_id',
      // })

      setCourseCategory(
        get_categories.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_categories_id',
        })),
      )
    } catch (err) {
      console.log(err)
    }
  }

  const getCourseName = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-course-name`,
      )
      const get_course_name = data.get_course_name
      setCourseName(
        get_course_name.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_types_id',
        })),
      )
    } catch (err) {
      console.log(err)
    }
  }

  const getCourseMode = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-course-mode`,
      )
      const get_course_mode = data.get_course_mode
      setCourseMode(
        get_course_mode.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_modes_id',
        })),
      )
    } catch (err) {
      console.log(err)
    }
  }

  const getInstitutes = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-institutes`,
      )
      const get_institutes = data.get_institutes
      setInstitutes(
        get_institutes.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'institute_id',
        })),
      )
    } catch (err) {
      console.log(err)
    }
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
          type: 'cities_id',
        })),
      )
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangeCourseName = (selectedOptions) => {
    setSelectedCourseName(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'course_types_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleChangeCategory = (selectedOptions) => {
    setSelectedCategory(selectedOptions)

    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'course_categories_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }

    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleChangeCourseMode = (selectedOptions) => {
    setSelectedCourseMode(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'course_modes_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleCity = (selectedOptions) => {
    setSelectedCity(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'cities_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleInstitute = (selectedOptions) => {
    setSelectedInstitute(selectedOptions)
    let index = selectedFilters.findIndex(function (pair) {
      return pair.type == 'institute_id'
    })

    if (index !== -1) {
      selectedFilters.splice(index, 1)
    }
    setSelectedFilters((oldArray) => [...oldArray, selectedOptions])
  }

  const handleDuration = (selectedOptions) => {
    console.log(selectedOptions)
  }

  const [value2, setValue2] = useState(75)

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
      {/* {JSON.stringify(selectedFilters)} */}

      <div className="deskfilteronly">
        <div className="deskserachflls">
          <div className="deskserachflls">
            <Select
              options={courseCategory}
              placeholder="Category"
              onChange={handleChangeCategory}
              styles={styles}
              value={selectedOption}
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
            {/* <Range
          min={0}
          max={10000}
          onChange={handleDuration}
          defaultValue={10}
          tipFormatter={value => <span className="tooltip">{value}€</span>}
        /> */}
{/* 
<SliderWithTooltip
        min={20}
        max={120}
        marks={1}
        step={1}
        onChange={handleDuration}
        value={10}
      /> */}


          </div>
          <h6 className="flxhds">Price Range</h6>
          <div className="range-slider grad pricerngs"></div>
          <h6 className="flxhds">Hours</h6>
          <div className="range-slider"></div>
        </div>
      </div>
    </>
  )
}

export default DeskFilter
