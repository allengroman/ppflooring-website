"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function HomeComponent() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", email);
    setEmail("");
  };

  return (
    <div className="bg-background">
      {/* Hero Intro Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="assets/intro.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white h-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%)",
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Quality Flooring for Every Home
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional solutions for your needs
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Removal",
                description:
                  "We handle the entire removal process, ensuring old flooring is cleared quickly and with minimal disruption. Our dust-controlled methods prepare your space for a fresh start, saving you time and hassle.",
              },
              {
                name: "Installation",
                description:
                  "Our expert team installs all types of flooring, including carpet, luxury vinyl plank (LVP), laminate, and hardwood, with precision and attention to detail. We ensure each installation is flawless, durable, and tailored to your style.",
              },
              {
                name: "Improvments",
                description:
                  "Whether it’s re-sanding and finishing hardwood or upgrading to modern materials, we breathe new life into your floors. Our improvement services restore beauty, extend durability, and add value to your home or business.",
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <img
                    src={`assets/service-${service.name}.jpeg`}
                    alt={service.name}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl  font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">What We Do</h3>
              <p className="text-gray-600">
                We offer a comprehensive range of flooring services designed to
                meet the diverse needs of our clients. From flooring removal to
                carpet, laminate, luxury vinyl plank (LVP), and hardwood
                installation, we have the expertise to bring your vision to
                life. Our team also specializes in hardwood re-sanding and
                finishing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Where We Serve</h3>
              <p className="text-gray-600">
                Precision Pros Flooring LLC proudly serves Gwinnett county and 
                surrounding counties. Our clients range from
                residential homeowners looking to upgrade their spaces to
                commercial businesses in need of durable and stylish flooring.
                With a commitment to exceptional service, we ensure that each
                client receives tailored solutions that meet their unique
                flooring needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
              <p className="text-gray-600">
                Led by founder Phillip Pribeagu, we are dedicated to providing
                high-quality craftsmanship and reliable service to every
                project. Phillip and his team take pride in offering
                personalized solutions and ensuring customer satisfaction with
                every job, large or small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Customer Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                review:
                  "Precision Pros did an incredible job with our new hardwoodflooring. From start to finish, they were professional, efficient, and attentive to our needs.",
                author: "Sarah J",
              },
              {
                review:
                  "We recently had Precision Pros remove our old carpet and install luxury vinyl plank (LVP) throughout our home. Phillip and his team were fantastic!",
                author: "Mark R",
              },
              {
                review:
                  "The finish is flawless, and our floors look brand new. Precision Pros exceeded our expectations, and I’ll definitely recommend them to friends and family.",
                author: "Jessica K",
              },
            ].map((review, index) => (
              <Card key={review.author}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{review.review}</p>
                  <div className="flex items-center">
                    <img
                      src={`src/assets/icon-${index}.jpeg`}
                      alt="User"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-gray-500">
                        Satisfied Customer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <Button size="lg" className="mb-8" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-primary" />
              <span>+1 (678) 879-3783</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-primary" />
              <span>PrecisionPros1017LLC@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
