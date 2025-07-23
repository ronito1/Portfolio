import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ronitpathak12345@gmail.com',
      href: 'mailto:ronitpathak12345@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8618630468',
      href: 'tel:+918618630468'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ronito1'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ronitpathak'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="heading-secondary mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Information - Centered Layout */}
        <div className="space-y-8 reveal-up">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info) => (
              <div key={info.label} className="text-center">
                <div className="w-16 h-16 bg-accent-gold-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-accent-gold" />
                </div>
                <div className="font-semibold text-charcoal mb-2">{info.label}</div>
                {info.href ? (
                  <a 
                    href={info.href} 
                    className="text-gray-600 hover:text-accent-gold transition-colors block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-gray-600">{info.value}</div>
                )}
              </div>
            ))}
          </div>

          {/* Social Links - Centered */}
          <div className="text-center pt-8 border-t border-gray-200">
            <h4 className="font-semibold text-charcoal mb-6">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-16 h-16 bg-charcoal text-white rounded-xl flex items-center justify-center hover:bg-accent-gold transition-colors group-hover:scale-110 transform duration-300">
                    <social.icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-medium text-charcoal mt-2 group-hover:text-accent-gold transition-colors">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-cream rounded-2xl">
            <h3 className="text-xl font-semibold text-charcoal mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you have a specific project in mind or just want to discuss possibilities, 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ronitpathak12345@gmail.com"
                className="btn-primary"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/ronitpathak"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;