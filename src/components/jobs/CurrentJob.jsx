import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Button from "../../ui/Button";

function CurrentJob() {
  const { isUser } = useSelector((state) => state.auth);
  const params = useParams();
  const { jobId } = params;
  const { jobs, status, error } = useSelector((state) => state.jobs);
  const currentJob = jobs.filter((job) => job.id == jobId);
  return (
    <div className="w-full md:w-[70%]">
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
            <span className="flex item-center justify-start py-2">
              <IoLocationOutline size={20} />
              <p>{job.location.display_name}</p>
            </span>
            <hr></hr>
            <span className="flex justify-between items-center">
              <p>Posted : {job.created}</p>
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
          {/* job desc */}
          <div className="mt-4 rounded-lg shadow-lg p-4 bg-white">
            <h1 className="text-lg font-medium">Job description</h1>
            <li>Category {job.category.label}</li>
            <li>Location {job.location.display_name}</li>
            <p className="text-lg font-medium">
              The details of Job are shared below :
            </p>
            {job.description.split(/[.;,]+/).map((i,ind) => (
              <li key={ind}>{i}</li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrentJob;
