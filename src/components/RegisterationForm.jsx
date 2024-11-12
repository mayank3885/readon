import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

const RegisterationForm = () => {
    const [spinner, setSpinner] = useState(false);
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        cname: "",
        pemail: "",
        pname: "",
        pmobile: "",
        country_code: "",
        grade: "",
    });

    const [formErrors, setFormErrors] = useState({
        cname: "",
        pemail: "",
        pname: "",
        pmobile: "",
        country_code: "",
        grade: "",
    });

    const handleChange = (value, country, event) => {
        const { name } = event.target;
        // const { name, value } = e.target; 
        if (name === 'pmobile') {
            // let splitMobile = value.split(country.dialCode);
            setFormData({
                ...formData,
                pmobile: value,
                country_code: country.dialCode,
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        // Reset error message for the field being edited
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (validateForm()) {
            setSpinner(true);

            //send data to mail even
            try {
                const response = await fetch('https://api.brevo.com/v3/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': 'test key'//'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'
                    },
                    body: JSON.stringify({
                        name: 'readonathome_leads',
                        email: formData.pemail,
                        attributes: {
                            CHILDNAME: formData.cname,
                            PARENTNAME: formData.pname,
                            LANDLINE_NUMBER: formData.pmobile,
                            COUNTRY: formData.country_code,
                            KIDSGARDE: formData.grade
                        },
                        listIds: [12]
                    })
                });

                const responseData = await response.json();
                if (response.ok) {
                    setSpinner(false);
                    console.log("mail send");
                    setSuccess('Form submitted successfully!');
                    const stripe = 'https://buy.stripe.com/5kA4iB6De2EJ3ZucN9';
                    window.location.href = stripe;
                } else {
                    console.log("mail Failed", responseData);
                    if (responseData.code === 'duplicate_parameter') {
                        // setSuccess('This contact already exists.');
                        setSuccess('Form submitted successfully!');
                        const stripe = 'https://buy.stripe.com/5kA4iB6De2EJ3ZucN9';
                        window.location.href = stripe;
                    } else {
                        console.log(response.message || 'An error occurred');
                    }
                }
            } catch (error) {
                console.error('Error:', error.message);
            } finally {
                setSpinner(false);
            }
        } else {
            console.log("Form has errors. Please fix them.");
        }
    };
    const validateForm = () => {
        let valid = true;
        const newErrors = { ...formErrors };

        // Validate each field
        if (formData.cname.trim() === "") {
            newErrors.cname = "Child's Name is required";
            valid = false;
        }

        if (formData.pemail.trim() === "") {
            newErrors.pemail = "Parent's Email id is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.pemail)) {
            newErrors.pemail = "Invalid email format";
            valid = false;
        }

        if (formData.pname.trim() === "") {
            newErrors.pname = "Parent's Name is required";
            valid = false;
        }


        if (formData.pmobile.trim() === '') {
            newErrors.pmobile = "Parent's Phone is required";
            valid = false;
        } else if (!/^\d{12}$/.test(formData.pmobile)) {
            newErrors.pmobile = 'Invalid phone number format (must be 10 digits)';
            valid = false;
        }

        // if (formData.grade === "") {
        //   newErrors.grade = "Please select a grade";
        //   valid = false;
        // }

        if (formData.grade.length === 0) {
            newErrors.grade = "Please select at least one grade";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    return (
        <div className="container paymentform" style={{ margin: 'auto' }}>
            <Row className="flex justify-content-center items-center" >
                <Col lg={6} className='align-content-center' style={{ width: '50%' }}>
                    <div className='payment-img'></div>
                </Col>
                <Col lg={6} className='align-content-center' style={{ display: 'flex', height: '100vh', alignItems: 'center', marginLeft: '30px', opacity: 0.95 }}>
                    <form
                        onSubmit={handleSubmit}
                        className="d-flex justify-content-center formData"
                        style={{ flexDirection: "column" }}
                    >
                        <h2 className="text-6xl w-full md:w-3/4 font-bold mb-4 mt-4 text-center md:text-left font38-bold " style={{ color: 'hsl(240deg 2.76% 22.88%)' }}>
                            Register your child on <span className="text-orange-500">ReadON</span>
                        </h2>
                        <div className="row ">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Child's Name"
                                    name="cname"
                                    value={formData.cname}
                                    onChange={(e) => handleChange(e.target.value, null, e)}
                                    required
                                />
                                {formErrors.cname && (
                                    <div className="text-danger">{formErrors.cname}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Parent's Email id"
                                    name="pemail"
                                    value={formData.pemail}
                                    onChange={(e) => handleChange(e.target.value, null, e)}
                                    required
                                />
                                {formErrors.pemail && (
                                    <div className="text-danger">{formErrors.pemail}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Parent's Name"
                                    name="pname"
                                    value={formData.pname}
                                    onChange={(e) => handleChange(e.target.value, null, e)}
                                    required
                                />
                                {formErrors.pname && (
                                    <div className="text-danger">{formErrors.pname}</div>
                                )}
                            </div>
                            <div className="mb-3">
                                <PhoneInput
                                    name="pmobile"
                                    country={"in"}
                                    value={formData.pmobile}
                                    onChange={(value, country) => handleChange(value, country, { target: { name: 'pmobile' } })}
                                />
                                {formErrors.pmobile && (
                                    <div className="text-danger">{formErrors.pmobile}</div>
                                )}
                            </div>
                            <div><p className='font12 mt-2'>Kid's Grade/Class in School</p></div>
                            <div className="mb-3 checkbox-data">

                                <label className='mr-4'>
                                    <input
                                        type="radio"
                                        name="grade"
                                        value="grade 1-2"
                                        onChange={(e) => handleChange(e.target.value, null, e)}
                                        checked={formData.grade === "grade 1-2"}
                                        required
                                    />{" "}
                                    Grade 1-2
                                </label>
                                <label className='mx-4'>
                                    <input
                                        type="radio"
                                        name="grade"
                                        value="grade 3-4"
                                        onChange={(e) => handleChange(e.target.value, null, e)}
                                        checked={formData.grade === "grade 3-4"}
                                        required
                                    />{" "}
                                    Grade 3-4
                                </label>
                                <label className='mx-4'>
                                    <input
                                        type="radio"
                                        name="grade"
                                        value="grade 5"
                                        onChange={(e) => handleChange(e.target.value, null, e)}
                                        checked={formData.grade === "grade 5"}
                                        required
                                    />{" "}
                                    Grade 5
                                </label>
                                <label className='mx-4'>
                                    <input
                                        type="radio"
                                        name="grade"
                                        value="grade 6-8"
                                        onChange={(e) => handleChange(e.target.value, null, e)}
                                        checked={formData.grade === "grade 6-8"}
                                        required
                                    />{" "}
                                    Grade 6-8
                                </label>
                                <label className='mx-4'>
                                    <input
                                        type="radio"
                                        name="grade"
                                        value="grade 9-12"
                                        onChange={(e) => handleChange(e.target.value, null, e)}
                                        checked={formData.grade === "grade 9-12"}
                                        required
                                    />{" "}
                                    Grade 9-12
                                </label >
                                {formErrors.grade && (
                                    <div className="text-danger">{formErrors.grade}</div>
                                )}

                            </div>
                            <div><p className='font10 mt-2'><sup>*</sup>
                                Please note that a tablet or a laptop device with internet and a headphone is required for completing the
                                assessment.
                            </p></div>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#F58220] my-4 font20-light hover:bg-[#E07B00] text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                        >
                            Proceed
                        </button>
                        {spinner && (
                            <div className="spinner-border pt-3 text-primary" role="status">
                                <span className="sr-only"></span>
                            </div>
                        )}
                        {success && <h6 className="text-danger mt-3 font13">{success}</h6>}
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterationForm;
