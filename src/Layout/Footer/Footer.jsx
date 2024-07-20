import React from "react";
import { Col, Row } from "../../Tools/Grid-system";

import { NavLink } from "react-router-dom";
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
function Footer() {
  const link = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  return (
    <Col className=" bg mt-7 w-full">
      <Row className="md:flex md:justify-around md:items-center flex justify-center items-center  w-full">
        <Col md={3} className="p-16 flex justify-center items-center"></Col>
        <Col md={3} className="flex-col space-y-3 p-16">
          <h1 className="text-white text-center text-3xl font-bold">Link</h1>
          <ul className="text-center text-xl text-black font-thin space-y-1">
            {link.map((e) => (
              <li className="text-black text-2xl">
                <NavLink to={e.link}>{e.name}</NavLink>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={3} className="flex-col space-y-3 p-16">
          <h1 className="text-white text-center text-3xl font-bold">
            Contact Us
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <span>
              <BsFillTelephoneMinusFill size={30} color="#447799" />
            </span>
            <h1 className="text-black text-xl font-normal md:text-2xl">
              Phone Number
            </h1>
          </div>
          <h1 className="flex justify-center  text-start  text-sm text-slate-900 md:text-xl">
            +963 - 987654321
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <span>
              <MdOutlineEmail size={30} color="#447799" />
            </span>
            <h1 className="text-black text-xl font-normal md:text-2xl">
              E-mail Address
            </h1>
          </div>
          <h1 className="flex justify-center  text-start  text-sm text-slate-900 md:text-xl">
            info.company.com
          </h1>
        </Col>
      </Row>
    </Col>
  );
}

export default Footer;
