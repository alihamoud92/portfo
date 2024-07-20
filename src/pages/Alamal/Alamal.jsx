import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import A_1 from "../../images/img_1.jpeg";
import A_2 from "../../images/mg_2.jpeg";
import A_3 from "../../images/mg_3.jpeg";
import A_4 from "../../images/mg_4.jpeg";
import A_5 from "../../images/mg_5.jpeg";
import A_6 from "../../images/mg_6.jpeg";
import A_7 from "../../images/mg_7.jpeg";
import A_8 from "../../images/mg_8.jpeg";
import A_9 from "../../images/mg_9.jpeg";
import { clickZoomInImage } from "../../Tools/APIs";
import { Col, Container, Row } from "../../Tools/Grid-system";

function Alamal() {
  const picteres = [
    { img: A_1, id: 1 },
    { img: A_2, id: 2 },
    { img: A_3, id: 3 },
    { img: A_4, id: 4 },
    { img: A_5, id: 5 },
    { img: A_6, id: 6 },
    { img: A_7, id: 7 },
    { img: A_8, id: 8 },
    { img: A_9, id: 9 },
  ];
  return (
    <>
      <Container className="mt-12">
        {/* <Row justify={"center"}>
          <Col
            md={8}
            className="mx-auto text-white border-2 border-yellow-700 p-8 rounded-ss-[20px] rounded-ee-[20px] space-y-4 hover:bg-white hover:text-black shadow-md shadow-yellow-500 "
          >
            <p className=" text-xl text-center max-md:text-base font-bold">
              اسم المشروع : جمعية الأمل الخيرية
            </p>
            <p className=" text-xl text-center max-md:text-base font-semibold">
              بنية المشروع المشروع : هو عبارة عن مشروع تم العمل علية باستخدام
              html بالاضافة تم استخدام tailwind كما انه يتضمن gridet system خاصة
              من تنسيق اجزاء الموقع باحترافية كما انه تم استخدام القليل من css
              style
            </p>
          </Col>
        </Row> */}
        <Row>
          <Col
            md={7}
            className="mx-auto border-2 border-yellow-700 rounded-2xl !mt-24 "
          >
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper  custom-swiper !p-3"
              breakpoints={{
                1020: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {picteres?.map((e) => (
                <SwiperSlide
                  key={e.id}
                  className="!p-3  !h-[200px] !rounded-2xl"
                >
                  <img
                    src={e.img}
                    alt=""
                    className="!w-full !h-full rounded-2xl cursor-pointer"
                    onClick={clickZoomInImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Alamal;
