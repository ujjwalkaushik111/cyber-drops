import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Img/png/logocuber.png'
import { Discord, Mcdonal, Ship, Twitter } from '../Icon';
import img1 from '../../assets/Img/png/Amrela.png'
import img2 from '../../assets/Img/png/Amrela2.png'


const Navcyber = () => {
    const [showNavbar, setShowNavbar] =useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
  return (
      <section className='BG_black position-relative'>
       <div className='Ellipse_1 d-none d-md-block moon_light z-3'></div>
            <header className='py-4 position-fixed top-0 z-2 w-100 BG_black'>
                <Container>
                    <nav className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img className='pe-sm-5 me-sm-5' src={logo} alt="logo" />
                        </div>
                            <ul className={showNavbar ? 'd-flex align-items-center gap-4 mb-0 nav_sm' : 'd-flex align-items-center gap-5 mb-0 nav_sm nav_show'} >
                                <li><Link className='Name1 link'>Home</Link></li>
                                <li><Link className='Name1 link'>About</Link></li>
                                <li><Link className='Name1 link'>Team</Link></li>
                                <li><Link className='Name1 link'>Roadmap</Link></li>
                                <li><Link className='Name1 link'>Partners</Link></li>
                                <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                               <a className='Circle_1' href="https://Ship.com"><Ship/></a>
                               <a className='Circle_1' href="https://Discord.com"><Discord/></a>
                               <a className='Circle_1' href="https://Twitter.com"><Twitter/></a>
                               <a className='Circle_1' href="https://Mcdonal.com"><Mcdonal/></a>
                               <button className='B-connect'>Connect Wallet</button>
                            </ul>
                        <span title="open"
                            className="d-inline d-lg-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
            </header>
            <Container className='mt-5 pt-5'>
                <Row className='py-lg-5 py-0'>
                <Col lg={6} className='mt-5'data-aos="fade-right"
                        data-aos-easing="linear"data-aos-duration="2000" >
                <h2 className='ff_Lato fw-bolder fs_2xl text_ffffff '>Welcome to <span className='d-block text_F1AC73'>Cyber Drops</span></h2>
                <p className='text_ffffff ff_Lato fw-normal fs_md mb-5 mt-4'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
                <button className='B-Explore'>Explore Now</button>
                </Col>
                <Col lg={6} className='d-flex justify-content-center'data-aos="fade-left"
                        data-aos-easing="linear"data-aos-duration="2000" >
                    <img className='w-75 mt-5 mt-lg-0' src={img1} alt="#" />
                </Col>
                </Row>
            </Container>
            <Container className='position-relative'>
               <div className='Ellipse_2 moon_light'></div>
               <div className='Ellipse_3 moon_light'></div>
                <Row className='py-lg-5 py-0 flex-column-reverse flex-lg-row'>
                    <Col lg={6} className=' d-flex justify-content-lg-start justify-content-center'data-aos="fade-right"
                        data-aos-easing="linear"data-aos-duration="2000" >
                    <img className='w-75 mt-5 mt-lg-0' src={img2} alt="#" />
                    </Col>
                    <Col lg={6} className='mt-5'data-aos="fade-left"
                        data-aos-easing="linear"data-aos-duration="2000" >
                    <h2 className='ff_Lato fw-bold fs_2lg text_ffffff mt-5'>Our <span className='text_F1AC73'>Mission</span></h2>
                    <p className='text_ffffff ff_Lato fw-normal fs_md mb-5 mt-4'>We understand that one of the biggest concerns for early-stage investors is that it can quickly become stressful, overwhelming, and especially extremely time consuming. It isn’t easy to balance a full time job, family, and an active investment portfolio, especially when just starting out.</p>
                    <button className='B-Explore'>Read More</button>
                    </Col>
                </Row>
            </Container>
   </section>
  )
}

export default Navcyber