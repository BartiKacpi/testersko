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
        <h3><a href="#">Nowe Odkrycia o Tygrysach</a></h3>
        <p>Najnowsze informacje o zwyczajach tygrysów...</p>
    `;
    document.getElementById('articles').insertBefore(newArticle, document.getElementById('loadMore'));
}

function updateVisitCount() {
    if (localStorage.getItem('visitCount')) {
        let visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
        localStorage.setItem('visitCount', visitCount);
        document.getElementById('visitCount').innerText = visitCount;
    } else {
        localStorage.setItem('visitCount', 1);
        document.getElementById('visitCount').innerText = 1;
    }
}

window.onload = updateVisitCount;
