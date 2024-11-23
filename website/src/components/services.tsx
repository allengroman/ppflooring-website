"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Flooring Removal",
    description:
      "Say goodbye to your old, worn-out floors. Our flooring removal service efficiently clears out existing flooring, preparing your space for a fresh, new look. Whether it's carpet, hardwood, laminate, or vinyl, we handle the removal process safely and professionally, minimizing disruption and dust.",
    image: "src/assets/service-Removal2.jpeg",
  },
  {
    title: "Carpet Installation",
    description:
      "Enjoy the comfort and warmth of new carpet in your home or office. Our team specializes in installing high-quality carpets, enhancing the look and feel of any room. We work with you to select the perfect style, texture, and color to match your aesthetic, ensuring a flawless finish.",
    image: "assets/service-Carpet.jpeg",
  },
  {
    title: "LVP Installation",
    description:
      "Luxury Vinyl Plank (LVP) is a popular choice for its durability, affordability, and modern appearance. Our team installs LVP with precision, creating a stylish, water-resistant floor that's perfect for high-traffic areas like kitchens, bathrooms, and commercial spaces.",
    image: "assets/service-LVP.jpeg",
  },
  {
    title: "Laminate Installation",
    description:
      "Laminate flooring offers the look of hardwood at a fraction of the cost. Our laminate installation service provides a quick and cost-effective way to upgrade your floors. With a variety of styles and finishes, we help you achieve the desired look with long-lasting durability.",
    image: "assets/service-Installation.jpeg",
  },
  {
    title: "Hardwood Installation",
    description:
      "Classic, elegant, and timeless—hardwood flooring enhances any space with natural beauty. Our hardwood installation experts work with precision to bring warmth and sophistication to your home or business, using only high-quality wood for a stunning finish.",
    image: "assets/service-Improvments.jpeg",
  },
  {
    title: "Hardwood Re-sand and Finish",
    description:
      "Give your existing hardwood floors a fresh start. Our re-sanding and refinishing service revives worn hardwood, restoring its natural beauty and extending its life. We sand, stain, and apply a protective finish, making your floors look like new again.",
    image: "assets/service-Refinish.jpeg",
  },
];

export function ServicesSection() {
  return (
    <div className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow p-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
                {/* <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter> */}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
