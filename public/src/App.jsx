import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  // Dados iniciais de exemplo
  const initialNews = [
    {
      id: 1,
      title: "Governo anuncia novo programa de incentivo à tecnologia no Nordeste",
      excerpt: "Iniciativa visa fomentar startups e empresas de tecnologia na região, com investimentos de R$ 500 milhões em cinco anos. O programa incluirá incubadoras, aceleradoras e centros de inovação.",
      image: "https://via.placeholder.com/600x400/E31E24/FFFFFF?text=TECNOLOGIA",
      author: "João Silva",
      date: "2025-01-07",
      category: "Tecnologia",
      views: 15420,
      featured: true
    },
    {
      id: 2,
      title: "Fortaleza recebe investimento milionário em infraestrutura",
      excerpt: "Obras de modernização do sistema viário e transporte público começam no próximo mês, beneficiando mais de 2 milhões de habitantes.",
      image: "https://via.placeholder.com/400x300/B71C1C/FFFFFF?text=INFRAESTRUTURA",
      author: "Maria Santos",
      date: "2025-01-07",
      category: "Política",
      views: 12350
    },
    {
      id: 3,
      title: "Ceará lidera ranking nacional de energia renovável",
      excerpt: "Estado se destaca na produção de energia eólica e solar, representando 25% da matriz energética limpa do país.",
      image: "https://via.placeholder.com/400x300/E31E24/FFFFFF?text=ENERGIA",
      author: "Carlos Oliveira",
      date: "2025-01-06",
      category: "Economia",
      views: 9870
    },
    {
      id: 4,
      title: "Festival de música nordestina movimenta economia local",
      excerpt: "Evento cultural gera mais de R$ 50 milhões em receita e atrai turistas de todo o Brasil para conhecer a cultura regional.",
      image: "https://via.placeholder.com/400x300/B71C1C/FFFFFF?text=CULTURA",
      author: "Ana Costa",
      date: "2025-01-06",
      category: "Entretenimento",
      views: 8540
    },
    {
      id: 5,
      title: "Nova descoberta arqueológica revela história pré-colombiana",
      excerpt: "Pesquisadores encontram artefatos de mais de 3 mil anos em sítio arqueológico no interior do estado.",
      image: "https://via.placeholder.com/400x300/E31E24/FFFFFF?text=ARQUEOLOGIA",
      author: "Dr. Pedro Lima",
      date: "2025-01-05",
      category: "Ciência",
      views: 7230
    },
    {
      id: 6,
      title: "Campeonato estadual promete ser o mais disputado dos últimos anos",
      excerpt: "Com reforços de peso e torcidas animadas, clubes se preparam para uma temporada emocionante no futebol cearense.",
      image: "https://via.placeholder.com/400x300/B71C1C/FFFFFF?text=FUTEBOL",
      author: "Roberto Mendes",
      date: "2025-01-05",
      category: "Esportes",
      views: 11200
    }
  ];

  // Carregar dados do localStorage ou usar dados iniciais
  useEffect(( ) => {
    const savedNews = localStorage.getItem('portalOxenteNews');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      setNews(initialNews);
      localStorage.setItem('portalOxenteNews', JSON.stringify(initialNews));
    }
  }, []);

  // Salvar no localStorage sempre que news mudar
  useEffect(() => {
    if (news.length > 0) {
      localStorage.setItem('portalOxenteNews', JSON.stringify(news));
    }
  }, [news]);

  const handleNewsClick = (newsItem) => {
    // Incrementar visualizações
    const updatedNews = news.map(item => 
      item.id === newsItem.id 
        ? { ...item, views: (item.views || 0) + 1 }
        : item
    );
    setNews(updatedNews);
    console.log('Abrir noticia:', newsItem.title);
  };

  const handleAddNews = (newsData) => {
    const newNews = {
      ...newsData,
      id: Date.now(),
      views: 0
    };
    setNews(prevNews => [newNews, ...prevNews]);
  };

  const handleEditNews = (newsData) => {
    setNews(prevNews => 
      prevNews.map(item => 
        item.id === newsData.id ? newsData : item
      )
    );
  };

  const handleDeleteNews = (newsId) => {
    setNews(prevNews => prevNews.filter(item => item.id !== newsId));
  };

  // Função para acessar o painel admin (pode ser protegida com senha)
  const handleAdminAccess = () => {
    const password = prompt('Digite a senha do administrador:');
    if (password === 'admin123') { // Senha simples para demonstração
      setShowAdmin(true);
    } else if (password !== null) {
      alert('Senha incorreta!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Button - Fixed position */}
      <button
        onClick={handleAdminAccess}
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg z-40 transition-colors"
        title="Painel Administrativo"
      >
        <Settings size={20} />
      </button>

      {/* Admin Panel */}
      {showAdmin && (
        <AdminPanel
          news={news}
          onAddNews={handleAddNews}
          onEditNews={handleEditNews}
          onDeleteNews={handleDeleteNews}
          onClose={() => setShowAdmin(false)}
        />
      )}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-3">
            {/* Breaking News Banner */}
            <div className="bg-red-600 text-white p-4 rounded-lg mb-8 shadow-md">
              <div className="flex items-center">
                <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-4 animate-pulse">
                  URGENTE
                </span>
                <p className="text-sm md:text-base">
                  Acompanhe as últimas notícias e mantenha-se sempre informado com o Portal Oxente!
                </p>
              </div>
            </div>

            {/* News Grid */}
            {news.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                  {news.map((newsItem) => (
                    <NewsCard
                      key={newsItem.id}
                      title={newsItem.title}
                      excerpt={newsItem.excerpt}
                      image={newsItem.image || "https://via.placeholder.com/400x300/E31E24/FFFFFF?text=NOTICIA"}
                      author={newsItem.author}
                      date={newsItem.date}
                      category={newsItem.category}
                      views={newsItem.views || 0}
                      featured={newsItem.featured}
                      onClick={( ) => handleNewsClick(newsItem)}
                    />
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md">
                    Carregar Mais Notícias
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold text-gray-600 mb-4">Nenhuma notícia publicada</h3>
                <p className="text-gray-500 mb-6">
                  Use o painel administrativo para adicionar suas primeiras notícias.
                </p>
                <button
                  onClick={handleAdminAccess}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Acessar Painel Admin
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
