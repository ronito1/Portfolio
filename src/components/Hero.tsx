import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import heroPortrait from '/lovable-uploads/f43b4094-b497-4d9b-bf74-0ae1c42799a5.png';

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ronito1',
      display: 'github.com/ronito1'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ronitpathak',
      display: 'linkedin.com/in/ronitpathak'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ronitpathak12345@gmail.com',
      display: 'ronitpathak12345@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+918618630468',
      display: '+91 8618630468'
    }
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 reveal-up">
            <div className="space-y-4">
              <h1 className="heading-primary">
                Ronit Pathak
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Software Developer | AI Enthusiast | Full Stack MERN Developer
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Transforming ideas into intelligent solutions through code. I build scalable applications 
                that bridge the gap between cutting-edge AI and real-world impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="btn-primary group"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-outline"
              >
                Get In Touch
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-3 text-gray-600 hover:text-accent-gold transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{link.display}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative reveal-fade">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-accent-gold-light rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={heroPortrait}
                  alt="Ronit Pathak"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;