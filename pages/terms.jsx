import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import s from "../styles/aboutus.module.css";

export default function AboutUs() {
    const [height, setHeight] = useState("0vh");
    const [shown, setShown] = useState("none");
    return (
        <div>
            <Head>
                <title>Terms of Service</title>
            </Head>
            <main>
                <div id="mobileNav" style={{ display: shown, height: height }}>
                    <div
                        id="mobclose"
                        onClick={() => {
                            setHeight("0vh");
                            setShown("none");
                        }}
                    >
                        <Image src="/assets/x.svg" height={30} width={30} />
                    </div>
                    <div id="mobileInner">
                        <Link
                            href="/"
                            onClick={() => {
                                setHeight("0vh");
                                setShown("none");
                            }}
                        >
                            <div className="mobele">Home</div>
                        </Link>
                        <Link href="/blogs-home">
                            <div className="mobele">Blogs</div>
                        </Link>
                        <Link href="/services">
                            <div className="mobele">Services</div>
                        </Link>
                        <Link href="/aboutus">
                            <div className="mobele" onClick={() => {
                                setHeight("0vh");
                                setShown("none");
                            }}>About Us</div>
                        </Link>
                        <Link href="/contactus">
                            <div className="mobele">Contact Us</div>
                        </Link>

                    </div>
                </div>
                <nav>
                    <div id="navLeft">
                        <Link href="/">
                            <Image src="/GR.svg" height={70} width={90} />
                        </Link>
                    </div>
                    <div id="navRight">
                        <Link href="/">
                            <div className="navEle">Home</div>
                        </Link>
                        <Link href="/blogs-home">
                            <div className="mobele">Blogs</div>
                        </Link>
                        <Link href="/services">
                            <div className="navEle">Services</div>
                        </Link>

                        <Link href="/aboutus">
                            <div className="navEle" onClick={() => {
                                setHeight("0vh");
                                setShown("none");
                            }}>About Us</div>
                        </Link>
                        <Link href="/contactus">
                            <div className="navEle" id="contactUs">
                                Contact Us
                            </div>
                        </Link>
                    </div>
                    <div
                        id="navMobileRight"
                        onClick={() => {
                            setHeight("100vh");
                            setShown("flex");
                        }}
                    >
                        <Image src="/assets/menu.svg" height={30} width={30} />
                    </div>
                </nav>

                <div id={s.head}>Terms of Use</div>
                <div id={s.abtCont}>
                    <div className={s.newtext}>
                        <span>Overview</span><br />
                        Grid Reputation is in charge of running this website. Grid Reputation is referred to as "we," "us," and "our" throughout the website. The use of this website, all information, tools, and services is provided by Grid Reputation, subject to your compliance with all terms, conditions, policies, and notices expressed here. You engage in our "Service" by browsing our website, buying anything from us, or both. By doing so, you agree to be bound by the terms and conditions set forth below, including all additional terms and conditions and policies linked herein and/or accessible via hyperlink. All users of the site, including without limitation browsers, vendors, customers, merchants, and/or content producers, are subject to these Terms of Service. Before using or visiting our website, please take the time to thoroughly read these Terms of Service. You agree to be bound by these Terms of Service by accessing or using any element of the website. You are not permitted to use any services or visit the website if you do not agree to all of the terms and conditions of this agreement. Acceptance is conditionally set forth in these Terms of Service, if these Terms of Service are an offer. The Terms of Service also apply to any new features or services that are added to the live website. On this page, you can always review the most recent version of the terms of service. By publishing updates and/or changes to our website, we retain the right to amend, modify, or replace any element of these Terms of Service. It is your obligation to periodically check this page for updates. Upon the publishing of any modifications, your continued use or access to the website implies acceptance of those changes.
                        <br /><br />
                        <span>Section 1 - Online Service Terms</span><br />
                        By accepting these Terms of Service, you certify that you are at least the legal age of majority in the state or province in which you reside, or that you are the legal age of majority in the state or province in which you reside and you have granted us permission to permit any of your minor dependents to use this site. You are not allowed to use our service for any improper or unlawful purposes, nor are you allowed to break local laws by using the Service (including but not limited to copyright laws). You must not distribute any worms, viruses, or other disruptive code. Your Services will be immediately terminated if any of the Terms are broken or violated.
                        <br /><br />
                        <span>Section 2 - General Conditions</span><br />
                        Anytime, for any reason, we have the right to deny service to anyone. You agree that you will not, without our prior written consent, reproduce, duplicate, copy, sell, resell or exploit any part of the Service, use of the Service, access to the Service or any contact on the website through which the service is given. The headings used in this agreement are simply there for your convenience and have no bearing on these Terms in any way.
                        <br /><br />
                        <span>Section 3 - Information's Accuracy, Completeness, and Timeliness</span><br />
                        Inaccurate, incomplete, or out-of-date information on this website is not our responsibility. The content on this website is provided for informational purposes only and should not be relied upon or used as the only basis for choices without consulting primary, more reliable, complete, or up-to-date sources of data. The use of the information on this website is at your own risk. There may be historical data on this website. Information that is historical is unavoidably out of date and is only offered for your reference. Although we reserve the right to change the information on this site at any time, we are under no obligation to do so. You acknowledge that it is your duty to keep track of updates to our website.
                        <br /><br />
                        <span>Section 4 - Third-Party Links</span><br />
                        Materials from third parties may be included in some content, goods, and services made available through our site. You might be taken to third-party websites through links on our website that are not connected to us. We disclaim all liability and responsibility for any errors or omissions in the content or accuracy of any third-party materials or websites, as well as for any other third-party materials, goods, or services. Any loss or damages resulting from the acquisition or use of products, services, resources, content, or any other transactions made in conjunction with any third-party websites are not our responsibility. Before you enter into any transaction, please carefully research the third party's rules and practises to ensure that you are familiar with them. All issues, claims, worries, or inquiries regarding items from third parties should be addressed to the third party.
                        <br /><br />
                        <span>Section 5 - Personal Information</span><br />
                        Our Privacy Policy applies to any personal information you submit through the website.
                        <br /><br />
                        <span>Section 6 - Disclaimer of Warranties</span><br />
                        Your use of our service will not be uninterrupted, timely, secure, or error-free, and we do not promise, represent, or warrant that it will be. We do not guarantee the accuracy or dependability of any outcomes that may be attained through the use of the service. You acknowledge that we reserve the right to discontinue the service at any time and without prior warning, or to remove it altogether.
                        <br /><br />
                        <span>Section 7 - Indemnification</span><br />
                        You consent to defend, hold harmless, and indemnify Grid Reputation and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your violation of any law or the terms and conditions contained in or incorporated into these Terms of Service.
                        <br /><br />
                        <span>Section 8 - Severability</span><br />
                        The unenforceable portion of any provision of these Terms of Service shall be deemed to be severed from these Terms of Service, and the remaining provisions of these Terms of Service shall remain valid and enforceable to the fullest extent permitted by applicable law. If any provision of these Terms of Service is found to be unlawful, void, or unenforceable, such determination shall not affect the validity and enforceability of any other remaining provisions..
                        <br /><br />
                        <span>Section 9 - Termination</span><br />
                        The termination of this agreement shall not affect the parties' obligations and liabilities accrued before the termination date. Unless and unless we or you decide to terminate these terms of service, they are in effect. When you stop using our site or when you notify us that you no longer want to utilise our services, you may terminate these Terms of Service at any time. We may also terminate this agreement at any time without notice, and you will remain liable for all amounts due up until and including the date of termination, if, in our sole discretion, you do not comply with any term or provision of these Terms of Service. In addition, we may do so in order to prevent you from using our Services (or any part thereof).
                        <br /><br />
                        <span>Section 10 - Entire Agreement</span><br />
                        Any right or provision of these Terms of Service that we do not execute or enforce in accordance with them does not constitute a waiver of those rights or provisions. Your use of the Service is governed by these Terms of Service, any policies or operating rules posted by us on this website, and any other agreements, communications, or proposals (whether oral or written) that may have existed between you and us in the past or present (including, but not limited to, any prior versions of the Terms of Service). Any discrepancies in how these Terms of Service should be read should not be used against the party who drafted them.
                        <br /><br />
                        <span>Section 11 - Changes To Terms of Service</span><br />
                        On this page, you can always consult the most recent version of the Terms of Service. By publishing updates and changes to our website, we retain the right to amend, modify, or replace any portion of these Terms of Service at any time. It is your duty to often check our website for updates. Any modifications to these Terms of Service that are posted after you first use our website or use the Service indicate your acceptance of those modifications.
                        <br /><br />
                        <span>Section 12 - Contact Information</span><br />
                        Contact us with any questions you may have at support@gridreputation.com.
                    </div>
                </div>
                <footer>
                    <div id="footerMain">
                        <div id="footerLeft">
                            <Image src="/GR.svg" width={120} height={120} />
                            <div id="footName">Grid Reputation.</div>
                            <div id="footSub">A digital marketing agency</div>
                        </div>
                        <div id="footerRight">
                            <div id="footerRightHead">Grid Reputation</div>
                            <div id="footEm">
                                <Link href="mailto:support@gridreputation.com">
                                    support@gridreputation.com
                                </Link>
                            </div>
                            <div id="policyterms">
                                <Link href="/privacypolicy"><div class="policy">Privacy Policy</div></Link>
                                <Link href="/terms"><div class="terms">Terms of Service</div></Link>
                            </div>
                            <div id="socials">
                                <Link href="https://wa.me/message/RVHR3F2ZW66LA1">
                                    <Image src="/assets/wpp.svg" width={35} height={35} />
                                </Link>
                                <Link href="https://www.linkedin.com/company/grid-reputation/">
                                    <Image src="/assets/linkedin.png" width={35} height={35} />
                                </Link>
                                <Link href="https://www.facebook.com/profile.php?id=100087967937908&mibextid=ZbWKwL">
                                    <Image src="/assets/fb.png" width={35} height={35} />
                                </Link>
                                <Link href="https://twitter.com/GridReputation">
                                    <Image src="/assets/twit.png" width={35} height={35} />
                                </Link>
                                <Link href="https://www.instagram.com/gridreputation/">
                                    <Image src="/assets/insta.png" width={35} height={35} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="footerBottom">&copy; Grid Reputation 2021-2024</div>
                </footer>
            </main>
        </div>
    );
}
