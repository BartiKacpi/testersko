function displayArticle(articleId) {
    let articles = document.getElementsByClassName('article-content');

    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    document.getElementById(articleId).style.display = 'block';
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
