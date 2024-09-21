import React, { useEffect } from "react";
import MainSearch from "../../components/main search/MainSearch";
import Filter from "../../components/filters/Filter";
import AllJobs from "../../components/jobs/AllJobs";


function Jobs() {
  return (
    <div className="bg-slate-100 p-8">
      <div className="grid grid-cols-12 gap-10 px-8">
        <Filter />
        <AllJobs />
      </div>
    </div>
    );
}

export default Jobs;
