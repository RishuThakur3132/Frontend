import "../CSS/Contact.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function Contact() {
  return (
    <>
      <Header />

      <section className="contact">
        <div className="contact-title">
          <h1>Contact Us</h1>
          <p>We are here to help you. Get in touch with us.</p>
        </div>

        <div className="contact-box">

          <div className="contact-details">
            <h2>Get In Touch</h2>

            <p>
              If you have any questions about our cars or services,
              feel free to contact us.
            </p>

            <div className="detail">
              <h3>📍 Address</h3>
              <p>Chandigarh, India</p>
            </div>

            <div className="detail">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="detail">
              <h3>✉ Email</h3>
              <p>support@car24.com</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Message</h2>

            <form>
              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
              ></textarea>

              <button type="submit">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;