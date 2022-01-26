import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="navWrapper">
      <div className="portfolio">
        <Link href="/">PORTFOLIO</Link>
      </div>

      <div>
        <Link href="https://www.linkedin.com/in/iziomoziku-healthcare/">
          <a target="_blank">
            <Image width={30} height={30} src="/linkedIn.svg" />
          </a>
        </Link>

        <Link href="https://github.com/iziomoziku">
          <a target="_blank">
            <Image width={36} height={36} src="/github.svg" />
          </a>
        </Link>

        {/* <Link href="/contact">
          <a>
            <Button value="CONTACT" />
          </a>
        </Link> */}
      </div>

      <style jsx>{`
        .navWrapper {
          display: flex;
          justify-content: space-between;
          gap: 1em;
          width: 90%;
          margin: 0.5em auto;
        }

        .navWrapper div {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.5em;
        }

        .portfolio {
          color: black;
          font-weight: bolder;
          font-size: clamp(1rem, 3vh, 6rem);
        }
      `}</style>
    </div>
  );
};

export default Nav;
