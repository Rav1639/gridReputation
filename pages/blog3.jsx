import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import s from "../styles/blogs.module.css";

export default function AboutUs() {
    const [height, setHeight] = useState("0vh");
    const [shown, setShown] = useState("none");
    return (
        <div>
            <Head>
                <meta name="description" content="Don't let your small business get lost in the vastness of the internet. Our Small Business SEO solutions can help you stand out and reach your target audience" />
                <meta name="keywords" content="Small Business SEO, Affordable Small Business SEO, Small Business SEO Services" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English"/>
        
                <title>From Zero to Hero: Small Business SEO Guide for Beginners</title>
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
                <div id={s.head}>Small Business SEO: A Comprehensive Guide to Improve Your Online Presence</div>
                <div id={s.abtCont}>
                    <div className={s.newtext}>
                        As a small business owner, you might think that investing in Search Engine Optimization (SEO) is an expense you can't afford. However, with the right strategies, SEO can help your business grow by driving targeted traffic to your website and increasing your online visibility. In this comprehensive guide, we'll walk you through everything you need to know about small business SEO, including the benefits of SEO, the basics of SEO, and how to develop an effective SEO strategy.<br /><br/>

                        <span>Benefits of SEO for Small Businesses</span><br />
                        In today's digital age, having a strong online presence is crucial for small businesses. Here are some of the benefits of SEO that can help your small business succeed:
                        <br />
                        <div className={s.subHead}>Increased visibility</div>
                        By optimizing your website for search engines, you can increase your online visibility and attract more targeted traffic to your website. This can lead to more leads and sales for your business.
                        <br />
                        <div className={s.subHead}>Cost-effective marketing</div>
                        SEO can be a cost-effective marketing strategy for small businesses. While there are upfront costs involved in implementing an SEO strategy, the long-term benefits can outweigh the initial investment.
                        <br />
                        <div className={s.subHead}>Improved user experience</div>
                        Optimizing your website for search engines can also improve the user experience for your website visitors. By making your website easy to navigate and providing valuable content, you can increase engagement and reduce bounce rates.
                        <br />
                        <div className={s.subHead}>Competitive advantage</div>
                        In today's competitive marketplace, having a strong online presence can give your business a competitive advantage. By outranking your competitors in search results, you can establish your business as an industry leader and attract more customers.
                        <br /><br/>

                        <span>The Basics of SEO for Small Businesses</span><br />
                        Before you can develop an effective SEO strategy, it's important to understand the basics of SEO. Here are some key concepts you should be familiar with:
                        <br />
                        <div className={s.subHead}>Keywords</div>
                        Keywords are the words and phrases that people use to search for information online. By incorporating relevant keywords into your website content, you can improve your chances of ranking higher in search results.
                        <br/>
                        <div className={s.subHead}>On-page optimization</div>
                        On-page optimization refers to the practice of optimizing individual pages on your website to improve their search engine rankings. This includes optimizing your content, meta tags, and URLs.
                        <br/>
                        <div className={s.subHead}>Off-page optimization</div>
                        Off-page optimization refers to the practice of optimizing external factors that can impact your website's search engine rankings. This includes building high-quality backlinks and establishing a strong social media presence.
                        <br/>
                        <div className={s.subHead}>Technical optimization</div>
                        Technical optimization refers to the practice of optimizing the technical aspects of your website to improve its search engine rankings. This includes improving website speed, optimizing for mobile devices, and implementing structured data.
                        <br/>
                        <div className={s.subHead}>Developing an Effective SEO Strategy</div>
                        Now that you understand the basics of SEO, it's time to develop an effective SEO strategy for your small business. Here are some steps you can take to get started:
                        <br/>
                        <div className={s.subHead}>Conduct a website audit</div>
                        Before you can optimize your website for search engines, it's important to identify any issues that might be impacting your search engine rankings. Conducting a website audit can help you identify areas for improvement.
                        <br/>
                        <div className={s.subHead}>Research your keywords</div>
                        Identifying the right keywords to target is crucial for any SEO strategy. Conduct keyword research to identify relevant keywords that your target audience is searching for.
                        <br/>
                        <div className={s.subHead}>Optimize your website</div>
                        Once you've identified areas for improvement and researched your keywords, it's time to start optimizing your website. This includes optimizing your content, meta tags, and URLs, as well as improving website speed and implementing structured data.
                        <br/>
                        <div className={s.subHead}>Build high-quality backlinks</div>
                        Backlinks are an important factor in search engine rankings. Building high-quality backlinks from reputable websites can help improve your website's search engine rankings.
                        <br/>
                        <div className={s.subHead}>Establish a strong social media presence</div>
                        Social media can be a powerful tool for building your online presence and driving traffic to your website. Establish a strong social media presence by creating and sharing valuable content on platforms like Facebook, Twitter.
                        <br /><br />
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
