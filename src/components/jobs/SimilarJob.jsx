import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function SimilarJob() {
  const params = useParams();
  const { jobId } = params;
  const { jobs } = useSelector((state) => state.jobs);
  const similarJob = jobs.filter((job) => job.id != jobId);
  return (
    <div className="w-full">
      <h1 className="px-4 text-xl font-bold">Similar jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {similarJob.map((job) => (
          <div key={job.id} className="bg-white rounded-lg p-4 m-4 shadow-md">
            <Link to={`/job/${job.id}`}>
              <p className="flex justify-end">{job.created}</p>
              <h1 className="text-xl font-semibold">{job.title}</h1>
              <p className="font-medium opacity-80">
                {job.company.display_name}
              </p>
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
            <span className="flex items-center justify-end">
              <CiBookmark />
              save
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimilarJob;
