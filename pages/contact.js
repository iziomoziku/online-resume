import Link from "next/link";
import Button from "../components/Button";

const Contact = () => {
  return (
    <>
      <form className="container form_container">
        <div className="form_title">
          <h1>Contact Me</h1>
          <span>Send me an email, and I’ll respond ASAP!</span>
        </div>

        <div className="form_wrapper">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Jack Mallone"
            required
          />
        </div>

        <div className="form_wrapper">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="mallone@yahoo.com"
            required
          />
        </div>

        <div className="form_wrapper">
          <label htmlFor="message">Message</label>{" "}
          <textarea
            name="user_message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Life works in mysterious ways"
            required
          ></textarea>
        </div>

        <Link href="/">
          <a>
            <Button value="SEND" />
          </a>
        </Link>
      </form>
    </>
  );
};

export default Contact;
