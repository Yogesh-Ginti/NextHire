import { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setLocation } from "../../redux/jobsSlice";
import { Link, useParams } from "react-router-dom";
import Bookmark from "../bookmark/Bookmark";

function AllJobs() {
  const dispatch = useDispatch();
  const params = useParams();
  const { jobType } = params;
  const { jobs, location, status, error } = useSelector((state) => state.jobs);
  
  useEffect(() => {
    if (location === '') {
      dispatch(setLocation('india'));
    }
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(fetchJobs({ cat: jobType, con: 'in', loc: location }));
  }, [params, location, dispatch]);

  

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        loading..
      </div>
    );
  }

  return (
    <div className="col-start-4 col-span-9 jobs-section">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white rounded-lg p-4 mb-4 shadow-md">
          <Link to={`/job/${job.id}`}>
            <p className="flex justify-end">{job.created}</p>
            <h1 className="text-xl font-semibold">{job.title}</h1>
            <p className="font-medium opacity-80">{job.company.display_name}</p>
            <span className="flex justify-start items-center gap-6">
              <BsCurrencyRupee size={20} />
              {job.salary_is_predicted == 0 ? (
                <p>Not Disclosed</p>
              ) : (
                <p>{job.salary_is_predicted}</p>
              )}
              <IoLocationOutline size={20} />
              <p>{job.location.display_name}</p>
            </span>
            <p>{job.description}</p>
          </Link>
          <Bookmark job={job} />
        </div>
      ))}
    </div>
  );
}

export default AllJobs;
