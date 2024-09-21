import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobTypes, locationforIndia } from "../../utils/constants"; // Assuming jobTypes is an array of objects
import { setLocation } from "../../redux/jobsSlice";
import { useDispatch } from "react-redux";

function Filter() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [checkedDepart, setCheckedDepart] = useState(''); // Keep track of the currently checked checkbox
  const [checkedLocation, setCheckedLocation] = useState(''); // Keep track of the currently checked checkbox

  const handleDepartChange = (event) => {
    const { name, checked } = event.target;
    // Only set the checked checkbox and navigate if checked is true
    if (checked) {
      setCheckedDepart(name);
      // Find the job object that matches the checkbox name
      const selectedJob = jobTypes.find(job => job.title === name);
      // Navigate if a valid job object is found
      if (selectedJob) {
        navigate(selectedJob.path);
      }
    } else {
      setCheckedDepart(''); // Uncheck if none is selected
    }
  };

  const handleLocationChange = (event) => {
    const {name, checked} = event.target
    if (checked) {
      setCheckedLocation(name);
      const selectedLocation = locationforIndia.find(loc => loc.title === name)
      console.log(selectedLocation)
      if(selectedLocation){
        dispatch(setLocation(selectedLocation.title))
      }
    }else {
      setCheckedLocation(''); // Uncheck if none is selected
      dispatch(setLocation('india'))
    }
  }

  return (
    <div className="col-span-3 filter-section bg-white rounded-lg shadow-lg p-4 h-auto">
      <h1 className="text-lg font-medium my-4">All Filters</h1>
      <hr></hr>
      {/* filter by department */}
      <section className="py-4">
      <p className="text-lg font-medium">Department</p>
      {jobTypes.map((job) => (
        <div key={job.title}>
          <label>
          <input
            type="checkbox"
            name={job.title}
            checked={checkedDepart === job.title} // Check if this checkbox is selected
            onChange={handleDepartChange}
          />
          {job.title}
        </label>
        </div>
      ))}
      </section>
      <hr></hr>
      {/* filter by location */}
    <section className="py-4">
      <p className="text-lg font-medium">Location</p>
        {locationforIndia.map((loc)=>(
          <div key={loc.id}>
          <label>
          <input
            type="checkbox"
            name={loc.title}
            checked={checkedLocation === loc.title} // Check if this checkbox is selected
            onChange={handleLocationChange}
          />
          {loc.title}
        </label>
        </div>
        ))}
      </section>
    </div>
  );
}

export default Filter;
  