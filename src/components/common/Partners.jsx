import React from "react";
import img3 from "../../assets/Img/png/unsplash.png";
import img4 from "../../assets/Img/png/PlayBit.png";
import img5 from "../../assets/Img/png/24hours.png";
import img6 from "../../assets/Img/png/house.png";
import img7 from "../../assets/Img/png/Threecolor.png";
import img8 from "../../assets/Img/png/umbrella1.png";
import img9 from "../../assets/Img/png/umbrella2.png";
import img10 from "../../assets/Img/png/umbrella3.png";
import img11 from "../../assets/Img/png/umbrella4.png";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";


const Partners = () => {

   // slick-sliderstart
   const SliderFour = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // End slick-slider
  return (


    <section className="BG_black py-5">

      <h2 className="ff_Lato text_ffffff fw-bold fs_2lg py-5 text-center">
        Part<span className="text_F1AC73">ners</span>
      </h2>

      <div className="BG_img position-relative">
      <div className='Ellipse_4 moon_light'></div>

      <Slider {...SliderFour}>
           <div className="py-5  d-flex flex-column ps-5 align-items-center my-5">
            <img className="mt-5" src={img4} alt="#" />
            <h2 className="fs_md ff_Lato text_black text-center pt-4 fw-bold">Playbit</h2>
           </div>
           <div className="py-5 d-flex flex-column ps-5 align-items-center my-5">
            <img className="mt-5" src={img5} alt="#" />
            <h2 className="fs_md ff_Lato text_black text-center pt-4 fw-bold">24 Capital</h2>
           </div>
           <div className="py-5 d-flex flex-column ps-5 align-items-center my-5">
            <img className="mt-5" src={img6} alt="#" />
            <h2 className="fs_md ff_Lato text_black text-center pt-4 fw-bold">TradingHive</h2>
           </div>
           <div className="py-5  d-flex flex-column ps-5 align-items-center my-5">
            <img className="mt-5" src={img7} alt="#" />
            <h2 className="fs_md ff_Lato text_black text-center pt-4 fw-bold">Focus Group Equities</h2>
           </div>
      </Slider>
      </div>
      <p className="text-center ff_Lato text_F1AC73 fw-bold fs_md ">
        For business and collaborations, contact us team@cyberdrops.finance
      </p>
      <Container>
        <Row className="my-5 py-5 align-items-center justify-content-between">
          <Col lg={5} className="py-5"data-aos="fade-right"
                        data-aos-easing="linear"data-aos-duration="2000">
            <h2 className="ff_Lato text_ffffff fw-bold fs_2lg py-3">
              Our <span className="text_F1AC73">Algo</span>{" "}
            </h2>
            <p className="ff_Lato text_ffffff fw-normal fs_md ">
              We have perfected our algorithm, which prioritizes a low risk and
              consistent profit stream without the need for daily
              micromanagement. While most trading algorithms can’t stand up
              against a volatile or risky market, our algorithm thrives in those
              conditions. Early-stage testers have seen a consistent flow of
              income with minimal ups and downs. Our algorithm has been in the
              works for YEARS. This has given us the time to rigorously backtest
              and release any needed hotfixes. As of early March 2022, we have
              close to a quarter of a million under direct management!
            </p>
          </Col>

          <Col lg={7}>

            <div className="d-flex align-items-center justify-content-lg-end justify-content-center gap-3">
              <div>
                <div data-aos="fade-down"
                        data-aos-easing="linear"data-aos-duration="2000" >
                  <img className="w-100" src={img8} alt="" />
                </div>
                <div className="mt-3"data-aos="fade-up"
                        data-aos-easing="linear"data-aos-duration="2000">
                  <img className="w-100" src={img9} alt="" />
                </div>
              </div>
              <div data-aos="fade-left"
                        data-aos-easing="linear"data-aos-duration="2000">
                <img className="w-100" src={img10} alt="" />
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
      <Container className="py-5 position-relative">
      <div className='Ellipse_5 moon_light'></div>
      <div className='Ellipse_6 moon_light'></div>
        <Row className="align-items-center">
        <Col lg={7} className="d-flex align-items-center justify-content-lg-start justify-content-center mb-5"data-aos="fade-right"
                        data-aos-easing="linear"data-aos-duration="2000" >
            <img className="w-75" src={img11} alt="#" />
        </Col>

        <Col lg={5} data-aos="fade-left"
                        data-aos-easing="linear"data-aos-duration="2000">
           <h2 className="ff_Lato text_ffffff fw-bold fs_2lg">What <span className="text_F1AC73">we do</span></h2>
           <p className="ff_Lato text_ffffff fw-normal fs_md">1000 Cyber Drops will be dropping on Ethereum in March 2022. Each and every Cyber Drop is uniquely hand crafted. This is just the beginning of our journey. Owning a Cyber Drop will unlock monthly airdrops and future governance rights in addition to our revolutionary algorithm. We strive to always bring innovation and keep BUILDing. Cyber Drops is a community driven project and always will be that way. That’s our promise.</p>
        </Col>
        </Row>
        </Container>
    </section>
  );
};

export default Partners;
