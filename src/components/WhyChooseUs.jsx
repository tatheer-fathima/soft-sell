import React from 'react';
import { FaShieldAlt, FaClock, FaHandHoldingUsd, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Secure Transactions",
      description: "All transactions are encrypted and secure, ensuring your data is protected."
    },
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: "Fast Processing",
      description: "Get your valuation within 24 hours and payment within 3 business days."
    },
    {
      icon: <FaHandHoldingUsd className="text-3xl text-blue-600" />,
      title: "Competitive Prices",
      description: "We offer market-competitive prices for your unused licenses."
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: "Dedicated Support",
      description: "Our team is available to assist you throughout the process."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Why Choose SoftSell</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We make selling your software licenses simple and profitable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;