import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import s from "../styles/contactus.module.css"
export default function ContactUs() {
  const [height, setHeight] = useState("0vh");
  const [shown, setShown] = useState("none");
  return (
    <div>
      <Head>
        <title>Contact Us</title>
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
            <Link href="/" onClick={() => {
              setHeight("0vh");
              setShown("none");
            }}>
              <div className="mobele">Home</div>
            </Link>
            <Link href="/blogs-home">
              <div className="mobele">Blogs</div>
            </Link>
            <Link href="/services"  >
              <div className="mobele">Services</div>
            </Link>
            <Link href="/aboutus">
              <div className="mobele">About Us</div>
            </Link>
            <Link href="/contactus" onClick={() => {
              setHeight("0vh");
              setShown("none");
            }}>
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
              <div className="navEle">About Us</div>
            </Link>
            <Link href='/contactus'>
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
        <div id={s.contact}>
          <div id={s.mainForm}>
            <div id={s.contactHeading}>
              Contact Us
            </div>
            <form action="https://formsubmit.co/support@gridreputation.com" method="POST">
              <label htmlFor="Name">
                <div className={s.formEle}>
                  Name
                </div>
                <input type="text" name="name" id="" className={s.inp} placeholder='Enter your name' required />
              </label>
              <label htmlFor="Email">
                <div className={s.formEle}>
                  Email
                </div>
                <input type="email" name="email" id="" className={s.inp} placeholder='Enter your email' required />
              </label>
              <label htmlFor="Message">
                <div className={s.formEle}>
                  Your Message
                </div>
                <textarea type="text" name="message" id="" className={s.inp} placeholder='Enter your message' required />
              </label> <br />
              <input type="hidden" name="_subject" value="Grid Reputation Submission!"></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_template" value="table"></input>
              <input type="hidden" name="_next" value="https://gridreputation.com/thankyou"></input>
              <button type="submit" id={s.submit}>Submit </button>
            </form>
          </div>
          <div id={s.img} data-aos="fade-left">
            <Image src='/assets/contact.svg' height={400} width={400} id={s.con} />
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
                <Link href='https://www.linkedin.com/company/grid-reputation/'>
                  <Image src="/assets/linkedin.png" width={35} height={35} />
                </Link>
                <Link href='https://www.facebook.com/profile.php?id=100087967937908&mibextid=ZbWKwL'>
                  <Image src="/assets/fb.png" width={35} height={35} />
                </Link>
                <Link href='https://twitter.com/GridReputation'>
                  <Image src="/assets/twit.png" width={35} height={35} />
                </Link>
                <Link href='https://www.instagram.com/gridreputation/'>
                  <Image src="/assets/insta.png" width={35} height={35} />
                </Link>
              </div>
            </div>
          </div>
          <div id="footerBottom">
            &copy; Grid Reputation 2021-2024
          </div>
        </footer>
      </main>
    </div>
  )
}
