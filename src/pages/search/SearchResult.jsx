import { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchJobs, setLocation } from "../../redux/searchSlice";
import { Link } from "react-router-dom";
import SearchFilter from "../../components/filters/searchFilter";
import Bookmark from "../../components/bookmark/Bookmark";

function SearchResult() {
  const dispatch = useDispatch();
  const { searchJobs, title, location, department, status, error } =
    useSelector((state) => state.searchJobs);

  useEffect(() => {
    if (location === "") {
      dispatch(setLocation("india"));
    }
  }, [location, dispatch]);

  useEffect(() => {
    dispatch(fetchSearchJobs({ title: title, location: location }));
  }, [title, location, dispatch]);


  return (
    <div>
      {/* Main content */}
      <div className="container bg-gray-100 p-6 grid grid-cols-12 gap-4">
        {/* Filter Section */}
        <div className="col-span-3 filter-section">
          <SearchFilter />
        </div>

        {/* Jobs Section */}
        <div className="col-span-9 jobs-section">
          {searchJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg p-4 mb-4 shadow-md">
              <Link to={`/job/${job.id}`}>
                <p className="flex justify-end">{job.created}</p>
                <h1 className="text-xl font-semibold">{job.title}</h1>
                <p className="font-medium opacity-80">
                  {job.company.display_name}
                </p>
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
              <Bookmark/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
