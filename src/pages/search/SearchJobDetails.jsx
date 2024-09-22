import { useEffect, useState } from 'react';
import { BsCurrencyRupee } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';

function SearchJobDetails() {
  const [searchJob, setSearchJob] = useState([]);
  const { isUser } = useSelector((state) => state.auth);


  useEffect(() => {
    // Get saved jobs from local storage and parse it
    const jobs = JSON.parse(localStorage.getItem("currentSearchJob"));

    // If it's an object (single job), convert to an array
    if (jobs) {
      setSearchJob(Array.isArray(jobs) ? jobs : [jobs]);
    } else {
      setSearchJob([]);
    }
  }, []);

  console.log(searchJob);

  return (
    <div className="py-8 w-[70%]">
      {searchJob && searchJob.length > 0 ? (
        searchJob.map((job) => (
          <div key={job.id}>
            {/* top card */}
            <div className="p-4 shadow-lg rounded-lg bg-white">
              <h1 className="text-xl font-semibold">{job.title}</h1>
              <p>{job.company.display_name}</p>
              <span className="flex items-center justify-start">
                <BsCurrencyRupee size={20} />
                {job.salary_is_predicted === 0 ? (
                  <p>Not Disclosed</p>
                ) : (
                  <p>{job.salary_is_predicted}</p>
                )}
              </span>
              <span className="flex items-center justify-start">
                <IoLocationOutline size={20} />
                <p>{job.location.display_name}</p>
              </span>
              <hr></hr>
              <span className="flex justify-between items-center">
                <p>Posted: {job.created}</p>
                <div className="p-2">
                {isUser ? (
                  <a target="blank" className="p-2" href={job.redirect_url}><Button color={"white"} bg={"#275df5"}>
                  apply on company site
                </Button></a>
                ) : (
                  <div className="py-2 flex items-center gap-2">
                    <Link to='/signup'><Button color={"#275df5"} border={"blue"}>
                      Register to apply
                    </Button></Link>
                    <Link to='/login'><Button color={"white"} bg={"#275df5"}>
                      Login to apply
                    </Button></Link>
                  </div>
                )}
              </div>
              </span>
            </div>

            {/* job description */}
            <div className="mt-4 rounded-lg shadow-lg p-4 bg-white">
              <h1 className="text-lg font-medium">Job Description</h1>
              <li>Category: {job.category.label}</li>
              <li>Location: {job.location.display_name}</li>
              <p className="text-lg font-medium">
                The details of the job are shared below:
              </p>
              {job.description.split(/[.;,]+/).map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No job details found.</p>
      )}
    </div>
  );
}

export default SearchJobDetails;
