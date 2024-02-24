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
                <title>Privacy Policy</title>
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

                <div id={s.head}>Privacy Policy</div>
                <div id={s.abtCont}>

                    <div className={s.newtext}>
                        <span>Section 1 - Do we use your information in any way?</span><br />
                        As part of the purchasing and selling process when you take any service from our site, we gather the personal data you provide to us, such as your name, address, and email address. We also automatically receive your computer's internet protocol (IP) address when you visit our site, which gives us knowledge about your operating system and browser. If appropriate, we may market to you via email by sending you information about our website and other updates.
                        <br /><br />
                        <span>Section 2 - Disclosure</span><br />
                        If you breach our Terms of Service or if we are obliged by law to do so, we may share your personal information.
                        <br /><br />
                        <span>Section 3 - Security</span><br />
                        We follow industry best practises and take reasonable efforts to prevent your personal information from being improperly lost, misused, accessed, disclosed, altered, or destroyed.
                        <br /><br />
                        <span>Section 4 - Cookies</span><br />
                        To keep your user's session active, we use cookies. You are not personally identified by it on other websites.
                        <br /><br />
                        <span>Section 5 - Age of Consent</span><br />
                        By using this site, you certify that you are at least the legal age of majority in the state or province in which you reside, or that you are of legal age in that jurisdiction and have granted us permission for any minor dependents of yours to access this site.
                        <br /><br />
                        <span>Section 6 - Changes to this Privacy Policy</span><br />
                        Please check this policy often as we retain the right to change it at any moment. Modifications and clarifications will be effective right away once they are posted online. If we make any significant changes to this policy, we will let you know here so that you are aware of what data we collect, how we use it, and, if applicable, under what conditions we use and/or disclose it. Your information might be given to the new owners of our site if we are acquired by or merged with another business so that we can continue to sell you items.
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
