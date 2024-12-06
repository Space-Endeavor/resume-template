import React from 'react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: 'Tech Corp',
    position: 'Senior Software Engineer',
    period: '2020 - Present',
    description: [
      'Led a team of 5 developers in building a microservices architecture',
      'Improved application performance by 40% through optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    company: 'StartUp Inc',
    position: 'Software Engineer',
    period: '2018 - 2020',
    description: [
      'Developed and maintained multiple React applications',
      'Collaborated with UX team to implement responsive designs',
      'Mentored junior developers and conducted code reviews'
    ]
  }
];

export function Experience() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-600 mb-2">{exp.position} | {exp.period}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}