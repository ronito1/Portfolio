const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 reveal-up">
          <h2 className="heading-secondary">About Me</h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I'm an <span className="font-semibold text-charcoal">Artificial Intelligence & Software enthusiast</span> with 
              hands-on experience in building and debugging full-stack applications, integrating APIs, and optimizing 
              internal workflows.
            </p>
            
            <p>
              Skilled in <span className="font-semibold text-charcoal">DSA, Agile collaboration, and system troubleshooting</span>, 
              I bring a unique blend of technical expertise and problem-solving capabilities to every project.
            </p>
            
            <p>
              Currently pursuing <span className="font-semibold text-charcoal">B.Tech CSE (AI & ML)</span> at Presidency University, 
              I'm passionate about leveraging cutting-edge technologies to create impactful solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">8+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">95%</div>
              <div className="text-gray-600">AI Model Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;