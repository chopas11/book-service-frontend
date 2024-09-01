import React from 'react';
import s from './PrivacyPolicy.module.css';

const PrivacyPolicy:React.FC = () => {
    return (
        <div className={s.privacypolicy}>
            <h2 className="header_center">Privacy Policy of StorySphere.ru</h2>

            <h2>1. Introduction</h2>
            <p>
                This Privacy Policy (hereinafter referred to as the "Policy") governs the processing of personal data
                of users of the StorySphere.ru website (hereinafter referred to as the "Site"), carried out by LLC
                "StorySphere"
                (hereinafter referred to as the "Company"). The Company attaches great importance to the protection of
                personal
                data and compliance with the legislation in the field of personal data
                processing.
            </p>
            <br/>
            <h2>2. Personal Data Subject to Processing</h2>

            <h3>2.1. Processed Data</h3>
            <p>
                As part of using the Site, the Company may process the following categories of personal data of users:
            </p>
            <ul>
                <li><strong>Identification Data</strong>: surname, first name, middle name.</li>
                <li><strong>Contact Data</strong>: email address, phone number.</li>
                <li><strong>Payment Data</strong>: transaction information, purchase history.</li>
                <li><strong>Technical Data</strong>: IP address, cookies, data on the user's browser and device.</li>
                <li><strong>Site Usage Data</strong>: browsing history, preferences, data on interactions with the Site.
                </li>
            </ul>
            <br/>

            <h3>2.2. Methods of Data Collection</h3>
            <p>
                Personal data may be obtained directly from the user during registration on the Site, making purchases,
                subscribing to newsletters, as well as automatically when using the Site.
            </p>

            <br/>
            <h2>3. Purposes of Personal Data Processing</h2>
            <p>
                The Company processes personal data for the following purposes:
            </p>
            <ul>
                <li><strong>Service Provision</strong>: user registration and account management, order fulfillment,
                    providing recommendations and personalized offers.
                </li>
                <li><strong>User Communication</strong>: sending informational messages, responding to user inquiries.
                </li>
                <li><strong>Security Assurance</strong>: fraud prevention, ensuring the security of user data.
                </li>
                <li><strong>Site Analysis and Improvement</strong>: conducting statistical and marketing research,
                    analyzing
                    user behavior to improve the functionality of the Site.
                </li>
            </ul>

            <br/>
            <h2>4. Legal Grounds for Personal Data Processing</h2>
            <p>
                Personal data processing is carried out on the following legal grounds:
            </p>
            <ul>
                <li>User's consent to the processing of their personal data.</li>
                <li>The conclusion and performance of a contract to which the user is a party.</li>
                <li>Compliance with the requirements of the legislation of the Russian Federation.</li>
                <li>The exercise of the rights and legitimate interests of the Company or third parties, provided that
                    such actions
                    do not violate the rights and freedoms of the user.
                </li>
            </ul>

            <br/>
            <h2>5. Transfer of Personal Data to Third Parties</h2>
            <p>
                The Company is entitled to transfer users' personal data to third parties in the following cases:
            </p>
            <ul>
                <li><strong>Performance of obligations to users</strong>: for the purpose of fulfilling orders and
                    providing services.
                </li>
                <li><strong>Compliance with legal requirements</strong>: upon request of authorized government bodies in
                    cases
                    provided for by the legislation of the Russian Federation.
                </li>
                <li><strong>Use of third-party services</strong>: engaging contractors and service providers to perform
                    tasks related
                    to the operation of the Site, provided that they comply with confidentiality and personal data
                    security obligations.
                </li>
            </ul>

            <br/>
            <h2>6. Duration of Personal Data Processing and Storage</h2>
            <p>
                Personal data is processed and stored for the period necessary to achieve the purposes of its
                processing,
                or for the period specified by the legislation of the Russian Federation. Upon achievement of the
                processing purposes
                or expiration of the specified periods, the data is subject to deletion or anonymization.
            </p>

            <br/>
            <h2>7. User Rights</h2>
            <p>
                Users have the right to:
            </p>
            <ul>
                <li><strong>Access their personal data</strong>: obtain information about the fact of processing,
                    purposes,
                    categories of processed data, storage periods.
                </li>
                <li><strong>Correct personal data</strong>: request the correction of inaccurate or outdated data.
                </li>
                <li><strong>Delete personal data</strong>: right to be "forgotten" if the data is no longer required for
                    the purposes of processing.
                </li>
                <li><strong>Restrict processing</strong>: right to restrict data processing in certain cases.
                </li>
                <li><strong>Withdraw consent</strong>: right to withdraw previously given consent to data processing.
                </li>
                <li><strong>Object to data processing</strong>: right to object to data processing based on the
                    legitimate
                    interests of the Company.
                </li>
            </ul>

            <br/>
            <h2>8. Personal Data Protection</h2>
            <p>
                The Company takes all necessary organizational and technical measures to protect users' personal data
                from
                unauthorized access, alteration, disclosure, or destruction. Such measures include the use of modern
                encryption
                methods, internal control, and audit organization.
            </p>

            <br/>
            <h2>9. Children's Policy</h2>
            <p>
                The Site and Company services are not intended for use by individuals under the age of 16. The Company
                does not
                knowingly collect personal data of minors. If information about the collection of such data is received,
                it will be
                immediately deleted.
            </p>

            <br/>
            <h2>10. Changes to the Privacy Policy</h2>
            <p>
                The Company reserves the right to make changes to this Policy. The updated version of the Policy comes
                into force
                from the moment it is published on the Site. Users are encouraged to regularly check this Policy for
                changes.
            </p>

            <br/>
            <h2>11. Contact Information</h2>
            <p>
                For any questions related to this Policy, the processing of personal data, or to exercise their rights,
                users may contact the following contacts:
            </p>
            <ul>
                <li><strong>Email</strong>: <a href="mailto:info@storysphere.ru">info@storysphere.ru</a></li>
                <li><strong>Postal Address</strong>: 123456, Moscow, Aviamotornaya St., 8A, office 209</li>
            </ul>
            <p>Last updated: 23.08.2024</p>
            <br/>
        </div>
    );
};

export default PrivacyPolicy;