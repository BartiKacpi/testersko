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
    // Używamy CountAPI do zwiększenia i pobrania liczby odwiedzin
    fetch('https://api.countapi.xyz/hit/bartikacpi/wejscia')
        .then(response => response.json())  // Otrzymujemy odpowiedź w formacie JSON
        .then(data => {
            // Wyświetlamy aktualną liczbę odwiedzin
            document.getElementById('visitCount').innerText = data.value;
        })
        .catch(error => console.error('Błąd w pobieraniu danych:', error));
}

window.onload = function() {
    updateVisitCount();
};
