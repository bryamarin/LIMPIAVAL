import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { plans as mockPlans } from "./data/plans.js";

const Pricing = () => {
  const plans = mockPlans; 

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-b from-sky to-primaryg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Elige el Plan Perfecto para Ti
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Planes flexibles y asequibles diseñados para adaptarse a tu
            presupuesto y necesidades de limpieza.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-24">
          {plans.map((plan, index) => {
            const featuresList =
              typeof plan.features === "string"
                ? JSON.parse(plan.features)
                : plan.features;

            return (
              <motion.div
                key={plan.id}
                className={`border-2 rounded-2xl p-8 text-center transition-all duration-300 ${
                  plan.featured
                    ? "bg-primary text-white border-primary shadow-xl scale-105"
                    : "bg-white border-muted hover:border-primary"
                }`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.featured ? "text-white" : "text-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-4xl font-extrabold mb-4 ${
                    plan.featured ? "text-sky" : "text-primary"
                  }`}
                >
                  ${plan.price}
                  <span
                    className={`text-lg font-medium ${
                      plan.featured ? "text-gray-200" : "text-text-muted"
                    }`}
                  >
                    /mes
                  </span>
                </p>
                <ul className="space-y-4 text-left mb-8">
                  {featuresList && featuresList.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className={`h-6 w-6 mr-3 ${
                          plan.featured ? "text-sky" : "text-primary"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          plan.featured ? "text-gray-200" : "text-text-muted"
                        }
                      >
                        {/* FIX: Accedemos a la propiedad .text del objeto */}
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.featured
                      ? "bg-white text-primary hover:bg-sky hover:text-white"
                      : "bg-primary text-white hover:bg-primary-600"
                  }`}
                >
                  Comprar Plan
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

