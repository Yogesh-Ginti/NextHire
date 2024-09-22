import React, { useEffect } from "react";
import MainSearch from "../../components/main search/MainSearch";
import Filter from "../../components/filters/Filter";
import AllJobs from "../../components/jobs/AllJobs";


function Jobs() {
  return (
    <div className="bg-slate-100 md:p-8 p-3">
      <div className="md:grid grid-cols-12 gap:2 md:gap-10 md:px-8">
        <Filter />
        <AllJobs />
      </div>
    </div>
    );
}

export default Jobs;
