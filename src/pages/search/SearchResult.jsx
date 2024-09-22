import { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchJobs, setLocation } from "../../redux/searchSlice";
import { useNavigate } from "react-router-dom";
import SearchFilter from "../../components/filters/searchFilter";
import Bookmark from "../../components/bookmark/Bookmark"

function SearchResult() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchJobs, title, location, error } = useSelector((state) => state.searchJobs);

  useEffect(() => {
    if (location === "") {
      dispatch(setLocation("india"));
    }
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(fetchSearchJobs({ title: title, location: location }));
  }, [title, location, dispatch]);

  const handleSearchJob = (jobId) => {
    const currentSearchJob = searchJobs.find((job) => job.id === jobId);
    if (currentSearchJob) {
      localStorage.setItem("currentSearchJob", JSON.stringify(currentSearchJob));
      navigate(`/s/${jobId}`);
    }
  };

  return (
    <div>
      {/* Main content */}
      <div className="container bg-gray-100 p-6 grid grid-cols-12 gap-4">
        {/* Filter Section */}
        <div className="hidden md:grid col-span-3 filter-section">
          <SearchFilter />
        </div>

        {/* Jobs Section */}
        <div className="col-span-12 md:col-span-9 jobs-section">
          {error && <p className="text-red-500">{error}</p>}
          {searchJobs && searchJobs.length > 0 ? (
            searchJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg p-4 mb-4 shadow-md">
                <div onClick={() => handleSearchJob(job.id)}>
                  <p className="flex justify-end">{job.created}</p>
                  <h1 className="text-xl font-semibold">{job.title}</h1>
                  <p className="font-medium opacity-80">{job.company.display_name}</p>
                  <span className="flex justify-start items-center gap-6">
                    <BsCurrencyRupee size={20} />
                    {job.salary_is_predicted === 0 ? <p>Not Disclosed</p> : <p>{job.salary_is_predicted}</p>}
                    <IoLocationOutline size={20} />
                    <p>{job.location.display_name}</p>
                  </span>
                  <p>{job.description}</p>
                </div>
                <Bookmark />
              </div>
            ))
          ) : (
            <p>No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
