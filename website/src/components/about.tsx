"use client";

// import Image from "next/image";
// import Image from "../assets/man.webp";

export function AboutComponent() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Discover our story and mission
          </p>
        </div>

        <div className="mb-16">
          <div
            className="w-full h-64 bg-gray-300 rounded-lg shadow-lg"
            aria-label="Placeholder for about image"
          ></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-gray-600">
              I'm a passionate developer with a keen interest in creating
              beautiful and functional web applications. With years of
              experience in the industry, I've honed my skills in various
              technologies and frameworks.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">What We Do</h2>
            <p className="text-gray-600">
              We specialize in developing cutting-edge web solutions that help
              businesses thrive in the digital world. Our services include
              custom web development, responsive design, and performance
              optimization.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Where We Are
            </h2>
            <p className="text-gray-600">
              Based in the heart of Silicon Valley, we work with clients
              globally. Our office is a hub of creativity and innovation, where
              we collaborate to bring ideas to life.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
