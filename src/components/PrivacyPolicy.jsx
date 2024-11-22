import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
const PrivacyPolicy = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Read On | Privacy Policy'
    }, [location]);
    return (
        <div className='static-content-wrapper mt-20' id='privacy-policy'>
            <div className='policyWrapper'>
                <h3 className='font38-bold'>PRIVACY POLICY </h3>
                <h4 className='font24-light'>ReadOn AI</h4>
                <p className='mb-5 font18-light'>Our Privacy Policy was posted on 12 July 2024. It governs the privacy terms of our Website, located at
                    <u> <Link className='text-black' to="https://www.readingmatters.in" target="_blank"> https://www.readingmatters.in</Link></u>
                </p>
                <p className='mb-8 font18-light'>Your information is important to READING MATTERS FOUNDATION (RMF). We respect your privacy and endeavour to protect your privacy. This Privacy Policy (“Policy”) provides information about the personal information that RMF collects in which we share and use and what choices are available to you before you decide to provide us your information. WE ENCOURAGE YOU TO CAREFULLY AND FULLY READING THE POLICY BEFORE YOU USE OUR WEBSITE. We further welcome your questions and are glad to answer your concerns and suggestions.</p>

                {/* heading */}
                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>Collection of Personal Information</h4>
                </div>
                <p className='mb-8 font18-light'>
                    At <u><Link className='text-black' to="https://www.readingmatters.in" target="_blank">https://www.readingmatters.in</Link></u>  you can make requests, purchase subscriptions and register to receive materials/information. To realize some of the functionalities, we may collect and retain your personal information in various ways. The types of personal information collected via these pages may include your name, name of your company, address, telephone number, fax number, e-mail address and professional information.
                </p>

                {/* heading */}
                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        Personal Information Collection
                    </h4>
                </div>
                <p className='mb-8 font18-light'>
                    Personal information is collected for necessary business purposes and better understand and serve you as a customer or a
                    user of our websites. We promise to collect, share, transfer and use personal information with adequate notice or consent.
                    We uncompromisingly stand by this promise. Personal information will be collected on various occasions when applicable.
                    For example, when you choose to register with <u><Link className='text-black' to="https://www.readingmatters.in" target="_blank">https://www.readingmatters.in</Link></u> as a registered user,
                    subscribe to newsletters, marketing and support materials, participate in reward or promotion programs, surveys, etc.
                </p>

                {/* heading */}
                <div className="my-4">
                    <p className='mb-8 font18-light'>If you merely browse <u><Link className='text-black' to="https://www.readingmatters.in" target="_blank">https://www.readingmatters.in </Link> </u>
                        you will be recorded as a hit only, and <u><Link className='text-black' to="https://www.readingmatters.in" target="_blank">https://www.readingmatters.in</Link></u> will not collect any personal information from you unless otherwise stated.</p>
                </div>

                <div className="font24-bold my-4">
                    Information We Collect
                </div>
                <p className='mb-2 font18-light'>
                    Generally, you control the amount and type of information you provide to us when using our Website.
                </p>
                <p className='mb-8 font18-light'>
                    As a Visitor, you can browse our website to find out more about our Website. You are not required to provide us with any Personally Identifiable Information as a Visitor.
                </p>

                <div className="font24-bold my-4">
                    Computer Information Collected
                </div>
                <p className='mb-2 font18-light'>
                    When you use our Website, we automatically collect certain computer information by the interaction of your mobile phone or web browser with our Website. Such information is typically considered Non-Personal Information. We also collect the following:
                </p>

                <div className="subList">
                    <h4 className='font18-bold py-5'>
                        - Cookies
                    </h4>
                </div>
                <p className='mb-6 font18-light'>
                    Our Website uses "Cookies" to identify the areas of our Website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to personalize the Content that you see on our Website. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our Website correctly or at all. We never place Personally Identifiable Information in Cookies.
                </p>

                {/* heading */}
                <div className="subList">
                    <h4 className='font18-bold py-5'>
                        - Third-Party Tracking Tools
                    </h4>
                </div>
                <p className='mb-6 font18-light'>
                    We also use third-party tracking tools to improve the performance and features of our Website. These third-party tracking tools are designed to collect only Non-Personal Information about your use of our Website. However, you understand that such tools are created and managed by parties outside our control. As such, we are not responsible for what information is actually captured by such third parties or how such third parties use and protect that information.
                </p>
                <p className='mb-6 font18-light'>
                    - We use Remarketing with Google Analytics to advertise on third-party sites to you after visiting our Site. We and our third-party vendors, like Google, use first-party cookies (such as the Google Analytics cookie) and third-party cookies (such as the DoubleClick cookie) to inform, optimize and serve ads based on your past visits to our Site.
                </p>
                <p className='mb-6 font18-light'>You can opt out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting
                    the <u>Google Ads Settings page</u>. Google also recommends installing the Google Analytics Opt-out Browser Add-on your browser.

                    <u>Google Analytics Opt-out Browser Add-on</u> provides visitors with the ability to prevent their data from being collected and
                    used by Google Analytics.</p>
                {/* heading */}
                <div className="subList">
                    <h4 className='font18-bold py-5'>
                        - Automatic Information
                    </h4>
                </div>
                <p className='mb-6 font18-light'>We automatically receive information from your web browser or mobile device. This information includes the name of the website from which you entered our Website, if any, as well as the name of the website to which you're headed when you leave our website. This information also includes the IP address of your computer/proxy server that you use to access the Internet, your Internet Website provider name, web browser type, type of mobile device, and computer operating system. We use all of this information to analyze trends among our Users to help improve our Website.</p>

                {/* heading */}
                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        How We Use Your Information
                    </h4>
                </div>
                <p className='font18-light'>We use the information we receive from you as follows:</p>
                {/* font24-bold my-4 */}
                <div className="subList">
                    <h4 className='font18-bold py-5'>
                        - Customizing Our Website
                    </h4>
                </div>

                <p className='mb-1 font18-light'>We may use the Personally Identifiable information you provide to us and any computer information we receive to customize our Website.</p>
                <div className="subList">
                    <h4 className='font18-bold py-5'>
                        - Sharing Information with Affiliates and Other Third Parties
                    </h4>
                </div>
                <p className='mb-1 font18-light'>
                    We do not sell, rent, or otherwise provide your Personally Identifiable Information to third parties for marketing purposes. We may provide your Personally Identifiable Information to affiliates that provide services to us with regards to our Website (i.e. payment processors, Website hosting companies, etc.); such affiliates will only receive information necessary to provide the respective services and will be bound by confidentiality agreements limiting the use of such information.
                </p>
                <div className="subList">
                    <h4 className='font18-bold py-5'>
                        - Data Aggregation
                    </h4>
                </div>
                <p className='mb-1 font18-light'>
                    We retain the right to collect and use any Non-Personal Information collected from your use of our Website and aggregate such data for internal analytics that improve our Website and Service as well as for use or resale to others. At no time is your Personally Identifiable Information included in such data aggregations.
                </p>
                <div className="subList">
                    <h4 className='font18-bold py-5'>
                        - Legally Required Releases of Information
                    </h4>
                </div>

                <p className='mb-6 font18-light'>
                    We may be legally required to disclose your Personally Identifiable Information if such disclosure is (a) required by subpoena, law, or other legal processes; (b) necessary to assist law enforcement officials or government enforcement agencies; (c) necessary to investigate violations of or otherwise enforce our Legal Terms; (d) necessary to protect us from legal action or claims from third parties including you and/or other Members; and/or (e) necessary to protect the legal rights, personal/real property, or personal safety of TermsFeed, our Users, employees, and affiliates.
                </p>
                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        Do Not Track ("DNT")
                    </h4>
                </div>

                <p className='mb-6 font18-light'>
                    We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked. You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
                </p>

                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        Protecting Your Child's Privacy
                    </h4>
                </div>

                <p className='mb-6 font18-light'>
                    Our Website is not designed for use by anyone under the age of 13 ("Child"), though we realize we may have a Child attempt to make purchases through our Website. We do not verify the age of our Users, nor do we have any liability for verifying a User's age. If you are a Child, please seek the permission of a parent or guardian before using our Website. If you are a parent or guardian and believe your Child is using our Website, please contact us to remove your Child's account; we reserve the right to ask you for verification of your relationship to the Child before we honour such a request. If we discover that a Child has created an account on our Website, we will immediately delete the account as soon as we discover it, we will not use the information for any purpose, and we will not disclose the information to third parties. However, as a parent of such a Child, you understand that you are legally liable for any transactions created by the Child.
                </p>
                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        Links to Other Websites
                    </h4>
                </div>
                <p className='mb-6 font18-light'>
                    Our Website may contain links to other websites that are not under our direct control. These websites may have their own policies regarding privacy. We have no control of or responsibility for linked websites and provide these links solely for the convenience and information of our visitors. You access such linked Websites at your own risk. These websites are not subject to this Privacy Policy. You should check the privacy policies, if any, of those individual websites to see how the operators of those third-party websites will utilize your personal information. In addition, these websites may contain a link to the Websites of our affiliates. The websites of our affiliates are not subject to this Privacy Policy, and you should check their individual privacy policies to see how the operators of such websites will utilize your personal information.
                </p>

                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        Our Email Policy
                    </h4>
                </div>

                <p className='mb-6 font18-light'>
                    Our affiliates and we fully comply with national laws regarding SPAM. You can always opt-out of receipt of further email correspondence from us and/or our affiliates. We agree that we will not sell, rent, or trade your email address to any unaffiliated third party without your permission.
                </p>
                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        Privacy Policy Updates
                    </h4>
                </div>
                <p className='mb-6 font18-light'>
                    We reserve the right to modify this Privacy Policy at any time. You should review this Privacy Policy frequently. If we make material changes to this policy, we may notify you on our Website, by a blog post, by email, or by any method we determine. The method we chose is at our sole discretion. We will also change the "Last Updated" date at the beginning of this Privacy Policy. Any changes we make to our Privacy Policy are effective as of this Last Updated date and replace any prior Privacy Policies.
                </p>
                <div className="font24-bold my-4">
                    <h4 className='weight700 textChildHeading'>
                        English Version
                    </h4>
                </div>
                <p className='mb-6 font18-light'>
                    The Policy is written in English. If this Policy appears in another language, this means this document is a translation of the English version. In case of discrepancies between the English version and any version in another language, the English version shall apply and prevail.
                </p>
                <div className="font24-bold my-1">
                    <p className='mb-2 font18-bold'>
                        Questions About Our Privacy Practices or This Privacy Policy
                    </p>
                </div>
                <p>
                    If you have any questions about our Privacy Practices or this Policy, please contact us by email to INFO@READINGMATTERS.IN
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy