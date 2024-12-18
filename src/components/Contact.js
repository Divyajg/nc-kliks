import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <div>
          <h2></h2>
          <p>
            ADDRESS: <br />
            Lille højbrønsstræde 3 <br />
            Roskilde, DK 4000
          </p>
        </div>
        <div>
          <p>
            EMAIL <a href="mailto:info@ckliks.dk">info@ckliks.dk</a>
          </p>

          <p>
            PHONE<a href="tel:+4542217478">+45 42217478</a>
          </p>
        </div>
      </div>

      <form
        netlify
        name="contact"
        action="https://formspree.io/f/mzbovkge"
        method="POST"
      >
        <h2>Contact Me</h2>
        <p>Leave a message here, I will get back to you in less than a day.</p>
        <div>
          {/*<label htmlFor="name">Name</label>*/}
          <input type="text" id="name" name="name" placeholder="Name" />
        </div>
        <div className="4">
          {/* <label htmlFor="email">Email</label>*/}
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div>
          {/*<label htmlFor="message">Message</label>*/}
          <textarea id="message" name="message" placeholder="Message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
