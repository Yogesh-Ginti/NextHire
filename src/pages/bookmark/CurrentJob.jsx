import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../ui/Button";

function CurrentJob() {
  const params = useParams();
  const { jobId } = params;
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    // Get saved jobs from local storage
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  const currentJob = savedJobs.filter((job) => job.id == jobId);
  console.log(currentJob);

  return (
    <div className="py-8 w-[70%]">
      {currentJob.map((job) => (
        <div key={job.id}>
          {/* top card */}
          <div className="p-4 shadow-lg rounded-lg  bg-white">
            <h1 className="text-xl font-semibold">{job.title}</h1>
            <p>{job.company.display_name}</p>
            <span className="flex item-center justify-start">
              <BsCurrencyRupee size={20} />
              {job.salary_is_predicted == 0 ? (
                <p>Not Disclosed</p>
              ) : (
                <p>{job.salary_is_predicted}</p>
              )}
            </span>
            <span className="flex item-center justify-start">
              <IoLocationOutline size={20} />
              <p>{job.location.display_name}</p>
            </span>
            <hr></hr>
            <span className="flex justify-between items-center">
              <p>Posted : {job.created}</p>
              <div>
                <a target="blank" className="p-2" href={job.redirect_url}>
                  <Button color={"white"} bg={"#275df5"}>
                    apply on company site
                  </Button>
                </a>
              </div>
            </span>
          </div>
          {/* job desc */}
          <div className="mt-4 rounded-lg shadow-lg p-4 bg-white">
            <h1 className="text-lg font-medium">Job description</h1>
            <li>Category {job.category.label}</li>
            <li>Location {job.location.display_name}</li>
            <p className="text-lg font-medium">
              The details of Job are shared below :
            </p>
            {job.description.split(/[.;,]+/).map((i) => (
              <li>{i}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrentJob;
