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
        <title>Blogs</title>
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

        <div className={s.head}>Blogs</div>

        <div className={s.blog}>
          <div className={s.card}>
            <div className={s.cardcontent}>
              <h2 className={s.cardtitle}>What is an SEO?</h2>
              <p className={s.cardbody}>In today's digital world, it is important to have an online presence for your business. But just having a website is not enough. You need to make sure . . .</p>
              <a href="/blog1" className={s.buttonn}>Learn More</a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardcontent}>
              <h2 className={s.cardtitle}>SEO Tips!</h2>
              <p className={s.cardbody}>SEO is an essential component of digital marketing. It helps to improve the visibility and ranking of your website on search engine results pages (SERPs), . . . </p>
              <a href="/blog2" className={s.buttonn}>Learn More</a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardcontent}>
              <h2 className={s.cardtitle}>Small Business SEO!</h2>
              <p className={s.cardbody}>As a small business owner, you might think that investing in Search Engine Optimization (SEO) is an expense you can't afford. However . . .</p>
              <a href="/blog3" className={s.buttonn}>Learn More</a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardcontent}>
              <h2 className={s.cardtitle}>SEO for Financial<br />Management</h2>
              <p className={s.cardbody}>With more and more customers relying on search engines to find financial products and services, financial institutions need to ensure . . .</p>
              <a href="/blog4" className={s.buttonn}>Learn More</a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardcontent}>
              <h2 className={s.cardtitle}>Custom Web Dev!</h2>
              <p className={s.cardbody}>In today's digital era, having a strong online presence is essential for any business that wants to succeed. A website is a . . .</p>
              <a href="/blog5" className={s.buttonn}>Learn More</a>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.cardcontent}>
              <h2 className={s.cardtitle}>php Web Dev!</h2>
              <p className={s.cardbody}>PHP is a popular server-side scripting language used for web development. With its open-source nature, versatility, and simplicity, PHP has  . . .</p>
              <a href="/blog6" className={s.buttonn}>Learn More</a>
            </div>
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
