import { Link, useLocation } from "react-router-dom";
import { footerLinks, jobTypes } from "../../utils/constants";

function FooterLinks() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname == "/" ?(
      <div className=" w-full md:w-[60%]  grid grid-cols-3 items-center gap-3">
        {footerLinks.map((link, ind) => (
          <Link key={ind}>{link}</Link>
        ))}
      </div>
      ):(
      <div className="w-full md:w-[60%] grid grid-cols-3 items-center gap-3">
        {jobTypes.map((link, ind) => (
          <Link key={ind}>{link.title}</Link>
        ))}
      </div>
      )}
    </>
  );
}

export default FooterLinks;
