import { useForm } from "@formspree/react";
import "./requestForm.css";

export default function RequestForm() {
  const [state, handleSubmit] = useForm("xovwlgnl");
  if (state.succeeded) {
    return (
      <p>
        Thank you reaching out to NC Kliks. <br /> I will get back to you in a
        day.
      </p>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xovwlgnl"
      method="POST"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <div className="fs-field">
          <label className="fs-label" htmlFor="full-name">
            Full Name
          </label>
          <input
            className="fs-input"
            id="full-name"
            name="full-name"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="fs-field">
          <label className="fs-label" htmlFor="email-address">
            Email Address
          </label>
          <input
            className="fs-input"
            type="email"
            id="email-address"
            name="email-address"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="fs-field">
          <label className="fs-label" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            className="fs-input"
            type="tel"
            id="phone-number"
            name="phone-number"
            placeholder="Enter your phone number"
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="fs-field">
          <label className="fs-label" htmlFor="event-type">
            Event Type
          </label>
          <select
            className="fs-select"
            id="event-type"
            name="event-type"
            required
          >
            <option value="Portrait">Portraits</option>
            <option value="event">Birthday</option>
            <option value="event">Wedding</option>
            <option value="event">Engagement</option>
            <option value="event">Celebrations</option>
            <option value="Tivoli">Tivoli shoot</option>
          </select>
        </div>
        <div className="fs-field">
          <label className="fs-label" htmlFor="event-date">
            Event Date
          </label>
          <input
            className="fs-input"
            id="event-date"
            type="date"
            name="event-date"
            value={new Date().toISOString().split("T")[0]} // Default to today's date
            required
          />
        </div>
        <div className="fs-field">
          <label className="fs-label" htmlFor="event-time">
            Event Time
          </label>
          <input
            className="fs-input"
            id="event-time"
            type="time"
            name="event-time"
            value={new Date().toTimeString().split(" ")[0].slice(0, 5)} // Default to current time
            required
          />
        </div>
        <div className="fs-field">
          <label className="fs-label" htmlFor="event-location">
            Event Location
          </label>
          <textarea
            className="fs-textarea"
            id="event-location"
            name="event-location"
            placeholder="Enter the detailed address of the event"
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="fs-checkbox-field">
          <div className="fs-checkbox-wrapper">
            <input
              className="fs-checkbox"
              id="terms-agreement"
              name="terms-agreement"
              required
              type="checkbox"
              value="agree"
            />
          </div>
          <div>
            <label htmlFor="terms-agreement">
              I agree to the Terms and Conditions
            </label>
          </div>
        </div>
      </fieldset>
      <div className="fs-checkbox-field">
        <div className="fs-checkbox-wrapper">
          <input
            className="fs-checkbox"
            id="cancellation-policy-agreement"
            name="cancellation-policy-agreement"
            required
            type="checkbox"
            value="agree"
          />
        </div>
        <div>
          <label
            className="fs-label-terms"
            htmlFor="cancellation-policy-agreement"
          >
            I understand the cancellation policy
          </label>
        </div>
      </div>
      <div class="fs-button-group">
        <button className="fs-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
