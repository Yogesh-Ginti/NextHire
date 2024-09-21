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
      <div className="bg-white my-8 mx-auto flex items-center justify-between gap-1 shadow-md rounded-full p-4 w-[70%]">
        <div className="">
          <FaSearch size={20} />
        </div>
        <input
          onChange={(e) => setDesign(e.target.value)}
          value={design}
          type="text"
          placeholder="Enter skills/designation/companies"
          className="w-[35%] pr-4 text-lg outline-none border-r-2"
        />
        
        <input
          onChange={(e) => setLoc(e.target.value)}
          value={loc}
          type="text"
          placeholder="Enter location"
          className="text-lg outline-none"
        />
        <Button fn={handleSearch} bg={"#275df5"} color={"white"}>
          Search
        </Button>
      </div>
    </>
  );
}

export default MainSearch;
