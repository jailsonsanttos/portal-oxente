import React from 'react';
import { Calendar, User, Eye } from 'lucide-react';

const NewsCard = ({ 
  title, 
  excerpt, 
  image, 
  author, 
  date, 
  category, 
  views, 
  featured = false,
  onClick 
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatViews = (viewCount) => {
    if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(1)}k`;
    }
    return viewCount.toString();
  };

  return (
    <article 
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onClick={onClick}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-t-lg ${
        featured ? 'h-64 md:h-80' : 'h-48'
      }`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              DESTAQUE
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-4 ${featured ? 'md:p-6' : ''}`}>
        {/* Title */}
        <h2 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {title}
        </h2>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-4 line-clamp-3 ${
          featured ? 'text-base' : 'text-sm'
        }`}>
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {/* Author */}
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{author}</span>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{formatDate(date)}</span>
            </div>
          </div>

          {/* Views */}
          <div className="flex items-center space-x-1">
            <Eye size={14} />
            <span>{formatViews(views)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

