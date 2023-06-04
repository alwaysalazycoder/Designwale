import React, { useState } from "react";
import "../styles/contact.css";
import contactLogo from "../assests/contact.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./utils/Loader";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const obj = {
      name: name.toString(),
      email: email.toString(),
      description: desc.toString(),
      whatsapp_contact: Number(number),
    };

    // const config = { headers: { "Content-Type": "application/json" } };

    setLoading(true);

    const data = await axios
      .post(
        "https://designwale-backend-api.vercel.app/api/v1/post/feedback",
        obj
      )
      .then((res) => {
        setLoading(false);
        toast.success("Form Submitted", {});
      })
      .catch((e) => {
        console.log("error occurred", e);
      });
  };
  return (
    <>
      <div id="contact">
        <div className="contact-wrapper">
          <div className="contact-form">
            <div className="form-for-connection">
              <div className="form">
              <Fade  cascade damping={0.1} className="fadeEffect">
                  Contact Us
                </Fade>
               

                {loading ? (
                  <Loader />
                ) : (
                  // <div>
                  <>
                  <Slide delay={2} className="">

                    <div className="link-social">
                      <span className="insta">
                        <a href="#" target={"blank"} className="instagram">
                          <BsInstagram />
                        </a>
                      </span>
                      <span className="whats">
                        <a href="#" target={"blank"} className="whatsapp">
                          <BsWhatsapp />
                        </a>
                      </span>
                    </div>
                    </Slide>


                    <input
                      placeholder="Name.."
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      />
                    <input
                      placeholder="Email.."
                      onChange={(e) => setEmail(e.target.value)}
                      type={"email"}
                      name="email"
                    />
                    <input
                      placeholder="Whatsapp Number"
                      onChange={(e) => setNumber(e.target.value)}
                      type="number"
                      name="number"
                      min={10}
                      max={10}
                    />
                    <input
                      placeholder="Description"
                      onChange={(e) => setDesc(e.target.value)}
                      type="text"
                      name="desc"
                    />

                    <button
                      className="contact-submit"
                      onClick={submitHandler}
                      type="submit"
                    >
                      Submit
                    </button>
                  </>
                )}

                <Toaster position="top-right" reverseOrder={false} />
              </div>
            </div>
          </div>
          <div className="contact-logo">

            <img src={contactLogo} alt="contact info" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
