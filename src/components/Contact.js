import React from "react";
import RequestForm from "./requestForm";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-owner">
        <div>
          <h4 className="contact-owner-items">CVR No: 44376644</h4>
          <h4 className="contact-owner-items">
            ADDRESS: Lille højbrønsstræde 3 <br />
            Roskilde, DK 4000
          </h4>
        </div>
        <div>
          <h5 className="contact-owner-items">
            EMAIL <a href="mailto:info@ckliks.dk">info@ckliks.dk</a>
          </h5>

          <h5 className="contact-owner-items">
            PHONE<a href="tel:+4542217478">+45 42217478</a>
          </h5>
        </div>
      </div>

      <RequestForm />
      
    </div>
  );
}
