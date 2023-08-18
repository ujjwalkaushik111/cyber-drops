import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import {Discord, Mcdonal, Ship, Twitter} from './Icon'
import img_ub from '../assets/Img/png/img_footer_ub.png'
import footer_logo from '../assets/Img/png/img_footer_ub2.png'


const Faq = () => {
    return (
        <section className='bg-black position-relative'>
                  <div className='Ellipse_8 moon_light'></div>
                  <div className='Ellipse_9 moon_light'></div>
            <div className='white_circle faq_circle d-sm-block d-none'></div>
            <div className='white_circle faq_circle_1 d-sm-block d-none'></div>
            <div className='img_ub d-sm-block d-none'><img src={img_ub} alt="drop" /></div>
            <Container>
                <h2 className='fw-bold fs_2lg ff_Lato text-center mb-5 pb-3 text_F1AC73' data-aos="fade-down"
                
                    data-aos-easing="linear"
                    data-aos-duration="1000">FAQ<span className='text_ffffff'>’s</span></h2>
                <div className='d-flex justify-content-center'>
                    <Accordion defaultActiveKey="0" className='width-967'>
                        <Accordion.Item eventKey="0" className='w-100 bg-black mb-4' data-aos="fade-left" data-aos-duration="1000">
                            <Accordion.Header className='ff_lato fw-medium fs_2xmd text_ffffff mb-0'>Egestas scelerisque duis quis aliquet. Consectetur?</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_2xsm fw-normal ff_lato'>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='w-100 bg-black mb-4' data-aos="fade-right" data-aos-duration="1000">
                            <Accordion.Header className='ff_lato fw-medium fs_2xmd text_ffffff mb-0'>Ac nec enim amet, leo lorem quis neque vitae aliquet?</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_2xsm fw-normal ff_lato'>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='w-100 bg-black mb-4' data-aos="fade-left" data-aos-duration="1000">
                            <Accordion.Header className='ff_lato fw-medium fs_2xmd text_ffffff mb-0'>Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh donec?</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_2xsm fw-normal ff_lato'>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='w-100 bg-black mb-4' data-aos="fade-right" data-aos-duration="1000">
                            <Accordion.Header className='ff_lato fw-medium fs_2xmd text_ffffff mb-0'>Porta amet tortor nec pulvinar urna. Et blandit sit id?</Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_2xsm fw-normal ff_lato'>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='w-100 bg-black ' data-aos="fade-left" data-aos-duration="1000">
                            <Accordion.Header className='ff_lato fw-medium fs_2xmd text_ffffff mb-0'>Tellus hendrerit fermentum ut hendrerit ac vestibulum? </Accordion.Header>
                            <Accordion.Body className='text_ffffff fs_2xsm fw-normal ff_lato'>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas <span className='d-block'>libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.</span>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='d-flex justify-content-center mb-2 mt-5 pt-5'>
                    <img src={footer_logo} alt="footer_logo" />
                </div>
                <h2 className='ff_lato fw-semibold text_F1AC73 fs_lg text-center mb-2' data-aos="fade-left" data-aos-duration="1000">Cyber Drops</h2>
                <p className='fs_2xsm text_ffffff fw-normal ff_lato text-center mb-4' data-aos="fade-right" data-aos-duration="1000">Viverra metus viverra rhoncus eget quam suspendisse diam <span className='d-lg-block'>amet, nisl. Mattis maecenas libero lacinia accumsan amet.</span></p>
                <div className='d-flex justify-content-center gap-2 mb-4'>
                    <a data-aos="fade-right" data-aos-duration="2000" className='Circle_1' href="http://ship.com"><Ship /></a>
                    <a data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="2000" className='Circle_1' href="http://discord.com"><Discord /></a>
                    <a data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="2000" className='Circle_1' href="http://twitter.com"><Twitter /></a>
                    <a data-aos="fade-left" data-aos-duration="2000" className='Circle_1' href="http://modal.com"><Mcdonal /></a>
                </div>

            </Container>
            <hr className='text_ffffff fs-6 mb-0' />
            <p className='fs_2xsm text_ffffff fw-normal ff_lato text-center mb-0 py-3'>Copyright By 2022</p>
        </section>
    )
}

export default Faq