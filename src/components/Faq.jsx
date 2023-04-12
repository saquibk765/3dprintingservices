import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const faqs = [
  {
    question: 'What is ReactJS?',
    answer:
      'ReactJS is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application with ease.',
  },
  {
    question: 'What is Tailwind CSS?',
    answer:
      'Tailwind CSS is a utility-first CSS framework that makes it easy to design and build modern, responsive user interfaces. It provides a set of pre-defined classes that you can use to style your components.',
  },
  {
    question: 'How do I install ReactJS and Tailwind?',
    answer:
      'You can install ReactJS and Tailwind CSS using NPM or Yarn. Here is the command to install ReactJS: `npm install react` or `yarn add react`. To install Tailwind CSS, use this command: `npm install tailwindcss` or `yarn add tailwindcss`.',
  },
  {
    question: 'How do I install ReactJS and Tailwind CSS?',
    answer:
      'You can install ReactJS and Tailwind CSS using NPM or Yarn. Here is the command to install ReactJS: `npm install react` or `yarn add react`. To install Tailwind CSS, use this command: `npm install tailwindcss` or `yarn add tailwindcss`.',
  },
  {
    question: 'How do I install ReactJS and Tailwind CSS2?',
    answer:
      'You can install ReactJS and Tailwind CSS using NPM or Yarn. Here is the command to install ReactJS: `npm install react` or `yarn add react`. To install Tailwind CSS, use this command: `npm install tailwindcss` or `yarn add tailwindcss`.',
  },
  
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  console.log(activeIndex);
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white	">
        <h2 className="text-3xl font-bold text-gray-900 text-white	">Frequently Asked Questions</h2>
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
