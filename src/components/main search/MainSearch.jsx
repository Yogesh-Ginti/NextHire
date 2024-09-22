import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../../ui/Button";
import {  setLocation, setTitle } from "../../redux/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainSearch() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [design, setDesign] =useState('')
  const [loc, setLoc] =useState('')
  const handleSearch =()=>{
    dispatch(setTitle(design))
    dispatch(setLocation(loc))
    navigate('/search')
  }
  return (
    <>
      <div className="mx-2 my-8 md:mx-auto flex items-center md:justify-between gap-1 shadow-md rounded-full p-4 md:w-[70%]">
        <div className="hidden md:flex">
          <FaSearch size={20} />
        </div>
        <input
          onChange={(e) => setDesign(e.target.value)}
          value={design}
          type="text"
          placeholder="Enter skills/designation/companies"
          className="md:w-[45%] pr-4 text-sm md:text-lg outline-none border-r-2"
        />
        
        <input
          onChange={(e) => setLoc(e.target.value)}
          value={loc}
          type="text"
          placeholder="Enter location"
          className="text-sm md:text-lg outline-none w-[30%]"
        />
        <span className="hidden md:block">
        <Button fn={handleSearch} bg={"#275df5"} color={"white"}>
          Search
        </Button>
        </span>
      </div>
      {/* search button for small screen */}
      <div className="md:hidden flex justify-center items-center">
        <Button fn={handleSearch} bg={"#275df5"} color={"white"}>
          Search
        </Button>
      </div>
    </>
  );
}

export default MainSearch;
