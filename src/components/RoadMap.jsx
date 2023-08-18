import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import line1 from "../assets/Img/png/imgumbrella1.png"
import line2 from "../assets/Img/png/imgumbrella2.png"
import line3 from "../assets/Img/png/imgumbrella3.png"
import line4 from "../assets/Img/png/imgumbrella4.png"
import line5 from "../assets/Img/png/imgumbrella5.png"
import line6 from "../assets/Img/png/imgumbrella6.png"
import line7 from "../assets/Img/png/imgumbrella7.png"
import line8 from "../assets/Img/png/imgumbrella8.png"
import Hidden1 from '../assets/Img/png/hidden_umbrella1.png'
import Hidden2 from '../assets/Img/png/hidden_umbrella2.png'
import Hidden3 from '../assets/Img/png/hidden_umbrella3.png'

const RoadMap = () => {
  return (
   <section className='bg-black py-5 roadmap-bg position-relative'>
      <div className='bg_hidden1 d-none d-sm-block'><img src={Hidden1} alt="drop" /></div>
      <div className='bg_hidden2 d-none d-sm-block'><img src={Hidden2} alt="drop" /></div>
      <div className='bg_hidden3 d-none d-sm-block'><img src={Hidden3} alt="drop" /></div>
      <Container className='mb-5'>
        <h2 className='fw-bold fs_2lg ff_Lato text-center my-lg-5 pb-5 pt-lg-4 text_ffffff' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">Road <span className=' text_F1AC73'>MAP</span></h2>
        <div className='time_line'>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={line1} alt="#" />
              <div className='drop_line_left d-flex flex-column justify-content-sm-center justify-content-end ms-5 ps-lg-3 ps-5'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-left" data-aos-duration="1000">March 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0' data-aos="fade-left" data-aos-duration="1000">1000 Drops Launch <span className='d-block d-sm-inline'> on Ethereum </span></p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={line2} alt="#" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ps-5 ms-lg-0 ps-lg-0 me-lg-5 pe-lg-5'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-right" data-aos-duration="1000">March 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0 text-center' data-aos="fade-right" data-aos-duration="1000">1000 Drops Launch on Ethereum</p>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={line3} alt="roadmap_drop" />
              <div className='drop_line_left d-flex flex-column justify-content-sm-center justify-content-end ms-5 ms-lg-0 ps-lg-0 ps-5 me-sm-5 pe-sm-4 me-lg-0 pe-lg-0'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-left" data-aos-duration="1000">March 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0' data-aos="fade-left" data-aos-duration="1000">Creation of Treasury</p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={line4} alt="roadmap_drop" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ms-lg-0 ps-lg-0 ps-5 me-sm-5 pe-sm-5'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-right" data-aos-duration="1000">April 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0 text-center' data-aos="fade-right" data-aos-duration="1000">Our First Airdrop</p>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={line5} alt="roadmap_drop" />
              <div className='drop_line_left'></div>
              <div className=' d-flex flex-column justify-content-sm-center justify-content-end ms-5 ms-lg-0 ps-lg-0 ps-5 pe-lg-3 me-sm-5 pe-sm-5 me-lg-0'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-left" data-aos-duration="1000">June 2022</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0' data-aos="fade-left" data-aos-duration="1000">Major Collabs</p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={line6} alt="roadmap_drop" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ms-lg-0 ps-5 ps-lg-0 me-lg-5 pe-lg-5'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-right" data-aos-duration="1000">Sometime in Q3</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0 text-center' data-aos="fade-right" data-aos-duration="1000">Cyber Celebs come on Ethereum</p>
              </div>
            </Col>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_left_abs' src={line7} alt="roadmap_drop" />
              <div className='drop_line_left d-flex flex-column justify-content-sm-center justify-content-end ms-5 ps-lg-3 ps-5 me-sm-5'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-left" data-aos-duration="1000">Sometime in Q3</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0' data-aos="fade-left" data-aos-duration="1000">Streetwear + Merch</p>
              </div></Col>
            <Col lg={6} className='d-flex justify-content-lg-center justify-content-sm-end position-relative mb-5 pb-5'>
              <img className='drop_right_abs' src={line8} alt="roadmap_drop" />
              <div className='drop_line_right text-lg-end d-flex flex-column justify-content-center ms-5 ms-lg-0 ps-lg-0 ps-5 pe-lg-5 me-sm-5'>
                <h3 className='ff_lato text_ffffff fw-semibold fs_4md' data-aos="fade-right" data-aos-duration="1000">Sometime in Q4</h3>
                <p className='ff_lato text_ffffff fw-normal fs-2xsm mb-0 text-center' data-aos="fade-right" data-aos-duration="1000">Enhanced Partnerships</p>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
