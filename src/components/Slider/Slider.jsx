import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { fileUrl, useFETCH } from "../../Tools/APIs";
import { Row, Col, Container } from "../../Tools/Grid-system";

function Slider({ name, description }) {
  return (
    <Container className="sticky right-24">
      {/* {isLoading ? (
        <>
          <Col>
            <div className="loadingPro rounded-md overflow-hidden w-full h-[70vh]">
              <div className="h-full w-full"></div>
            </div>
          </Col>
        </>
      ) : (
        ""
      )} */}

      <Row>
        <Col className="mx-auto">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper overflow-hidden pr-5 "
            style={{ direction: "ltr" }}
          >
            <SwiperSlide></SwiperSlide>
            {/* <SwiperSlide >
                  <img src={l2} alt="" className="w-full" />
                </SwiperSlide>  */}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
}
export default Slider;
