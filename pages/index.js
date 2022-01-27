import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Izi Omoziku</title>
      </Head>

      <section className="intro">
        <h1>HI, I AM IZI OMOZIKU</h1>
        <p>
          I’m a web developer based in Vaughan, ON creating products people love
          through data-driven design and front-end development.
        </p>
      </section>

      <section className="container">
        <section>
          <h2>Projects</h2>
          <p>
            I’m a front end developer and web designer. With my experience in
            HTML, CSS, Javascript, React, Next.js, and Figma, I have created
            many projects.
          </p>

          <p>Below are my favourite projects I have designed and developed.</p>
          <div className="website_wrapper">
            <div className="website_container">
              <div className="website website1">
                <Link href="https://hvac.vercel.app/">
                  <a target="_blank">
                    <Image src="/Hvac_logo.svg" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div className="website_content">
                <p className="hvac">HVAC Systems</p>
                <p>
                  I wanted to create a website for an hypothetical HVAC company,
                  so I did some research about the industry and the services and
                  products they offer. This led to me designing and creating
                  this website.
                </p>{" "}
                <br />
                <p>
                  I designed this website on figma, and using basic HTML, CSS,
                  and Javascript, I developed the website.{" "}
                </p>
              </div>
            </div>

            <div className="website_container">
              <div className="website website2">
                <Link href="https://perfecthealth.vercel.app/" passHref={true}>
                  <a target="_blank">
                    <Image
                      src="/perfectHealth_logo.svg"
                      width={115}
                      height={115}
                    />
                  </a>
                </Link>
              </div>
              <div className="website_content">
                <p className="hvac">Perfect Health</p>
                <p>
                  After creating HVAC Systems, I wanted to improve my skills so
                  I decided to learn React and Next.js. I created Perfect Health
                  using Next.js as this helps to improve SEO.{" "}
                </p>{" "}
                <br />
                <p>
                  I designed this website on figma, and using Next.js, I
                  developed the website.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section>
          <h2>Education</h2>
          <div className="education_wrapper">
            <h3>Bachelor of Computer Science</h3>
            <span>Ryerson University - Toronto, ON</span> <br />
            <span>2020 - 2023</span>
          </div>
          <div className="education_wrapper">
            <h3>Bachelor of Biochemistry and Business</h3>
            <span>Queens University - Kingston, ON</span> <br />
            <span>2015 - 2019</span>
          </div>
        </section>

        <div className="divider"></div>

        <section className="btn">
          {/* <Link href="/contact">
            <a>
              <Button value="CONTACT ME" />
            </a>
          </Link> */}
          <p>Send me an email at</p>
          <Button value="iziomoziku@yahoo.com" />
          <a href="/Izi_Omoziku.pdf" download className="resume">
            OR download my resume to learn more about me
          </a>
        </section>

        <div className="divider"></div>
      </section>
    </>
  );
}
