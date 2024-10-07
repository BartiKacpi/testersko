function searchArticles() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let articles = document.getElementsByClassName('article');

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        if (article.innerText.toLowerCase().includes(input)) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    }
}

function filterArticles(category) {
    let articles = document.getElementsByClassName('article');

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        if (article.getAttribute('data-category') === category || category === 'all') {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    }
}

function loadMoreArticles() {
    let newArticle = document.createElement('div');
    newArticle.classList.add('article');
    newArticle.innerHTML = `
        <h3>Nowy Tytuł</h3>
        <p>Treść nowego artykułu...</p>
    `;
    document.getElementById('articles').insertBefore(newArticle, document.getElementById('loadMore'));
}
