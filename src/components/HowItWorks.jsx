import React from 'react';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUpload className="text-4xl text-blue-600" />,
      title: "Upload License",
      description: "Provide details about your software license through our secure portal."
    },
    {
      icon: <FaSearchDollar className="text-4xl text-blue-600" />,
      title: "Get Valuation",
      description: "Our experts will evaluate your license and provide a fair market price."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-blue-600" />,
      title: "Get Paid",
      description: "Receive payment quickly once the sale is complete."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selling your unused software licenses has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;