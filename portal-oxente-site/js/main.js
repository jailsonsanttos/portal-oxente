
document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-container');
  const storedNews = JSON.parse(localStorage.getItem('noticias')) || [];

  storedNews.forEach(news => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${news.title}</h3><p>${news.summary}</p><img src="${news.image}" alt="" style="max-width:100%"/>`;
    newsContainer.appendChild(div);
  });
});
