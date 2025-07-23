import { ExternalLink, Github, Award, Users, Zap, Bot, Globe, Coffee, MapPin, FileText } from 'lucide-react';
import projectAI from '@/assets/project-ai.jpg';
import projectMERN from '@/assets/project-mern.jpg';
import projectIoT from '@/assets/project-iot.jpg';
import projectPoetry from '@/assets/project-poetry.jpg';
import projectPdfAnalyzer from '@/assets/project-pdf-analyzer.jpg';
import projectHorseClub from '@/assets/project-horse-club.jpg';
import projectGolfClub from '@/assets/project-golf-club.jpg';
import projectKaffenCafe from '@/assets/project-kaffen-cafe.jpg';
import projectOldstoryCafe from '@/assets/project-oldstory-cafe.jpg';
import projectInvoiceAI from '@/assets/project-invoice-ai.jpg';
import projectPokemon from '@/assets/project-pokemon.jpg';



const Projects = () => {
  const projects = [
    {
      
        title: 'InvoiceAI – AI-Powered Invoice Analysis',
        description: 'Leveraging the multimodal capabilities of Gemini Large Language Model, it can analyze any invoice image, understand its unique structure, and dynamically extract its data in a structured format.',
        image: projectInvoiceAI,
        icon: FileText,
        tags: ['AI/ML', 'Gemini LLM', 'Computer Vision', 'Document Processing'],
        highlights: ['Multimodal AI', 'Invoice analysis', 'Structured data extraction'],
        links: {
          github: '#',
          demo: 'https://invoice-ai-phi.vercel.app/'
        }
      },
      {
      title: 'KrishiRaksha – Disease & Pest Detection',
      description: 'AI-powered crop diagnosis with 95% accuracy, external API integration, and published research (IJSREM).',
      image: projectAI,
      icon: Award,
      tags: ['AI/ML', 'Computer Vision', 'API Integration', 'Research'],
      highlights: ['95% accuracy', 'Published research', 'External API integration'],
      links: {
        github: '#',
        demo: 'https://disease-detection-app.vercel.app/',
        paper: 'https://ijsrem.com/download/krishiraksha-a-disease-and-pest-control-app/'
      }
    },
    {
      title: 'PoetryGen – AI Desktop App',
      description: 'PyQt5-based AI poem generator with NLP theme/tone customization.',
      image: projectPoetry,
      icon: Bot,
      tags: ['PyQt5', 'NLP', 'Desktop App', 'AI Generation'],
      highlights: ['Desktop application', 'NLP integration', 'Theme customization'],
      links: {
        github: '#',
      }
    },
    {
      title: 'PDF Analyzer',
      description: 'AI-powered PDF analysis tool with summarization, Q&A capabilities, and intelligent document processing.',
      image: projectPdfAnalyzer,
      icon: FileText,
      tags: ['AI/ML', 'NLP', 'Document Processing', 'Q&A System'],
      highlights: ['PDF summarization', 'Interactive Q&A', 'Document analysis'],
      links: {
        github: '#',
      }
    },
    {
      title: 'Food Delivery Platform',
      description: 'MERN stack build with Stripe integration, real-time notifications, and a scalable backend.',
      image: projectMERN,
      icon: Users,
      tags: ['MERN Stack', 'Stripe', 'Real-time', 'Scalable Backend'],
      highlights: ['Full-stack MERN', 'Payment integration', 'Real-time notifications'],
      links: {
        github: '#',
        demo: 'https://www.linkedin.com/posts/ronitpathak_mernstack-frontend-backend-activity-7233774625489334272-pwlR/?utm_source=share&utm_medium=member_desktop'
      }
  },
  {
    title: 'Pokemon Explorer',
    description: 'A beautifully responsive Pokémon Explorer web app built with Next.js, TypeScript, and Tailwind CSS, featuring real-time search, detailed Pokémon profiles (images, stats, types, abilities, moves), and full PokeAPI integration. It offers vibrant, type-based theming, smooth animations, and optimized performance across all devices.',
    image: projectPokemon,
    icon: Globe,
    tags: ['Next.js', 'TypeScript', 'PokeAPI', 'Responsive Design'],
    highlights: ['Real-time search', 'Type-based theming', 'Full PokeAPI integration'],
    links: {
      github: '#',
      demo: 'https://poke2-sand.vercel.app/'
    }
    },
    {
      title: 'Gesture-Based Screen Controller',
      description: 'Arduino + OpenCV IoT solution for accessibility using gesture input.',
      image: projectIoT,
      icon: Zap,
      tags: ['IoT', 'Arduino', 'OpenCV', 'Accessibility'],
      highlights: ['IoT solution', 'Accessibility focus', 'Hardware integration'],
      links: {
        github: '#',
      }
    },
    {
      title: 'Jocey Horse Riding Club',
      description: 'Elegant frontend website for a premium horse riding club with modern design and smooth animations.',
      image: projectHorseClub,
      icon: Globe,
      tags: ['Frontend', 'Responsive Design', 'Modern UI', 'Animations'],
      highlights: ['Elegant design', 'Smooth animations', 'Mobile responsive'],
      links: {
        github: '#',
        demo: 'https://riders-club-coaching3.vercel.app/'
      }
    },
    {
      title: 'Golf Club Website',
      description: 'Luxury golf club website featuring premium design, course information, and membership details.',
      image: projectGolfClub,
      icon: MapPin,
      tags: ['Frontend', 'Luxury Design', 'Club Management', 'UI/UX'],
      highlights: ['Premium design', 'Club features', 'Professional layout'],
      links: {
        github: '#',
        demo: 'https://golfclub-coaching4.vercel.app/'
      }
    },
    {
      title: 'Kaffen Restaurant',
      description: 'Modern restaurant website with elegant menu display, reservation system, and cozy cafe atmosphere.',
      image: projectKaffenCafe,
      icon: Coffee,
      tags: ['Frontend', 'Restaurant', 'Menu Display', 'Modern Design'],
      highlights: ['Menu showcase', 'Modern design', 'Restaurant features'],
      links: {
        github: '#',
        demo: 'https://kaffen-cafee13.vercel.app/'
      }
    },
    {
      title: 'Old Story Cafe',
      description: 'Vintage-themed cafe website with nostalgic design, story-telling elements, and warm atmosphere.',
      image: projectOldstoryCafe,
      icon: Coffee,
      tags: ['Frontend', 'Vintage Design', 'Storytelling', 'Cafe Theme'],
      highlights: ['Vintage theme', 'Story elements', 'Warm atmosphere'],
      links: {
        github: '#',
        demo: 'https://oldstory-cafe14.vercel.app/'
      }
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            AI integration, and innovative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="portfolio-card overflow-hidden group reveal-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-gold-light to-accent-gold">
                    <project.icon className="h-16 w-16 text-charcoal" />
                  </div>
                )}
                <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="heading-tertiary text-charcoal">{project.title}</h3>
                  <project.icon className="h-6 w-6 text-accent-gold flex-shrink-0 ml-2" />
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-sm text-charcoal">
                      <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-cream text-charcoal text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-charcoal hover:text-accent-gold transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                  {project.links.paper && (
                    <a
                      href={project.links.paper}
                      className="flex items-center gap-2 text-charcoal hover:text-accent-gold transition-colors"
                    >
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;