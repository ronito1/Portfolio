import { MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToContact}
      className="floating-contact"
      aria-label="Contact me"
    >
      <MessageCircle className="h-5 w-5" />
    </button>
  );
};

export default FloatingContact;