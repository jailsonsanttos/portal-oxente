import React from 'react';
import { TrendingUp, Tag, ExternalLink } from 'lucide-react';

const Sidebar = () => {
  // Dados de exemplo para posts mais lidos
  const popularPosts = [
    {
      id: 1,
      title: "Nova descoberta científica revoluciona medicina",
      views: 15420,
      date: "2025-01-07"
    },
    {
      id: 2,
      title: "Economia brasileira mostra sinais de recuperação",
      views: 12350,
      date: "2025-01-06"
    },
    {
      id: 3,
      title: "Tecnologia 5G chega a mais cidades do interior",
      views: 9870,
      date: "2025-01-05"
    },
    {
      id: 4,
      title: "Campeonato estadual tem início neste fim de semana",
      views: 8540,
      date: "2025-01-04"
    }
  ];

  // Categorias
  const categories = [
    { name: "Notícias Gerais", count: 45 },
    { name: "Política", count: 32 },
    { name: "Esportes", count: 28 },
    { name: "Economia", count: 24 },
    { name: "Tecnologia", count: 19 },
    { name: "Entretenimento", count: 16 },
    { name: "Saúde", count: 14 },
    { name: "Educação", count: 12 }
  ];

  // Anúncios/Propagandas
  const ads = [
    {
      id: 1,
      title: "Sua empresa aqui!",
      description: "Anuncie no Portal Oxente e alcance milhares de leitores",
      image: "https://via.placeholder.com/300x200/E31E24/FFFFFF?text=ANUNCIE+AQUI",
      link: "#contact"
    },
    {
      id: 2,
      title: "Promoção Especial",
      description: "Ofertas imperdíveis para você",
      image: "https://via.placeholder.com/300x150/B71C1C/FFFFFF?text=PROMOCAO",
      link: "#promo"
    }
  ];

  const formatViews = (viewCount) => {
    if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(1)}k`;
    }
    return viewCount.toString();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  return (
    <aside className="space-y-6">
      {/* Posts Mais Lidos */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="text-red-600 mr-2" size={20} />
          <h3 className="text-lg font-bold text-gray-900">Mais Lidas</h3>
        </div>
        
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div 
              key={post.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-red-600 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <span>{formatViews(post.views)} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categorias */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Tag className="text-red-600 mr-2" size={20} />
          <h3 className="text-lg font-bold text-gray-900">Categorias</h3>
        </div>
        
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <span className="text-sm text-gray-700 hover:text-red-600 transition-colors">
                {category.name}
              </span>
              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Área de Anúncios */}
      <div className="space-y-4">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={ad.image} 
              alt={ad.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-2">{ad.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{ad.description}</p>
              <a 
                href={ad.link}
                className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Saiba mais
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Banner de Contato */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white text-center">
        <h3 className="text-lg font-bold mb-2">Anuncie Conosco!</h3>
        <p className="text-sm mb-4 opacity-90">
          Alcance milhares de leitores diariamente
        </p>
        <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Entre em Contato
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

