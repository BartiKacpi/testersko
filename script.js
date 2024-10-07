function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let toggleBtn = document.getElementById('toggle-btn');

    sidebar.classList.toggle('open');
    
    if (sidebar.classList.contains('open')) {
        toggleBtn.innerHTML = '&times;';  // Zmiana na "X" po otwarciu panelu
    } else {
        toggleBtn.innerHTML = '&#9776;';  // Powrót do "hamburgera" po zamknięciu
    }
}

function displayArticle(articleId) {
    let articles = document.getElementsByClassName('article-content');

    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    document.getElementById(articleId).style.display = 'block';
}

function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').innerText = visitCount;
}

window.onload = function() {
    updateVisitCount();
};
