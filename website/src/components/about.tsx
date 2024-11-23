"use client";
import { motion } from "framer-motion";

export function AboutComponent() {
  const slideIn = {
    hidden: { opacity: 0, x: -50 }, // Initially off-screen (left)
    visible: { opacity: 1, x: 0 }, // Slide in to original position
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }} // Controls the speed of the animation
          variants={slideIn}
        >
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Discover our story and mission
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={slideIn}
        >
          {/* <div
            className="w-full h-64 bg-gray-300 rounded-lg shadow-lg"
            aria-label="Placeholder for about image"
          ></div> */}
          <img
            src="assets/phillip.jpeg"
            className="w-full h-[600px] bg-gray-300 rounded-lg shadow-lg object-[center_top] object-cover"
            aria-label="Placeholder for about image"
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={slideIn}
        >
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-gray-600">
              Led by founder Phillip Pribeagu, we are dedicated to providing
              high-quality craftsmanship and reliable service to every project.
              Phillip and his team take pride in offering personalized solutions
              and ensuring customer satisfaction with every job, large or small.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">What We Do</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of flooring services designed to
              meet the diverse needs of our clients. From flooring removal to
              carpet, laminate, luxury vinyl plank (LVP), and hardwood
              installation, we have the expertise to bring your vision to life.
              Our team also specializes in hardwood re-sanding and finishing.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Where We Are
            </h2>
            <p className="text-gray-600">
              Precision Pros Flooring LLC proudly serves Gwinnett county 
              and surrounding counties. Our clients range from residential
              homeowners looking to upgrade their spaces to commercial
              businesses in need of durable and stylish flooring. With a
              commitment to exceptional service, we ensure that each client
              receives tailored solutions that meet their unique flooring needs.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
