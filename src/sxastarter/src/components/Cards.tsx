import React from 'react';
import { PiChartPieSliceFill, PiStrategyBold, PiTargetBold } from 'react-icons/pi';

const steps = [
  {
    number: '01.',
    icon: <PiChartPieSliceFill size={32} className="text-black" />,
    title: 'Analysis',
    description:
      'We take time and effort to accurately review everything about your business and your industry.',
  },
  {
    number: '02.',
    icon: <PiStrategyBold size={32} className="text-black" />,
    title: 'Strategy',
    description:
      'We create custom strategy that includes tactics that have been previously proven and battle tested with outstanding results.',
  },
  {
    number: '03.',
    icon: <PiTargetBold size={32} className="text-black" />,
    title: 'Execution',
    description:
      'We get the work done while collaborating with you and our key alliances & partners to achieve results specific to your unique goals.',
  },
];

const StepsToSuccess = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">Steps to success</p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-black">
          How we Help your Business Succeed
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We bridge the gap between value-focused technology, risk and advisory services
        </p>

        {/* underline accent */}
        <div className="w-20 h-[2px] bg-black mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-lg relative flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <div className="absolute -top-4 bg-gray-200 rounded-full px-4 py-1 text-sm font-medium">
                {step.number}
              </div>
              <div className="bg-gray-100 p-4 rounded mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm hover:opacity-80 transition">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepsToSuccess;

