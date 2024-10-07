function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let toggleButton = document.getElementById('toggle-btn');

    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        toggleButton.innerHTML = '&times;';  // Zmienia przycisk na "X" po otwarciu panelu
    } else {
        toggleButton.innerHTML = '&#9776;';  // Zmienia przycisk z powrotem na ikonkę hamburgera
    }
}

function displayArticle(articleId) {
    let articles = document.getElementsByClassName('article-content');

    for (let i = 0; i < articles.length; i++) {
        articles[i].classList.remove('active');
    }

    document.getElementById(articleId).classList.add('active');
}

function updateVisitCount() {
    let visitCountElement = document.getElementById('visitCount');
    let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
    
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    visitCountElement.innerText = visitCount;
}

// Uruchomienie licznika wizyt po załadowaniu strony
window.onload = function() {
    updateVisitCount();
};
