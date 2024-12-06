import React from 'react';

const education = [
  {
    school: 'University of Technology',
    degree: 'Master of Computer Science',
    period: '2016 - 2018',
    description: 'Specialized in Artificial Intelligence and Machine Learning'
  },
  {
    school: 'Tech Institute',
    degree: 'Bachelor of Computer Science',
    period: '2012 - 2016',
    description: 'Dean\'s List, Computer Science Club President'
  }
];

export function Education() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-gray-600 mb-2">{edu.degree} | {edu.period}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}