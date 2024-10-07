function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Przełącza klasę "open", aby wysunąć lub schować panel
}

function displayArticle(articleId) {
    let articles = document.getElementsByClassName('article-content');

    for (let i = 0; i < articles.length; i++) {
        articles[i].classList.remove('active'); // Usuwa klasę "active" ze wszystkich artykułów
    }

    document.getElementById(articleId).classList.add('active'); // Dodaje klasę "active" do wybranego artykułu
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
