import React from "react";
import Nav from "../nav/Nav";
import Button from "../../ui/Button";
import Logo from "../logo/Logo";
import { IoPerson } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayName, setIsUser } from "../../redux/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isUser, displayName } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logoutUser();
    dispatch(setIsUser(false));
    dispatch(setDisplayName(''));
    localStorage.removeItem("isUser");
    navigate("/");
  };
  return (
    <div className="h-20 gap-4 w-full flex items-center justify-between md:px-24 shadow-md">
      <div className="flex items-center gap-4">
        <Logo />
        <Nav />
      </div>

      {isUser ? (
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
          <IoPerson size={30} />
          <span className="font-medium">{displayName}</span>
          </span>
          <Button
            fn={handleLogout}
            bg={"#f05536"}
            border={"f05536"}
            color={"white"}
          >
            logout
          </Button>
        </div>
      ) : (
        <div className="flex gap-2 md:gap-6">
          <Link to="/login">
            <Button color={"#275df5"} border={"#275df5"}>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button bg={"#f05536"} border={"f05536"} color={"white"}>
              Register
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
