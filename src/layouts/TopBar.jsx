import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import makeRequest from "../../AxiosClient";
import HorizontalLoader from "../common/loader/HorizontalLoader";
import './Topbar.scss';

const TopBar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [toggleAbout, setToggleAbout] = useState(false);
    const [toggleCompany, setToggleCompany] = useState(false);
    const [togglemedia, setTogglemedia] = useState(false);

    




    const { isLoading, error, data:topbarcountrylist } = useQuery({
        queryKey: [`topbarcountrylist`],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: `/api/company_list`, method: 'get'});
              return response.data;
          }
      })
    return (
        <>
            {isLoading ? <HorizontalLoader /> : ''}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>


            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-8 col-lg-6">
                                <div className="header-top-left">
                                    <ul>
                                        <li><span>Opening Time :</span> 10:00 AM – 7:00 PM</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-6">
                                <div className="topheader-info">

                                    <div className="header-language f-right ">
                                        | <Link to={'/career'} className="btn btn-sm btn-primary py-0">Career</Link>

                                    </div>
                                    <div className="header-location f-right">
                                        <ul>
                                            <li><a href="https://goo.gl/maps/V5xFYdPoVNwWLTd98"><i className="flaticon-pin" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="header-location f-right">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="header-location f-right">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="header-location f-right">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="header-location f-right">
                                        <ul>
                                            <li><a href="https://www.facebook.com/MonirGroup2022/"><i className="fab fa-facebook-f" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="header-menu header-sticky">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-8">
                                <div className="header-logo ">
                                    <Link to="/"><img src="/assets/img/logo/logo.png" className="img-fluid" alt="img" /></Link>
                                </div>
                            </div>
                            
                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-4 px-0">
                                <div className="main-menu d-none d-lg-block ">
                                    <nav id="mobile-menu">
                                        <ul>

                                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} >Home</NavLink></li>


                                            <li className="menu-item-has-children"><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'about'}>About</NavLink>
                                                <ul className="sub-menu">
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/mission-vision'>Mission & Vision</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/founder-lagency'>Founder's Message</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/management'>Management</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/team-member'>Team Member</NavLink></li>
                                                </ul>
                                            </li>


                                            <li className="menu-item-has-children"><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'companies'}>Companies</NavLink>
                                                <ul className="sub-menu submenu" style={{ width: "400px", maxHeight: "300px", overflowY: "auto" }}>
                                                    {
                                                        topbarcountrylist?.map((d, i) => (
                                                            <li key={i}><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to={`/companies/${d.slug}`} >{d?.company_name}</NavLink></li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>


                                            <li><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'document'}>Document</NavLink></li>
                                            <li className="menu-item-has-children"><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'media'}>Media</NavLink>
                                                <ul className="sub-menu">
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="video-gallery">Video Gallery</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="photo-gallery">Photo Gallery</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="notice">Notice Board</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="career">Career</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'contact'}>CONTACT</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="side-menu-icon d-lg-none text-end">
                                    <button onClick={()=>{setToggleSidebar(true)}} className="side-toggle"><i className="far fa-bars" /></button>
                                </div>
                            </div>



                            <div className="col-xxl-3 col-xl-3 col-lg-3">
                                <div className="main-menu-wrapper d-flex align-items-center justify-content-end">
                                    <div className="main-menu-wrapper__call-number d-flex align-items-center">
                                        <div className="main-menu-wrapper__call-icon mr-10">
                                            <img src="/assets/img/menu-icon/chatting.png" alt='' />
                                        </div>
                                        <div className="main-menu-wrapper__call-text">
                                            <span>Contact Us</span>
                                            <h5><a href="tel:+8801906-297808">01906-297808</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`offcanvas-overlay  ${toggleSidebar ? 'overlay-open' : ''}`} ></div>
                <div className="fix">
                    <div className={`side-info  ${toggleSidebar ? 'info-open' : ''}`}>
                        <button className="side-info-close" onClick={()=>{setToggleSidebar(false)}}><i className="fal fa-times" /></button>
                        <div className="side-info-content">
                            <div className="mobile-menu mean-container" >
                                <div className="mean-bar">
                                    <a href="#nav" className="meanmenu-reveal" style={{ right: '0px', left: "auto", display: "inline" }}>
                                        <span>
                                            <span>
                                                <span></span>
                                            </span>
                                        </span>
                                    </a>

                                    <nav className="mean-nav">
                                        <ul style={{ display: "none" }}>
                                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} >Home</NavLink></li>


                                            <li className="menu-item-has-children pb-4"><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'about'}>About</NavLink>
                                                <ul className={`sub-menu  ${toggleAbout ? "" : "d-none"}`}>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/mission-vision'>Mission & Vision</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/founder-lagency'>Founder's Message</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/management'>Management</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to='/team-member'>Team Member</NavLink></li>
                                                </ul>

                                                <a className="mean-expand bg-secondary" onClick={()=>setToggleAbout(!toggleAbout)}  href="#" style={{ fontSize: 20, padding: "7px !important" }}>{toggleAbout ? '-' : '+'}</a>

                                            </li>


                                            <li className="menu-item-has-children pb-4"><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'companies'}>Companies</NavLink>
                                                <ul className={`sub-menu submenu ${toggleCompany ? "" : "d-none"}`} style={{ width: "400px", maxHeight: "300px", overflowY: "auto" }}>
                                                    {
                                                        topbarcountrylist?.map((d, i) => (
                                                            <li key={i}><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to={`/companies/${d.slug}`} >{d?.company_name}</NavLink></li>
                                                        ))
                                                    }
                                                </ul>
                                                <a className="mean-expand bg-secondary" onClick={()=>setToggleCompany(!toggleCompany)}  href="#" style={{ fontSize: 20, padding: "7px !important" }}>{toggleCompany ? '-' : '+'}</a>
                                            </li>


                                            <li><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'document'}>Document</NavLink></li>
                                            <li className="menu-item-has-children"><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'media'}>Media</NavLink>
                                                <ul className={`sub-menu  ${togglemedia ? "" : "d-none"}`}>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="video-gallery">Video Gallery</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="photo-gallery">Photo Gallery</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="notice">Notice Board</NavLink></li>
                                                    <li><NavLink className={({ isActive }) => isActive ? "text-info " : ""} to="career">Career</NavLink></li>
                                                </ul>

                                                <a className="mean-expand bg-secondary" onClick={()=>setTogglemedia(!togglemedia)}  href="#" style={{ fontSize: 20, padding: "7px !important" }}>{togglemedia ? '-' : '+'}</a>
                                            </li>
                                            <li><NavLink className={({ isActive }) => isActive ? "bg-info py-0 rounded px-1 text-light" : "py-0"} to={'contact'}>CONTACT</NavLink></li>
                                        </ul>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default TopBar;