import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Youtube, href: "#youtube", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Contato", href: "#contact" },
    { name: "Política de Privacidade", href: "#privacy" },
    { name: "Termos de Uso", href: "#terms" },
    { name: "Anuncie Conosco", href: "#advertise" }
  ];

  const categories = [
    { name: "Notícias Gerais", href: "#news" },
    { name: "Política", href: "#politics" },
    { name: "Esportes", href: "#sports" },
    { name: "Economia", href: "#economy" },
    { name: "Tecnologia", href: "#tech" },
    { name: "Entretenimento", href: "#entertainment" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Portal Oxente" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Portal Oxente é seu destino para notícias atualizadas, informações relevantes e 
              conteúdo de qualidade. Mantemos você informado sobre tudo que acontece no Brasil e no mundo.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Categorias</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contato@portaloxente.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(85) 9999-9999</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Fortaleza, Ceará<br />
                  Brasil
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-white">Newsletter</h4>
              <p className="text-gray-300 text-xs mb-3">
                Receba as principais notícias em seu email
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-lg transition-colors duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Portal Oxente. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Termos
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

