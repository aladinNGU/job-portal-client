import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";
import job1 from "../../assets/jobs/job-1.jpg";
import job2 from "../../assets/jobs/job-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={job1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mx-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl"
            alt=""
          />
          <motion.img
            src={job2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mx-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl"
            alt=""
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50, color: ["red"] }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#33fff9", "#36ff33", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs{" "}
            </motion.span>
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
