import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import makeRequest from "../../AxiosClient";

const Footer = () => {
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState([])



    const getData = () => {

        makeRequest({
            url: `/api/home/service`,
            method: 'get',
        })
            .then(({ data }) => {
                setService(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        getData()
    }, [])
    return (
        <>
            <footer>
                <div className="footer__area footer-bg2 pt-95 pb-70" style={{ backgroundImage: 'url(/assets/img/footer-bg/footer-bg.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                <div className="footer__widget mb-30">
                                    <div className="footer__widget-title">
                                        <div className="logo mb-30">
                                            <a href="index.html"><img src="/assets/img/footer-logo/f-logo.png" alt="logo" /></a>
                                        </div>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__logo-area">
                                            <p>
                                                Our main moto is “The Symbol of Satisfaction”. That is because we give our best for give best service to our customer.</p>
                                            <div className="social">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/MonirGroup2022/"><i className="fab fa-facebook-f" /></a></li>
                                                    <li><a href="#!"><i className="fab fa-twitter" /></a></li>
                                                    <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                                                    <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                                <div className="footer__widget margin-left-100 mb-30">
                                    <div className="footer__widget-title mb-25">
                                        <h2>Service</h2>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__services">
                                            <ul>
                                                {
                                                    service.map((d, i) => (
                                                        <li key={i}><Link to={'/service-details/' + d.id}>{d.service_name != null && d.service_name.length > 25 ? d.service_name.slice(0, 25) + '...' : d.service_name}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
                                <div className="footer__widget margin-left-50 mb-30">
                                    <div className="footer__widget-title mb-25">
                                        <h2>Location</h2>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__services">
                                            <ul>
                                                <li>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.7888005586437!2d90.35194168856373!3d23.798714859120196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13d85c95a63%3A0xa1276f1f5a14d0a2!2sMonir%20Group%20of%20Companies!5e0!3m2!1sen!2sbd!4v1692687495715!5m2!1sen!2sbd" height={200} style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-xxl-3 col-xl-3 col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.9s" style="visibility: visible; animation-delay: 0.9s; animation-name: fadeInUp;">
              <div class="footer-widget mb-30">
                  <div class="footer__widget-title mb-30">
                      <h2>Newsletter</h2>
                  </div>
                  <div class="subscribe-footer mb-35">
                      <form action="form.php">
                          <input type="email" placeholder="Enter your email">
                          <button type="submit"><i class="fal fa-long-arrow-right"></i></button>
                      </form>
                  </div>
                  <div class="footer__services ">
                      <ul>
                          <li><span>Opening Time</span> </li>
                          <li><span> Sat - Thu :    10:00 AM – 7:00 PM</span> </li>
                      </ul>
                  </div>
              </div>
          </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-coptright theme-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
                                <div className="footer__text">
                                    <p>Copyright ©2023 <a href="https://itsheba24.com/"><b>IT Sheba 24</b></a>. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="footer-copyright__wrapper footer-copyright__wrapper2">
                                    <div className="footer-call d-flex align-items-center">
                                        <div className="footer-copyright__wrapper__icon mr-10">
                                            <i className="fal fa-headset" />
                                        </div>
                                        <div className="footer-copyright__wrapper__call-number">
                                            <span>Call - Or - SMS</span>
                                            <h5><a href="tel:+8801906-297808">01906-297808</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;