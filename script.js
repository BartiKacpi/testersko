function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let toggleBtn = document.getElementById('toggle-btn');

    sidebar.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        toggleBtn.innerHTML = '&times;';
    } else {
        toggleBtn.innerHTML = '&#9776;';
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
    let count = localStorage.getItem('visitCount') || 0;
    count++;
    localStorage.setItem('visitCount', count);
    document.getElementById('visitCount').innerText = count;
}

window.onload = function() {
    updateVisitCount();
};
