import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Connect() {
  return (
    <div className="py-4">
      <p className="font-medium">Connect with us</p>
      <div className="flex items-center gap-4">
      <FaSquareFacebook size={20} />
      <FaInstagramSquare size={20} />
      <FaSquareXTwitter size={20} />
      <FaLinkedin size={20} />
      </div>
    </div>
  )
}

export default Connect
