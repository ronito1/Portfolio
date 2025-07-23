import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Junior Web Developer',
      company: 'Regortz Digital Marketing',
      location: 'Hybrid',
      period: 'Feb 2025 – Jun 2025',
      description: 'Fixed UI bugs, tested across browsers, improved performance.',
      achievements: [
        'Enhanced cross-browser compatibility',
        'Optimized website performance',
        'Implemented responsive design fixes'
      ]
    },
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      company: 'WebStack Academy',
      location: 'Remote',
      period: 'Jun 2024 – Dec 2024',
      description: 'Built backend, integrated APIs, handled Agile sprints & deployments.',
      achievements: [
        'Developed scalable backend systems',
        'Integrated third-party APIs',
        'Participated in Agile development cycles'
      ]
    },
    {
      type: 'education',
      title: 'B.Tech CSE (AI & ML)',
      company: 'Presidency University',
      location: 'Bangalore, India',
      period: 'Aug 2021 – July 2025',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on practical applications.',
      achievements: [
        'Relevant coursework in AI/ML',
        'Active in technical projects',
        'Strong academic performance'
      ]
    }
  ];

  const extracurriculars = [
    {
      title: 'Deloitte Australia Cyber Simulation',
      organization: 'Forage',
      description: 'Web log forensics and breach analysis',
      icon: Award
    },
    {
      title: 'Theatre Club Member',
      organization: 'Presidency University',
      description: 'Advanced public speaking, teamwork',
      icon: Users
    },
    {
      title: 'Folk Dance Competition Winner',
      organization: 'Banga Bharti Pondicherry',
      description: 'U-18 Category Winner',
      icon: Award
    }
  ];

  const getIcon = (type: string) => {
    return type === 'work' ? Briefcase : GraduationCap;
  };

  return (
    <section id="experience" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="heading-secondary mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and academic background in software development and AI/ML.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            return (
              <div 
                key={index} 
                className="timeline-item reveal-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="portfolio-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-gold rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-charcoal" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="heading-tertiary text-charcoal">{exp.title}</h3>
                        <span className="text-sm font-medium text-accent-gold bg-accent-gold-light px-3 py-1 rounded-full mt-1 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="text-lg font-medium text-gray-700 mb-1">
                        {exp.company} • {exp.location}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-charcoal">
                            <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Co-Curricular Activities */}
        <div className="reveal-up">
          <h3 className="heading-tertiary text-center mb-8">Co-Curricular Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {extracurriculars.map((activity, index) => (
              <div 
                key={index} 
                className="portfolio-card p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent-gold-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="h-6 w-6 text-accent-gold" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2">{activity.title}</h4>
                <div className="text-sm text-gray-600 mb-2">{activity.organization}</div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;