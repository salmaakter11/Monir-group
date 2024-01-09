import { useEffect, useState } from "react";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import PageTitle from "../../common/page_title/PageTitle";
import CommonBanner from "../CommonBanner";
import BannerImg from '../../assets/Image/Banner/documents.jpg'
import { useQuery } from "@tanstack/react-query";

const About = () => {

  const { isLoading, error, data:aboutpage } = useQuery({
    queryKey: ['aboutpage'],
    queryFn: async () =>
      {
        const response = await makeRequest({ url: `/api/home/about`, method: 'get'});
          return response.data;
      }
  })

  return (
    <>
      <PageTitle title="About" />
      {/* page title area start */}
      <CommonBanner image={BannerImg} title="About Us" />
      {/* page title area end */}
      {isLoading ? <HorizontalLoader /> : ''}
      <main>
        {/* About-us area start here */}
        <section className="about-area-2 pt-120 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <div className="about2-left d-flex">
                  <div className="about2-left__img1 mr-10">
                    <img src="assets/img/about-2/about2.jpg" alt='' />
                  </div>
                  <div className="about2-left__img2">
                    <img src="assets/img/about-2/about2-1.jpg" alt='' />
                    <div className="about2-left__info d-flex align-items-center">
                      <div className="about2-left__info__left mr-15">
                        <img src="assets/img/about-2/seal.png" alt='' />
                      </div>
                      <div className="about2-left__info__right">
                        <h4>ATAB Certified</h4>
                        <p>From 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                <div className="section_title_wrapper">
                  <span className="subtitle">
                    About Monir Group
                  </span>
                  <h2 className="section-title about-span mb-30">
                    <span>11+</span> Years of Your Trust and Recommendation
                  </h2>
                  <div className="section_title_wrapper__about-content mb-40">
                    <p>{aboutpage?.description}</p>
                  </div>
                </div>
                <div className="about-trust">
                  <div className="row mb-10">
                    <div className="col-lg-6">
                      <div className="about2__item d-flex  mb-20">
                        <div className="about2__icon">
                          <i className="flaticon-fair-trade" />
                        </div>
                        <div className="about2__content">
                          <h4>Trusted by Millions</h4>
                          <p>Most trusted &amp; recommended by thousands of customer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="about2__item d-flex  mb-20">
                        <div className="about2__icon">
                          <i className="flaticon-trophy" />
                        </div>
                        <div className="about2__content">
                          <h4>Certified Concern</h4>
                          <p>IATA, ATAB, Toab, Civil Aviation &amp; BASIS Certified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About-us area end here */}
        {/* Histry Tabs area start here */}
        <div className="histry-area pt-110 pb-90" style={{ backgroundImage: 'url(assets/img/about/abbg.jpg)' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-10">
                <div className="section_title_wrapper text-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                  <h2 className="section-title white-color">
                    Monir Group Carries 11+ Year's <br /> Awesome History
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Histry Tabs area end here */}
        {/* About- Tabs area start here */}
        <div className="ab-tabs pb-70">
          <div className="abtb-hr1">
            <span />
          </div>
          <div className="abtb-pth">
            <img src="assets/img/about/pth.png" alt='' />
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="price-tab pb-130 abtab-top">
                  <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link nav-radius active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">2013</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">2020</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab1" data-bs-toggle="pill" data-bs-target="#pills-tab1" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">2021</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab2" data-bs-toggle="pill" data-bs-target="#pills-tab2" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">2022</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link navr-radius" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">2023</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row ">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content text-right pr-105 mb-45">
                      <div className="abtbs-round">
                        <span />
                      </div>
                      <div className="abtb-mbr">
                        <span />
                      </div>
                      <span>22 Jan 2013</span>
                      <h4 className="abtb-title">
                        Amanot Travels Start Journey
                      </h4>
                      <p>Amanot Travels International(the first company of Monir Gorup) started there journey
                        to give service to customer service.
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content pl-105 mb-45">
                      <span>23 Jan 2013</span>
                      <h4 className="abtb-title">
                        Amanot Travels start air ticket service
                      </h4>
                      <p>After starting the company, Amanot Travel International Started the service.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content text-right pr-105 mb-45">
                      <div className="abtbs-round">
                        <span />
                      </div>
                      <div className="abtb-mbr">
                        <span />
                      </div>
                      <span>30 Sep 2015</span>
                      <h4 className="abtb-title">
                        Amanot Travels Incorporated
                      </h4>
                      <p>On 30th September 2015, Amanot Travels International was incorporated and has
                        received
                        numerous awards and recognitions since date</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content pl-105 mb-45">
                      <span>30 Sep 2015</span>
                      <h4 className="abtb-title">
                        Amanot Travels Incorporated
                      </h4>
                      <p>On 30th September 2015, Amanot Travels International was incorporated and has
                        received
                        numerous awards and recognitions since date </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row ">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content text-right pr-105 mb-45">
                      <div className="abtbs-round">
                        <span />
                      </div>
                      <div className="abtb-mbr">
                        <span />
                      </div>
                      <span>25 May 2020</span>
                      <h4 className="abtb-title">
                        IT Sheba was incorporated
                      </h4>
                      <p>On 25 May 2020, IT Sheba 24 dot com was incorporated and has
                        received
                        numerous awards and recognitions since date</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content pl-105 mb-45">
                      <span>28 Jun 2020</span>
                      <h4 className="abtb-title">
                        Hygenic Fruite was incorporated
                      </h4>
                      <p>On 28 Jun 2021, Hygenic Fruite was incorporated and has
                        received
                        numerous awards and recognitions since date</p>
                    </div>
                  </div>
                </div>
                {/* <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="abtb-content text-right pr-105 mb-45">
                          <div class="abtbs-round">
                              <span></span>
                          </div>
                          <div class="abtb-mbr">
                              <span></span>
                          </div>
                          <span>22 jan 1995</span>
                          <h4 class="abtb-title">
                              Started Journey in New York
                          </h4>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                              end of the day, going forward, a new normal that has evolved from generation.</p>
                      </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="abtb-content pl-105 mb-45">
                          <span>25 Aug 1994</span>
                          <h4 class="abtb-title">
                              First Trophy Winner in World
                          </h4>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                              end of the day, going forward, a new normal that has evolved from generation.</p>
                      </div>
                  </div>
              </div> */}
              </div>
              <div className="tab-pane fade" id="pills-tab1" role="tabpanel" aria-labelledby="pills-tab1-tab">
                <div className="row ">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content text-right pr-105 mb-45">
                      <div className="abtbs-round">
                        <span />
                      </div>
                      <div className="abtb-mbr">
                        <span />
                      </div>
                      <span>17 Jan 2021</span>
                      <h4 className="abtb-title">
                        Travel Sheba is incorporated
                      </h4>
                      <p>On 17 Jan 2021, Travel Sheba is incorporated and has
                        received
                        numerous awards and recognitions since date</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content pl-105 mb-45">
                      <span>28 Jun 2021</span>
                      <h4 className="abtb-title">
                        Faijan Rent a car establish
                      </h4>
                      <p>On 28 Jun 2021, Faijan Rent a car establish as a rent a car business company. That provide car for rental.</p>
                    </div>
                  </div>
                </div>
                {/* <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="abtb-content text-right pr-105 mb-45">
                          <div class="abtbs-round">
                              <span></span>
                          </div>
                          <div class="abtb-mbr">
                              <span></span>
                          </div>
                          <span>22 jan 1995</span>
                          <h4 class="abtb-title">
                              Started Journey in New York
                          </h4>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                              end of the day, going forward, a new normal that has evolved from generation.</p>
                      </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div class="abtb-content pl-105 mb-45">
                          <span>25 Aug 1994</span>
                          <h4 class="abtb-title">
                              First Trophy Winner in World
                          </h4>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                              end of the day, going forward, a new normal that has evolved from generation.</p>
                      </div>
                  </div>
              </div> */}
              </div>
              <div className="tab-pane fade" id="pills-tab2" role="tabpanel" aria-labelledby="pills-tab1-tab">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content text-right pr-105 mb-45">
                      <div className="abtbs-round">
                        <span />
                      </div>
                      <div className="abtb-mbr">
                        <span />
                      </div>
                      <span>06 Jul 2022</span>
                      <h4 className="abtb-title">
                        New Vision Consultancy started their journey
                      </h4>
                      <p>To bring life every student's dream for study abroad, New Vision Consultancy have started their journey.</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content pl-105 mb-45">
                      <span>04 Aug 2022</span>
                      <h4 className="abtb-title">
                        Capital News 24 established
                      </h4>
                      <p>To bring to the truth and fast news for people of Bangladesh, Capital News 24 have started their journey.</p>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content text-right pr-105 mb-45">
                      <div className="abtbs-round">
                        <span />
                      </div>
                      <div className="abtb-mbr">
                        <span />
                      </div>
                      <span>03 Sep 2022</span>
                      <h4 className="abtb-title">
                        Muskan Holidays incorporated
                      </h4>
                      <p>On 03 Sep 2022, Muskan Holidays begain their journey as a holiday travel planer company. They finish many trip successfully every week</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content pl-105 mb-45">
                      <span>02 Oct 2022</span>
                      <h4 className="abtb-title">
                        Hosting Sheba 24 incorporated
                      </h4>
                      <p>Hosting sheba 24, started thir journey. With relaiable and fully securied fastest hosting server, Hosting Sheba 24 support their customer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="row ">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content text-right pr-105 mb-45">
                      <div className="abtbs-round">
                        <span />
                      </div>
                      <div className="abtb-mbr">
                        <span />
                      </div>
                      <span>13 Apr 2023</span>
                      <h4 className="abtb-title">
                        Monir Travel LLC established
                      </h4>
                      <p>On 13 Apr 2023, Monir Travel LLC was incorporated and has
                        received numerous awards and recognitions since date. Who are specialized at Bangladesh and Dubai ticket &amp; visa processing</p>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="abtb-content pl-105 mb-45">
                      <span>20 Jun 2023</span>
                      <h4 className="abtb-title">
                        Travel Sheba become Limited Company
                      </h4>
                      <p>On 20 Jun 2023, Travel Sheba Dot Com is renewd as a limited company.</p>
                    </div>
                  </div>
                </div>
                {/* <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="abtb-content text-right pr-105 mb-45">
                      <div class="abtbs-round">
                          <span></span>
                      </div>
                      <div class="abtb-mbr">
                          <span></span>
                      </div>
                      <span>22 jan 1995</span>
                      <h4 class="abtb-title">
                          Started Journey in New York
                      </h4>
                      <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                          end of the day, going forward, a new normal that has evolved from generation.</p>
                  </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="abtb-content pl-105 mb-45">
                      <span>25 Aug 1994</span>
                      <h4 class="abtb-title">
                          First Trophy Winner in World
                      </h4>
                      <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                          end of the day, going forward, a new normal that has evolved from generation.</p>
                  </div>
              </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* About- Tabs area end here */}
        {/* Ab-fact-area start */}
        <div className="abfact-area pt-80 pb-170" style={{ backgroundImage: 'url(assets/img/ab-fact/abfact.jpg)' }}>
          <div className="container">
            <div className="row mb-20">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="fact fact-2 abfact-items text-center">
                  <h1 className="counter-count"><span className="counter">12</span>k+</h1>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30 ">
                <div className="fact fact-2 abfact-items text-center ">
                  <h1 className="counter-count"><span className="counter">80</span>+</h1>
                  <span>Employment Create</span>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="fact fact-2 abfact-items text-center ">
                  <h1 className="counter">13</h1>
                  <span>Sister Conscern Company</span>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="fact fact-2 abfact-items text-center ">
                  <h1 className="counter-count"><span className="counter">9</span>k+</h1>
                  <span>Visa Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ab-fact-area end */}
        {/* intro-area start */}
        <section className="intro-area">
          <div className="container">
            <div className="row abintro-top g-0">
              <div className="col-xxl-6 col-xl-6 col-lg-6 d-flex align-items-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <div className="section_title_wrapper pl-50 pr-70 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                  <span className="subtitle">
                    Our Missions
                  </span>
                  <h2 className="section-title">
                    We Journey The Global Business to Ensuring The Guarantee
                  </h2>
                  <p className="pt-30 pb-30 ">Explore business opportunities through strategic business units of the Group and flourish and prosper in the concerned sectors by harnessing people’s power and potential as well as making best use of resources giving due importance to national priorities.</p>
                  <div className="abinfro-btn d-flex align-items-center">
                    <a href="contact.html" className="theme-btn">Contact us</a>
                    <a href="#0" className="btn-download"> <i className="fal fa-download" /> Download
                      Profile</a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                <div className="intro-right">
                  <img src="assets/img/about-us/ab-m.jpg" alt='' />
                  <div className="intro-btn">
                    <a className="play-btn popup-video" href="https://www.youtube.com/watch?v=uGuDbJaTZNY"><i className="flaticon-play-button" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* intro-area end */}
        {/* Testimonail start */}
        <section className="testimonail-area pt-110 pb-190">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-10">
                <div className="section_title_wrapper text-center mb-50">
                  <span className="subtitle">
                    Testimonials
                  </span>
                  <h2 className="section-title">
                    What Clients Say About Us and <br /> Our Services
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="textimonail-active owl-carousel">
                <div className="testimonail__wrapper">
                  <div className="testimonail__wrapper__info d-flex align-items-center mb-25">
                    <div className="testimonail__wrapper__info__img ">
                      <img src="assets/img/testimonial/ts-1.png" alt='' />
                    </div>
                    <div className="testimonail__wrapper__info__author">
                      <h4>Md. Ismail Sohan</h4>
                      <span>Travel Agent</span>
                    </div>
                    <div className="testimonail__wrapper__info__quotes">
                      <i className="flaticon-quote" />
                    </div>
                  </div>
                  <div className="testimonail__wrapper__content">
                    <p>Their tag line is "Symbol of Satisfaction". I think they chose the perfect tagline for
                      their company. Every single service is grate. Must recommended.</p>
                    <div className="testimonail__wrapper__content__reviews">
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li>(Facebook)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="testimonail__wrapper">
                  <div className="testimonail__wrapper__info d-flex align-items-center mb-25">
                    <div className="testimonail__wrapper__info__img ">
                      <img src="assets/img/testimonial/ts-2.png" alt='' />
                    </div>
                    <div className="testimonail__wrapper__info__author">
                      <h4>Bristi Rani Ghosh</h4>
                      <span>Traveller</span>
                    </div>
                    <div className="testimonail__wrapper__info__quotes">
                      <i className="flaticon-quote" />
                    </div>
                  </div>
                  <div className="testimonail__wrapper__content">
                    <p>Really It's very helpful. Any travels, it sector, rent a car facility, consultancy &amp; also
                      grocery shop facilities can get here easily. ❤️</p>
                    <div className="testimonail__wrapper__content__reviews ">
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li>(Google)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="testimonail__wrapper">
                  <div className="testimonail__wrapper__info d-flex align-items-center mb-25">
                    <div className="testimonail__wrapper__info__img ">
                      <img src="assets/img/testimonial/ts-3.png" alt='' />
                    </div>
                    <div className="testimonail__wrapper__info__author">
                      <h4>Jannatul Ferdous</h4>
                      <span>Traveller</span>
                    </div>
                    <div className="testimonail__wrapper__info__quotes">
                      <i className="flaticon-quote" />
                    </div>
                  </div>
                  <div className="testimonail__wrapper__content">
                    <p>Their service was very good. And i suggest you all to visit their office and take all
                      kind of travels related help. All service are good and faithful.</p>
                    <div className="testimonail__wrapper__content__reviews">
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li>(Twitter)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="testimonail__wrapper">
                  <div className="testimonail__wrapper__info d-flex align-items-center mb-30">
                    <div className="testimonail__wrapper__info__img ">
                      <img src="assets/img/testimonial/ts-1.png" alt='' />
                    </div>
                    <div className="testimonail__wrapper__info__author">
                      <h4>Daniel Groveria</h4>
                      <span>Student</span>
                    </div>
                    <div className="testimonail__wrapper__info__quotes">
                      <i className="flaticon-quote" />
                    </div>
                  </div>
                  <div className="testimonail__wrapper__content">
                    <p>Travellers from countries categorized under the high-risk list who are eligible to enter
                      Germany, aged 12 and older, are obliged to present their vaccination certificates</p>
                    <div className="testimonail__wrapper__content__reviews">
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li>(Switzerland Visa)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="testimonail__wrapper">
                  <div className="testimonail__wrapper__info d-flex align-items-center mb-30">
                    <div className="testimonail__wrapper__info__img ">
                      <img src="assets/img/testimonial/ts-1.png" alt='' />
                    </div>
                    <div className="testimonail__wrapper__info__author">
                      <h4>Daniel Groveria</h4>
                      <span>Student</span>
                    </div>
                    <div className="testimonail__wrapper__info__quotes">
                      <i className="flaticon-quote" />
                    </div>
                  </div>
                  <div className="testimonail__wrapper__content">
                    <p>Travellers from countries categorized under the high-risk list who are eligible to enter
                      Germany, aged 12 and older, are obliged to present their vaccination certificates</p>
                    <div className="testimonail__wrapper__content__reviews">
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li>(Switzerland Visa)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="testimonail__wrapper">
                  <div className="testimonail__wrapper__info d-flex align-items-center mb-30">
                    <div className="testimonail__wrapper__info__img ">
                      <img src="assets/img/testimonial/ts-1.png" alt='' />
                    </div>
                    <div className="testimonail__wrapper__info__author">
                      <h4>Daniel Groveria</h4>
                      <span>Student</span>
                    </div>
                    <div className="testimonail__wrapper__info__quotes">
                      <i className="flaticon-quote" />
                    </div>
                  </div>
                  <div className="testimonail__wrapper__content">
                    <p>Travellers from countries categorized under the high-risk list who are eligible to enter
                      Germany, aged 12 and older, are obliged to present their vaccination certificates</p>
                    <div className="testimonail__wrapper__content__reviews">
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li>(Switzerland Visa)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="testimonail__wrapper">
                  <div className="testimonail__wrapper__info d-flex align-items-center mb-30">
                    <div className="testimonail__wrapper__info__img ">
                      <img src="assets/img/testimonial/ts-1.png" alt='' />
                    </div>
                    <div className="testimonail__wrapper__info__author">
                      <h4>Daniel Groveria</h4>
                      <span>Student</span>
                    </div>
                    <div className="testimonail__wrapper__info__quotes">
                      <i className="flaticon-quote" />
                    </div>
                  </div>
                  <div className="testimonail__wrapper__content">
                    <p>Travellers from countries categorized under the high-risk list who are eligible to enter
                      Germany, aged 12 and older, are obliged to present their vaccination certificates</p>
                    <div className="testimonail__wrapper__content__reviews">
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li>(Switzerland Visa)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonail end */}
        {/* Team area start */}
        <section className="team-area grey-soft-bg pt-110 pb-80 bg-light">
          <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="team text-center mb-35">
                  <div className="team__thumb team__thumb-2 mb-25">
                    <img src="assets/img/team/t-1.jpg" alt='' />
                    <div className="team__thumb-info">
                      <div className="team-social">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="team__text">
                    <h3 className="team__text-title">
                      <a>Konak Chandra Devnath</a>
                    </h3>
                    <span>GM, Amanot Travels International</span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="team text-center mb-35">
                  <div className="team__thumb team__thumb-2 mb-25">
                    <img src="assets/img/team/t-2.jpg" alt='' />
                    <div className="team__thumb-info">
                      <div className="team-social">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="team__text">
                    <h3 className="team__text-title">
                      <a>Md. Hisham</a>
                    </h3>
                    <span>GM, Travel Sheba Limited</span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="team text-center mb-35">
                  <div className="team__thumb team__thumb-2 mb-25">
                    <img src="assets/img/team/t-3.jpg" alt='' />
                    <div className="team__thumb-info">
                      <div className="team-social">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="team__text">
                    <h3 className="team__text-title">
                      <a>Md. Aminul Islam</a>
                    </h3>
                    <span>GM, Faijan Rent A Car</span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="team text-center mb-35">
                  <div className="team__thumb team__thumb-2 mb-25">
                    <img src="assets/img/team/t-4.jpg" alt='' />
                    <div className="team__thumb-info">
                      <div className="team-social">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="team__text">
                    <h3 className="team__text-title">
                      <a>Md.Golam Mortaza</a>
                    </h3>
                    <span>GM, IT Sheba 24 Dot Com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="abbrand-area pt-120 pb-120 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
          <div className="container">
            <div className="abbrand-active owl-carousel">
              <div className="abbrand-img wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <a href="partners.html"><img src="assets/img/testimonial/1.png" alt='' /></a>
              </div>
              <div className="abbrand-img wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                <a href="partners.html"><img src="assets/img/testimonial/2.png" alt='' /></a>
              </div>
              <div className="abbrand-img wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                <a href="partners.html"><img src="assets/img/testimonial/3.png" alt='' /></a>
              </div>
              <div className="abbrand-img wow fadeInUp" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                <a href="partners.html"><img src="assets/img/testimonial/4.png" alt='' /></a>
              </div>
              <div className="abbrand-img wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
                <a href="partners.html"><img src="assets/img/testimonial/5.png" alt='' /></a>
              </div>
              <div className="abbrand-img wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
                <a href="partners.html"><img src="assets/img/testimonial/9.png" alt='' /></a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default About;