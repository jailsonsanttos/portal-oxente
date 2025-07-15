import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye } from 'lucide-react';

const AdminPanel = ({ news, onAddNews, onEditNews, onDeleteNews, onClose }) => {
  const [isAddingNews, setIsAddingNews] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    image: '',
    author: '',
    category: '',
    featured: false
  });

  const categories = [
    'Notícias Gerais',
    'Política',
    'Esportes',
    'Economia',
    'Tecnologia',
    'Entretenimento',
    'Ciência',
    'Saúde',
    'Educação'
  ];

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      image: '',
      author: '',
      category: '',
      featured: false
    });
    setIsAddingNews(false);
    setEditingNews(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newsData = {
      ...formData,
      date: new Date().toISOString().split('T')[0],
      views: 0,
      id: editingNews ? editingNews.id : Date.now()
    };

    if (editingNews) {
      onEditNews(newsData);
    } else {
      onAddNews(newsData);
    }
    
    resetForm();
  };

  const handleEdit = (newsItem) => {
    setFormData({
      title: newsItem.title,
      excerpt: newsItem.excerpt,
      image: newsItem.image,
      author: newsItem.author,
      category: newsItem.category,
      featured: newsItem.featured || false
    });
    setEditingNews(newsItem);
    setIsAddingNews(false);
  };

  const handleDelete = (newsId) => {
    if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
      onDeleteNews(newsId);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Painel Administrativo - Portal Oxente</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-700 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Add News Button */}
          {!isAddingNews && !editingNews && (
            <div className="mb-6">
              <button
                onClick={() => setIsAddingNews(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus size={20} />
                <span>Adicionar Nova Notícia</span>
              </button>
            </div>
          )}

          {/* Add/Edit Form */}
          {(isAddingNews || editingNews) && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-4">
                {editingNews ? 'Editar Notícia' : 'Adicionar Nova Notícia'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Digite o título da notícia"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resumo *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Digite um resumo da notícia"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Autor *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Nome do autor"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Categoria *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Selecione uma categoria</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL da Imagem
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="mr-2"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Marcar como destaque
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Save size={20} />
                    <span>{editingNews ? 'Salvar Alterações' : 'Adicionar Notícia'}</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <X size={20} />
                    <span>Cancelar</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* News List */}
          <div>
            <h3 className="text-lg font-bold mb-4">Notícias Publicadas ({news.length})</h3>
            
            <div className="space-y-4">
              {news.map((newsItem) => (
                <div key={newsItem.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {newsItem.category}
                        </span>
                        {newsItem.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                            DESTAQUE
                          </span>
                        )}
                      </div>
                      
                      <h4 className="font-bold text-gray-900 mb-2">{newsItem.title}</h4>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{newsItem.excerpt}</p>
                      
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Por: {newsItem.author}</span>
                        <span>{newsItem.date}</span>
                        <span className="flex items-center space-x-1">
                          <Eye size={12} />
                          <span>{newsItem.views || 0}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(newsItem)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit size={16} />
                      </button>
                      
                      <button
                        onClick={() => handleDelete(newsItem.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Excluir"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {news.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>Nenhuma notícia publicada ainda.</p>
                  <p className="text-sm">Clique em "Adicionar Nova Notícia" para começar.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

