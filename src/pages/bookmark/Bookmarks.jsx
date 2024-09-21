import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

function Bookmarks() {
  const navigate = useNavigate()
  const [savedJobs, setSavedJobs] = useState([]);
  const {isUser} = useSelector(state=> state.auth)
  useEffect(()=>{
    if(!isUser) navigate('/login')
    return
  })

  useEffect(() => {
    // Get saved jobs from local storage
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  if (savedJobs.length === 0) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <h2>No saved jobs yet!</h2>
      </div>
    );
  }

  const handleDelete = (jobId) => {
    const items = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const updatedSavedJobs = items.filter(job => job.id !== jobId);  // Exclude the deleted job
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));  // Update localStorage
    setSavedJobs(updatedSavedJobs);  // Update state to re-render the component
  };
  

  return (
    <div className="w-[70%] m-auto p-6">
      <h1 className="text-2xl font-bold py-2">All Saved Jobs</h1>
      {savedJobs.map((job) => (
        <div key={job.id} className="bg-blue-50 rounded-lg p-4 my-6 shadow-md">
          <Link to={`/b/job/${job.id}`}>
            <p className="flex justify-end">{job.created}</p>
            <h1 className="text-xl font-semibold">{job.title}</h1>
            <p className="font-medium opacity-80">{job.company.display_name}</p>
            <span className="flex justify-start items-center gap-6">
              <BsCurrencyRupee size={20} />
              {job.salary_is_predicted === 0 ? (
                <p>Not Disclosed</p>
              ) : (
                <p>{job.salary_is_predicted}</p>
              )}
              <IoLocationOutline size={20} />
              <p>{job.location.display_name}</p>
            </span>
            <p>{job.description}</p>
          </Link>
          <div className="flex items-center justify-end">
            <button className="p-1" onClick={()=>handleDelete(job.id)}><MdDelete size={23} /></button>
            </div>
        </div>
      ))}
      
    </div>
  );
}

export default Bookmarks;
