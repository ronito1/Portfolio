const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java (preferred)', 'JavaScript', 'SQL', 'Python', 'Node.js']
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'Vue.js', 'Express.js', 'PyQt5']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase']
    },
    {
      title: 'Tools & Platforms',
      skills: ['GCP', 'GitHub', 'Jira', 'Vercel', 'PgAdmin', 'Cursor']
    },
    {
      title: 'Concepts',
      skills: ['Generative AI', 'RESTful APIs', 'Web Services', 'IoT']
    },
    {
      title: 'Testing & QA',
      skills: ['Unit Testing', 'Defect Tracking (Jira)', 'Bug Reproduction', 'RCA']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="heading-secondary mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies 
            that I use to build scalable, efficient solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="portfolio-card p-6 reveal-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="heading-tertiary mb-4 text-charcoal">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16 reveal-up">
          <h3 className="heading-tertiary text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Google Cloud: Gen AI & Gemini',
              'Jira Essentials 2025',
              'SQL Bootcamp',
              'Agile Crash Course',
              'Deloitte Australia Cyber Job Simulation'
            ].map((cert) => (
              <div key={cert} className="portfolio-card p-4 text-center">
                <div className="text-sm font-medium text-charcoal">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;