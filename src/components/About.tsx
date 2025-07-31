const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 reveal-up">
          <h2 className="heading-secondary">About Me</h2>
          
         <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
             <p>
              I'm a <span className="font-semibold text-charcoal">creative technologist and AI enthusiast</span> fueled by a deep curiosity for building things that matter. From architecting full-stack apps and integrating APIs to fine-tuning workflows for speed and efficiency, I love the thrill of solving puzzles that blend code with real-world impact.
            </p>
            
            <p>
              My superpowers? A sharp command of <span className="font-semibold text-charcoal">Data Structures & Algorithms</span>, an instinct for debugging the toughest problems, and a knack for turning collaboration into innovation.
            </p>
            
            <p>
              As a <span className="font-semibold text-charcoal">B.Tech CSE (AI & ML) undergrad</span>, I live at the intersection of new tech and big ideas—always on the hunt for ways to push boundaries, automate the tedious, and ship AI-powered solutions that actually make a difference. If you thrive on fresh challenges and boundary-breaking projects, let's connect and make something awesome together!
            </p>
                      </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">1+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-charcoal mb-2">85% +</div>
              <div className="text-gray-600">AI Model's Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;