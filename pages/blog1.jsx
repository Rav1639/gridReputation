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
                <title>What is an SEO?</title>
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
                <div id={s.head}>What is an SEO and Why is it Important for Your Website?</div>
                <div id={s.abtCont}>
                    <div className={s.newtext}>
                        In today's digital world, it is important to have an online presence for your business. But just having a website is not enough. You need to make sure that your website is visible to potential customers who are searching for products or services like yours. That's where SEO comes into play. SEO stands for Search Engine Optimization, which is the practice of improving the quality and quantity of traffic to your website from search engines through organic search results. In this article, we will discuss what SEO is, why it is important for your website, and how you can implement it to improve your website's visibility.<br />
                        <span>Table of Contents :</span><br />
                        1.	What is SEO?<br />
                        2.	How do Search Engines Work?<br />
                        3.	Why is SEO Important for Your Website?<br />
                        4.	How to Implement SEO for Your Website<br />
                        5.	Keyword Research<br />
                        6.	On-Page Optimization<br />
                        7.	Off-Page Optimization<br />
                        8.	Technical Optimization<br />
                        9.	Common SEO Mistakes to Avoid<br />
                        10.	SEO Tools You Can Use<br />
                        11.	Measuring the Success of Your SEO Efforts<br />
                        12.	Future of SEO<br />
                        13.	Conclusion<br />
                        14.	FAQs<br />
                        <br /><br />
                        <span>1. What is SEO?</span><br />
                        As mentioned earlier, SEO is the practice of optimizing your website to rank higher in search engine results pages (SERPs) for specific keywords or phrases. When a user types a query into a search engine, it crawls through millions of web pages to find the most relevant and useful results for that query. The search engine uses complex algorithms to rank web pages based on a variety of factors, including the relevance and authority of the content, the website's structure and user experience, and the number and quality of external links pointing to the website.<br />SEO is the process of making your website more visible and accessible to search engines by optimizing various aspects of your website, including its content, structure, and HTML code. By implementing SEO best practices, you can improve your website's ranking on SERPs and attract more organic traffic to your website.
                        <br /><br />
                        <span>2. How do Search Engines Work?</span><br />
                        Before we dive deeper into SEO, it's important to understand how search engines work. When a user types a query into a search engine, it goes through three basic steps to provide the most relevant results:<br />
                        Crawling: Search engines use automated bots called crawlers or spiders to scan through web pages and collect information about their content, structure, and links.<br />
                        Indexing: Once the crawler has collected the information, it is stored in a database called an index. This allows search engines to quickly retrieve relevant pages when a user types in a query.<br />
                        Ranking: When a user types a query, the search engine uses a complex algorithm to determine which pages in its index are most relevant to the query. The algorithm takes into account a variety of factors, including the relevance and authority of the content, the website's structure and user experience, and the number and quality of external links pointing to the website.<br />
                        <span>3. Why is SEO Important for Your Website?</span><br />
                        SEO is important for your website for several reasons:<br />
                        Increases Visibility: By optimizing your website for search engines, you can increase your visibility to potential customers who are searching for products or services like yours.<br />
                        Builds Trust and Credibility: Ranking higher in search engine results pages can help build trust and credibility with potential customers. Users tend to trust websites that appear higher in search engine results.<br />
                        Drives Traffic: SEO can help drive more organic traffic to your website, which can lead to increased conversions and sales.<br />
                        Cost-Effective: SEO is a cost-effective way to improve your website's visibility and attract more organic traffic compared to paid advertising.
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
                    <div id="footerBottom">&copy; Grid Reputation 2021-2023</div>
                </footer>
            </main>
        </div>
    );
}
