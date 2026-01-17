import Navbar from "./Navbar";
import { useState } from 'react';
const Contact = () => {
  const [name, setname] = useState('');
  const [email, setmail] = useState('');
  const [massage, setmassage] = useState('');
  const submit = () => {
    console.log(name, email, massage);
  }
  return (
    <>

      <>
        <div className="aboutbody">
          <Navbar />
          <div className="ContactBody cardss">
            <section className="contact-section">
              <div className="container1">
                <p className="head">
                  Contact<u className="head2">  Us</u>
                </p>
                <p className="p">If you have any questions, feel free to reach out to us!</p>
                <form id="contactForm">
                  <div className="form-group">
                    <label htmlFor="name" className="text-dark">Name:</label>
                    <input
                    className="input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required=""
                      onChange={(event) => setname(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-dark">Email:</label>
                    <input
                    className="input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required=""
                      onChange={(ev) => setmail(ev.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="text-dark">Message:</label>
                    <textarea
                      className="textarea input"
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      required=""
                      defaultValue={""}
                      onChange={(mass) => setmassage(mass.target.value)}
                    />
                  </div>
                  <button type="submit" className="submit-btn btn btn-primary" onClick={submit}>
                    Submit
                  </button>
                </form>
                <p id="successMessage" />
              </div>
            </section>
          </div>
        </div>
      </>


    </>
  )
}
export default Contact;