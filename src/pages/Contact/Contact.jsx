import CommonBanner from "../CommonBanner";
import PageTitle from "../../common/page_title/PageTitle";
import { useEffect, useState } from "react";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useRef } from "react";
import BannerImg from '../../assets/Image/Banner/contact.jpg'

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [errors, setErrors] = useState([])
    const [errorsMessage, setErrorsMessage] = useState('')
    const [saveSuccess, setsaveSuccess] = useState('')
    const [saveSuccessLoading, setsaveSuccessLoading] = useState(false)
    const captchaRef = useRef('')
    const [disabledCaptcha, SetDisableCaptcha] = useState(true)

    const handleInput = (e) => setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))



    useEffect(() => {
        loadCaptchaEnginge(5, 'blue', 'white');
    }, [])

    const saveData = () => {
        setsaveSuccess('')
        setErrors([])
        setLoading(true)
        setsaveSuccessLoading(true)
        setErrorsMessage('')
        makeRequest({ url: `/api/contact`, method: 'post', data: input })
            .then((data) => {
                if (data.status == 201) {
                    setErrorsMessage(data.data.message);
                } else {
                    setsaveSuccess('Query Successfully Complete')
                    setInput({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    })
                }


                setLoading(false)
                setsaveSuccessLoading(false)
                captchaRef.current.value = ''
                SetDisableCaptcha(true)
                loadCaptchaEnginge(5, 'blue', 'white');
            })
            .catch(err => {
                if (err.response.status == 422) {
                    setErrors(err.response.data.errors)
                }
                setLoading(false)
                setsaveSuccessLoading(false)
                setErrorsMessage(err.response.data.message);

            })
    }

    const varifyCaptcha = () => {

        if (validateCaptcha(captchaRef.current.value) == true) {
            SetDisableCaptcha(false)
        } else {
            SetDisableCaptcha(true)
            alert("Enter Correct Captcha")
        }
    }
    return (
        <>

            {/* page title area start */}
            <PageTitle title="Contact" />
            <CommonBanner image={BannerImg} title={"Contact"} />
            {loading ? <HorizontalLoader /> : ''}
            {/* page title area end */}
            <main>
                {/* Contact  area start */}
                <div className="contact__area">
                    <div className="contact__vmap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.563713279703!2d90.34773458632131!3d23.798545631859483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13d85c95a63%3A0xa1276f1f5a14d0a2!2sMonir%20Group%20of%20Companies!5e0!3m2!1sen!2sbd!4v1692536713793!5m2!1sen!2sbd" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6" />
                            <div className="col-xl-6 col-xl-6 col-lg-6">
                                <div className="contact__form pt-110">




                                    <h2 className="contact-form__title">Get in <span>Touch </span></h2>

                                    {errorsMessage ? <div className="alert alert-danger" role="alert">{errorsMessage}</div> : ''}
                                    {saveSuccess ? <div className="alert alert-success" role="alert">{saveSuccess}</div> : ''}

                                    <div>
                                        <div className="row">
                                            <div className="col-xl-6 my-2">
                                                <input name="name" value={input.name} onChange={handleInput} className="contact__input mb-0 pb-0" type="text" placeholder="Your Name" autoComplete="off" />
                                                <small className="text-danger">{errors.name != undefined ? errors.name : ''} </small>
                                            </div>
                                            <div className="col-xl-6 my-2">
                                                <input name="email" value={input.email} onChange={handleInput} className="contact__input mb-0 pb-0" type="email" placeholder="Your Email" autoComplete="off" />
                                                <small className="text-danger">{errors.email != undefined ? errors.email : ''} </small>
                                            </div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-xl-12">
                                                <input name="phone" value={input.phone} onChange={handleInput} className="contact__input mb-0 pb-0" type="text" placeholder="Phone" autoComplete="off" />
                                                <small className="text-danger">{errors.phone != undefined ? errors.phone : ''} </small>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-12">
                                                <textarea value={input.message} name="message" onChange={handleInput} className="contact__input mb-0 pb-0 txt-area " cols={30} rows={10} placeholder="Message" autoComplete="off" />
                                                <small className="text-danger">{errors.message != undefined ? errors.message : ''} </small>
                                            </div>
                                        </div>
                                        <div className="row pb-2">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="rounded pt-3">
                                                    <LoadCanvasTemplate reloadText="Reload" reloadColor="red" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <input ref={captchaRef} type="text" placeholder="Enter Captcha Code" className="form-control" />
                                                <button onClick={varifyCaptcha} className="btn btn-sm btn-info">Varify</button>
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 text-right">
                                                <button onClick={saveData} className="theme-btn btn rounded" type="button" disabled={disabledCaptcha || saveSuccessLoading}>
                                                    {saveSuccessLoading ?
                                                        <div className="spinner-border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                        : " Submit Now "
                                                    }


                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact  area end */}
                {/* Contact group info start */}
                <div className="contact-group-area pb-70 pt-145">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 ">
                                <div className="contact__gpinfo grey-soft2-bg mb-50">
                                    <div className="contact__gpinfo-icon text-center">
                                        <i className="flaticon-pin" />
                                    </div>
                                    <div className="contact__gpinfo-content">
                                        <h3 className="contact__gpinfo-content-title text-center mb-25">
                                            Mirpur Office
                                        </h3>
                                        <ul>
                                            <li><a href="{{ route('frontend.contact') }}"> <span>Address</span>: <p>Mukto Bangla Shopping Complex, 4th Floor,Suite No(13-17) Mirpur-1, Dhaka-1216</p></a>
                                            </li>
                                            <li><a href="info@stinternationaltravels.com"> <span>Email</span>: <p> info@monirgroup.net</p></a>
                                            </li>
                                            <li><a href="tel:01757-733883"> <span>Phone</span>: <p>01906-297808</p> </a></li>
                                            <li><a><span>Opening</span>: <p>Sat - Thu : 10:00 AM – 7:00 PM</p> </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact group info end */}
            </main>


        </>
    );
};

export default Contact;