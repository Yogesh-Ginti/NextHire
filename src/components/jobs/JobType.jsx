import { IoIosArrowForward } from "react-icons/io";
import { jobTypes } from '../../utils/constants'
import { Link } from "react-router-dom";

function JobType() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-6 md:mt-0  md:p-4">
      {jobTypes.map(job=>
        <Link to={job.path} key={job.id} className="flex items-center justify-center box-content border rounded-xl gap-2 m-4 py-5 text-lg font-medium shadow-sm">
          <span className="bg-yellow-100 p-2 rounded-full"><job.icon size={20} /></span>
          {job.title}
          <IoIosArrowForward size={20} />
        </Link>
      )}
    </div>
  )
}

export default JobType
