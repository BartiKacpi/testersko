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
    let articleTitles = [
        "Nowe odkrycia w badaniach nad lwami",
        "Tygrysy na wolności: wyzwania i ochrona",
        "Recenzja: film 'Królestwo Kotów'"
    ];
    let articleDescriptions = [
        "Lwy mają unikalne zachowania społeczne. Badania pokazują, że...",
        "Tygrysy są zagrożone, ale istnieją liczne inicjatywy...",
        "Film 'Królestwo Kotów' przedstawia niesamowite sceny życia dzikich..."
    ];
    let randomIndex = Math.floor(Math.random() * articleTitles.length);

    let newArticle = document.createElement('div');
    newArticle.classList.add('article');
    newArticle.innerHTML = `
        <h3><a href="#">${articleTitles[randomIndex]}</a></h3>
        <p>${articleDescriptions[randomIndex]}</p>
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
