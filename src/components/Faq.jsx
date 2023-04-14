import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const faqs = [
  {
    question: 'How does 3D printing impact product development and speed to market?',
    answer:
      '3D printing accelerates the process by reducing the time and cost associated with prototyping and refining the design. Many more 3D printed prototypes can be produced in the time needed to mold or machine them and for much less cost. Highly realistic prototypes printed on full-color multimaterial printers look like the final product, cultivating faster and better decisions.',
  },
  {
    question: 'What can designers do with 3D printing?',
    answer:
      '3d printing gives designers the capability to drastically shorten the desin process compared to traditional methods of hand modelling or outsourcing to model shops. They keep design process entirely in hpuse, prototype faster and smarter, create beautiful, higly detailed models.',
  },
  {
    question: 'Is 3D printing a replacement for conventional manufacturing technology?',
    answer:
      '3D printing is not a wholesale replacement for existing manufacturing methods like molding and machining. Its benefit lies in supplementing these other technologies at points where they can’t compete. For example, 3D printing’s additive nature is able to make structures that aren’t possible with machining or molding. It also makes low- to mid-volume production economically viable because there’s no need for the tooling investment. Similarly, it’s much faster to get started, which is why GM turned to 3D printing to retool its production line to produce ventilators in the pandemic. In short, 3D printing is another tool in the toolbox, but one that offers key benefits over traditional manufacturing practices when used strategically.',
  },
  {
    question: 'How do I find out if AM is right for me?',
    answer:
      '1) Freedom to design parts and sub-assemblies for the design, not for the manufacturing processes (DFM*). 2) Have inventory on demand for both production and spare parts. 3) Eliminate costs of inventory and the time lag of supply chains. Gain the ability to quickly prototype with the same process with which you will manufacture — true rapid prototypes!',
  },
  
  
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(activeIndex);
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white	">
        <h2 className="text-3xl font-bold   text-white	">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-gray-500 text-white	">
          Have a question that isn't answered here?
          <a href="#" className="text-blue-600 hover:underline">
            Contact us
          </a>
          and we'll be happy to help.
        </p>
      </div>
      <div className="mt-12">
        <dl className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={faq.question} onClick={(e) => {
              if(index===activeIndex){
              setActiveIndex(-1)}
              else setActiveIndex(index)}}>
              <dt className="flex justify-between items-center text-lg leading-6 font-medium text-gray-900">
                <span>{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {activeIndex === index ? (
                    <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                </span>
              </dt>
              {activeIndex === index && (
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default FAQSection;
