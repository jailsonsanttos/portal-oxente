
document.getElementById('form-news').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const image = document.getElementById('image').value;
  const summary = document.getElementById('summary').value;

  const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
  noticias.push({ title, image, summary });
  localStorage.setItem('noticias', JSON.stringify(noticias));

  alert("Notícia cadastrada!");
  this.reset();
});
