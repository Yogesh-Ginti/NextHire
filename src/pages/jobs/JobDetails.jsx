import CurrentJob from "../../components/jobs/CurrentJob"
import SimilarJob from "../../components/jobs/SimilarJob"


function JobDetails() {
    return (
    <div className="bg-gray-100 p-6 flex flex-col gap-10 py-6">
      <CurrentJob />
      <SimilarJob />
    </div>
  )
}

export default JobDetails
