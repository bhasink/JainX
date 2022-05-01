import { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { Slider } from 'antd'


const DeskFilter = (props) => {
  const [courseName, setCourseName] = useState([])
  const [courseMode, setCourseMode] = useState([])
  const [institutes, setInstitutes] = useState([])
  const [cities, setCities] = useState([])
  const [courseCategory, setCourseCategory] = useState([])
  const [maxFees, setMaxFees] = useState('')
  const [getDuration, setGetDuration] = useState('')

  


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

    getFilterData();
  }, [])

  // if(props.slctdFiltr){
  //   setSelectedFilters(props.slctdFiltr)
  // }
  
//   useEffect(() => {
//     if(props.slctdFiltr){
//       setSelectedFilters(props.slctdFiltr)
//     }
// }, [props])

  

  useEffect(() => {

    // console.log(props.chngfltr)

    // if(props.chngfltr != ''){

    //   let indexx = selectedFilters.findIndex(function (pair) {
    //     return pair.type == props.chngfltr
    //   })

    //   setSelectedFilters(oldArray => {
    //     return oldArray.filter((value, i) => i !== indexx)
    //   })

    // }


    let pp = selectedFilters.filter(
      (ele, ind) =>
        ind === selectedFilters.findIndex((elem) => elem.type === ele.type),
    )

    // props.chngfltr

    props.sendData(pp)
  }, [selectedFilters])


  const getFilterData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/get-filter-data`,
      )
      const get_categories = data.get_course_category;
      const get_course_name = data.get_course_name;
      const get_course_mode = data.get_course_mode;
      const get_institutes = data.get_institutes;
      const get_cities = data.get_cities;
      
      setMaxFees(data.get_max_fees)
      setGetDuration(data.get_duration)

      setCourseCategory(
        get_categories.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_categories_id',
        })),
      );

      setCourseName(
        get_course_name.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_types_id',
        })),
      );

      setCourseMode(
        get_course_mode.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'course_modes_id',
        })),
      );

      setInstitutes(
        get_institutes.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'institute_id',
        })),
      );

      setCities(
        get_cities.map((opt) => ({
          label: opt.name,
          value: opt.id,
          type: 'cities_id',
        })),
      );

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

    let indexx = selectedFilters.findIndex(function (pair) {
      return pair.type == 'duration'
    })

    if (indexx !== -1) {
      selectedFilters.splice(indexx, 1)
    }

    const data = {
      label: `Duration: ${selectedOptions[0]} - ${selectedOptions[1]}`,
      value: selectedOptions[1],
      type: 'duration',
    };

     setSelectedFilters((oldArray) => [...oldArray, data])
}

const handleFees = (selectedOptions) => {

  let indexx = selectedFilters.findIndex(function (pair) {
    return pair.type == 'fees'
  })

  if (indexx !== -1) {
    selectedFilters.splice(indexx, 1)
  }

  const data = {
    label: `Price: ${selectedOptions[0]} - ${selectedOptions[1]}`,
    value: selectedOptions[1],
    type: 'fees',
  };

   setSelectedFilters((oldArray) => [...oldArray, data])
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
      {/* {JSON.stringify(selectedFilters)} */}



      <div className="deskfilteronly">
        <div className="deskserachflls">
          <div className="deskserachflls">
            <Select
              options={courseCategory}
              placeholder="Category"
              onChange={handleChangeCategory}
              styles={styles}
              value={props.resetCat == "reset" ? '' : selectedCategory}
            />
          </div>

          <Select
            options={courseName}
            placeholder="Course Type"
            onChange={handleChangeCourseName}
            styles={styles}
            value={selectedCourseName}
          />
        </div>

        <div className="deskserachflls">
          <Select
            options={courseMode}
            placeholder="Course Mode"
            onChange={handleChangeCourseMode}
            styles={styles}
            value={selectedCourseMode}
          />
        </div>
        <div className="deskserachflls">
          <Select
            options={cities}
            placeholder="City"
            onChange={handleCity}
            styles={styles}
            value={selectedCity}
          />
        </div>
        <div className="deskserachflls">
          <Select
            options={institutes}
            placeholder="Institute"
            onChange={handleInstitute}
            styles={styles}
            value={selectedInstitute}
          />
        </div>
        <div className="grdfiltes" id>
          <h6 className="flxhds">Duration (In Months)</h6>
          <div className="range-slider durnr">

           

          {getDuration != 0 && (
          <Slider range defaultValue={[0, getDuration]} max={getDuration} min={0}  onAfterChange={handleDuration}  />
          ) }

          </div>
          <h6 className="flxhds">Price Range</h6>


          <div className="range-slider grad pricerngs">

          {maxFees != 0 && (

          <Slider range defaultValue={[0, maxFees]} min={0} max={maxFees}  onAfterChange={handleFees} />

          ) }

          </div>
         
        </div>
      </div>
    </>
  )
}

export default DeskFilter
