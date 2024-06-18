import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#8B93FF]">
      <nav className="h-16 mx-5 flex flex-1 justify-between items-center">
        <div>
          <Link to={"/"} className="text-[#FFF7FC]">
            JOB PORTAL
          </Link>
        </div>
        <div className="flex gap-3 text-[#FFF7FC]">
          <NavLink to={"/administrator/statistics"}>Admin</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/signin"}>Login</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
