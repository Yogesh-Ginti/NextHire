import { Link } from "react-router-dom"

function Logo() {
  return (
    <span className="w-[200px] h-[50px] flex">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
          />
        </Link>
      </span>
  )
}

export default Logo
