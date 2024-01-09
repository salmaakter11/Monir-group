import { useEffect, useRef } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { toast } from "react-toastify";
import makeRequest from "../../../../AxiosClient";
import HorizontalLoader from "../../../common/loader/HorizontalLoader";

const ApplyJobs = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const captchaRef = useRef('')
    const [disabledCaptcha, SetDisableCaptcha] = useState(true)
    const [saveSuccessLoading, setsaveSuccessLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const [errorsMessage, setErrorsMessage] = useState('')
    const [saveSuccess, setsaveSuccess] = useState('')

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({ name: '', email: '', phone: '', coverletter: '', cv: '', job_id: location.state })
    const handleInput = (e) => setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))


    useEffect(() => {
        loadCaptchaEnginge(5, 'blue', 'white');
        if (location.state == null) {
            navigate('/404')
        }
    }, [])


    const saveData = () => {
        setsaveSuccess('')
        setErrors([])
        setLoading(true)
        setsaveSuccessLoading(true)
        setErrorsMessage('')
        makeRequest({ url: `/api/apply_job`, method: 'post', data: input })
            .then((data) => {
                if (data.status == 201) {
                    setErrorsMessage(data.data.message);
                } else {
                    setsaveSuccess('Apply Successfully Complete')
                    setInput({
                        name: '',
                        email: '',
                        phone: '',
                        coverletter: '',
                        cv: '',
                        job_id: location.state
                    })
                    toast.success(data.data.message);
                    navigate('/career')
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
            {loading ? <HorizontalLoader /> : ''}
            <h1 className="text-center mt-5">Please Enter Your Info.</h1>

            <div className="d-flex justify-content-center align-items-center mb-5" >
                <div className="card" >
                    <div className="card-body shadow">
                        {errorsMessage ? <div className="alert alert-danger" role="alert">{errorsMessage}</div> : ''}
                        {saveSuccess ? <div className="alert alert-success" role="alert">{saveSuccess}</div> : ''}
                        <div className="row container">
                            <div className="col-xl-12 my-2">
                                <input onChange={handleInput} value={input.name} name="name" className="contact__input mb-0 pb-0" type="text" placeholder="Your Name" autoComplete="off" />
                                <small className="text-danger">{errors.name != undefined ? errors.name : ''} </small>
                            </div>
                            <div className="col-xl-12 my-2">
                                <input onChange={handleInput} value={input.email} name="email" className="contact__input mb-0 pb-0" type="email" placeholder="Your Email" autoComplete="off" />
                                <small className="text-danger">{errors.email != undefined ? errors.email : ''} </small>
                            </div>
                            <div className="col-xl-12 my-2">
                                <input onChange={handleInput} value={input.phone} name="phone" className="contact__input mb-0 pb-0" type="text" placeholder="Your Phone Number" autoComplete="off" />
                                <small className="text-danger">{errors.phone != undefined ? errors.phone : ''} </small>
                            </div>

                            <div className="col-xl-12">
                                <textarea onChange={handleInput} value={input.coverletter} name="coverletter" className="contact__input mb-0 pb-0 txt-area " cols={30} rows={10} placeholder="Cover letter" autoComplete="off" />
                                <small className="text-danger">{errors.coverletter != undefined ? errors.coverletter : ''} </small>
                            </div>

                            <div className="col-xl-12 my-2">
                                <input onChange={handleInput} value={input.cv} name="cv" className="contact__input mb-0 pb-0" type="text" placeholder="Your Cv Link " autoComplete="off" />
                                <small className="text-danger">{errors.cv != undefined ? errors.cv : ''} </small>
                            </div>


                            <div className="col-xl-12 my-2">
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
                            </div>



                            <div className="col-xl-12 text-right">
                                <button onClick={saveData} className="theme-btn btn rounded" type="button" disabled={disabledCaptcha || saveSuccessLoading}>
                                    {saveSuccessLoading ?
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        : " Save Now "
                                    }

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ApplyJobs;