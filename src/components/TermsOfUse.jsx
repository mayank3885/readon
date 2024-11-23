import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import leftArrow from '../assets/arrow-left.svg'

const TermsOfUse = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Read On | Terms of use'
    }, [location]);

    return (
        <section id='terms-of-use' className='static-content-wrapper mt-20'>
            <button className="transition focus:outline-none mb-5">
                <Link to="/" className='flex items-center font24-light'><img src={leftArrow} alt="back" style={{ width: '30px', marginRight: '10px' }} /> Go Back</Link>
            </button>
            {/* Terms of use */}
            <h3 className='font38-bold'>TERMS OF USE</h3>
            <h4 className='font24-light'>ReadOn AI</h4>
            <p className='font18-light mb-16'>Last updated: November 15, 2024</p>

            <p className='font18-light mb-6'>PLEASE READ THIS ENTIRE AGREEMENT AND INDICATE WHETHER YOU AGREE TO ITS TERMS. IT IS A CONTRACT BETWEEN YOU AND READON ARABIA AND APPLIES TO YOUR ACCESS AND USE OF www.ReadONIndia.com and READON.AI PRODUCTS AND SERVICES (COLLECTIVELY, "SERVICES"). ACCESS TO SERVICES IS EXPRESSLY CONDITIONED UPON ACCEPTANCE OF THIS AGREEMENT'S TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU WILL NOT BE ABLE TO CREATE AN ACCOUNT ON www.ReadONIndia.com and READON.AI ("ACCOUNT") AND WILL NOT BE ABLE TO ACCESS SERVICES.</p>

            <p className='font18-light mb-6'>IF YOU ARE ENTERING INTO THIS AGREEMENT ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND SUCH ENTITY TO THESE TERMS AND CONDITIONS, IN WHICH CASE THE TERMS "YOU" OR "YOUR" SHALL REFER TO SUCH ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, YOU MUST NOT ACCEPT THIS AGREEMENT AND MAY NOT USE THE SERVICES.</p>

            <p className='font18-light mb-6'>YOU MAY NOT ACCESS SERVICES IF YOU ARE A DIRECT COMPETITOR, EXCEPT WITH OUR PRIOR WRITTEN CONSENT. IN ADDITION, YOU MAY NOT ACCESS SERVICES FOR PURPOSES OF MONITORING THEIR AVAILABILITY, PERFORMANCE OR FUNCTIONALITY OR FOR ANY OTHER BENCHMARKING OR COMPETITIVE PURPOSES.</p>

            <p className='font18-light mb-6'>TO ACCEPT THESE TERMS AND CREATE AN ACCOUNT, YOU MUST BE AN ADULT OF LEGAL AGE OF MAJORITY IN THE COUNTRY IN WHICH YOUR ACCOUNT IS REGISTERED. YOU ARE LEGALLY AND FINANCIALLY RESPONSIBLE FOR ALL ACTIONS ON YOUR ACCOUNT, INCLUDING THE ACTIONS OF CHILDREN AND ANYONE ELSE WITH ACCESS TO YOUR ACCOUNT.</p>

            {/* Definitions */}
            <h4 className="font24-bold py-6">Definitions</h4>

            <p className='font18-light mb-6'>"Content" or "Data" means all information, data, metrics and calculations provided by READON ARABIA, whether obtained from publicly available sources, third-party content providers, or through original READON ARABIA, which you can access through our Services.</p>

            <p className='font18-light mb-6'>"Malicious Code" means scripts, agents, viruses, Trojan horses and other harmful or malicious code.</p>

            <p className='font18-light mb-6'>"Order Form" means the ordering documents for purchases hereunder, including addenda thereto, that are entered into between You and Us from time to time. Order Forms shall be deemed incorporated herein by reference.</p>

            <p className='font18-light mb-6'>"Purchased Services" means Services that You purchase under an Order Form.</p>

            <p className='font18-light mb-6'>"Services" means the products and services that are ordered by You under and Order Form, and made available by Us in either online or print format, including Web-based applications, APIs, data feeds, data downloads, or printed reports, but excluding Third Party Applications.</p>

            <p className='font18-light mb-6'>"Third-Party Applications" means online, Web, and offline software products or data that are provided by third parties, including those that integrate with the Services, and are identified as third-party applications.</p>

            <p className='font18-light mb-6'>"Users" means individuals who are authorized by You to use the Services, for whom You have purchased a subscription, and who have been supplied user identifications and passwords by You (or by Us at Your request). Users may include but are not limited to Your employees, consultants, contractors and agents; or third parties with which You transact business.</p>

            <p className='font18-light mb-6'>"We," "Us," or "Our" means READON ARABIA, described in Section 10 (Who You Are Contracting With, Notices, Governing Law and Jurisdiction).</p>

            <p className='font18-light mb-6'>"You" or "Your" means the company or other legal entity for which you are accepting this Agreement.</p>

            <p className='font18-light mb-6'>"Your Data" means all electronic data or information submitted by You to the Purchased Services.</p>

            {/* {Purpose Rights and liscence} */}
            <h4 className="font24-bold py-6">PURPOSE, RIGHTS AND LICENSE</h4>

            <h2 className='font18-bold mb-1'>1.1 Provision of Purchased Services</h2>
            <p className='font18-light mb-6'>
                We shall make the Purchased Services available to You pursuant to this Agreement and the applicable Order Forms. You agree that Your purchases hereunder are neither contingent on the delivery of any future functionality or features nor dependent on any oral or written public comments made by Us regarding future functionality or features.
            </p>

            <h2 className='font18-bold mb-1'>1.2 Usage Limitations</h2>
            <p className='font18-light mb-6'>
                Services may be subject to other limitations, such as, for example, limits on the type of intervention, the number of people helped, and the location where services are provided.
            </p>

            <h2 className='font18-bold mb-1'>1.3 Subscriptions</h2>
            <ul className='font18-light mb-6'>
                <li className='mb-2'>Services are purchased as subscriptions that are subject to Usage Limitations.</li>
                <li className='mb-2'>May be accessed only by Users currently working at the firm and who have valid business email addresses with the firm.</li>
                <li className='mb-2'>
                    An increase in Usage Limitations such as additional access to data or capabilities may be added during the subscription term at the prevailing pricing in effect at the time or as detailed below. Your Subscriptions are for firm employees only and cannot be shared or used by non-designated users.
                </li>
            </ul>

            <h2 className='font18-bold mb-1'>1.4 Your Responsibilities</h2>
            <ul className='font18-light mb-6'>
                <li className='mb-2'>Be responsible for Users' compliance with this Agreement.</li>
                <li className='mb-2'>Use commercially reasonable efforts to prevent unauthorized access to or use of the Services, and notify Us promptly of any such unauthorized access or use.</li>
                <li className='mb-2'>Use the Services only in accordance with applicable laws and government regulations.</li>
                <li className='mb-2'>You shall not:
                    <ul className='font18-light mb-6'>
                        <li className='mb-2'>Make the Services available to anyone other than Users.</li>
                        <li className='mb-2'>Sell, resell, rent, or lease the Services.</li>
                        <li className='mb-2'>Use the Services to store or transmit infringing, libelous, or otherwise unlawful or tortious material.</li>
                        <li className='mb-2'>Use the Services to store or transmit Malicious Code.</li>
                        <li className='mb-2'>Interfere with or disrupt the integrity or performance of the Services or third-party data contained therein.</li>
                        <li className='mb-2'>Attempt to gain unauthorized access to the Services or their related systems or networks.</li>
                    </ul>
                </li>
            </ul>

            <h2 className='font18-bold mb-1'>1.5 Publicity</h2>
            <p className='font18-light mb-6'>
                You agree that We may include You in Our publicly displayed customer roster or equivalent and may state to third parties that You use Our Services. Neither party may issue press releases regarding this Agreement without obtaining the other party’s prior, written consent.
            </p>

            {/* {Fees and Payment for Purchased Services} */}
            <h4 className="font24-bold py-6">Fees and Payment for Purchased Services</h4>

            <h2 className='font18-bold mb-1'>2.1 User Fees</h2>
            <p className='font18-light'>
                You shall pay all fees specified in Order Forms. Except as otherwise specified herein or in an Order Form:
            </p>
            <ul className='font18-light mb-6'>
                <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>Fees are quoted and payable in INR for Indian Companies and in United States dollars for the rest of the world.</li>
                <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>Fees are based on Services purchased and not actual usage.</li>
                <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>Payment obligations are non-cancellable, and fees paid are non-refundable.</li>
                <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>The subscriptions purchased cannot be decreased during the relevant subscription term stated on the Order Form.</li>
            </ul>

            <h2 className='font18-bold mb-1'>2.2 Invoicing and Payment</h2>
            <p className='font18-light mb-6'>
                You will provide Us with valid and updated credit card information, and You authorize Us to charge such credit for all Services listed in the Order Form for the initial subscription term and any renewal subscription term(s) as set forth in Section 9.2 (Term of Purchased Subscriptions). You are responsible for maintaining complete and accurate billing and contact information in the Services.
            </p>

            <h2 className='font18-bold mb-1'>2.3 Overdue Charges</h2>
            <p className='font18-light'>
                If any charges are not received from You by the due date, then at Our discretion:
            </p>
            <ul className='font18-light mb-6'>
                <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>Such charges may accrue late interest at the rate of 1.5% of the outstanding balance per month or the maximum rate permitted by law, whichever is lower, from the date such payment was due until the date paid.</li>
            </ul>

            <h2 className='font18-bold mb-1'>2.4 Suspension of Service and Acceleration</h2>
            <p className='font18-light mb-6'>
                If any charge owing by You under this or any other agreement for Our Services is 30 days or more overdue (or 10 or more days overdue in the case of amounts You have authorized Us to charge to Your credit card), We may, without limiting Our other rights and remedies, accelerate Your unpaid fee obligations under such agreements so that all such obligations become immediately due and payable and suspend Our Services to You until such amounts are paid in full.
            </p>

            <h2 className='font18-bold mb-1'>2.5 Taxes</h2>
            <p className='font18-light mb-6'>
                Unless otherwise stated, Our fees do not include any taxes, levies, duties or similar governmental assessments of any nature, including but not limited to value-added, sales, use or withholding taxes, assessable by any local, state, provincial, federal or foreign jurisdiction (collectively, "Taxes"). You are responsible for paying all Taxes associated with Your purchases hereunder. If We have the legal obligation to pay or collect Taxes for which You are responsible under this paragraph, the appropriate amount shall be invoiced to and paid by You, unless You provide Us with a valid tax exemption certificate authorized by the appropriate taxing authority.
            </p>

            {/* Proprietary Rights  */}
            <h4 className="font24-bold py-6">Proprietary Rights</h4>

            <h2 className='font18-bold mb-1'>3.1 Reservation of Rights</h2>
            <p className='font18-light mb-6'>
                Subject to the limited rights expressly granted hereunder, We reserve all rights, title and interest in and to the Services, the Website and all content available through the Services or Website, including all related intellectual property rights. No rights are granted to You hereunder other than as expressly set forth herein.
            </p>

            <h2 className='font18-bold mb-1'>3.2 Restrictions</h2>
            <p className='font18-light mb-1'>
                You shall not
                <ul className='font18-light mb-6'>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>use Our Data and Services in violation of or beyond the license granted herein;</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>permit any third party to access Our Data or Services, or otherwise sell, rent, license or distribute Our Data to any third party;</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>create derivative works of Our Data or Services or excerpt Our content including articles, blog content, reports, databases, analytics using Our data;</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>access and use Our Data and Service to develop and distribute a competitive data-related commercial or free product or service;</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>manually gather, scrape, spider, crawl or use other technology or software to access or store Our Data</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>use Our Data and Service in connection with any individual credit, employment or insurance decisions or to create or contribute to a "Consumer Report" as set forth in the U.S. Fair Credit Reporting Act;</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>use Our Data or Service in any manner that is illegal, libelous, obscene, threatening, defamatory, or in any manner that violates, infringes or misappropriates the privacy or the intellectual property rights of third parties;</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>use Our Service to store or transmit any viruses, worms, time bombs, Trojan horses and other harmful or malicious code, files, scripts, agents or programs, </li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>interfere with or disrupt the integrity or performance of the online Service;</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>attempt to gain unauthorized access to Our Service or their related systems or networks, or systematically access Our Service using "bots" or "spiders"; </li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>decompile or reverse engineer Our Service; (xii) copy, frame or mirror Our Service; or</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>use or distribute Our Service and/or Data in any manner that violates any applicable laws, rules and regulations, including without limitation, any laws relating to unsolicited email. In the event that You engage in a prohibited use set forth in subsection (i) through (xiii) of the foregoing sentence or otherwise breaches the terms set forth in this agreement, We reserve the right to suspend or terminate Your license to use or access Our Services or Data. In no case will any such termination or suspension give rise to any liability by Us to You for a refund or damages. The restrictions set forth in this section shall survive the termination of this Agreement.</li>
                </ul>
            </p>

            <h2 className='font18-bold mb-1'>3.3 Unsolicited Information</h2>
            <p className='font18-light mb-6'>
                By submitting any unsolicited information and materials, including comments, ideas, questions, designs, and other similar communications (collectively, "Unsolicited Information") to us through the Services or the Website, you agree to be bound by the following terms and conditions. All Unsolicited Information will be considered NON-CONFIDENTIAL and NON- PROPRIETARY. We, or any of our affiliates, may use such communication or material for any purpose whatsoever, including, but not limited to, reproduction, disclosure, transmission, publication, broadcast, and further posting. Further, we and our affiliates are free to use any ideas, concepts, know-how, or techniques contained in any communication or material you send through the Services or the Website for any purpose whatsoever, including, but not limited to, developing manufacturing, and marketing products. By submitting any Unsolicited Information, you are granting us a perpetual, royalty-free and irrevocable right and license to use, reproduce, modify, adapt, publish, translate, distribute, transmit, publicly display, publicly perform, sublicense, create derivative works from, transfer and sell such Unsolicited Information and to use your name and other identifying information in connection with such Unsolicited Information.
            </p>


            {/* Confidentiality */}
            <h4 className="font24-bold py-6">Confidentiality</h4>

            <h2 className='font18-bold mb-1'>4.1 Definition of Confidential Information.</h2>
            <p className='font18-light mb-6'>
                As used herein, " Confidential Information" means all confidential information disclosed by Us to You, whether orally or in writing, that is designated as confidential, or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure. Our Confidential Information shall include but is not limited to, the Services, the terms and conditions of this Agreement and all Order Forms, as well as business and marketing plans, technology and technical information, product plans and designs, and business processes disclosed by Us.
            </p>

            <h2 className='font18-bold mb-1'>4.2 Protection of Confidential Information</h2>
            <p className='font18-light mb-1'>
                Except as otherwise permitted in writing by Us,
                <ul className='font18-light mb-6'>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>You shall use the same degree of care that You use to protect the confidentiality of your own confidential information of like kind (but in no event less than reasonable care) not disclose or use any Confidential Information for any purpose other than as expressly permitted in this Agreement, and</li>
                    <li className='mb-1 mx-8' style={{ listStyleType: 'lower-roman' }}>You shall limit access to Confidential Information to those of Your employees, contractors and agents who need such access for purposes consistent with this Agreement and who have signed confidentiality agreements with You containing protections no less stringent than those herein.</li>
                </ul>
            </p>

            {/* Warranties and Disclaimers */}
            <h4 className="font24-bold py-6">Warranties and Disclaimers</h4>

            <h2 className='font18-bold mb-1'>5.1 Warranties</h2>
            <p className='font18-light mb-6'>
                Each party represents and warrants that it has the legal power to enter into this Agreement. You represent and warrant that You will not transmit to Us any Malicious Code.
            </p>

            <h2 className='font18-bold mb-1'>5.2 Disclaimer</h2>
            <p className='font18-light mb-1'>
                EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES, THE WEBSITE AND ALL CONTENT PROVIDED THEREIN ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. NONE OF US, OUR AFFILIATES, SUBSIDIARIES OR OUR OR THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES OR AGENTS (COLLECTIVELY THE "READON ARABIA PARTIES") GUARANTEES THE ACCURACY, COMPLETENESS, TIMELINESS, RELIABILITY, SUITABILITY OR USEFULNESS OF ANY PORTION OF THE SERVICES, THE WEBSITE OR ANY CONTENT PROVIDED THEREIN. NONE OF THE READON ARABIA PARTIES WARRANT THAT THE SERVICES, THE WEBSITE OR ANY CONTENT PROVIDED THEREIN WILL BE UNINTERRUPTED OR ERROR-FREE OR THAT THE WEBSITE, ITS SERVER OR ANY FILES AVAILABLE FOR DOWNLOADING THROUGH THE WEBSITE ARE FREE OF COMPUTER VIRUSES OR OTHER HARMFUL ELEMENTS. YOU EXPRESSLY AGREE THAT THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SERVICES, THE WEBSITE AND THE ACCURACY, TIMELINESS OR COMPLETENESS OF THE CONTENT PROVIDED THEREIN IS ASSUMED SOLELY BY YOU. NONE OF THE READON ARABIA PARTIES MAKE ANY, AND HEREBY SPECIFICALLY DISCLAIM ANY AND ALL, REPRESENTATIONS, ENDORSEMENTS, GUARANTEES, AND WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE SERVICES, THE WEBSITE, OR THE CONTENT PROVIDED THEREIN, INCLUDING WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT OF THIRD-PARTY RIGHTS. YOUR SOLE AND EXCLUSIVE REMEDY FOR DISSATISFACTION WITH THE SERVICES, THE WEBSITE OR THE CONTENT PROVIDED THEREIN IS TO STOP USING THE SERVICES, THE WEBSITE AND/OR SUCH. READON ARABIA PARTIES ARE NOT RESPONSIBLE FOR AND SHALL HAVE NO LIABILITY WITH RESPECT TO THE ACTIONS OR OMISSIONS OF ANYONE USING THE SITE. AS A CONDITION TO YOUR USE OF OUR THE SITE, YOU HEREBY WAIVE AND RELEASE ANY AND ALL CLAIMS, CAUSES OF ACTION OR OTHER RIGHTS THAT YOU MIGHT HAVE AGAINST ANY OF THE READON ARABIA PARTIES ARISING OUT OF OR RELATING TO THE SUBMISSION AND REVIEW OF ANY MATERIALS MADE AVAILABLE THROUGH THE SITE.
            </p>

            {/* Indemnification */}
            <h4 className="font24-bold py-6">Indemnification</h4>

            <p className='font18-light mb-6'>
                You agree to indemnify and hold READON ARABIA harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (i) your access to or use of the Services, (ii) your violation of the terms of this Agreement, or (iii) the infringement by you, or any third party using your account, of any intellectual property or other rights of any person or entity. We reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defence of these claims. You agree not to settle any matter without the prior written consent of Us.
            </p>

            {/* Limitation of Liability */}
            <h4 className="font24-bold py-6">Limitation of Liability</h4>

            <h2 className='font18-bold mb-1'>7.1 Limitation of Liability</h2>
            <p className='font18-light mb-6'>
                IN NO EVENT SHALL OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY, EXCEED THE TOTAL AMOUNT PAID BY YOU HEREUNDER OR, WITH RESPECT TO ANY SINGLE INCIDENT THE LESSOR OF INR5000 OR THE AMOUNT PAID BY YOU HEREUNDER IN THE SIX (6) MONTHS IMMEDIATELY PRECEDING THE INCIDENT.
            </p>

            <h2 className='font18-bold mb-1'>7.2 Exclusion of Consequential and Related Damages</h2>
            <p className='font18-light mb-6'>
                IN NO EVENT SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOST PROFITS OR REVENUES OR FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER OR PUNITIVE DAMAGES HOWEVER CAUSED, WHETHER IN CONTRACT, TORT OR UNDER ANY OTHER THEORY OF LIABILITY, AND WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING DISCLAIMER SHALL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.
            </p>

            {/* TERM AND TERMINATION */}
            <h4 className="font24-bold py-6">TERM AND TERMINATION</h4>

            <h2 className='font18-bold mb-1'>8.1 Term of Agreement.</h2>
            <p className='font18-light mb-6'>
                This Agreement commences on the date You accept it and continues until all Subscription granted in accordance with this Agreement have expired or been terminated, unless earlier terminated as permitted below.
            </p>

            <h2 className='font18-bold mb-1'>8.2 Term of Purchased Subscription.</h2>
            <p className='font18-light mb-6'>
                Subscriptions purchased by You commence on the start date specified in the applicable Order Form and continue for the subscription term specified therein.
            </p>

            <h2 className='font18-bold mb-1'>8.3 Termination for Cause</h2>
            <p className='font18-light mb-6'>
                A party may terminate this Agreement for the cause: (i) upon 30 days written notice to the other party of a material breach if such breach remains uncured at the expiration of such period, or (ii) if the other party becomes the subject of a petition in bankruptcy or any other proceeding relating to insolvency, receivership, liquidation or assignment for the benefit of creditors. Additionally, We may terminate this Agreement at any time immediately upon notice to you.
            </p>

            <h2 className='font18-bold mb-1'>8.4 Payment upon Termination</h2>
            <p className='font18-light mb-6'>
                Upon any termination for cause by Us, You shall pay any unpaid fees covering the remainder of the term of all Order Forms after the effective date of termination. In no event shall any termination relieve You of the obligation to pay any fees payable to Us for the period prior to the effective date of termination.
            </p>

            <h2 className='font18-bold mb-1'>8.5 Surviving Provisions</h2>
            <p className='font18-light mb-6'>
                Section 3 (Fees and Payment for Purchased Services), 4 (Proprietary Rights), 5(Confidentiality), 6.2 (Disclaimer), 7 (Indemnification), 8 (Limitation of Liability), 9.4 (Payment upon Termination), 10 (Who You Are Contracting With, Notices, Governing Law and Jurisdiction) and 11 (General Provisions), and this Section 9.5 shall survive any termination or expiration of this Agreement.
            </p>

            {/* WHO YOU ARE CONTRACTING WITH, NOTICES, GOVERNING LAW AND JURISDICTION */}
            <h4 className="font24-bold py-6">WHO YOU ARE CONTRACTING WITH, NOTICES, GOVERNING LAW AND JURISDICTION</h4>

            <h2 className='font18-bold mb-1'>9.1 General</h2>
            <p className='font18-light mb-6'>
                You are contracting with the following company under this Agreement, and You should direct notices under this Agreement to READON ARABIA
            </p>

            <h2 className='font18-bold mb-1'>9.2 Manner of Giving Notice</h2>
            <p className='font18-light mb-6'>
                Except as otherwise specified in this Agreement, all notices, permissions and approvals hereunder shall be in writing and shall be deemed to have been given upon: (i) personal delivery, (ii) the second business day after mailing, (iii) the second business day after sending by confirmed facsimile, (iv) the first business day after sending by email or (v) by posting on the website. Notices to You shall be addressed to the person signing the contract or a person designated by You for Your relevant Services account, and in the case of billing-related notices, to the relevant billing contact designated by You.
            </p>

            <h2 className='font18-bold mb-1'>9.3 Governing Law</h2>
            <p className='font18-light mb-6'>
                This Agreement shall be governed by and construed in accordance with the laws of India, without giving effect to its principles or rules of conflict of laws to the extent such principles or rules are not mandatorily applicable by statute and would require or permit the application of the laws of another jurisdiction, as to all matters, including but not limited to matters of validity, construction, effect, performance and remedies. Each Party consents to the exclusive jurisdiction and venue in the Kanpur courts.
            </p>

            {/* General Provisions */}
            <h4 className="font24-bold py-6">General Provisions</h4>

            <h2 className='font18-bold mb-1'>10.1 Relationship of the Parties</h2>
            <p className='font18-light mb-6'>
                The parties are independent contractors. This Agreement does not create a partnership, franchise, joint venture, agency, fiduciary or employment relationship between the parties.
            </p>

            <h2 className='font18-bold mb-1'>10.2 No Third-Party Beneficiaries.</h2>
            <p className='font18-light mb-6'>
                There are no third-party beneficiaries to this Agreement.
            </p>

            <h2 className='font18-bold mb-1'>10.3 Waiver and Cumulative Remedies</h2>
            <p className='font18-light mb-6'>
                No failure or delay by either party in exercising any right under this Agreement shall constitute a waiver of that right. Other than as expressly stated herein, the remedies provided herein are in addition to, and not exclusive of, any other remedies of a party at law or in equity.
            </p>

            <h2 className='font18-bold mb-1'>10.4 Severability</h2>
            <p className='font18-light mb-6'>
                If any provision of this Agreement is held by a court of competent jurisdiction to be contrary to law, the provision shall be modified by the court and interpreted so as best to accomplish the objectives of the original provision to the fullest extent permitted by law and the remaining provisions of this Agreement shall remain in effect.
            </p>

            <h2 className='font18-bold mb-1'>10.5 Assignment</h2>
            <p className='font18-light mb-6'>
                You may not assign any of your rights or obligations hereunder, whether by operation of law or otherwise, without the prior written consent of Us. Subject to the foregoing, this Agreement shall bind and inure to the benefit of the parties, their respective successors and permitted assigns.
            </p>

            <h2 className='font18-bold mb-1'>10.6 Entire Agreement</h2>
            <p className='font18-light mb-6'>
                This Agreement, including all Order Forms, constitutes the entire agreement between the parties and supersedes all prior and contemporaneous agreements, proposals or representations, written or oral, concerning its subject matter. No modification, amendment, or waiver of any provision of this Agreement shall be effective unless in writing and either signed or accepted electronically by the party against whom the modification, amendment or waiver is to be asserted. However, to the extent of any conflict or inconsistency between the provisions in the body of this Agreement and any Order Form, the terms of this Agreement shall prevail.
            </p>


            <p className='font18-light mb-6'>
                Notwithstanding any language to the contrary therein, no terms or conditions stated in Your purchase order or other order documentation shall be incorporated into or form any part of this Agreement, and all such terms or conditions shall be null and void.

            </p>
        </section>
    );
};

export default TermsOfUse;