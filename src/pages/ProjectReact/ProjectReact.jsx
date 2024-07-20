import React from "react";
import { Col, Row } from "../../Tools/Grid-system";
import { Link } from "react-router-dom";

function ProjectReact() {
  return (
    <div>
      <Row
        justify={"center"}
        className="  items-center h-[100vh] max-md:h-[140vh]  w-full gap-2  max-md:space-y-1 "
      >
        <Col
          md={4}
          sm={10}
          className=" border-2 border-yellow-700 p-2 rounded-ss-[20px] rounded-ee-[20px] mx-auto hover:bg-white hover:transition-all hover:scale-105 "
        >
          <Link
            to="/react/icr"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-easing="linear"
            data-aos-offset="100"
          >
            <h1 className="text-center font-bold text-gray-400 text-3xl m-12 hover:bg-white hover:transition-all hover:scale-105 max-md:text-2xl ">
              icrCompany{" "}
            </h1>
          </Link>
        </Col>
        +{" "}
        <Col
          md={4}
          sm={10}
          className=" border-2 border-yellow-700 p-2 rounded-ss-[20px] rounded-ee-[20px] mx-auto hover:bg-white hover:transition-all hover:scale-105 "
        >
          <Link
            to="/react/icrdash"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-easing="linear"
            data-aos-offset="100"
          >
            <h1 className="text-center font-bold text-gray-400 text-3xl m-12 hover:bg-white hover:transition-all hover:scale-105 max-md:text-2xl ">
              IcrDashboard{" "}
            </h1>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectReact;