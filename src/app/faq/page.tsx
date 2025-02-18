import React from "react";

const faqData = [
  { question: "What services do you offer?", answer: "We provide a wide range of automobile services, including sales, repairs, and custom modifications." },
  { question: "Do you offer warranties?", answer: "Yes, we offer warranties on all our vehicles and repair services. Warranty details vary based on the service." },
  { question: "Can I book a service online?", answer: "Yes, you can schedule a service appointment through our website." },
];

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto  py-[100px] h-screen">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
