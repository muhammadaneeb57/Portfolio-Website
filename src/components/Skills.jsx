import React from 'react';

function Skills() {
  const skills = [
    { name: 'ReactJS', level: '75%' },
    { name: 'Tailwind CSS', level: '75%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'HTML5', level: '90%' },
    { name: 'CSS3', level: '85%' },
    { name: 'Git & GitHub', level: '70%' }, // Added new skill
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-slate-800 text-3xl font-bold text-center mb-8">Skills</h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-gray-600">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
