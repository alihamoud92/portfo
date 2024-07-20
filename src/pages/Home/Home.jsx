import React, { useEffect } from "react";
import { Col, Row } from "../../Tools/Grid-system";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      // Whether to animate elements only once
    }); // Initialize AOS
  }, []);
  return (
    <>
      <Row justify={"center"} className="  items-center h-[100vh]  w-full ">
        <Col
          md={4}
          sm={10}
          className=" border-2 border-yellow-700 p-2 rounded-ss-[20px] rounded-ee-[20px] mx-auto hover:bg-white hover:transition-all hover:scale-105"
        >
          <Link
            to="/pure"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-easing="linear"
            data-aos-offset="100"
          >
            <h1 className="text-center font-bold text-gray-400 text-3xl m-12 hover:bg-white hover:transition-all hover:scale-105 max-md:text-2xl ">
              Pure Projects{" "}
            </h1>
          </Link>
        </Col>
        <Col
          md={4}
          sm={10}
          className=" border-2 border-yellow-700 p-2 rounded-ss-[20px] rounded-ee-[20px] mx-auto hover:bg-white hover:bg-white hover:transition-all hover:scale-105 "
        >
          <Link
            to="/react"
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-easing="linear"
            data-aos-offset="100"
          >
            <h1
              className="text-center font-bold text-gray-400 text-3xl m-12 hover:bg-white hover:transition-all hover:scale-105 max-md:text-2xl"
              data-aos="fade-down"
            >
              React Js Projects
            </h1>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default Home;
