import pages from './templates/articles.hbs';
import NewsApi from "./news-api";
const formRef = document.querySelector('.js-search-form');

const articlesContainer = document.querySelector('.js-articles-container');

const loadMoreBtn = document.querySelector('[data-action="load-more"]');

formRef.addEventListener('submit', onSearchForm)
loadMoreBtn.addEventListener('click', onLoadMoreClick)

const newsApiService = new NewsApi();
console.log(newsApiService);


function onSearchForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    articlesContainer.innerHTML = '';
    newsApiService.searchQuery = form.elements.query.value;
    
    newsApiService.resetPage();
    
    newsApiService.fetchArticles()
    .then(articles =>{
        const markup = pages(articles);
        articlesContainer.insertAdjacentHTML('beforeend', markup);
    })
    
}

function onLoadMoreClick() {
    newsApiService.increasePage();
    console.log(newsApiService);

    newsApiService.fetchArticles()
    .then(articles =>{
        const markup = pages(articles);
        articlesContainer.insertAdjacentHTML('beforeend', markup);
    })
}
