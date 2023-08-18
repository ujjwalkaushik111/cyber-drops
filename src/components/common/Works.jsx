import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img12 from "../../assets/Img/png/Varun.png";
import img13 from "../../assets/Img/png/Threeicon.png";
import img14 from "../../assets/Img/png/Shubh.png";
import img_how from "../../assets/Img/png/hidden_umbrella1.png";
import img_how_3 from "../../assets/Img/png/hidden_umbrella3.png";
import Slider from "react-slick";


const Works = () => {
  // slick-sliderstart
  const Slidercreate = {
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  // End slick-slider

  return (
    <section className="BG_black">
      <div className="position-relative">
      <div className="img_how_3 d-sm-block d-none"><img src={img_how_3} alt="#" /></div>
      <h2 className="ff_Lato text_ffffff fw-bold fs_2lg text-center">
        How it <span className="text_F1AC73">works</span>
      </h2>
      <Container>
        <Row className="py-5">
          <Col lg={3} className="d-flex justify-content-center py-5">
            <div className="box_1 d-flex flex-column justify-content-center align-items-center">
              <div className="Circle11 justify-content-center d-flex align-items-center pt-3 my-3">
                <p className="fs_5md text_ffffff fw-bold ff_Lato">01</p>
              </div>
              <h3 className="fs_2xmd text_ffffff fw-bold ff_Lato pt-4 mb-3">
                Mint NFT
              </h3>
              <p className="fs_2xsm text_ffffff fw-normal ff_Lato text-center px-4">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col lg={3} className="d-flex justify-content-center py-5">
            <div className="box_1 d-flex flex-column justify-content-center align-items-center">
              <div className="Circle11 justify-content-center d-flex align-items-center pt-3 my-3">
                <p className="fs_5md text_ffffff fw-bold ff_Lato">02</p>
              </div>
              <h3 className="fs_2xmd text_ffffff fw-bold ff_Lato pt-4 mb-3 ">
                Verify NFT Ownership
              </h3>
              <p className="fs_2xsm text_ffffff fw-normal ff_Lato text-center">
                Only Cyber Drops that are verified eligible to be connected
                under direct management
              </p>
            </div>
          </Col>
          <Col lg={3} className="d-flex justify-content-center py-5">
            <div className="box_1 d-flex flex-column justify-content-center align-items-center">
              <div className="Circle11 justify-content-center d-flex align-items-center pt-3 my-3">
                <p className="fs_5md text_ffffff fw-bold ff_Lato">03</p>
              </div>
              <h3 className="fs_2xmd text_ffffff fw-bold ff_Lato pt-4 mb-3 text-center">
                Link API to your account
              </h3>
              <p className="fs_2xsm text_ffffff fw-normal ff_Lato text-center px-4">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col lg={3} className="d-flex justify-content-center py-5">
            <div className="box_1 d-flex flex-column justify-content-center align-items-center">
              <div className="Circle11 justify-content-center d-flex align-items-center pt-3 my-3">
                <p className="fs_5md text_ffffff fw-bold ff_Lato">04</p>
              </div>
              <h3 className="fs_2xmd text_ffffff fw-bold ff_Lato pt-4 mb-3">
                Passive Income for life
              </h3>
              <p className="fs_2xsm text_ffffff fw-normal ff_Lato text-center px-4">
                As long as your HODL your Cyber Drop, will be connected under
                direct management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <div className="position-relative">
      <div className='img_how d-sm-block d-none'><img src={img_how} alt="#" /></div>

        <Container className="py-5">

        <div className='Ellipse_7 moon_light'></div>

          <h2 className="ff_Lato text_ffffff fw-bold fs_2lg text-center">
            Meet the <span className="text_F1AC73">Team</span>
          </h2>

          <Slider {...Slidercreate}>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex bg-white align-items-center team-card rounded-5 mt-5">
                <div>
                  <img className="w-100" src={img12} alt="#" />
                </div>
                <div className="text-center ps-4">
                  <h2 className="ff_Lato fw-bold text_black fs_4md ">
                    Varun Muthu
                  </h2>
                  <p className="fw-medium ff-Lato text_black fs_md">
                    Marketing Director
                  </p>
                  <p className="fw-normal ff-Lato text_black fs_2xsm mb-0 mb-sm-5">
                    https://www.linkedin.com/{" "}
                    <span className="d-block">in/varunmuthu1</span>
                  </p>
                  <img className="ps-5" src={img13} alt="#" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex bg-white align-items-center team-card rounded-5 mt-5">
                <div>
                  <img className="w-100" src={img14} alt="#" />
                </div>
                <div className="text-center ps-4">
                  <h2 className="ff_Lato fw-bold text_black fs_4md ">
                    Shubh Sharma
                  </h2>
                  <p className="fw-medium ff-Lato text_black fs_md">
                    Operations Director
                  </p>
                  <p className="fw-normal ff-Lato text_black fs_2xsm mb-5">
                    https://www.linkedin.com/{" "}
                    <span className="d-block">in/ShubhSharma01</span>
                  </p>
                  <img  className="ps-5" src={img13} alt="#" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex bg-white align-items-center team-card rounded-5 mt-5">
                <div>
                  <img className="w-100" src={img12} alt="#" />
                </div>
                <div className="text-center ps-4">
                  <h2 className="ff_Lato fw-bold text_black fs_4md ">
                    Varun Muthu
                  </h2>
                  <p className="fw-medium ff-Lato text_black fs_md">
                    Marketing Director
                  </p>
                  <p className="fw-normal ff-Lato text_black fs_2xsm mb-5">
                    https://www.linkedin.com/{" "}
                    <span className="d-block">in/varunmuthu1</span>
                  </p>
                  <img className="ps-5" src={img13} alt="#" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex bg-white align-items-center team-card rounded-5 mt-5">
                <div>
                  <img className="w-100" src={img14} alt="#" />
                </div>
                <div className="text-center ps-4">
                  <h2 className="ff_Lato fw-bold text_black fs_4md ">
                    Shubh Sharma
                  </h2>
                  <p className="fw-medium ff-Lato text_black fs_md">
                    Operations Director
                  </p>
                  <p className="fw-normal ff-Lato text_black fs_2xsm mb-5">
                    https://www.linkedin.com/{" "}
                    <span className="d-block">in/ShubhSharma01</span>
                  </p>
                  <img  className="ps-5" src={img13} alt="#" />
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </div>
    </section>
  );
};

export default Works;
