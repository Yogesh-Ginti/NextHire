import React from "react";
import MainSearch from "../../components/main search/MainSearch";
import JobType from "../../components/jobs/JobType";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/jobsSlice";

function Home() {
  //look here
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLocation(''))
  })
  return (
    <>
      <div className="w-full md:p-6">
        <div className="my-10 md:my-8">
          <h1 className="text-4xl font-bold text-center">Find your dream job now</h1>
          <p className="text-2xl font-normal text-center py-2">
            5 lakh+ jobs for you to explore
          </p>
        </div>
        <div className="md:py-0"><MainSearch /></div>
        <div className="pt-6">
          <img
            src="https://static.naukimg.com/s/0/0/i/resume-writing-promotion/desktop/homepage/help_v1.png"
            alt="banner"
            className="w-[90%] md:w-[70%] m-auto "
          />
        </div>
        <JobType />
      </div>
    </>
  );
}

export default Home;
