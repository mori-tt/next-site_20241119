"use client";
import React, { useRef } from "react";
import {
  AiFillBulb,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    if (!serviceId) {
      throw new Error("Service ID is not defined");
    }
    emailjs
      .sendForm(
        serviceId,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          if (form.current) {
            form.current.reset();
            console.log("SUCCESS!");
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      className="w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* section title */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10">
            <span>
              <AiFillBulb />
            </span>
            CONTACT
          </p>
        </div>
        {/* left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p>Please contact us here for inquiries.</p>
            <p className="mt-12">Here is the email.</p>
            <h4 className="text-lg font-dedium text-darkblue">MAIL</h4>
            {/* SNS */}
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5>SNS</h5>
                <div className="flex gap-5">
                  <a href="" className="text-3xl text-darkblue">
                    <AiFillInstagram />
                  </a>
                  <a
                    href="https://x.com/morimoli_777"
                    className="text-3xl text-darkblue"
                  >
                    <AiFillTwitterSquare />
                  </a>
                  <a href="" className="text-3xl text-darkblue">
                    <AiFillFacebook />
                  </a>
                  <a href="" className="text-3xl text-darkblue">
                    <AiFillYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right mail form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              {/* form contents */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Title"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Message"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-darkblue text-white font-medium py-3 px-6 rounded hover:shadow-lg hover:bg-darkblue"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
