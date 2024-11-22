// Approach.js
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const Approach = () => {
  // Track which section is expanded
  const [expandedSection, setExpandedSection] = useState(1);

  // Content data
  const content = [
    {
      id: 1,
      title: 'ReadON Cognitive Assessment',
      description:
        'This digital neuropsychological evaluation assesses cognitive abilities and overall wellness, measuring attention span, memory, reasoning, planning, and coordination while comparing results to peers of the same age and gender.',
    },
    {
      id: 2,
      title: 'ReadON Cognitive Therapy Sessions',
      description:
        "Our sessions utilize interactive exercises designed to enhance attention, working memory, and executive functions that improve reading/writing fluency and comprehension, tailored to the learner's unique needs.",
    },
    {
      id: 3,
      title: 'Progress Monitoring and Guidance',
      description:
        'Continuous tracking of progress ensures learners stay on course to meet their objectives, with regular feedback to adjust strategies as necessary.',
    },
  ];

  // Function to toggle expanded/collapsed state
  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section id="approach" className="pt-16">
      <div className="p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <Fade direction="up" cascade damping={0.5} triggerOnce={true}>
            <h2
              className="text-2xl font-semibold text-black text-center mb-10 font38-bold"
              style={{ lineHeight: '30px' }}
            >
              With ReadON, Success is as Easy as 1-2-3!
            </h2>
            <div className="space-y-10"> {/* Increased space between sections */}
              {content.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-lg overflow-hidden shadow-md bg-white border-black}`}
                  style={{
                    borderRadius: '10px',
                    boxShadow: '0 27px 20px -19px #ff977e4f',
                    background: '#F8F5F4',
                  }}
                >
                  {/* Header with title and toggle button */}
                  <div
                    onClick={() => toggleSection(item.id)}
                    className="flex justify-between items-center px-6 py-4 cursor-pointer font24-bold"
                    style={{ background: '#F8F5F4', marginBottom: '-10px' }}
                  >
                    <h3>
                      {String(item.id).padStart(2, '0')} {item.title}
                    </h3>
                    <span>
                      {expandedSection === item.id ? '-' : '+'}
                    </span>
                  </div>
                  {/* Content description */}
                  {expandedSection === item.id && (
                    <div
                      className="px-6 py-4"
                      style={{ fontSize: '14pt' }}
                    >
                      <hr className="border-black mb-4" /> {/* Added bottom margin */}
                      <p style={{ textAlign: 'left' }} className='font18-bold'>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section >
  );
};

export default Approach;