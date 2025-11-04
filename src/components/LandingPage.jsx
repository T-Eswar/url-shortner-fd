import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

let desc =
  "Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linklytics. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE: " + token);

  const dashBoardNavigateHandler = () => {

  };
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
           QuickieURL — Shorten Smarter. Share Faster. Track Better.
          </motion.h1>
          <p className="text-slate-700 text-lg my-5">

                        Simplify the way you share links with QuickieURL, the intelligent URL shortener built for speed, precision, and control.
              Transform long, cluttered URLs into clean, memorable short links in just seconds.
              Experience effortless sharing across any platform, from social media to professional campaigns.
              Customize your links to reflect your brand identity and build instant trust with your audience.
              Gain real-time insights into every click — who, where, and when — all from one powerful dashboard.
              Understand your audience better through advanced analytics that reveal performance trends.
              QuickieURL empowers you to make smarter, data-driven decisions with every shared link.
              Whether you’re an individual creator, marketer, or business owner, it scales to your needs.
              Enjoy lightning-fast redirects backed by enterprise-grade security and reliability.
              Track, manage, and organize all your links seamlessly with an intuitive, modern interface.
              Share confidently knowing your data is encrypted and your links never expire.
              Collaborate with teams effortlessly and keep campaigns synchronized in one place.
              Say goodbye to messy URLs and hello to beautiful, trackable short links.
              Make every link you share meaningful, measurable, and memorable.</p>
        {/*  <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="bg-custom-gradient  w-40 text-white rounded-md  py-2"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="border-btnColor border w-40 text-btnColor rounded-md  py-2 "
            >
              Create Short Link
            </motion.button>
          </div>*/}
        </div>
        {/*<div className="   flex-1 flex   justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png"
            alt=""
          />
        </div>*/}
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Key features of website  — and it’s completely free to use. {" "}
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
         <Card
            title="Effortless URL Shortening"
            desc="Create short, memorable links in seconds with QuickieURL’s clean and simple interface. No complications — just fast, reliable link shortening made easy."
          />

          <Card
            title="Insightful Analytics"
            desc="Understand your audience with real-time analytics. Track clicks, locations, and referral sources to make data-driven decisions and boost engagement."
          />

          <Card
            title="Advanced Security"
            desc="Your privacy matters. Every link is secured with advanced encryption and safety checks, ensuring your data and users remain fully protected."
          />

          <Card
            title="Lightning-Fast Performance"
            desc="Experience instant redirects and unmatched reliability. QuickieURL ensures your links stay live, fast, and always ready to perform — every single time."
          />

        
        </div>
      </div>
    </div>
  );
};

export default LandingPage;