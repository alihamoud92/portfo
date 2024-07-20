import React from "react";
import { Col, Row } from "../../Tools/Grid-system";
import { Link } from "react-router-dom";

function Purewebsite() {
  return (
    <>
      <Row justify={"center"} className="!mt-8">
        <Link to="/purewebsite/alamal">
          <Col
            md={4}
            className="mx-auto border-2 border-yellow-700 p-2 rounded-ss-[20px] rounded-ee-[20px]  "
          >
            <h1 className="text-center font-bold text-gray-400 text-lg">
              اسم الموقع : جمعية الأمل الخيرية
            </h1>
          </Col>
        </Link>
      </Row>
    </>
  );
}

export default Purewebsite;
