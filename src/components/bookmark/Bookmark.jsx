import { useEffect } from "react";
import { CiBookmark } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Bookmark({ job }) {
  const { isUser } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  
  // Function to save job in local storage
  const saveJob = (job) => {
    if(!isUser){
      navigate('/login')
    }else{
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    // // Check if job is already saved
    // const isJobSaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    // if (!isJobSaved) {
    //   // Add job to the saved jobs array
    //   const updatedSavedJobs = [...savedJobs, job];
    //   localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    //   alert(`Job ${job.title} saved!`);
    // } else {
    //   alert(`Job ${job.title} is already saved!`);
    // }
    // Add job to the saved jobs array
    const updatedSavedJobs = [...savedJobs, job];
    console.log('updated',updatedSavedJobs)
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
    alert(`Job ${job.title} saved!`);
  }
  };
  return (
    <span className="flex items-center justify-end">
      <CiBookmark />
      <button className="ml-2" onClick={() => saveJob(job)}>
        Save
      </button>
    </span>
  );
}

export default Bookmark;
