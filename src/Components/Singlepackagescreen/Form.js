import React, { useEffect, useState } from 'react';
import { HiCheckCircle, HiPhone, HiCheck } from 'react-icons/hi'

const Form = () => {

    const [customPackage, setCustomPackage] = useState({
        name: "",
        phNo: "",
        email: "",
        destination: "",
        budget: "",
        message: "",
    });

    useEffect(() => {
        const inputs = document.querySelectorAll(".contact-input");

        if (inputs) {
            inputs.forEach((input) => {
                input.addEventListener("focus", () => {
                    input.parentNode.classList.add("focus");
                    console.log("Adding focus");
                });
                input.addEventListener("blur", () => {
                    if (input.value === "") {
                        input.parentNode.classList.remove("focus");
                        console.log("Removing focus");
                    }
                });
            });
        }
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCustomPackage((prev) => {
            return { ...prev, [name]: value };
        });
    };

    return (
        <div>
            <div className='form-main-ak'>
                <div className='form-main-ak1'>
                    <h6>Get in touch with our travel expert</h6>
                    <div className='form-main-form-akk'>
                        <form >
                            <input type='text' name='name' placeholder='Your Name' />
                            <input type='email' name='email' placeholder='Your Email' />
                            <input type='number' name='phone' id='phone' placeholder='Phone Number' />
                            <input type='date' name='Date' placeholder='Date' />
                            <input type='number' placeholder='No Of People' />
                            <textarea className='akk-txtar' rows="4" name="Message" placeholder='Message' />
                        </form>
                    </div>
                    <div className='form-main-ass-ak'>
                        <p><HiCheckCircle style={{ color: 'green', fontSize: '18px' }} /> We assure the privacy of your contact data.</p>
                        <p><HiCheckCircle style={{ color: 'green', fontSize: '18px' }} /> This data will only be used by our team to contact you and no other purposes.</p>
                    </div>
                    <div className='form-main-btn-ak'>
                        <button>Send Enquiry</button>
                    </div>
                </div>
            </div>

            <div className='contac-info-ak'>
                <div className='contact-info-akk-in'>
                    <h6>Got a Question?</h6>
                    <hr />
                    <p>Our Destination expert will be happy to help you resolve your queries for this tour.</p>
                    <HiPhone style={{ color: 'violet', fontSize: '19px' }} /><a href="tel:+918077985660">+918077985660</a>
                    <h6>10:30 AM - 8:00 PM (Mon to Sat)</h6>
                </div>
            </div>

            <div className='why-pacauli-ak'>
                <div className='why-pac-main'>Why PacAuli</div>
                <div className='main-pac-content'>
                    <div className='last-why-pac-ak'>
                        <p className='l-main-pac-p'><HiCheck className='icon-bahar-ak' />Verified Reviews</p>
                        <p>25000+ Pictures and Reviews on the platform.</p>
                    </div>
                    <div className='last-why-pac-ak'>
                        <p className='l-main-pac-p'><HiCheck className='icon-bahar-ak' />No Booking Fee! Price Guarantee</p>
                        <p>We have a minimum price guarantee. If you get the same product at cheaper price we will refund the difference.</p>
                    </div>
                    <div className='last-why-pac-ak'>
                        <p className='l-main-pac-p'> <HiCheck className='icon-bahar-ak' />10000+ Tours and Activities</p>
                        <p>We have activities across 17 countries, across every category so that you never miss best things to do anywhere.</p>
                    </div>
                    <div className='last-why-pac-ak'>
                        <p className='l-main-pac-p'><HiCheck className='icon-bahar-ak' />Customer Delight</p>
                        <p>We are always able to support you so that you have a hassle free experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;