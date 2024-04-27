import Head from "next/head";
import { useState } from "react";
import s from "../styles/services.module.css";
import Image from "next/image";
import "aos/dist/aos.css";
import Link from "next/link";
export default function Services() {
  const [height, setHeight] = useState("0vh");
  const [shown, setShown] = useState("none");
  const [service, ShowService] = useState("none");
  return (
    <div>
      <Head>

        
        <title>Services</title>
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
              <div className="mobele">About Us</div>
            </Link>
            <Link href="/contactus">
              <div className="mobele">Contact Us</div>
            </Link>
          </div>
        </div>
        <div id={s.serviceAvail} style={{ display: service }}>
          <div id={s.servIn}>
            <div
              id={s.close}
              onClick={() => {
                ShowService("none");
              }}
            >
              <Image src="/assets/x.svg" height={30} width={30} />
            </div>
            <div id={s.serHeadIn}>
              <div id={s.getSerHead}>Get This service</div>
              Fill up this form and we will get back to you asap!
            </div>
            <form
              action="https://formsubmit.co/support@gridreputation.com"
              method="POST"
            >
              <label htmlFor="Name">
                <div className={s.ele}>Your Name</div>
                <input
                  type="text"
                  placeholder="Enter you name"
                  name="name"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Email">
                <div className={s.ele}>Your Email</div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Email">
                <div className={s.ele}>Your Organization</div>
                <input
                  type="text"
                  placeholder="Enter your Organization"
                  name="organization"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Service">
                <div className={s.ele}>Service You want to avail</div>
                <input
                  type="text"
                  placeholder="Enter the service"
                  name="service"
                  required
                  className={s.inp}
                />
              </label>

              <label htmlFor="Comments">
                <div className={s.ele}>Comments</div>
                <textarea
                  type="text"
                  placeholder="Tell us more about your project"
                  name="comments"
                  required
                  className={s.inp}
                  id={s.long}
                />
              </label>
              <input
                type="hidden"
                name="_subject"
                value="Grid Reputation Service Submission!"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input type="hidden" name="_template" value="table"></input>
              <input type="hidden" name="_next" value="https://gridreputation.com/thankyou"></input>
              <button type="submit" id={s.submit}>
                Submit
              </button>
            </form>
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
        <div id={s.ser}>
          Services We Offer
          <div id={s.sub}>Browse our services</div>
        </div>
        <div id={s.cards}>
          <div className={s.card} data-aos="flip-left">
            <div className={s.cardHead}>Online Reputaion Management (ORM)</div>
            <div className={s.content}>
              <div className={s.text}>
                In the modern world, customers research your company online
                before deciding whether or not to use your services. We work to
                establish a favourable online reputation for your brand as we
                are one of the most reputable Online Reputation Management (ORM)
                company across the world.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/rep.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-right">
            <div className={s.cardHead}>Web Development</div>
            <div className={s.content}>
              <div className={s.text}>
                <br/>
                A website must be carefully thought out in order to be
                effective. We begin by designing your user experiences and user
                journeys for your website based on a thorough understanding of
                your target audience. Then, in order to improve the experience,
                we analyse the websites of your rivals.<br/>
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/wevdev.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-left">
            <div className={s.cardHead}>Android App Development</div>
            <div className={s.content}>
              <div className={s.text}>
                Clients from all across the world choose Grid Reputation
                as their first choice. We are deeply committed to creating
                extremely captivating apps that carefully adhere to the business
                needs and serving a wide range of projects with the utmost client
                satisfaction in mind.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/appdev.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-right">
            <div className={s.cardHead}>Search Engine Optimisation (SEO)</div>
            <div className={s.content}>
              <div className={s.text}>
                Any successful SEO strategy is built on thorough keyword
                research. We can find short-tail and long-tail keywords that
                will send the highest-quality, money-making traffic by learning
                what your clients are searching for. We also keep an eye on your
                rivals, analysing their strategy and methods to inform your own.
                To ensure transparent supervision and coordination across your
                SEO and PPC efforts, everything is recorded in a single
                document.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/seo.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-left">
            <div className={s.cardHead}>Digital Marketing Strategy</div>
            <div className={s.content}>
              <div className={s.text}>
                An organization's strategic marketing goals, such as brand
                building or new company development, can be met by adopting
                digital marketing tools and tactics. A comprehensive, strategic
                marketing plan that uses digital strategies frequently includes
                a digital marketing strategy.<br/><br/>
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/digital-marketing-strategy.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>
            <br/>
            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-right">
            <div className={s.cardHead}>Social Media Marketing (SMM)</div>
            <div className={s.content}>
              <div className={s.text}>
                To engage your brand's target market and interact with customers,
                we offer A-Z social media marketing services. We pledge to establish
                your brand as the most trustworthy one among consumers and to generate
                more high-quality leads. We implement a successful, data-driven approach
                for your brand every day, scale outcomes often.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/social-media-marketing.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-left">
            <div className={s.cardHead}>Social Media Management</div>
            <div className={s.content}>
              <div className={s.text}>
                Our team creates a vibrant community for your brand on all social
                media platforms. We provide a dedicated community manager to respond
                quickly to your consumers' questions and increase the credibility of your brand.
                We are able to pinpoint your precise requirements, create a strategy, and carry
                out the required tasks for long-term social media success.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/social-media-management.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-right">
            <div className={s.cardHead}>Google Reviews</div>
            <div className={s.content}>
              <div className={s.text}>
                <br/>
                One of the best aspects of our reviews is that you may
                decide how many to buy, giving you a lot of flexibility. Consider
                the importance of your reputation before deciding to buy Google reviews.
                The most important thing to remember is that content is king, which means that
                internet reviews of your brand are extremely important.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/google-review.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>
            <br/><br/><br/><br/>
            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>
          <div className={s.card} data-aos="flip-left">
            <div className={s.cardHead}>Copywriting</div>
            <div className={s.content}>
              <div className={s.text}>
                Our content marketing specialists are talented writers who also know
                how to write in a way that benefits both humans and search engines. We may
                create compelling copy for use on your website, SEO-friendly product descriptions
                to help them rank, powerful and succinct email campaigns, or blog entries that increase
                your exposure and authority as a subject matter expert.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/copywriting.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>

          <div className={s.card} data-aos="flip-right">
            <div className={s.cardHead}>Content Writing</div>
            <div className={s.content}>
              <div className={s.text}>
                At Grid Reputation, we are aware of the subtleties involved
                in producing marketing material that enables clients to effectively
                communicate with their target audience. Since we continually strive to
                offer the greatest content writing services worldwide, we produce content
                that fascinates both our clients and their customers.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/content-writing.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>
            <br/><br/><br/><br/><br/>
            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>

          <div className={s.card} data-aos="flip-left">
            <div className={s.cardHead}>Video Marketing</div>
            <div className={s.content}>
              <div className={s.text}>
                You're making a wise decision if you want to use video in your
                marketing strategy, and your clients will appreciate it. Grid Reputation
                has a history of producing interesting movies for various video marketing
                efforts, including social media videos, website videos, and video advertising.
                We are the ideal video marketing business if you want your videos to be powerful
                and hold viewers' attention.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/video-marketing.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
            </div>
          </div>

          <div className={s.card} data-aos="flip-right">
            <div className={s.cardHead}>PPC Ads</div>
            <div className={s.content}>
              <div className={s.text}>
                Many businesses are searching for quick, efficient ways to position
                their brands in front of clients who are likely to convert well because the
                landscape of digital marketing is changing. Boost your online presence and see
                results right now with Grid Reputation's PPC Advertising services.
              </div>
              <div className={s.image}>
                <Image
                  src="/assets/ppc.svg"
                  height={200}
                  width={200}
                  alt="ui"
                />
              </div>
            </div>

            <div
              className={s.getService}
              onClick={() => {
                ShowService("flex");
              }}
            >
              Get the service
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
          <div id="footerBottom">&copy; Grid Reputation 2021-2024</div>
        </footer>
      </main>
    </div>
  );
}
