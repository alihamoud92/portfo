import React, { useState } from "react";
import { Col, Container } from "../../Tools/Grid-system/index";

import { NavLink } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";

function Navbar() {
  const link = [
    { name: "Home", link: "/" },
    { name: "Pure Website", link: "/pure-website" },
    // { name: "Pricing", link: "/pricing" },
    // { name: "Contact Us", link: "/contact-us" },
  ];
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <Container>
        <div className=" z-40 w-[90%] bg-slate-200 mx-auto flex justify-between items-center p-3 rounded-lg border-2 border-yellow-500 shadow-md shadow-black opacity-60 ">
          <TiThMenuOutline
            className="md:hidden"
            size={40}
            onClick={() => setMenu(!menu)}
          />

          <div></div>

          <ul
            className={`flex justify-around items-center md:w-1/2 md:flex md:justify-around md: ${
              menu
                ? "bg-white shadow-md absolute top-16 left-10 rounded-3xl text-center flex-col py-5 px-5 space-y-7"
                : "hidden"
            }`}
          >
            {link.map((e) => (
              <li className="text-xl font-bold cursor-pointer hover:text-yellow-500 opacity-80 hover:-translate-y-1 hover:text-xl transition-all">
                <NavLink to={e.link}>{e.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
