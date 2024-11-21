import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const RefundPolicy = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Read On | REFUND & CANCELLATION POLICY'
    }, [location]);

    return (
        <div className='static-content-wrapper mt-20' id='privacy-policy'>
            <div className='policyWrapper'>
                <h3 className='font38-bold'> REFUND & CANCELLATION POLICY </h3>
                <h4 className='font24-light'>ReadOn AI</h4>
                <p className='font18-light mb-2'>
                    Our Refund and Cancellation Policy was posted on 12 June 2023. It governs the services through our Website, located at
                    <u> <Link className='text-black' to="https://www.readingmatters.in" target="_blank"> https://www.readingmatters.in</Link></u>
                </p>
                <p className='font18-light mb-2'>
                    Our focus is on complete customer satisfaction. Please read the fine print of each deal before buying it. It provides all the details about the services or the products you purchase.
                </p>
                <p className='font18-light mb-10'>Our Policy for the cancellation and refund will be as follows:</p>

                {/* heading */}
                <h4 className='font24-bold my-6'>Cancellation Policy</h4>
                <p className='font18-light mb-10'>
                    There is no cancellation of the therapy once you have accessed the program and the first therapy session is completed
                </p>

                {/* heading */}
                <h4 className='font24-bold my-6'>
                    Refund Policy
                </h4>
                <p className='font18-light mb-5'>
                    Situations in which FULL REFUND may be considered :
                </p>

                {/* heading */}
                <div className='font18-light mb-5'>
                    <p>
                        1.If our team failed to connect with you within seven (07) days of you paying for the subscription and requesting help.
                    </p>
                    <p>
                        2.After speaking with our team, you realize that you do not have the required prerequisites to complete the assessment or the therapy. NOTE. You should not have started the sessions, and the login must be in 100% UN-USED CONDITION.
                    </p>
                </div>

                <p className='font18-light mb-10'>We will transfer the money into the same account. </p>

                <h4 className='font24-bold my-6'>
                    X Situations in which NO REFUND will be given :
                </h4>


                <div className="subList">
                    <p className='font18-light mb-2'>
                        - If You have paid for the assessment or therapy, completed the onboarding process and completed even the first session. Please be sure that you really need to take the assessment and the therapy before making any payments.
                    </p>
                </div>

                {/* heading */}
                <div className="subList">
                    <p className='font18-light mb-6'>
                        -  It is Your responsibility to complete your sessions within the Validity time period. You must contact your ReadON coach if an extension is needed due to unforeseen circumstances. NO refund will be issued if you do not complete all therapy sessions in the provided time.
                    </p>
                </div>
                <p className='font18-bold mb-2'>
                    Questions About Our Refund & Cancellation Policy
                </p>
                <p className='font18-light mb-6'>
                    If you have any questions about this Policy, please get in touch with us by email to info@readingmatters.in
                </p>
            </div>
        </div>
    )
}

export default RefundPolicy